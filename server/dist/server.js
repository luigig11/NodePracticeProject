"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const fs_1 = require("fs");
const https_1 = require("https");
const data_source_1 = require("./store/data-source");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const logger_1 = require("./logger");
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 3000;
const options = {
    key: (0, fs_1.readFileSync)('key.pem'),
    cert: (0, fs_1.readFileSync)('cert.pem')
};
const server = (0, https_1.createServer)(options, app_1.default);
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
server.listen(PORT, () => {
    logger_1.logger.info(`Server running in port ${PORT}`);
});
//# sourceMappingURL=server.js.map