import { Batch } from '../../interfaces/batch';
import {
    add,
    eliminate,
    get, 
    getList,
    update,
} from './batches.store';

async function getBatches(): Promise<Batch[]> {
    return await getList();
}

async function getBatch(code: string): Promise<Batch | null> {
    return await get(code);
}

async function addBatch(newBatch: Batch): Promise<Batch> {
    return await add(newBatch);
}

async function deleteBatch(code: string): Promise<Batch | null> {
    return await eliminate(code);
}

async function updateBatch(batch: Batch,): Promise<Batch | null> {
    return await update(batch)
}

export {
    getBatch,
    getBatches,
    addBatch,
    deleteBatch,
    updateBatch
}