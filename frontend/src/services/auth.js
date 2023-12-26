import axios from '../config/axios';
import { tokenAuth } from '../config/token';

tokenAuth();

export const loginAPI = async (email, password) => {
	const response = await axios.post('auth/login', { email: email, password: password });

	return response.data;
};

export const signInAPI = async (name, email, password) => {
	const response = await axios.post('auth/signin', { name, email, password });

	return response.data;
};

export const whoisAPI = async () => {
	const response = await axios.get('auth/whois');

	return response.data;
};
