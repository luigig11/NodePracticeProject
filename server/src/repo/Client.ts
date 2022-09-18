import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from 'typeorm';
import {Length} from 'class-validator';
import { Sale } from './Sale';
import { PreSale } from './PreSale';

@Entity({name: 'Client'})
export class Client {
    
    @PrimaryGeneratedColumn({name: 'clientId', type: 'bigint'})
    clientId: number;

    @Column('varchar', {
        name: 'clientName',
        length: 20,
        nullable: false
    })
    @Length(1, 20)
    clientName: string;

    @Column('varchar', {
        name: 'clientLastName',
        length: 20,
        nullable: false
    })
    @Length(1, 20)
    clientLastName: string;

    @OneToOne(() => Sale, (sale) => sale.client)
    sale: Sale;

    @OneToOne(() => PreSale, (PreSale) => PreSale.client)
    preSale: PreSale;

}