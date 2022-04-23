import {createServer} from 'http';

import {logger} from './logger';

import app from './app';

const PORT = process.env.PORT || 3000;

const server = createServer(app);

server.listen(PORT, () => {
    logger.info(`Server running in port ${PORT}`)
});

