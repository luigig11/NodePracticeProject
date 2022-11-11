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
exports.updateBatch = exports.deleteBatch = exports.addBatch = exports.getBatches = exports.getBatch = void 0;
const data_source_1 = require("../../store/data-source");
const Batch_1 = require("../../repo/Batch");
const batchRepository = data_source_1.AppDataSource.getRepository(Batch_1.Batch);
function getBatches() {
    return __awaiter(this, void 0, void 0, function* () {
        const repoBatches = yield batchRepository.find({});
        const batches = repoBatches.map(batch => {
            return {
                batchCode: batch.batchCode,
                amountProducts: batch.amountProducts,
                batchDateStart: batch.batchDateStart,
                batchDateEnd: batch.batchDateEnd
            };
        });
        return batches;
    });
}
exports.getBatches = getBatches;
function getBatch(code) {
    return __awaiter(this, void 0, void 0, function* () {
        const batch = yield batchRepository.findOne({
            where: {
                batchCode: code
            }
        });
        if (!batch)
            return null;
        return {
            batchCode: batch.batchCode,
            amountProducts: batch.amountProducts,
            batchDateStart: batch.batchDateStart,
            batchDateEnd: batch.batchDateEnd
        };
    });
}
exports.getBatch = getBatch;
function addBatch(batch) {
    return __awaiter(this, void 0, void 0, function* () {
        const newBatch = new Batch_1.Batch();
        newBatch.batchCode = batch.batchCode;
        newBatch.amountProducts = batch.amountProducts;
        newBatch.batchDateStart = batch.batchDateStart;
        newBatch.batchDateEnd = batch.batchDateEnd;
        yield batchRepository.save(newBatch);
        return Object.assign({}, batch);
    });
}
exports.addBatch = addBatch;
function deleteBatch(code) {
    return __awaiter(this, void 0, void 0, function* () {
        const batchToRemove = yield batchRepository.findOneBy({
            batchCode: code
        });
        if (!batchToRemove)
            return null;
        yield batchRepository.remove(batchToRemove);
        return {
            batchCode: batchToRemove.batchCode,
            amountProducts: batchToRemove.amountProducts,
            batchDateStart: batchToRemove.batchDateStart,
            batchDateEnd: batchToRemove.batchDateEnd
        };
    });
}
exports.deleteBatch = deleteBatch;
function updateBatch(batch) {
    return __awaiter(this, void 0, void 0, function* () {
        const batchToUpdate = yield batchRepository.findOneBy({
            batchCode: batch.batchCode
        });
        if (!batchToUpdate)
            return null;
        yield batchRepository.update({
            batchCode: batch.batchCode
        }, {
            amountProducts: batch.amountProducts,
            batchDateStart: batch.batchDateStart,
            batchDateEnd: batch.batchDateEnd
        });
        return Object.assign({}, batch);
    });
}
exports.updateBatch = updateBatch;
//# sourceMappingURL=batches.model.js.map