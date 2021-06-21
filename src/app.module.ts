import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { FeedsModule } from './feeds/feeds.module';

@Module({
  imports: [DatabaseModule,FeedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
