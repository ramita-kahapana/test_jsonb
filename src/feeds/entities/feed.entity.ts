import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { FeedsInterface } from '../type/feeds.interface';

@Entity('feeds')
export class Feeds {
  @ObjectIdColumn()
  id: number;

  @Column({
    type: 'jsonb',
  })
  data: FeedsInterface;

  @Column()
  name: string;
}
