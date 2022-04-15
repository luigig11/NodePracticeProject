import { Product } from '../../interfaces/product';
import {getProduct, getProducts, addProduct, deleteProduct, updateProduct} from '../../model/products.model';

function httpGetProduct(req:any, res: any) {
    const product: Product = getProduct(req.params.productCode)!;
    return res.status(200).json(product);
}

function httpGetProducts(_ :any, res: any) {
    const products: Product[] = getProducts();
    return res.status(200).json(products);
}

function httpAddProduct(req:any, res: any) {
    const newProduct: Product[] = addProduct(req.body);
    return res.status(200).json(newProduct);
}

function httpDeleProduct(req: any, res: any) {
    const products: Product[] = deleteProduct(req.params.productCode);
    return res.status(200).json(products);
}

function httpUpdateProduct(req:any, res: any) {
    const product: Product = updateProduct(req.body)!;
    return res.status(200).json(product);
}

export {
    httpGetProduct,
    httpGetProducts,
    httpAddProduct,
    httpDeleProduct,
    httpUpdateProduct
}