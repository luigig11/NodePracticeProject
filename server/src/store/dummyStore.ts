import { Batch } from "../interfaces/batch";
import { Product } from "../interfaces/product";

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

const batch: Batch = {
    batchCode: 'LT-001',
    amountProducts: 10
};

const batches: Batch[] = [
    batch,
]

export {
    products,
    batches
}