/* eslint-disable react-refresh/only-export-components */
import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
	name: Yup.string().required('Please enter your name'),
	email: Yup.string().email('Invalid email').required('Please enter your email'),
	password: Yup.string()
		.required('Please enter your password')
		.matches(
			/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			'Password must contain at least 8 characters, one uppercase, one number and one special case character'
		),
	confirmPassword: Yup.string()
		.required('Please confirm your password')
		.oneOf([Yup.ref('password')], "Passwords don't match."),
});

export const loginInitialValues = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};
