import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { Strategy, StrategyOptions, VerifyCallback, Profile } from 'passport-google-oauth20'
import { logger } from '../../logger';

import { Error } from '../../network/response';

const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET
}

const AUTH_OPTIONS: StrategyOptions = {
    callbackURL: 'https://localhost:3000/v1/auth/google/callback',
    clientID: config.CLIENT_ID!,
    clientSecret: config.CLIENT_SECRET!
}

function verifyCallback(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
    logger.log('info', `Sign Up - ${accessToken}, ${refreshToken}`)
    console.log(profile);
    done(null, profile);
}


export const authStrategy = new Strategy(AUTH_OPTIONS, verifyCallback);

export const googleAuth = passport.authenticate('google', {
    scope: ['email']
});

export const passport_authentication = passport.authenticate('google',
{
    failureRedirect: '/v1/auth/failure',
    successRedirect: '/v1/product',
    session: true //lo puedo remover ya que el valor por defecto de session es true
});
// export const passport_authentication = passport.authenticate('google');

export const callback = () => console.log(('Google called us back!'));

export function failure(req: Request, res: Response) {
    return Error(req, res, '', 'Failed to login', 401)
}

export function checkLoggedIn(req: Request, res: Response, next: NextFunction) {
    console.log('Current user is: ', req.user);
    
    const isLoggedIn = req.isAuthenticated() && req.user;

    if (!isLoggedIn) {
        return Error(
            req,
            res,
            '',
            'You must log in!',
            401
        );
    }

    next();
}

export function logOut(req: any, res: any) {

    //esta es la funcion logout de passport, por eso no uso el type Request para definir el parametro req
    req.logout();
    res.redirect('/auth/google');
}

