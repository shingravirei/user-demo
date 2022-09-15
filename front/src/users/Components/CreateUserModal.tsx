import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Stack,
	Input,
	Flex,
	useToast,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUser } from '../hooks';

interface CreateUserModalProps {
	isOpen: boolean;
	onClose: () => void;
}

interface FormData {
	name: string;
	lastname: string;
	email: string;
}

const CreateUserModal = ({ isOpen, onClose }: CreateUserModalProps) => {
	const { register, handleSubmit, reset } = useForm<FormData>();
	const createUserMutation = useCreateUser();
	const toast = useToast();

	useEffect(() => {
		if (createUserMutation.isError) {
			toast({
				title: 'Error',
				description: 'Something went wrong, please try again.',
				status: 'error',
				duration: 5000,
				isClosable: true,
				position: 'top',
			});
		}
	}, [createUserMutation.isError, toast]);

	const onSubmit = handleSubmit(async (data) => {
		await createUserMutation.mutate(data);
		reset();
		onClose();
	});

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Add User</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<form onSubmit={onSubmit}>
						<Stack spacing={3} paddingBottom={3}>
							<Input
								{...register('name', { required: true })}
								placeholder='Name'
								size='md'
							/>
							<Input
								{...register('lastname', { required: true })}
								placeholder='Last Name'
								size='md'
							/>
							<Input
								{...register('email', { required: true })}
								type='email'
								placeholder='Email'
								size='md'
							/>
						</Stack>
						<Flex gap={3} justifyContent='end'>
							<Button onClick={onClose} colorScheme='pink'>
								Close
							</Button>
							<Button
								type='submit'
								colorScheme='blue'
								isLoading={createUserMutation.isLoading}
							>
								Add
							</Button>
						</Flex>
					</form>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default CreateUserModal;
