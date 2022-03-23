import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('este es el body: ', req.body)
    res.status(200).send('Holaaa');
})

export default app;