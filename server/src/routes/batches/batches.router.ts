import {httpAddBatch, httpGetBatch, httpGetBatches, httpDeleteBatch} from './batches.controller';
import {Router} from 'express';

const batchRouter = Router();

batchRouter.get('/batch/:batchCode', httpGetBatch);
batchRouter.get('/batches', httpGetBatches);
batchRouter.post('/batch', httpAddBatch);
batchRouter.delete('/batch/:batchCode',httpDeleteBatch );

export {
    batchRouter
}