import {
	Box,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { useGetUsers } from '../hooks';

const UsersList = () => {
	const { data: users, isLoading, isError } = useGetUsers();

	if (isLoading) return <h1>loading user...</h1>;
	if (isError) return <h1>something went wrong while loading the users</h1>;

	return (
		<Box>
			<TableContainer>
				<Table size='sm'>
					<Thead>
						<Tr>
							<Th>Name</Th>
							<Th>Last Name</Th>
							<Th>Email</Th>
						</Tr>
					</Thead>
					<Tbody>
						{users?.map((user) => (
							<Tr key={user.id}>
								<Td sx={{ textTransform: 'capitalize' }}>
									{user.name}
								</Td>
								<Td sx={{ textTransform: 'capitalize' }}>
									{user.lastname}
								</Td>
								<Td>{user.email}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default UsersList;
