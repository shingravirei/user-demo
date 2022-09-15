import ky from 'ky';
const BASE_URL = 'http://localhost:3000';

const usersApi = ky.create({ prefixUrl: BASE_URL });

export interface User {
	id: number;
	name: string;
	lastname: string;
	email: string;
}

export const getUsers = (): Promise<User[]> => usersApi.get('users').json();

export const createUser = (body: Omit<User, 'id'>): Promise<User> =>
	usersApi.post('users', { json: body }).json();

export const getUserById = (id: number): Promise<User> =>
	usersApi.get(`/users/${id}`).json();
