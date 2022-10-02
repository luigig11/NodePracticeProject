import {DataSource} from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

import {Batch} from './../repo/Batch';
import {Client} from './../repo/Client';
import {PreSale} from './../repo/PreSale';
import {Product} from './../repo/Product';
import {Sale} from './../repo/Sale';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'Afrodita',
    //este campo "sincronize" es para que la BD se cree al iniciar la conexion en TypeORM.
    //Como yo voy a trabajar en una BD existente voy a dejar el campo en false
    //TypeORM recomienda no usar este campo en true y en su lugar usar migraciones para manejar modificaciones en la definicion de la data
    synchronize: false,
    logging: false,
    entities: [Batch, Client, PreSale, Product, Sale]
});