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
import { useNavigate } from 'react-router';
import { useGetUsers } from '../hooks';

const UsersList = () => {
	const { data: users, isLoading, isError } = useGetUsers();
	const navigate = useNavigate();

	if (isLoading) return <h1>loading user...</h1>;
	if (isError) return <h1>something went wrong while loading the users</h1>;

	return (
		<Box>
			<TableContainer>
				<Table size='sm'>
					<Thead>
						<Tr>
							<Th>Email</Th>
							<Th>Name</Th>
						</Tr>
					</Thead>
					<Tbody>
						{users?.map((user) => (
							<Tr
								key={user.id}
								onClick={() => navigate(`/users/${user.id}`)}
								sx={{
									cursor: 'pointer',
									'&:hover': { backgroundColor: 'gray.100' },
								}}
							>
								<Td>{user.email}</Td>
								<Td sx={{ textTransform: 'capitalize' }}>
									{user.name}
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default UsersList;
