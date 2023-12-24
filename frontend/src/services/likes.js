import axios from '../config/axios';

export const createOrUpdateLikeAPI = async ({ type, id }) => {
	const response = await axios.post(`likes/${id}`, { type });

	return response.data;
};

export const getLikeByVideoAPI = async (id) => {
	const response = await axios.get(`likes/${id}`);

	return response.data;
};

export const getCountLikesByVideoAPI = async (id) => {
	const response = await axios.get(`likes/get-likes-by-video/${id}`);

	return response.data;
};
