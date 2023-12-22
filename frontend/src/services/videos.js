import axios from '../config/axios';

export const createVideoAPI = async (values) => {
	const response = await axios.post('video', values);

	return response.data;
};

export const getAllVideosAPI = async () => {
	const response = await axios.get('video/get-all');

	return response.data;
};

export const getVideoByIdAPI = async (id) => {
	const response = await axios.get(`video/get-by-id/${id}`);

	return response.data;
};
