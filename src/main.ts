import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express = require('express');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  await app.listen(3000);
}
bootstrap();
