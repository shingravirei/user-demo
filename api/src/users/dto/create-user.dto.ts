import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
	@IsString()
	name: string;

	@IsString()
	lastname: string;

	@IsEmail()
	email: string;
}
