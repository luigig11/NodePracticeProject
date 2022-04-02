import express from 'express';
import {batchRouter} from './routes/batches/batches.router';

const app = express();

app.use(express.json());

app.use('/v1', batchRouter);

//Borrar este endpoint en cuanto deje de probar
/* app.get('/', (req, res) => {
    console.log('este es el body: ', req.body)
    res.status(200).send('Holaaa');
}); */

export default app;