import {Router} from 'express';

import {batchRouter} from '../routes/batches/batches.router';
import {productRouter} from '../routes/products/products.router';
import { checkLoggedIn } from './auth/auth.controller';
import {authRouter} from './auth/auth.router';

// import {checLoggedIn} from './auth/auth.controller'

const api = Router();

api.use('/auth', authRouter);
api.use('/batch', checkLoggedIn, batchRouter);
api.use('/product', checkLoggedIn, productRouter);

export {
    api
}