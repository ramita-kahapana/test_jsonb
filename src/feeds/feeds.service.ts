import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomInt } from 'crypto';
import { RandomUtil } from 'src/random.unit';
import { getMongoManager, Repository } from 'typeorm';
import { Feeds } from './entities/feed.entity';
import { FeedsInterface } from './type/feeds.interface';

@Injectable()
export class FeedsService {
  constructor(
    @InjectRepository(Feeds)
    private readonly feedRepository: Repository<Feeds>,
  ) {}
  async create() {
    const manager = getMongoManager();
    const data: FeedsInterface = {
      title: RandomUtil.randomString(10),
      description: RandomUtil.randomString(10),
      location: RandomUtil.randomString(10),
      lng: randomInt(100),
      lat: randomInt(100),
      userId: randomInt(100),
      name: RandomUtil.randomString(10),
      profilePicture: RandomUtil.randomString(10),
      videoUrl: RandomUtil.randomString(10),
      images: RandomUtil.randomString(10),
      mediatype: randomInt(100),
      imagePaths: RandomUtil.randomString(10),
      feedsComment: RandomUtil.randomString(10),
      url: RandomUtil.randomString(10),
      tags: ['A', 'B', 'C'],
      likeDislike: {
        likes: randomInt(100),
        dislikes: randomInt(100),
        userAction: randomInt(100),
        translations: {
          th: { label: RandomUtil.randomString(10) },
          en: { label: RandomUtil.randomString(10) },
        },
      },
      isdeleted: randomInt(2) ? true : false,
      commentCount: RandomUtil.randomString(10),
      multiMedia: [
        {
          name: RandomUtil.randomString(10),
          description: RandomUtil.randomString(10),
          url: 'http://www.youtube.com/embed/mPhboJR0Llc',
          mediatype: randomInt(100),
          likeCount: 2,
          place: 0,
          createAt: '0001-01-01T00:00:00',
        },
      ],
    };
    const dto = new Feeds();
    dto.data = data;
    dto.name = RandomUtil.randomString(5);
    // return await this.feedRepository.save(dto);
   return await manager.save(dto)
  }

  // findAll() {
  //   return `This action returns all feeds`;
  // }
}
