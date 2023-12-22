/* eslint-disable react-refresh/only-export-components */
import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Please enter your email'),
	password: Yup.string().required('Please enter your password'),
});

export const loginInitialValues = {
	email: '',
	password: '',
};
