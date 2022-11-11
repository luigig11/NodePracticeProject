"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checLoggedIn = exports.failure = exports.callback = exports.passport_authentication = exports.googleAuth = exports.authStrategy = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const response_1 = require("../../network/response");
const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET
};
const AUTH_OPTIONS = {
    callbackURL: 'v1/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET
};
function verifyCallback(accessToken, refreshToken, profile, done) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    console.log(done);
}
exports.authStrategy = new passport_google_oauth20_1.Strategy(AUTH_OPTIONS, verifyCallback);
exports.googleAuth = passport_1.default.authenticate('google', {
    scope: ['email']
});
exports.passport_authentication = passport_1.default.authenticate('google', {
    failureRedirect: 'api/v1/auth/failure',
    successRedirect: 'api/v1/auth/google/callback',
    session: true
});
const callback = () => console.log(('Google called us back!'));
exports.callback = callback;
function failure(req, res) {
    return (0, response_1.Error)(req, res, '', 'Failed to login', 401);
}
exports.failure = failure;
function checLoggedIn(req, res, next) {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        return (0, response_1.Error)(req, res, '', 'You must log in!', 401);
    }
    next();
}
exports.checLoggedIn = checLoggedIn;
//# sourceMappingURL=auth.controller.js.map