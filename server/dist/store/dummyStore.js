"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batches = exports.products = void 0;
const products = [
    {
        productCode: 'L001-001',
        factoryID: 'SW00001',
        productPrice: {
            cordoba: 500,
            dollar: 20
        },
    },
    {
        productCode: 'L001-002',
        factoryID: 'SW00002',
        productPrice: {
            cordoba: 500,
            dollar: 20
        },
    },
    {
        productCode: 'L001-003',
        factoryID: 'SW00003',
        productPrice: {
            cordoba: 500,
            dollar: 20
        },
    }
];
exports.products = products;
const batches = [
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
];
exports.batches = batches;
//# sourceMappingURL=dummyStore.js.map