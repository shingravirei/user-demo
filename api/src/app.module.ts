import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleOptions } from 'src/config';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
	imports: [TypeOrmModule.forRoot(typeOrmModuleOptions), UsersModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
	constructor(dataSource: DataSource) {}
}
