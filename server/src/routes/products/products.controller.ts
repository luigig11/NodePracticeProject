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

function httpGetProduct(req: Request, res: Response) {
    try {

        logger.debug(`Initiating operation at ${req.url} route`);
        const product: Product | undefined = getProduct(req.params.productCode);
        if (!product) return Error(req, res, 'Product not found');
        return Sucess(req, res, product, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }

}

function httpGetProducts(req: Request, res: Response) {
    try {
        
        logger.debug(`Initiating operation at ${req.url} route`);
        const products: Product[] = getProducts();
        if(!products) return Error(req, res, 'No products were found');
        return Sucess(req, res, products, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }

}

function httpAddProduct(req: Request, res: Response) {

    try {

        //NOTA: en este metodo no valido si el objeto product tiene la informacion (campos) correcta ya que de eso se deberia encargar el frontend
        //antes de mandar la peticion al backend
        //TODO: esta URL solo imprime el parametro final (ej: /L001-002) componet para que imprima el formato correcto
        logger.debug(`Initiating operation at ${req.url} route`);
        const newProduct: Product = addProduct(req.body);
        return Sucess(req, res, newProduct, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }

}

function httpDeletProduct(req: Request, res: Response) {

    try {

        logger.debug(`Initiating operation at ${req.url} route`);
        if (!getProduct(req.params.productCode)) 
            return Error(req, res, 'Product not found');
        const products: Product = deleteProduct(req.params.productCode);
        return Sucess(req, res, products, 200);

    } catch (error) {
        //TODO: volver al articolo de semaText para crear un errorHandler
        return Error(req, res, error);
    }

}

function httpUpdateProduct(req: Request, res: Response) {

    try {

        logger.debug(`Initiating operation at ${req.url} route`);
        if (!getProduct(req.body.productCode)) 
            return Error(req, res, 'Product not found');
        const product: Product = updateProduct(req.body)!;
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