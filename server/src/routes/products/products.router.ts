import {Router} from 'express';

import {httpGetProduct, httpGetProducts, httpAddProduct, httpDeletProduct, httpUpdateProduct} from '../products/products.controller';

const productRouter = Router();

productRouter.get('/:productCode', httpGetProduct);
productRouter.get('/', httpGetProducts);
productRouter.post('/', httpAddProduct);
productRouter.delete('/:productCode', httpDeletProduct);
productRouter.patch('/', httpUpdateProduct);

export {
    productRouter,
}