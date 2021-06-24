import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EntitySchema } from 'typeorm';

type Entity = Function | string | EntitySchema<any>;
export const createTestConfiguration = (
  entities: Entity[],
): TypeOrmModuleOptions => ({
  type: 'mongodb',
  database: 'test_jsonb',
  entities,
  host: 'localhost',
  port: 27017,
  dropSchema: true,
  synchronize: true,
  logging: false,
});