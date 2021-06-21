import { Module } from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { FeedsController } from './feeds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feeds } from './entities/feed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feeds])],
  controllers: [FeedsController],
  providers: [FeedsService]
})
export class FeedsModule {}
