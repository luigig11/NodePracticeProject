import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import { Sale } from './Sale';
import {Client} from './Client'
import { Product } from './Product';
// import {Length} from 'class-validator';

@Entity({name: 'PreSale'})
export class PreSale {

    @PrimaryGeneratedColumn({name: 'presaleId', type: 'bigint'})
    presaleId: number;

    @Column('float', {
        name: 'preSalePrice',
        nullable: false
    })
    preSalePrice: number;

    @OneToOne(() => Sale, (sale) => sale.preSale)
    sale: Sale;

    @OneToOne(() => Client, (client) => client.preSale)
    @JoinColumn()
    client: Client;

    @OneToOne(() => Product, (product) => product.preSale)
    @JoinColumn()
    product: Product;
}