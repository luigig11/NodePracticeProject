import {httpAddBatch, httpGetBatch, httpGetBatches, httpDeleteBatch, httpUpdateBatch} from './batches.controller';
import {Router} from 'express';

const batchRouter = Router();

batchRouter.get('/:batchCode', httpGetBatch);
batchRouter.get('/', httpGetBatches);
batchRouter.post('/', httpAddBatch);
batchRouter.delete('/:batchCode',httpDeleteBatch );
batchRouter.put('/',httpUpdateBatch);

export {
    batchRouter
}