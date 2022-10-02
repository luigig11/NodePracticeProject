import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {Length} from 'class-validator';
import { Product } from './Product';

@Entity({name: "Batch"})
export class Batch {
    @PrimaryGeneratedColumn({name: 'batchid', type: 'bigint'})
    batchid!: number;

    @Column('varchar', {
        name: 'batchCode',
        length: 20,
        nullable: false,
        unique: true
    })
    @Length(1, 20)
    batchCode!: string;

    @Column('int', {
        name: 'amountProducts',
        nullable: false
    })
    amountProducts!: number;

    @Column('timestamp', {
        name: 'batchDateStart',
        nullable: true
    })
    batchDateStart?: Date;

    @Column('timestamp', {
        name: 'batchDateEnd',
        nullable: true
    })
    batchDateEnd?: Date;

    @OneToMany(() => Product, (product) => product.batch)
    products!: Product[]
}