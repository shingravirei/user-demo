import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import Navbar from '../Navbar';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
	return (
		<div>
			<QueryClientProvider client={queryClient}>
				<Navbar />
				<Suspense fallback={<p>loading....</p>}>
					{useRoutes(routes)}
				</Suspense>
			</QueryClientProvider>
		</div>
	);
};

export default App;
