import { Product } from '../../interfaces/product';
import { logger } from '../../logger';
import { Sucess, Error } from '../../network/response';
import {Request, Response} from 'express'

import { 
    getProduct, 
    getProducts, 
    addProduct, 
    deleteProduct, 
    updateProduct 
} from '../../model/products/products.model';

import {getPagination} from '../../store/query';
import { paginationPArameters } from '../../interfaces/pagination';

//TODO: APLICAR EL ERROR HANDLING, TAMBIEN EL EL ARCHIVO STORE DE

async function httpGetProduct(req: Request, res: Response) {
    try {

        logger.debug(`Initiating operation at ${req.url} route`);
        const product: Product | null = await getProduct(req.params.productCode);
        if (!product) return Error(req, res, 'Product not found');
        return Sucess(req, res, product, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }

}

async function httpGetProducts(req: Request, res: Response) {
    try {
        
        logger.debug(`Initiating operation at ${req.url} route`);
        const {page, limit} = req.query;
        const {skip, take} = getPagination({page, limit} as paginationPArameters);
        const products: Product[] = await getProducts(skip, take);
        if(!products) return Error(req, res, 'No products were found');
        return Sucess(req, res, products, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }

}

async function httpAddProduct(req: Request, res: Response) {

    try {

        //NOTA: en este metodo no valido si el objeto product tiene la informacion (campos) correcta ya que de eso se deberia encargar el frontend
        //antes de mandar la peticion al backend
        //TODO: esta URL solo imprime el parametro final (ej: /L001-002) componet para que imprima el formato correcto
        logger.debug(`Initiating operation at ${req.url} route`);
        const newProduct: Product = await addProduct(req.body);
        return Sucess(req, res, newProduct, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }

}

async function httpDeletProduct(req: Request, res: Response) {

    try {

        logger.debug(`Initiating operation at ${req.url} route`);
        const products: Product | null = await deleteProduct(req.params.productCode);
        if (!products) return Error(req, res, 'Product not found'); 
        return Sucess(req, res, products, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }

}

async function httpUpdateProduct(req: Request, res: Response) {

    try {

        logger.debug(`Initiating operation at ${req.url} route`);
        const product: Product | null = await updateProduct(req.body);
        if (!product) return Error(req, res, 'Product not found');
        return Sucess(req, res, product, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }

}

export {
    httpGetProduct,
    httpGetProducts,
    httpAddProduct,
    httpDeletProduct,
    httpUpdateProduct
}