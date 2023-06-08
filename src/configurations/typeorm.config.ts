import { DataSource } from 'typeorm';
import { config } from 'dotenv';
config();

export default new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_NAME || 'api_message',
  logging: false,
  synchronize: false,
  name: 'default',
  entities: ['src/databases/entities/**.entity{.ts,.js}'],
  migrations: ['src/databases/migrations/**/*{.ts,.js}'],
  subscribers: ['src/databases/subscriber/**/*{.ts,.js}'],
});
