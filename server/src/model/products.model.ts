import {Product} from '../interfaces/product';

/* const product: Product = {
    productCode: 'L001-001',
    factoryID: 'SW00001',
    productPrice: {
        cordova: 500,
        dollar: 20
    },
} */

/* const products: Product[] = [
    product,
] */

function getProduct(code:string, products: Product[]): Product | undefined {

    const product: Product | undefined = products.find(product => product.productCode === code); 

    if (!product) {
        return undefined;
    }

    return product;

}

function getProducts(products: Product[] ): Product[] {
    return products;
}

function addProduct(product:Product, products: Product[]): Product[] {
    const newProduct: Product = {
        ...product
    }
    products.push(newProduct);
    return products;
}

function deleteProduct(code:string, products: Product[]): Product[] {
    const memoryProduct: number = products.findIndex(product => product.productCode === code);
    products.splice(memoryProduct, 1);
    return products;
}

function updateProduct(product:Product, products: Product[]): Product {
    //verificar que exista el producto
    /* if (!getProduct(product.productCode, products)) {
        return undefined;
    } */

    //NOTA: estoy considerando que el controlador verifica si existe o no el producto
    //si existe el producto encontrar el index dentro del array
    let productIndex: number = products.findIndex(a => a.productCode === product.productCode);
    //actualizar el elemento del array del producto
    products[productIndex] = {
        ...products[productIndex],
        batchCode: product.batchCode,
        client: product.client,
        productSaleDate: product.productSaleDate,
        realProductPrice: product.realProductPrice,
        realClient: product.realClient
    }
    /* console.log('Product index', productIndex);
    console.log('producto: ', products[productIndex]); */
    return products[productIndex];
    
}

export {
    getProduct,
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct
}