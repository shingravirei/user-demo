import { Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = (): JSX.Element => (
	<nav>
		<Flex gap='16px' margin='16px 0'>
			<Link as={RouterLink} to='/'>
				Home
			</Link>

			<Link as={RouterLink} to='/users'>
				Users
			</Link>
		</Flex>
	</nav>
);

export default Navbar;
