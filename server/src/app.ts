import express, {Express} from 'express';

import {api} from './routes/api';
import {httpLogger} from './httpLogger';

const app: Express = express();

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