import {Router} from 'express';

import {batchRouter} from '../routes/batches/batches.router';
import {productRouter} from '../routes/products/products.router';

const api = Router();

api.use('/batch', batchRouter);
api.use('/product', productRouter);

export {
    api
}