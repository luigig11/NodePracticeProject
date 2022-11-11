"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const passport_1 = __importDefault(require("passport"));
const api_1 = require("./routes/api");
const httpLogger_1 = require("./httpLogger");
const auth_controller_1 = require("./routes/auth/auth.controller");
passport_1.default.use(auth_controller_1.authStrategy);
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(passport_1.default.initialize());
app.use(httpLogger_1.httpLogger);
app.use(express_1.default.json());
app.use('/v1', api_1.api);
exports.default = app;
//# sourceMappingURL=app.js.map