import { useQuery } from '@tanstack/react-query';
import { getUsers } from './api';

export const useGetUsers = () => useQuery(['users'], getUsers);
