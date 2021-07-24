import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feeds } from '../feeds/entities/feed.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      port: 1521,
      host: '202.129.205.53',
      username: 'system',
      password: 'AppMan1234',
      sid: 'XE',
      database:'APPMAN',
      autoLoadEntities: true,
      synchronize: true,
    }),
    Feeds,
  ],
})
export class DatabaseModule {}
