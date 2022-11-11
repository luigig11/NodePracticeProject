"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = require("express");
const batches_router_1 = require("../routes/batches/batches.router");
const products_router_1 = require("../routes/products/products.router");
const auth_router_1 = require("./auth/auth.router");
const api = (0, express_1.Router)();
exports.api = api;
api.use('/auth', auth_router_1.authRouter);
api.use('/batch', batches_router_1.batchRouter);
api.use('/product', products_router_1.productRouter);
//# sourceMappingURL=api.js.map