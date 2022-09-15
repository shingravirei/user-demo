import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { useGetUserById } from '../../users/hooks';

const UserInfo = () => {
	const { id } = useParams();
	const { data: user, isLoading } = useGetUserById(id);

	if (isLoading) return <h1>Loading user info...</h1>;

	return (
		<Box>
			<Heading as='h2' size='md' paddingBottom='16px'>
				User Info
			</Heading>
			{user && (
				<Stack spacing={1}>
					<Text sx={{ textTransform: 'capitalize' }}>
						<Text as='b'>Full Name:</Text> {user.name}{' '}
						{user.lastname}
					</Text>
					<Text>
						<Text as='b'>Email:</Text> {user.email}
					</Text>
					<Text>
						<Text as='b'>Created At:</Text>{' '}
						{new Date(user.createdAt).toLocaleString()}
					</Text>
				</Stack>
			)}
		</Box>
	);
};

export default UserInfo;
