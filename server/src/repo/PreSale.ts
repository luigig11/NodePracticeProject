import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import { Sale } from './Sale';
import {Client} from './Client'
import { Product } from './Product';
// import {Length} from 'class-validator';

@Entity({name: 'PreSale'})
export class PreSale {

    @PrimaryGeneratedColumn({ name: 'presaleId', type: 'bigint' })
    presaleId!: number;

    @Column('float', {
        name: 'preSalePriceDollar',
        nullable: false
    })
    preSalePriceDollar!: number;

    @Column('float', {
        name: 'preSalePriceCordoba',
        nullable: false
    })
    preSalePriceCordoba!: number;

    @Column({name: 'clientId'})
    clientId!: number;

    @Column({name: 'productId'})
    productId!: number;

    @OneToOne(() => Sale, (sale) => sale.preSale)
    sale!: Sale;

    @OneToOne(() => Client, (client) => client.preSale)
    @JoinColumn({name: 'clientId'})
    client!: Client;

    @OneToOne(() => Product, (product) => product.preSale)
    @JoinColumn({name: 'productId'})
    product!: Product;
}