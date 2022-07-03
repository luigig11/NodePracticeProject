import { expect } from 'chai';

import {
    addProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct
} from '../model/products/products.model';

// EL ARCHIVO "data.fixture" NO TIENE NINGUNA UTILIDAD. SE ESTUDIARA A FUTURO SI ES VIABLE USARLO PARA SEMBRAR DATOS DE PRUEBAS UNITARIAS
// import { products } from '../fixtures/data.fixture'
import {products as dummyProducts} from '../store/dummyStore';

describe('Get product', () => {

    const tests: string[] = ['L001-001', 'L001-004', 'L001-005'];

    tests.forEach((item, index) => {

        if (index === 0) {
            it(`Should find the product ${item}`, () => {
                expect(getProduct(item)).to.exist;
            });
        } else {
            it(`should not find the product ${item}`, () => {
                expect(getProduct(item)).to.be.undefined;
            });
        }
    });

});

describe('Get products', () => {

    const tests = ['L001-001', 'L001-002', 'L001-003'];
    const testBD = Object.create(dummyProducts);

    it('Should return a list of products', () => {
        expect(getProducts()).to.be.an('array');
    });

    it(`Should return a list of ${testBD.length}`, () => {
        expect(getProducts().length).to.be.equal(3);
    });

    tests.forEach((item, index) => {
        it(`should have the id ${item}`, () => {
            expect(getProducts()[index].productCode).to.be.equal(item);
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
    //El problema aqui es que  la BD de prueba cambia porque se insertan datos y podria afectar mis otras pruebas. 
    //En el futuro deberia refactorziar para que estas pruebas no sean interdependientes
    //crear un objeto nuevo simula otra BD pero el problema es que el product.store es el que decide donde buscar los datos
    //mas adelante se debe refactorizar con las variables de ambiente para que las pruebas unitarias se ejecuten en ambientes aislados
    // const testBD = Object.create(dummyProducts);

    tests.forEach(product => {
        it('should add a new product', () => {
            //TODO: se esta modificando la base de datos testBD por lo que no es necesario este paso intermedio
            const addedProduct = addProduct(product);
            // console.log('Add Product , testBD.length: ', testBD.length);
            // console.log('Add Product 2, products.length: ', products.length);
            expect(addedProduct.productCode).to.equal(product.productCode);
            expect(addedProduct.factoryID).to.equal(product.factoryID);
            expect(addedProduct.productPrice).to.equal(product.productPrice);
        });
    });

});

//TODO: REFACTORIZAR ESTA PRUEBA YA QUE ESTA MUY DEPENDIENTE DE LA PRUEBA ANTERIOR
describe('Delete Product', () => {
    const tests = 'L001-007';
    const productsList = getProducts();

    it(`should delete the product ${tests}`, () => {
        //TODO: se esta modificando la base de datos testBD por lo que no es necesario este paso intermedio
        const deletedProduct = deleteProduct(tests);
        // console.log('Delete Product 2, testBD.length: ', testBD.length);
        expect(productsList.length).to.equal(productsList.length - 1);
        productsList.forEach(element => {
            expect(element.productCode).to.not.equal(deletedProduct.productCode);
        });
    });


});

describe.skip('Update Product', () => {
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
    const productsList = getProducts();

    tests.forEach((testCase, index) => {
        it('Should update the product', () => {
            const updatedProduct = updateProduct(testCase);
            expect(productsList[index].productCode).to.equal(updatedProduct.productCode);
            expect(productsList[index].factoryID).to.equal(updatedProduct.factoryID);
            expect(productsList[index].batchCode).to.equal(updatedProduct.batchCode);
            expect(productsList[index].client).to.equal(updatedProduct.client);
            expect(productsList[index].productPrice).to.equal(updatedProduct.productPrice);
            expect(productsList[index].productSaleDate).to.equal(updatedProduct.productSaleDate);
            expect(productsList[index].realProductPrice).to.equal(updatedProduct.realProductPrice);
            expect(productsList[index].realClient).to.equal(updatedProduct.realClient);
        });

    });

});