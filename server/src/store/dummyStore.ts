import { Batch } from "../interfaces/batch";
import { Product } from "../interfaces/product";

/* const product: Product = {
    productCode: 'L001-001',
    factoryID: 'SW00001',
    productPrice: {
        cordova: 500,
        dollar: 20
    },
}  */

const products: Product[] = [
    {
        productCode: 'L001-001',
        factoryID: 'SW00001',
        productPrice: {
            cordova: 500,
            dollar: 20
        },
    },

    {
        productCode: 'L001-002',
        factoryID: 'SW00002',
        productPrice: {
            cordova: 500,
            dollar: 20
        },
    },

    {
        productCode: 'L001-003',
        factoryID: 'SW00003',
        productPrice: {
            cordova: 500,
            dollar: 20
        },
    }
]

/* const batch: Batch = {
    batchCode: 'LT-001',
    amountProducts: 10
}; */

const batches: Batch[] = [
    {
        batchCode: 'LT-001',
        amountProducts: 10
    },
    {
        batchCode: 'LT-002',
        amountProducts: 10
    },
    {
        batchCode: 'LT-003',
        amountProducts: 5,
        batchDateStart: new Date()
    },
    {
        batchCode: 'LT-004',
        amountProducts: 5,
        batchDateEnd: new Date('12/05/2022')
    }
]

export {
    products,
    batches
}