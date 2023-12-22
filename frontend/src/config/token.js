import axios from './axios';

const tokenAuth = (token) => {
	const tokenStorage = token ? token : localStorage.getItem('token');

	if (tokenStorage) {
		axios.defaults.headers['Authorization'] = `Bearer ${tokenStorage}`;
	} else {
		delete axios.defaults.headers['Authorization'];
	}
};

export default tokenAuth;
