import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createUser, getUserById, getUsers, User } from './api';

export const useGetUsers = () => useQuery(['users'], getUsers);

export const useCreateUser = () => {
	const queryClient = useQueryClient();

	return useMutation(createUser, {
		onSuccess: () => {
			queryClient.invalidateQueries(['users']);
		},
	});
};

export const useGetUserById = (id?: string) => {
	console.log({ id });
	return useQuery(['users', id], () => getUserById(id as string));
};
