import { DataSource, DataSourceOptions } from 'typeorm';
import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { Reservation } from 'src/entities/Reservation.entity';

import { Room } from 'src/entities/Room.entity';

import { User } from 'src/entities/User.entity';
import { Role } from 'src/entities/Role.entity';
import { Testimonial } from 'src/entities/Testimonial.entity';

dotenvConfig({ path: '.env' });

const sslConfig = process.env.DB_SSL ? JSON.parse(process.env.DB_SSL) : null;

const config = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  synchronize: true,
  logging: false,
  // dropSchema: true,
  ssl: sslConfig,

};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
