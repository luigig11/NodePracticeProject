import { Batch } from './../interfaces/batch';

/* const batch: Batch = {
    batchCode: 'LT-001',
    amountProducts: 10
};

const batches: Batch[] = [
    batch,
] */

function getBatches(batches: Batch[]): Batch[] {
    return batches;
}

function getBatch(code: string, batches: Batch[]): Batch | undefined {

    let selectedBatch: Batch | undefined = batches.find(batch => {

        if (batch.batchCode === code) {
            return true;
        }
        return false;

    });

    // console.log('selected batch', selectedBatch);

    if (!selectedBatch) {
        return undefined;
    }

    return selectedBatch;
}

function addBatch(newBatch: Batch, batches: Batch[]): Batch {

    batches.push(newBatch);
    return newBatch;

}

function deleteBatch(code: string, batches: Batch[]): Batch[] {
    //TODO: esta no es una funcion pura. Copiar el estado, modifcar la copia y retornarlo para hacerlo pure function
    let batchIndex: number = batches.findIndex(batch => batch.batchCode === code);
    batches.splice(batchIndex, 1);
    return batches;
}

function updateBatch(batch: Batch, batches: Batch[]): Batch | undefined {
    
    //validar que exista el batch que solicitan actualizar
    if (!getBatch(batch.batchCode, batches)) {
        return undefined;
    }
    //encontrar el indice del batch
    let batchIndex: number = batches.findIndex(memoryBatch => memoryBatch.batchCode === batch.batchCode);
    //actualizar el batch
    batches[batchIndex] = {
        ...batches[batchIndex],
        batchDateStart: batch.batchDateStart,
        batchDateEnd: batch.batchDateEnd,
    }

    return batches[batchIndex];

}

export {
    getBatch,
    getBatches,
    addBatch,
    deleteBatch,
    updateBatch
}