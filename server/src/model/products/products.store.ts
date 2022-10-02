import { Product } from '../../interfaces/product';
// import { products as dummyProducts } from '../../store/dummyStore';

import { AppDataSource } from '../../store/data-source';
import { Product as repoProduct } from '../../repo/Product';
import { Batch } from '../../repo/Batch';

const productRepository = AppDataSource.getRepository(repoProduct);
const batchRepository = AppDataSource.getRepository(Batch);

//TODO: APLICAR EL ERROR HANDLING

async function get(code: string): Promise<Product | null> {
    //const product: Product | undefined = dummyProducts.find(product => product.productCode === code);

    const repoProduct: repoProduct | null = await productRepository.findOne({
        where: {
            productCode: code,
        },
        relations: {
            batch: true
        }
    });

    if (!repoProduct) {
        return null;
    }

    return {
        productCode: repoProduct.productCode,
        factoryID: repoProduct.factoryId,
        batchCode: repoProduct.batch.batchCode,
        productPrice: {
            dollar: repoProduct.dollarPrice,
            cordoba: repoProduct.cordobaPrice
        },
    }

}

async function getList(): Promise<Product[]> {
    //console.log('[products-store/getList]Entramos al metodo');
    // return dummyProducts;
    const repoProducts: repoProduct[] = await productRepository.find({
        //con esta opcion puedo popular las relaciones: https://typeorm.io/find-options#advanced-options
        relations: {
            batch: true
        }
    });
    //console.log('[products-store/getList]productos retornados de la BD: ', repoProduct);
    const products: Product[] = repoProducts.map(product => {
        return {
            productCode: product.productCode,
            factoryID: product.factoryId,
            batchCode: product.batch.batchCode,
            productPrice: {
                dollar: product.dollarPrice,
                cordoba: product.cordobaPrice
            },
            //productSaleDate: product.sale.saleDate,
            // realProductPrice: {
            //     dollar: product.sale.salePriceDollar,
            //     cordoba: product.sale.salePriceCordoba
            // }
        }
    })
    //console.log('[products-store/getList]productos retornados: ', products);
    return products;
}

async function add(product: Product): Promise<Product> {

    //hay que refactorizar, antes o aqui mismo, para que valide si viene el product code o no
    const batch = await batchRepository.findOne({
        select: {
            batchid: true
        },
        where: {
            batchCode: product.batchCode
        }
    });

    //esto tambien se puede hacer con repository.insert: https://typeorm.io/repository-api#additional-options
    const newProduct = new repoProduct();
    newProduct.productCode = product.productCode;
    newProduct.factoryId = product.factoryID;
    newProduct.dollarPrice = product.productPrice.dollar;
    newProduct.cordobaPrice = product.productPrice.cordoba;
    newProduct.batchid = batch!.batchid;
    await productRepository.save(newProduct);

    // dummyProducts.push(newProduct);
    //TODO: componer esto para 
    // return dummyProducts[dummyProducts.length - 1];
    return {
        /* productCode: newProduct.productCode,
        factoryID: newProduct.factoryId,
        batchCode: product.batchCode,
        productPrice: {
            cordoba: newProduct.cordobaPrice,
            dollar: newProduct.dollarPrice
        } */
        ...product
    }
}

async function eliminate(code: string): Promise<Product | null> {
    //TODO: verificar si lo puedo hacer encontrando el objeto directamente con get y luego eliminarlo
    /* const memoryProduct: number = dummyProducts.findIndex(product => product.productCode === code);
    const deletedProduct = dummyProducts.splice(memoryProduct, 1);
    return deletedProduct[0]; */

    const productToRemove: repoProduct[] | null = await productRepository.find({
        where: {
            productCode: code
        },
        relations: {
            batch: true
        }
    });

    if (!productToRemove) return null;

    //esto tambien se puede hacer con el metodo delete
    await productRepository.remove(productToRemove);

    return {
        productCode: productToRemove[0].productCode,
        factoryID: productToRemove[0].factoryId,
        productPrice: {
            dollar: productToRemove[0].dollarPrice,
            cordoba: productToRemove[0].cordobaPrice
        },
        batchCode: productToRemove[0].batch.batchCode
    }

}

async function update(product: Product): Promise<Product | null> {
    //TODO: averiguar en el controlador si el producto buscado existe o no
    /* let productIndex: number = dummyProducts.findIndex(a => a.productCode === product.productCode);

    dummyProducts[productIndex] = {
        ...dummyProducts[productIndex],
        batchCode: product.batchCode,
        //productSaleDate: product.productSaleDate,
        //realProductPrice: product.realProductPrice,
    }

    return dummyProducts[productIndex]; */

    const productToUpdate: repoProduct[] | null = await productRepository.find({
        where: {
            productCode: product.productCode
        }
    });

    if (!productToUpdate) return null;

    const batch = await batchRepository.findOne({
        select: {
            batchid: true
        },
        where: {
            batchCode: product.batchCode
        }
    });

    //esto tambien se puede hacer con el metodo save o upsert: https://typeorm.io/repository-api#additional-options
    await productRepository.update(
        {
            productCode: product.productCode
        },
        {
            factoryId: product.factoryID,
            dollarPrice: product.productPrice.dollar,
            cordobaPrice: product.productPrice.cordoba,
            batchid: batch?.batchid
        }
    );

    return {
        ...product
    }

}

export {
    get,
    getList,
    add,
    eliminate,
    update
}