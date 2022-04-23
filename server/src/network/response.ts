import {logger} from '../logger';

export const Sucess = (req: any, res: any, message: any = '', status: any) => {
    logger.info(`Operation at route ${req.url} was succesfull!`)
    res.status(status).send({
        error: false,
        status,
        body: message
    });
}

export const Error = (req: any, res: any, details: any, message: any='Internal Server Error', status: any = 500) => {
    logger.error(`Operation at route ${req} failed. Response error: ${details}`);
    res.status(status).send({
        error: true,
        status,
        body: message
    })
}