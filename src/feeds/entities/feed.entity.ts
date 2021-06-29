import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { FeedsInterface } from '../type/feeds.interface';

@Entity('feeds')
export class Feeds {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @Column()
  name: string;
}
