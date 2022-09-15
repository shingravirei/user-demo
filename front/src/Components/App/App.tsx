import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import Navbar from '../Navbar';
import { ChakraProvider, Container } from '@chakra-ui/react';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
	return (
		<div>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider>
					<Container>
						<Navbar />
						<Suspense fallback={<p>loading....</p>}>
							{useRoutes(routes)}
						</Suspense>
					</Container>
				</ChakraProvider>
			</QueryClientProvider>
		</div>
	);
};

export default App;
