/* eslint-disable react-refresh/only-export-components */
import * as Yup from 'yup';

export const videoSchema = Yup.object().shape({
	title: Yup.string().required('Please enter your title video'),
	video: Yup.string().required('Please enter your link video'),
});

export const videoInitialValues = {
	title: '',
	video: '',
};
