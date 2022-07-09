/**
 * EL ARCHIVO DE PRUEBAS UNITARIAS PODRIA SER MEJORADO CON LA LIBRERIA SINON.JS
 */

import {expect} from 'chai';

// EL ARCHIVO "data.fixture" NO TIENE NINGUNA UTILIDAD. SE ESTUDIARA A FUTURO SI ES VIABLE USARLO PARA SEMBRAR DATOS DE PRUEBAS UNITARIAS
// import { batches } from '../fixtures/data.fixture';
import {batches as dummyBatches} from '../store/dummyStore';

import { addBatch, deleteBatch, getBatch, getBatches, updateBatch } from '../model/batches/batches.model';

//TODO: AVERIGUAR COMO CORRER SOLO UN ARCHIVO DE TEST
describe('Get Batch', () => {
    const test = ['LT-001', 'LT-002', 'LT-003', 'LT-005'];

    test.forEach((code, index) => {

        if (index === 3) {
            it('should not find the product', () => {
                expect(getBatch(code)).to.be.undefined;
            });
        } else {
            it('should find the product', () => {
                const batch = getBatch(code);
                expect(batch).to.exist;
                expect(batch!.batchCode).equal(code);
            });
        }
        
    });

});

describe('Get Batches', () => {

    it('should be an array of four elements', () => {
        //TODO: este caso es medio sin sentido porque todo lo que hago es retornar la BD 
        //Mejorar si se puede o eliminarlo
        expect(getBatches()).to.be.an('array');
    });

});

//TODO: agregar los casos restantes
describe('Add Batches', () => {
    const tests = [
        {
            batchCode: 'LT-005',
            amountProducts: 10,
            batchDateStart: new Date(),
            batchDateEnd: new Date('12/05/2022')
        },
        {
            batchCode: 'LT-006',
            amountProducts: 9,
            batchDateStart: new Date('05/04/2021'),
            batchDateEnd: new Date('12/05/2022')
        },
        {
            batchCode: 'LT-007',
            amountProducts: 10,
        },
    ]

    tests.forEach(batch => {
        it('should add a new product', () => {
            const addedBatch = addBatch(batch);
            expect(addedBatch).to.exist;
            expect(getBatch(addedBatch.batchCode)).to.exist;
        });        
    });
});

describe('Delete Batch', () => {
    const tests = 'LT-004';

    it(`should delete the batch ${tests}`, () => {
        //TODO: cuando se cambie a pure function se cambia este tests
        const deletedBatch = deleteBatch(tests);
        expect(deletedBatch).to.not.be.undefined;
        expect(getBatch(deletedBatch.batchCode)).to.be.undefined;
    });
});

describe('Update Batch', () => {
    const tests = [
        {
            batchCode: 'LT-001',
            amountProducts: 10,
            batchDateStart: new Date('25/05/2022'),
            batchDateEnd: new Date('25/06/2022')
        },
        {
            batchCode: 'LT-002',
            amountProducts: 5,
            batchDateStart: new Date('25/05/2022'),
            batchDateEnd: new Date('25/06/2022')
        },
        {
            batchCode: 'LT-003',
            amountProducts: 5,
            batchDateStart: new Date('25/05/2022')
        },
    ];

    tests.forEach((batch, index) => {
        it(`Should update the product ${batch.batchCode}`, () => {
            const newBatch = updateBatch(batch);
            expect(dummyBatches[index].batchCode).to.equal(newBatch?.batchCode);
            expect(dummyBatches[index].amountProducts).to.equal(newBatch?.amountProducts);
            expect(dummyBatches[index].batchDateStart).to.equal(newBatch?.batchDateStart);
            expect(dummyBatches[index].batchDateEnd).to.equal(newBatch?.batchDateEnd);
        });
    });

});