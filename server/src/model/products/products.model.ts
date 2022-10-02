import {Product} from '../../interfaces/product';
import {
    add, 
    eliminate, 
    get, 
    getList, 
    update
} from '../../model/products/products.store'

async function getProduct(code:string): Promise<Product | null> {
    return await get(code);
}

async function getProducts(): Promise<Product[]> {
    return await getList();
}

async function addProduct(product: Product): Promise<Product> {
    return await add(product);
}

async function deleteProduct(code: string): Promise<Product | null> {
    return await eliminate(code);
}

async function updateProduct(product: Product): Promise<Product | null> {
    //NOTA: estoy considerando que el controlador verifica si existe o no el producto
    return await update(product);
}

export {
    getProduct,
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct
}