import { IsNumber, IsOptional } from 'class-validator';

export default class Pagination {
	@IsOptional()
	@IsNumber()
	limit = 20;

	@IsOptional()
	@IsNumber()
	offset = 0;
}
