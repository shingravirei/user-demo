import { AddIcon } from '@chakra-ui/icons';
import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import CreateUserModal from '../users/Components/CreateUserModal';
import UsersList from '../users/Components/UsersList';

const Users = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<div>
			<CreateUserModal isOpen={isOpen} onClose={onClose} />
			<Flex gap='16px' align='center' paddingBottom='16px'>
				<Button
					onClick={onOpen}
					leftIcon={<AddIcon />}
					size='sm'
					colorScheme='blue'
				>
					Add User
				</Button>
			</Flex>
			<UsersList />
		</div>
	);
};

export default Users;
