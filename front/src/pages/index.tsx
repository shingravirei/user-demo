import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/users');
	}, [navigate]);

	return null;
};

export default Home;
