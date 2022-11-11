"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Sucess = void 0;
const logger_1 = require("../logger");
const Sucess = (req, res, message = '', status) => {
    logger_1.logger.info(`Operation at route ${req.url} was succesfull!`);
    res.status(status).send({
        error: false,
        status,
        body: message
    });
};
exports.Sucess = Sucess;
const Error = (req, res, details, message = 'Internal Server Error', status = 500) => {
    logger_1.logger.error(`Operation at route ${req} failed. Response error: ${details}`);
    res.status(status).send({
        error: true,
        status,
        body: message
    });
};
exports.Error = Error;
//# sourceMappingURL=response.js.map