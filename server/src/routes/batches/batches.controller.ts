import { Batch } from '../../interfaces/batch';
import {addBatch, getBatch, getBatches, deleteBatch, updateBatch} from '../../model/batches.model';

function httpGetBatches(_: any, res: any): any {
    // console.log(req);
    const batches: Batch[] = getBatches();
    return res.status(200).json(batches);
}

function httpGetBatch(req: any, res: any): any {
    // console.log(req);
    const batch: Batch | undefined = getBatch(req.params.batchCode);
    return res.status(200).json(batch);
}

function httpAddBatch(req: any, res: any): any {
    // console.log(req);
    const newBAtch : Batch = addBatch(req.body);
    return res.status(200).json(newBAtch);
}

function httpDeleteBatch(req:any, res: any) {
    const batches: Batch[] = deleteBatch(req.params.batchCode);
    return res.status(200).json(batches);
}

function httpUpdateBatch(req:any, res: any) {
    const batch: Batch | undefined = updateBatch(req.body);
    return res.status(200).json(batch);
}

export {
    httpGetBatch,
    httpGetBatches,
    httpAddBatch,
    httpDeleteBatch,
    httpUpdateBatch
}