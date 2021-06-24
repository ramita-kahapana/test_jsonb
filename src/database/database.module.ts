import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feeds } from '../feeds/entities/feed.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://root:example@localhost:27017/test_jsonb?authSource=admin',
      port: 27017,
      database: 'test_jsonb',
      autoLoadEntities: true,
      synchronize: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    }),
    Feeds,
  ],
})
export class DatabaseModule {}
