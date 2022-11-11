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
exports.httpUpdateProduct = exports.httpDeletProduct = exports.httpAddProduct = exports.httpGetProducts = exports.httpGetProduct = void 0;
const logger_1 = require("../../logger");
const response_1 = require("../../network/response");
const products_model_1 = require("../../model/products/products.model");
const query_1 = require("../../store/query");
function httpGetProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.logger.debug(`Initiating operation at ${req.url} route`);
            const product = yield (0, products_model_1.getProduct)(req.params.productCode);
            if (!product)
                return (0, response_1.Error)(req, res, 'Product not found');
            return (0, response_1.Sucess)(req, res, product, 200);
        }
        catch (error) {
            return (0, response_1.Error)(req, res, error);
        }
    });
}
exports.httpGetProduct = httpGetProduct;
function httpGetProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.logger.debug(`Initiating operation at ${req.url} route`);
            const { page, limit } = req.query;
            const { skip, take } = (0, query_1.getPagination)({ page, limit });
            const products = yield (0, products_model_1.getProducts)(skip, take);
            if (!products)
                return (0, response_1.Error)(req, res, 'No products were found');
            return (0, response_1.Sucess)(req, res, products, 200);
        }
        catch (error) {
            return (0, response_1.Error)(req, res, error);
        }
    });
}
exports.httpGetProducts = httpGetProducts;
function httpAddProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.logger.debug(`Initiating operation at ${req.url} route`);
            const newProduct = yield (0, products_model_1.addProduct)(req.body);
            return (0, response_1.Sucess)(req, res, newProduct, 200);
        }
        catch (error) {
            return (0, response_1.Error)(req, res, error);
        }
    });
}
exports.httpAddProduct = httpAddProduct;
function httpDeletProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.logger.debug(`Initiating operation at ${req.url} route`);
            const products = yield (0, products_model_1.deleteProduct)(req.params.productCode);
            if (!products)
                return (0, response_1.Error)(req, res, 'Product not found');
            return (0, response_1.Sucess)(req, res, products, 200);
        }
        catch (error) {
            return (0, response_1.Error)(req, res, error);
        }
    });
}
exports.httpDeletProduct = httpDeletProduct;
function httpUpdateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.logger.debug(`Initiating operation at ${req.url} route`);
            const product = yield (0, products_model_1.updateProduct)(req.body);
            if (!product)
                return (0, response_1.Error)(req, res, 'Product not found');
            return (0, response_1.Sucess)(req, res, product, 200);
        }
        catch (error) {
            return (0, response_1.Error)(req, res, error);
        }
    });
}
exports.httpUpdateProduct = httpUpdateProduct;
//# sourceMappingURL=products.controller.js.map