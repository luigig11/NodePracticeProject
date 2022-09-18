import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne} from 'typeorm';
import {Length} from 'class-validator';
import { Batch } from './Batch';
import { Sale } from './Sale';
import { PreSale } from './PreSale';

@Entity({name: 'Product'})
export class Product {

    @PrimaryGeneratedColumn({name: 'productId', type: 'bigint'})
    productId: number;

    @Column('varchar', {
        name: 'productCode',
        length: 20,
        nullable: false
    })
    @Length(1, 20)
    productCode: string;

    @Column('varchar', {
        name: 'factoryId',
        length: 20,
        nullable: false
    })
    @Length(1, 20)
    factoryId: string;

    @Column('float', {
        name: 'dollarPrice',
        nullable: false
    })
    dollarPrice: number;

    @Column('float', {
        name: 'cordobaPrice',
        nullable: false
    })
    cordobaPrice: number;

    @ManyToOne(() => Batch, (batch) => batch.products)
    batch: Batch;

    @OneToOne(() => Sale, (sale) => sale.product)
    sale: Sale;

    @OneToOne(() => PreSale, (preSale) => preSale.product)
    preSale: PreSale;

}
