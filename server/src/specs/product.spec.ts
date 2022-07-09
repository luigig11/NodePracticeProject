/**
 * EL ARCHIVO DE PRUEBAS UNITARIAS PODRIA SER MEJORADO CON LA LIBRERIA SINON.JS
 */

import { expect } from 'chai';

import {
    addProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct
} from '../model/products/products.model';

// EL ARCHIVO "data.fixture" NO TIENE NINGUNA UTILIDAD. SE ESTUDIARA A FUTURO SI ES VIABLE USARLO PARA SEMBRAR DATOS DE PRUEBAS UNITARIAS
// import { products as dataProducts } from '../fixtures/data.fixture'
import {products as dummyProducts} from '../store/dummyStore';

describe('Get product', () => {

    const tests: string[] = ['L001-001', 'L001-004', 'L001-005']

    tests.forEach((item, index) => {

        if (index === 0) {
            it(`Should find the product ${item}`, () => {
                const product = getProduct(item);
                console.log('Product: ', product);
                expect(product).to.exist;
                expect(product!.productCode).to.equal('L001-001');
            });
        } else {
            it(`should not find the product ${item}`, () => {
                expect(getProduct(item)).to.be.undefined;
            });
        }
    });

});

describe('Get products', () => {

    // const tests = ['L001-001', 'L001-002', 'L001-003'];
    // const testBD = Object.create(dummyProducts);

    it('Should return a list of products', () => {
        const products = getProducts();
        expect(products).to.exist;
        expect(products).to.be.an('array');
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
            expect(addedProduct).to.exist;
            expect(getProduct(addedProduct.productCode)).to.exist;
        });
    });

});

//TODO: REFACTORIZAR ESTA PRUEBA YA QUE ESTA MUY DEPENDIENTE DE LA PRUEBA ANTERIOR
describe('Delete Product', () => {
    const tests = 'L001-003';

    it(`should delete the product ${tests}`, () => {
        //TODO: se esta modificando la base de datos testBD por lo que no es necesario este paso intermedio
        const deletedProduct = deleteProduct(tests);
        // console.log('Delete Product 2, testBD.length: ', testBD.length);
        expect(getProduct(deletedProduct?.productCode)).to.be.undefined;
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
    // const productsList = getProducts();

    tests.forEach((testCase, index) => {
        it('Should update the product', () => {
            const updatedProduct = updateProduct(testCase);
            expect(dummyProducts[index].productCode).to.equal(updatedProduct.productCode);
            expect(dummyProducts[index].factoryID).to.equal(updatedProduct.factoryID);
            expect(dummyProducts[index].batchCode).to.equal(updatedProduct.batchCode);
            expect(dummyProducts[index].client).to.equal(updatedProduct.client);
            expect(dummyProducts[index].productPrice).to.equal(updatedProduct.productPrice);
            expect(dummyProducts[index].productSaleDate).to.equal(updatedProduct.productSaleDate);
            expect(dummyProducts[index].realProductPrice).to.equal(updatedProduct.realProductPrice);
            expect(dummyProducts[index].realClient).to.equal(updatedProduct.realClient);
        });

    });

});