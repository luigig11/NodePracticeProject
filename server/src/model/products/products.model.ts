import {Product} from '../../interfaces/product';
import {
    add, 
    eliminate, 
    get, 
    getList, 
    update
} from '../../model/products/products.store'

function getProduct(code:string): Product | undefined {
    return get(code);
}

function getProducts(): Product[] {
    return getList();
}

function addProduct(product: Product): Product[] {
    return add(product);
}

function deleteProduct(code: string): Product {
    return eliminate(code);
}

function updateProduct(product: Product): Product {
    //NOTA: estoy considerando que el controlador verifica si existe o no el producto
    return update(product);
}

export {
    getProduct,
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct
}