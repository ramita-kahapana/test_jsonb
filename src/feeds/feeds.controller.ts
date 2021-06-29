import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { CreateFeedDto } from './dto/create-feed.dto';

@Controller('feeds')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  @Post()
  create(@Body() createFeedDto: CreateFeedDto[]) {
    for (let index = 0; index < 1; index++) {
      this.feedsService.create();
    }
    return 'OK';
  }

  // @Get()
  // findAll() {
  //   return this.feedsService.findAll();
  // }
}
