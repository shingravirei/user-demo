import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	Unique,
	CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
@Unique(['email'])
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	lastname: string;

	@Column()
	email: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;
}
