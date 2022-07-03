import { Product } from '../../interfaces/product';
import {products as dummyProducts} from '../../store/dummyStore';

function get(code: string): Product | undefined {
    const product: Product | undefined = dummyProducts.find(product => product.productCode === code); 
    return product;
}

function getList(): Product[] {
    return dummyProducts;
}

function add(product: Product): Product {
    const newProduct: Product = {
        ...product
    }
    dummyProducts.push(newProduct);
    //TODO: componer esto para 
    return dummyProducts[dummyProducts.length - 1];
}

function eliminate (code: string ): Product {
    //TODO: verificar si lo puedo hacer encontrando el objeto directamente con get y luego eliminarlo
    const memoryProduct: number = dummyProducts.findIndex(product => product.productCode === code);
    const deletedProduct = dummyProducts.splice(memoryProduct, 1);
    return deletedProduct[0];
    
}

function update(product: Product): Product {
    //TODO: averiguar en el controlador si el producto buscado existe o no
    let productIndex: number = dummyProducts.findIndex(a => a.productCode === product.productCode);
    
    dummyProducts[productIndex] = {
        ...dummyProducts[productIndex],
        batchCode: product.batchCode,
        client: product.client,
        productSaleDate: product.productSaleDate,
        realProductPrice: product.realProductPrice,
        realClient: product.realClient
    }

    return dummyProducts[productIndex];
    
}

export {
    get,
    getList,
    add,
    eliminate,
    update
}