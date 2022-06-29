import {expect} from 'chai';

import { batches } from '../fixtures/data.fixture';

import { addBatch, deleteBatch, getBatch, getBatches, updateBatch } from '../model/batches/batches.model';

//TODO: AVERIGUAR COMO CORRER SOLO UN ARCHIVO DE TEST
describe('Get Batch', () => {
    const test = ['LT-001', 'LT-002', 'LT-003', 'LT-005'];

    test.forEach((code, index) => {

        if (index === 3) {
            it('should not find the product', () => {
                expect(getBatch(code, batches)).to.be.undefined;
            });
        } else {
            it('should find the product', () => {
                const batch = getBatch(code, batches);
                expect(batch).to.exist;
                expect(batch!.batchCode).equal(code);
            });
        }
        
    });

});

describe('Get Batches', () => {
    const test = ['LT-001', 'LT-002', 'LT-003', 'LT-004'];
    const testBD = getBatches(batches);

    it('should be an array of four elements', () => {
        //TODO: este caso es medio sin sentido porque todo lo que hago es retornar la BD 
        //Mejorar si se puede o eliminarlo
        expect(testBD).to.be.an('array');
        expect(testBD.length).to.equal(4);
    });
    
    test.forEach((batch, index) => {
        it(`should have batch Code equal to ${batch}`, () => {
            expect(testBD[index].batchCode).to.equal(batch);
        });
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
    const testBD = [...batches];

    tests.forEach(batch => {
        it('should add a new product', () => {
            addBatch(batch, testBD);
            expect(testBD[testBD.length - 1].batchCode).to.equal(batch.batchCode);
            expect(testBD[testBD.length - 1].amountProducts).to.equal(batch.amountProducts);
            expect(testBD[testBD.length - 1].batchDateStart).to.equal(batch.batchDateStart);
            expect(testBD[testBD.length - 1].batchDateEnd).to.equal(batch.batchDateEnd);
        });        
    });
});

describe('Delete Batch', () => {
    const tests = 'LT-004';
    const testBD = [...batches];

    it(`should delete the batch ${tests}`, () => {
        //TODO: cuando se cambie a pure function se cambia este tests
        deleteBatch(tests, testBD);
        expect(testBD.length).to.equal(3);
        testBD.forEach(element => {
            expect(element.batchCode).to.not.equal(tests);
        });
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
    const testBD = [...batches];

    tests.forEach((batch, index) => {
        it(`Should update the product ${batch.batchCode}`, () => {
            const newBatch = updateBatch(batch, testBD);
            expect(newBatch?.batchCode).to.equal(testBD[index].batchCode);
            expect(newBatch?.amountProducts).to.equal(testBD[index].amountProducts);
            expect(newBatch?.batchDateStart).to.equal(testBD[index].batchDateStart);
            expect(newBatch?.batchDateEnd).to.equal(testBD[index].batchDateEnd);
        });
    });

});