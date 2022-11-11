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
exports.updateProduct = exports.deleteProduct = exports.addProduct = exports.getProducts = exports.getProduct = void 0;
const data_source_1 = require("../../store/data-source");
const Product_1 = require("../../repo/Product");
const Batch_1 = require("../../repo/Batch");
const productRepository = data_source_1.AppDataSource.getRepository(Product_1.Product);
const batchRepository = data_source_1.AppDataSource.getRepository(Batch_1.Batch);
function getProduct(code) {
    return __awaiter(this, void 0, void 0, function* () {
        const repoProduct = yield productRepository.findOne({
            where: {
                productCode: code,
            },
            relations: {
                batch: true
            }
        });
        if (!repoProduct) {
            return null;
        }
        return {
            productCode: repoProduct.productCode,
            factoryID: repoProduct.factoryId,
            batchCode: repoProduct.batch.batchCode,
            productPrice: {
                dollar: repoProduct.dollarPrice,
                cordoba: repoProduct.cordobaPrice
            },
        };
    });
}
exports.getProduct = getProduct;
function getProducts(skip, take) {
    return __awaiter(this, void 0, void 0, function* () {
        const repoProducts = yield productRepository.find({
            relations: {
                batch: true
            },
            skip: skip,
            take: take
        });
        const products = repoProducts.map(product => {
            return {
                productCode: product.productCode,
                factoryID: product.factoryId,
                batchCode: product.batch.batchCode,
                productPrice: {
                    dollar: product.dollarPrice,
                    cordoba: product.cordobaPrice
                },
            };
        });
        return products;
    });
}
exports.getProducts = getProducts;
function addProduct(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const batch = yield batchRepository.findOne({
            select: {
                batchid: true
            },
            where: {
                batchCode: product.batchCode
            }
        });
        const newProduct = new Product_1.Product();
        newProduct.productCode = product.productCode;
        newProduct.factoryId = product.factoryID;
        newProduct.dollarPrice = product.productPrice.dollar;
        newProduct.cordobaPrice = product.productPrice.cordoba;
        newProduct.batchid = batch.batchid;
        yield productRepository.save(newProduct);
        return Object.assign({}, product);
    });
}
exports.addProduct = addProduct;
function deleteProduct(code) {
    return __awaiter(this, void 0, void 0, function* () {
        const productToRemove = yield productRepository.find({
            where: {
                productCode: code
            },
            relations: {
                batch: true
            }
        });
        if (!productToRemove)
            return null;
        yield productRepository.remove(productToRemove);
        return {
            productCode: productToRemove[0].productCode,
            factoryID: productToRemove[0].factoryId,
            productPrice: {
                dollar: productToRemove[0].dollarPrice,
                cordoba: productToRemove[0].cordobaPrice
            },
            batchCode: productToRemove[0].batch.batchCode
        };
    });
}
exports.deleteProduct = deleteProduct;
function updateProduct(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const productToUpdate = yield productRepository.find({
            where: {
                productCode: product.productCode
            }
        });
        if (!productToUpdate)
            return null;
        const batch = yield batchRepository.findOne({
            select: {
                batchid: true
            },
            where: {
                batchCode: product.batchCode
            }
        });
        yield productRepository.update({
            productCode: product.productCode
        }, {
            factoryId: product.factoryID,
            dollarPrice: product.productPrice.dollar,
            cordobaPrice: product.productPrice.cordoba,
            batchid: batch === null || batch === void 0 ? void 0 : batch.batchid
        });
        return Object.assign({}, product);
    });
}
exports.updateProduct = updateProduct;
//# sourceMappingURL=products.model.js.map