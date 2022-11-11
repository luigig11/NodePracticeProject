import {Router} from 'express';

import {batchRouter} from '../routes/batches/batches.router';
import {productRouter} from '../routes/products/products.router';
import {authRouter} from './auth/auth.router';

// import {checLoggedIn} from './auth/auth.controller'

const api = Router();

api.use('/auth', authRouter);
/* api.use('/batch', checLoggedIn, batchRouter);
api.use('/product', checLoggedIn, productRouter); */
api.use('/batch', batchRouter);
api.use('/product', productRouter);

export {
    api
}