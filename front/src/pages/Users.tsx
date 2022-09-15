import { useGetUsers } from '../users/hooks';

const Users = () => {
	const { data: users, isLoading, isError } = useGetUsers();

	if (isLoading) return <h1>loading user...</h1>;
	if (isError) return <h1>something went wrong while loading the users</h1>;

	return (
		<div>
			<h1>Users</h1>
			<div>
				{users?.map((user) => (
					<p key={user.email}>{user.name}</p>
				))}
			</div>
		</div>
	);
};

export default Users;
