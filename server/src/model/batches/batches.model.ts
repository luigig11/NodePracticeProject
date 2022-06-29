import { Batch } from '../../interfaces/batch';
import {
    add,
    eliminate,
    get, 
    getList,
    update,
} from './batches.store';

function getBatches(): Batch[] {
    return getList();
}

function getBatch(code: string): Batch | undefined {
    return get(code);
}

function addBatch(newBatch: Batch): Batch {
    return add(newBatch);
}

function deleteBatch(code: string): Batch {
    return eliminate(code);
}

function updateBatch(batch: Batch,): Batch | undefined {
    return update(batch)
}

export {
    getBatch,
    getBatches,
    addBatch,
    deleteBatch,
    updateBatch
}