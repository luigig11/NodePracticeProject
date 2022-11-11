"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpUpdateBatch = exports.httpDeleteBatch = exports.httpAddBatch = exports.httpGetBatches = exports.httpGetBatch = void 0;
const logger_1 = require("../../logger");
const response_1 = require("../../network/response");
const batches_model_1 = require("../../model/batches/batches.model");
function httpGetBatches(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.logger.debug(`this is the ${req.url}`);
            const batches = yield (0, batches_model_1.getBatches)();
            if (!batches)
                return (0, response_1.Error)(req, res, 'No batches were found');
            return (0, response_1.Sucess)(req, res, batches, 200);
        }
        catch (error) {
            return (0, response_1.Error)(req, res, error);
        }
    });
}
exports.httpGetBatches = httpGetBatches;
function httpGetBatch(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.logger.debug(`this is the ${req.url}`);
            const batch = yield (0, batches_model_1.getBatch)(req.params.batchCode);
            if (!batch)
                return (0, response_1.Error)(req, res, 'The batch was not found');
            return (0, response_1.Sucess)(req, res, batch, 200);
        }
        catch (error) {
            return (0, response_1.Error)(req, res, error);
        }
    });
}
exports.httpGetBatch = httpGetBatch;
function httpAddBatch(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.logger.debug(`this is the ${req.url}`);
            const newBAtch = yield (0, batches_model_1.addBatch)(req.body);
            return (0, response_1.Sucess)(req, res, newBAtch, 200);
        }
        catch (error) {
            return (0, response_1.Error)(req, res, error);
        }
    });
}
exports.httpAddBatch = httpAddBatch;
function httpDeleteBatch(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.logger.debug(`this is the ${req.url}`);
            const deletedBatch = yield (0, batches_model_1.deleteBatch)(req.params.batchCode);
            if (!deletedBatch)
                return (0, response_1.Error)(req, res, 'The batch was not found');
            return (0, response_1.Sucess)(req, res, deletedBatch, 200);
        }
        catch (error) {
            return (0, response_1.Error)(req, res, error);
        }
    });
}
exports.httpDeleteBatch = httpDeleteBatch;
function httpUpdateBatch(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.logger.debug(`this is the ${req.url}`);
            const updatedBatch = yield (0, batches_model_1.updateBatch)(req.body);
            if (!updatedBatch)
                return (0, response_1.Error)(req, res, 'The batch was not found');
            return (0, response_1.Sucess)(req, res, updatedBatch, 200);
        }
        catch (error) {
            return (0, response_1.Error)(req, res, error);
        }
    });
}
exports.httpUpdateBatch = httpUpdateBatch;
//# sourceMappingURL=batches.controller.js.map