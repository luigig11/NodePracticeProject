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

function httpGetBatches(req: Request, res: Response): any {

    try {

        logger.debug(`this is the ${req.url}`);
        const batches: Batch[] = getBatches();
        if (!batches) return Error(req, res, 'No batches were found');
        return Sucess(req, res, batches, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);

    }

}

function httpGetBatch(req: Request, res: Response): any {

    try {

        logger.debug(`this is the ${req.url}`);
        const batch: Batch | undefined = getBatch(req.params.batchCode);
        if (!batch) return Error(req, res, 'The batch was not found');
        return Sucess(req, res, batch, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }

}

function httpAddBatch(req: Request, res: Response): any {

    try {

        logger.debug(`this is the ${req.url}`);
        const newBAtch: Batch = addBatch(req.body);
        return Sucess(req, res, newBAtch, 200);
        
    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }
    
}

function httpDeleteBatch(req: Request, res: Response) {

    try {

        logger.debug(`this is the ${req.url}`);
        if(!getBatch(req.params.batchCode))
            return Error(req, res, 'The batch was not found');
        const deletedBatch: Batch = deleteBatch(req.params.batchCode);
        return Sucess(req, res, deletedBatch, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }
    
}

function httpUpdateBatch(req: Request, res: Response) {

    try {

        logger.debug(`this is the ${req.url}`);
        if(!getBatch(req.body.batchCode))
            return Error(req, res, 'The batch was not found');
        const updatedBatch: Batch | undefined = updateBatch(req.body);
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