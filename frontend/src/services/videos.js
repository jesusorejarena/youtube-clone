import axios from '../config/axios';
import { tokenAuth } from '../config/token';

tokenAuth();

export const createVideoAPI = async (values) => {
	const response = await axios.post('video', values);

	return response.data;
};

export const getAllVideosAPI = async () => {
	const response = await axios.get('video/get-all');

	return response.data;
};

export const getAllMyVideosAPI = async () => {
	const response = await axios.get('video/get-all-my-videos');

	return response.data;
};

export const getVideoByIdAPI = async (id) => {
	const response = await axios.get(`video/get-by-id/${id}`);

	return response.data;
};

export const getAllPopularVideosAPI = async () => {
	const response = await axios.get('video/get-all-popular-videos');

	return response.data;
};
