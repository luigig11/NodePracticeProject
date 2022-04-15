interface Coin {
    dollar: number;
    cordova: number;
}

export interface Product {
    productCode: string;
    factoryID: string;
    batchCode?: string;
    client?: string;
    productPrice: Coin;
    productSaleDate?: Date;
    realProductPrice?: Coin;
    realClient?: string; 
}