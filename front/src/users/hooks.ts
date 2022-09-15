import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createUser, getUsers, User } from './api';

export const useGetUsers = () => useQuery(['users'], getUsers);

export const useCreateUser = () => {
	const queryClient = useQueryClient();

	return useMutation(createUser, {
		onSuccess: () => {
			queryClient.invalidateQueries(['users']);
		},
	});
};
