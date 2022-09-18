import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import { Product } from './Product';
import {Client} from './Client'
import { PreSale } from './PreSale';

@Entity({name: 'Sale'})
export class Sale {

    @PrimaryGeneratedColumn({name: 'saleId', type: 'bigint'})
    saleId: number;

    @Column('float', {
        name: 'salePrice',
        nullable: false
    })
    salePrice: number;

    @OneToOne(() => Product, (product) => product.sale)
    @JoinColumn()
    product: Product;

    @OneToOne(() => Client, (client) => client.sale)
    @JoinColumn()
    client: Client;

    @OneToOne(() => PreSale, (preSale) => preSale.sale)
    @JoinColumn()
    preSale: PreSale;

}