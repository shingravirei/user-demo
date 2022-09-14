import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('tiny'));
	}

	app.useGlobalPipes(new ValidationPipe({ transform: true }));

	await app.listen(3000);
}
bootstrap();
