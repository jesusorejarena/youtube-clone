import axios from '../config/axios';

export const createCommentsAPI = async (values) => {
	const response = await axios.post('comments', values);

	return response.data;
};

export const getAllCommentsByVideoAPI = async (id) => {
	const response = await axios.get(`comments/get-by-video/${id}`);

	return response.data;
};
