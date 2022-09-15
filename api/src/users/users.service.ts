import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) {}

	create(createUserDto: CreateUserDto) {
		return this.usersRepository.save(createUserDto);
	}

	findAll() {
		return this.usersRepository.find();
	}

	findOne(id: number) {
		return this.usersRepository.findOneBy({ id });
	}
}
