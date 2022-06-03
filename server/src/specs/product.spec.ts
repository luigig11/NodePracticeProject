import { expect } from 'chai';

import {
    addProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct
} from '../model/products.model';

import { products } from '../fixtures/data.fixture'

describe('Get product', () => {

    const tests: string[] = ['L001-001', 'L001-004', 'L001-005'];
    const testBD = products;

    tests.forEach((item, index) => {

        if (index === 0) {
            it(`Should find the product ${item}`, () => {
                expect(getProduct(item, testBD)).to.exist;
            });
        } else {
            it(`should not find the product ${item}`, () => {
                expect(getProduct(item, testBD)).to.be.undefined;
            });
        }
    });

});

describe('Get products', () => {

    const tests = ['L001-001', 'L001-002', 'L001-003'];
    const testBD = products;

    it('Should return a list of products', () => {
        expect(getProducts(testBD)).to.be.an('array');
    });

    it(`Should return a list of ${testBD.length}`, () => {
        expect(getProducts(testBD).length).to.be.equal(3);
    });

    tests.forEach((item, index) => {
        it(`should have the id ${item}`, () => {
            expect(getProducts(testBD)[index].productCode).to.be.equal(item);
        });
    });

});

describe('Add Products', () => {

    const tests = [
        {
            productCode: 'L001-004',
            factoryID: 'SW00001',
            productPrice: {
                cordova: 500,
                dollar: 20
            },
        },
        {
            productCode: 'L001-005',
            factoryID: 'SW00002',
            batchCode: 'L1',
            client: 'Luis Garcia',
            productPrice: {
                cordova: 500,
                dollar: 20
            },
        },
        {
            productCode: 'L001-006',
            factoryID: 'SW00003',
            batchCode: 'L2',
            client: 'Luis Garcia',
            productPrice: {
                cordova: 500,
                dollar: 20
            },
        },
        {
            productCode: 'L001-007',
            factoryID: 'SW00004',
            productPrice: {
                cordova: 500,
                dollar: 20
            },
        },
    ];
    const testBD = Object.create(products);

    tests.forEach(product => {
        it('should add a new product', () => {
            //TODO: se esta modificando la base de datos testBD por lo que no es necesario este paso intermedio
            const productsList = addProduct(product, testBD);
            // console.log('Add Product , testBD.length: ', testBD.length);
            // console.log('Add Product 2, products.length: ', products.length);
            expect(productsList[productsList.length - 1].productCode).to.equal(product.productCode);
            expect(productsList[productsList.length - 1].factoryID).to.equal(product.factoryID);
            expect(productsList[productsList.length - 1].productPrice).to.equal(product.productPrice);
        });
    });

});

describe('Delete Product', () => {
    const tests = 'L001-001';
    const testBD = Object.create(products);
    // console.log('Delete Product, testBD.length: ', testBD.length);

    it(`should delete the product ${tests}`, () => {
        //TODO: se esta modificando la base de datos testBD por lo que no es necesario este paso intermedio
        const productsList = deleteProduct(tests, testBD);
        // console.log('Delete Product 2, testBD.length: ', testBD.length);
        expect(productsList.length).to.equal(2);
        productsList.forEach(element => {
            expect(element.productCode).to.not.equal(tests);
        });
    });


});

describe('Update Product', () => {
    const tests = [
        {
            productCode: 'L001-001',
            factoryID: 'SW00001',
            batchCode: 'L1',
            client: 'Luis Garcia',
            productPrice: {
                cordova: 500,
                dollar: 20
            },
            productSaleDate: new Date('05/18/2022'),
            realProductPrice: {
                cordova: 400,
                dollar: 15
            },
            realClient: 'Luis Garcia'
        },
        {
            productCode: 'L001-002',
            factoryID: 'SW00002',
            batchCode: 'L1',
            productPrice: {
                cordova: 500,
                dollar: 20
            },
        },
    ];
    const testBD = Object.create(products);

    tests.forEach((testCase, index) => {
        it('Should update the product', () => {
            const updatedProduct = updateProduct(testCase, testBD);
            expect(testBD[index].productCode).to.equal(updatedProduct.productCode);
            expect(testBD[index].factoryID).to.equal(updatedProduct.factoryID);
            expect(testBD[index].batchCode).to.equal(updatedProduct.batchCode);
            expect(testBD[index].client).to.equal(updatedProduct.client);
            expect(testBD[index].productPrice).to.equal(updatedProduct.productPrice);
            expect(testBD[index].productSaleDate).to.equal(updatedProduct.productSaleDate);
            expect(testBD[index].realProductPrice).to.equal(updatedProduct.realProductPrice);
            expect(testBD[index].realClient).to.equal(updatedProduct.realClient);
        });

    });

});