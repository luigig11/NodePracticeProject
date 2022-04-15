import {Product} from '../interfaces/product';

const product: Product = {
    productCode: 'L001-001',
    factoryID: 'SW00001',
    productPrice: {
        cordova: 500,
        dollar: 20
    },
}

const products: Product[] = [
    product,
]

function getProduct(code:string): Product | undefined {

    const product: Product | undefined = products.find(product => product.productCode === code); 

    if (!product) {
        return undefined;
    }

    return product;

}

function getProducts(): Product[] {
    return products;
}

function addProduct(product:Product): Product[] {
    const newProduct: Product = {
        ...product
    }
    products.push(newProduct);
    return products;
}

function deleteProduct(code:string): Product[] {
    const memoryProduct: number = products.findIndex(product => product.productCode === code);
    products.splice(memoryProduct, 1);
    return products;
}

function updateProduct(product:Product): Product | undefined {
    //verificar que exista el producto
    if (!getProduct(product.productCode)) {
        return undefined;
    }
    //si existe el producto encontrar el index dentro del array
    let productIndex: number = products.findIndex(a => a.productCode === product.productCode);
    //actualizar el elemento del array del producto
    products[productIndex] = {
        ...products[productIndex],
        batchCode: product.batchCode,
        client: product.client,
        productSaleDate: product.productSaleDate,
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