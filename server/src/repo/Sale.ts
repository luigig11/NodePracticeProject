import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import { Product } from './Product';
import {Client} from './Client'
import { PreSale } from './PreSale';

@Entity({name: 'Sale'})
export class Sale {

    @PrimaryGeneratedColumn({ name: 'saleId', type: 'bigint' })
    saleId!: number;

    @Column('float', {
        name: 'salePriceDollar',
        nullable: false
    })
    salePriceDollar!: number;

    @Column('float', {
        name: 'salePriceCordoba',
        nullable: false
    })
    salePriceCordoba!: number;

    @Column('timestamp', {
        name: 'saleDate',
        nullable: true
    })
    saleDate?: Date;

    @Column({name: 'productId'})
    productId!: number;

    @Column({name: 'clientId'})
    clientId!: number;

    @Column({name: 'presaleId'})
    presaleId!: number;

    @OneToOne(() => Product, (product) => product.sale)
    @JoinColumn({name: 'productId'})
    product!: Product;

    @OneToOne(() => Client, (client) => client.sale)
    @JoinColumn({name: 'clientId'})
    client!: Client;

    @OneToOne(() => PreSale, (preSale) => preSale.sale)
    @JoinColumn({name: 'presaleId'})
    preSale!: PreSale;

}