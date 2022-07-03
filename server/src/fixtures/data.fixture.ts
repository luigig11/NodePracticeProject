//ESTE ARCHIVO NO TIENE UTILIDAD. SE ESTUDIARA SU UTILIDAD PARA SEMBRAR DATOS DE PRUEBAS UNITARIAS EN UN FUTURO
import { Batch } from '../interfaces/batch';
import { Product } from '../interfaces/product';

export const products: Product[] = [
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

export const batches: Batch[] = [
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

