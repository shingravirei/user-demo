import { useLocation } from 'react-router-dom';

const NoMatch = (): JSX.Element => {
	const location = useLocation();

	return (
		<h1>
			404 Bro. <code>{location.pathname}</code>
		</h1>
	);
};

export default NoMatch;
