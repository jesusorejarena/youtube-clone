/* eslint-disable react-refresh/only-export-components */
import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
	name: Yup.string().required('Please enter your title video'),
	link: Yup.string().required('Please enter your link video'),
});

export const loginInitialValues = {
	name: '',
	link: '',
};
