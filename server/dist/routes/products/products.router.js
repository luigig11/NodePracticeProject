"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const products_controller_1 = require("../products/products.controller");
const productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
productRouter.get('/:productCode', products_controller_1.httpGetProduct);
productRouter.get('/', products_controller_1.httpGetProducts);
productRouter.post('/', products_controller_1.httpAddProduct);
productRouter.delete('/:productCode', products_controller_1.httpDeletProduct);
productRouter.patch('/', products_controller_1.httpUpdateProduct);
//# sourceMappingURL=products.router.js.map