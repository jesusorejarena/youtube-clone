import axios from '../config/axios';

export const saveHistoryByUserAPI = async (id) => {
	const response = await axios.post(`history`, { id });

	return response.data;
};

export const getHistoryByUserAPI = async () => {
	const response = await axios.get(`history`);

	return response.data;
};
