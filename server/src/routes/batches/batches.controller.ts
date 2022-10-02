import {Request, Response} from 'express';

import { Batch } from '../../interfaces/batch';
import { logger } from '../../logger';
import { Error, Sucess } from '../../network/response';

import {
    addBatch,
    getBatch,
    getBatches,
    deleteBatch,
    updateBatch
} from '../../model/batches/batches.model';

async function httpGetBatches(req: Request, res: Response) {

    try {

        logger.debug(`this is the ${req.url}`);
        const batches: Batch[] = await getBatches();
        if (!batches) return Error(req, res, 'No batches were found');
        return Sucess(req, res, batches, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);

    }

}

async function httpGetBatch(req: Request, res: Response) {

    try {

        logger.debug(`this is the ${req.url}`);
        const batch: Batch | null = await getBatch(req.params.batchCode);
        if (!batch) return Error(req, res, 'The batch was not found');
        return Sucess(req, res, batch, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }

}

async function httpAddBatch(req: Request, res: Response) {

    try {

        logger.debug(`this is the ${req.url}`);
        const newBAtch: Batch = await addBatch(req.body);
        return Sucess(req, res, newBAtch, 200);
        
    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }
    
}

async function httpDeleteBatch(req: Request, res: Response) {

    try {

        logger.debug(`this is the ${req.url}`);
        const deletedBatch: Batch | null = await deleteBatch(req.params.batchCode);
        if(!deletedBatch) return Error(req, res, 'The batch was not found');
        return Sucess(req, res, deletedBatch, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }
    
}

async function httpUpdateBatch(req: Request, res: Response) {

    try {

        logger.debug(`this is the ${req.url}`);
        const updatedBatch: Batch | null = await updateBatch(req.body);
        if(!updatedBatch) return Error(req, res, 'The batch was not found');
        return Sucess(req, res, updatedBatch, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }
    
}

export {
    httpGetBatch,
    httpGetBatches,
    httpAddBatch,
    httpDeleteBatch,
    httpUpdateBatch
}