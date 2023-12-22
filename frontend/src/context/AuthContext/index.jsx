/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { defaultAuthContextData } from './default';
import { whoisAPI } from '../../services/auth';
import tokenAuth from '../../config/token';

const AuthContext = createContext(defaultAuthContextData);

export const AuthProvider = ({ children }) => {
	const [state, setState] = useState({ ...defaultAuthContextData });

	const login = async (user) => {
		localStorage.setItem('token', user.token);
		setState({ ...state, user: user });
	};

	const restoreSesion = async () => {
		try {
			tokenAuth();

			const response = await whoisAPI();

			const token = localStorage.getItem('token');

			if (token) setState({ ...state, user: { ...response, token } });
			else logout();
		} catch (error) {
			logout();
		}
	};

	const logout = async () => {
		localStorage.clear();
		setState({ ...defaultAuthContextData });
	};

	const contextValue = {
		...state,
		login: async (user) => await login(user),
		logout: async () => await logout(),
		restoreSesion: async () => await restoreSesion(),
	};

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
