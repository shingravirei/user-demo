import { MemoryRouter } from 'react-router';
import Navbar from './Navbar';
import { test, expect } from 'vitest';
import { render, screen } from '../../test/utils';

test('Navbar', () => {
	render(
		<MemoryRouter>
			<Navbar />
		</MemoryRouter>,
	);

	expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
	expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
});
