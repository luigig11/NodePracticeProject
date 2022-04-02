import { Batch } from './../interfaces/batch';

const batch: Batch = {
    batchCode: 'LT-001',
    amountProducts: 10
};

const batches: Batch[] = [
    batch,
]

function getBatches(): Batch[] {
    return batches;
}

function getBatch(code: string): Batch | string {

    let selectedBatch: Batch | undefined = batches.find(batch => {
        
        if (batch.batchCode === code) {
            return true;
        }
        return false;
        
    });

    // console.log('selected batch', selectedBatch);

    if (!selectedBatch) {
        return 'lote no existente'
    }

    return selectedBatch;
}

function addBatch(newBatch: Batch): Batch {

    batches.push(newBatch);
    return newBatch;

}

function deleteBatch(code: string): Batch[] {
    let batchIndex: number = batches.findIndex(batch => batch.batchCode === code);
    batches.splice(batchIndex, 1);
    return batches;
}

export {
    getBatch,
    getBatches,
    addBatch,
    deleteBatch
}