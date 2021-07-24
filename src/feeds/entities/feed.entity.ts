import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { FeedsInterface } from '../type/feeds.interface';

@Entity('feeds')
export class Feeds {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length:4000})
  data_value: string;

  @Column()
  name: string;
}
