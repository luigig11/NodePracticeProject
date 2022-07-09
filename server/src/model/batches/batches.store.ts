import {Batch} from  '../../interfaces/batch';
import {batches as dummyBatches} from '../../store/dummyStore';

function get(code: string): Batch | undefined {
    const batch: Batch | undefined = dummyBatches.find(batch => batch.batchCode === code);
    return batch;
}

function getList(): Batch[] {
    return dummyBatches;
}

function add(batch: Batch): Batch {
    const newBatch: Batch = {
        ...batch
    }
    dummyBatches.push(newBatch);
    return newBatch;
}

function eliminate (code: string ): Batch {
    //TODO: verificar si lo puedo hacer encontrando el objeto directamente con get y luego eliminarlo
    const memoryBatch: number = dummyBatches.findIndex(batch => batch.batchCode === code);
    const deletedBatch = dummyBatches.splice(memoryBatch, 1);
    return deletedBatch[0];
    
}

function update(batch: Batch): Batch {

     //validar que exista el batch que solicitan actualizar
   /*   if (!getBatch(batch.batchCode, batches)) {
        return undefined;
    } */
    //encontrar el indice del batch
    let batchIndex: number = dummyBatches.findIndex(memoryBatch => memoryBatch.batchCode === batch.batchCode);
    //actualizar el batch
    dummyBatches[batchIndex] = {
        ...dummyBatches[batchIndex],
        batchDateStart: batch.batchDateStart,
        batchDateEnd: batch.batchDateEnd,
    }

    return dummyBatches[batchIndex];
    
}

export {
    get,
    getList,
    add,
    eliminate,
    update
}