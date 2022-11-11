"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.get('/google', auth_controller_1.googleAuth);
authRouter.get('/google/callback', auth_controller_1.passport_authentication, auth_controller_1.callback);
authRouter.get('/logout', () => { });
authRouter.get('/failure', auth_controller_1.failure);
//# sourceMappingURL=auth.router.js.map