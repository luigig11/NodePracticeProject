import express, {Express} from 'express';
import helmet from 'helmet';

import passport from 'passport';
import cookieSession from 'cookie-session';

import {api} from './routes/api';
import {httpLogger} from './httpLogger';
import {authStrategy} from './routes/auth/auth.controller';

passport.use(authStrategy);

//save the session to cookie
//para dar tipado al objeto 'user' ver la solucion en el articulo: https://dev.to/samippoudel/google-oauth-using-typescript-expressjs-passportjs-mongodb-5el8
passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

//Read the session from the cookie
//para dar tipado al objeto 'id' ver la solucion en el articulo: https://dev.to/samippoudel/google-oauth-using-typescript-expressjs-passportjs-mongodb-5el8
passport.deserializeUser((id: any, done) => {
    done(null, id);
})

const app: Express = express();

const cookie_key_options = {
    COOKIE_KEY_1: process.env.COOKIE_KEY_1!,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2!
};

app.use(helmet());
app.use(cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [cookie_key_options.COOKIE_KEY_1, cookie_key_options.COOKIE_KEY_2 ]
}));
app.use(passport.initialize());
app.use(passport.session());

//TODO: ADD CORS MIDDLEWARE

//TODO: ADD LOGS MIDDLEWARE - DONE!
//Logger Http usando morgan y winston: https://sematext.com/blog/node-js-logging/
app.use(httpLogger)

app.use(express.json());

//TODO: descomentar y usar el middleware para servir archivos estaticos desde el servidor
// app.use(express.static(path.join(ruta)));

app.use('/v1', api);

//Borrar este endpoint en cuanto deje de probar
/* app.get('/', (req, res) => {
    console.log('este es el body: ', req.body)
    res.status(200).send('Holaaa');
}); */

export default app;