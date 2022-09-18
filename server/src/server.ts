import {createServer} from 'http';
import "reflect-metadata"

//como usar dotenv con 'import': https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
//https://www.npmjs.com/package/dotenv
import * as dotenv from 'dotenv';
dotenv.config();

import {logger} from './logger';

import app from './app';

const PORT = process.env.PORT || 3000;

const server = createServer(app);

server.listen(PORT, () => {
    logger.info(`Server running in port ${PORT}`)
});

