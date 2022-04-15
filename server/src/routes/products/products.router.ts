import {Router} from 'express';

import {httpGetProduct, httpGetProducts, httpAddProduct, httpDeleProduct, httpUpdateProduct} from '../products/products.controller';

const productRouter = Router();

productRouter.get('/:productCode', httpGetProduct);
productRouter.get('/', httpGetProducts);
productRouter.post('/', httpAddProduct);
productRouter.delete('/:productCode', httpDeleProduct);
productRouter.patch('/', httpUpdateProduct);

export {
    productRouter,
}