import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feeds } from '../feeds/entities/feed.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'test_jsonb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    Feeds,
  ],
})
export class DatabaseModule {}
