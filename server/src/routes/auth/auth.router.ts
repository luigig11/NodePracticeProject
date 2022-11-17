import { Router } from 'express';
import { callback, passport_authentication, failure, googleAuth, logOut } from './auth.controller';


const authRouter: Router = Router();

authRouter.get('/google', googleAuth);
authRouter.get('/google/callback', passport_authentication, callback)
authRouter.get('/logout', logOut);
authRouter.get('/failure', failure);

export {
    authRouter
};