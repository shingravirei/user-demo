import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } =
	process.env;

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
	type: 'mysql',
	host: MYSQL_HOST,
	port: parseInt(MYSQL_PORT),
	username: MYSQL_USER,
	password: MYSQL_PASSWORD,
	database: MYSQL_DATABASE,
	autoLoadEntities: true,
	synchronize: process.env.NODE_ENV === 'development',
};
