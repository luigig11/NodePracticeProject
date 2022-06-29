import { Batch } from '../../interfaces/batch';
import {logger} from '../../logger';
import {addBatch, getBatch, getBatches, deleteBatch, updateBatch} from '../../model/batches/batches.model';

function httpGetBatches(req: any, res: any): any {
    logger.debug(`this is the ${req.url}`);
    const batches: Batch[] = getBatches();
    return res.status(200).json(batches);
}

function httpGetBatch(req: any, res: any): any {
    logger.debug(`this is the ${req.url}`);
    const batch: Batch | undefined = getBatch(req.params.batchCode);
    return res.status(200).json(batch);
}

function httpAddBatch(req: any, res: any): any {
    logger.debug(`this is the ${req.url}`);
    const newBAtch : Batch = addBatch(req.body);
    return res.status(200).json(newBAtch);
}

function httpDeleteBatch(req:any, res: any) {
    logger.debug(`this is the ${req.url}`);
    const batches: Batch = deleteBatch(req.params.batchCode);
    return res.status(200).json(batches);
}

function httpUpdateBatch(req:any, res: any) {
    logger.debug(`this is the ${req.url}`);
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