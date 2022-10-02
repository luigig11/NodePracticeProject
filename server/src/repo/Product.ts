import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn} from 'typeorm';
import {Length} from 'class-validator';
import { Batch } from './Batch';
import { Sale } from './Sale';
import { PreSale } from './PreSale';

@Entity({name: 'Product'})
export class Product {

    @PrimaryGeneratedColumn({name: 'productId', type: 'bigint'})
    productId!: number;

    @Column('varchar', {
        name: 'productCode',
        length: 20,
        nullable: false,
        unique: true
    })
    @Length(1, 20)
    productCode!: string;

    @Column('varchar', {
        name: 'factoryId',
        length: 20,
        nullable: false
    })
    @Length(1, 20)
    factoryId!: string;

    @Column('float', {
        name: 'dollarPrice',
        nullable: false
    })
    dollarPrice!: number;

    @Column('float', {
        name: 'cordobaPrice',
        nullable: false
    })
    cordobaPrice!: number;

    //Verificar si puedo borrar este archivo ya que usando el .find({relations: <relation>: true}) puedo popular el campo de la relacion
    @Column({name: 'batchid'})
    batchid!: number;

    @ManyToOne(() => Batch, (batch) => batch.products)
    @JoinColumn({name: 'batchid'})
    batch!: Batch;

    @OneToOne(() => Sale, (sale) => sale.product)
    sale!: Sale;

    @OneToOne(() => PreSale, (preSale) => preSale.product)
    preSale!: PreSale;

}
