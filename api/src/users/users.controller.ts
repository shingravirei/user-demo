import {
	BadRequestException,
	Body,
	Controller,
	Get,
	Param,
	Post,
	UseFilters,
} from '@nestjs/common';
import { ApiExceptionFilter } from 'src/utils/api-exception.filter';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	@UseFilters(new ApiExceptionFilter())
	create(@Body() createUserDto: CreateUserDto) {
		return this.usersService.create(createUserDto);
	}

	@Get()
	findAll() {
		return this.usersService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: number) {
		const user = await this.usersService.findOne(id);

		if (!user) {
			throw new BadRequestException("user doesn't exists");
		}

		return user;
	}
}
