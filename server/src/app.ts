import express from 'express';

import {api} from './routes/api';

const app = express();

//TODO: ADD CORS MIDDLEWARE

app.use(express.json());

app.use('/v1', api);

//Borrar este endpoint en cuanto deje de probar
/* app.get('/', (req, res) => {
    console.log('este es el body: ', req.body)
    res.status(200).send('Holaaa');
}); */

export default app;