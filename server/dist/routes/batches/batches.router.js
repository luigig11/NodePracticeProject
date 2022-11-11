"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchRouter = void 0;
const batches_controller_1 = require("./batches.controller");
const express_1 = require("express");
const batchRouter = (0, express_1.Router)();
exports.batchRouter = batchRouter;
batchRouter.get('/:batchCode', batches_controller_1.httpGetBatch);
batchRouter.get('/', batches_controller_1.httpGetBatches);
batchRouter.post('/', batches_controller_1.httpAddBatch);
batchRouter.delete('/:batchCode', batches_controller_1.httpDeleteBatch);
batchRouter.put('/', batches_controller_1.httpUpdateBatch);
//# sourceMappingURL=batches.router.js.map