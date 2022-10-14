import "reflect-metadata";
import {createServer} from 'http';
import {AppDataSource} from './store/data-source';

//como usar dotenv con 'import': https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
//https://www.npmjs.com/package/dotenv
import * as dotenv from 'dotenv';
dotenv.config();

import {logger} from './logger';

import app from './app';

const PORT = process.env.PORT || 3000;

const server = createServer(app);

//TODO: crear funcion main y dejar dentro de ella la conexion a la BD asi como levantar el event listener del server, esto para garantizar
//que el server no escuche requests hasta que la BD este inicializada
AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });

server.listen(PORT, () => {
    logger.info(`Server running in port ${PORT}`)
});

