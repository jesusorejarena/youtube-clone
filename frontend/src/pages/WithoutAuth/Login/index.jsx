import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import { useContext } from 'react';
import { useFormik } from 'formik';
import { loginInitialValues, loginSchema } from './initialForms';
import { loginAPI } from '../../../services/auth';
import InputText from '../../../components/Commons/InputText';
import AuthContext from '../../../context/AuthContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	const { login } = useContext(AuthContext);

	const formik = useFormik({
		initialValues: loginInitialValues,
		validationSchema: loginSchema,
		onSubmit: async (values) => {
			try {
				const response = await loginAPI(values.email, values.password);

				if (response.success) {
					await login({
						id: response.user.id,
						name: response.user.name,
						email: response.user.email,
						token: response.token,
					});
				}
			} catch (error) {
				toast.error(error.response.data.message ?? 'Error login');
			}
		},
	});

	return (
		<main className="flex flex-col gap-y-10 items-center justify-center">
			<div className="w-full max-w-[460px] max-h-[600px]">
				<Card className="p-6">
					<CardHeader className="pb-4 pt-2 px-4 flex-col items-center">
						<h3 className="font-bold text-2xl">Login</h3>
					</CardHeader>
					<CardBody className="overflow-visible py-2">
						<form onSubmit={formik.handleSubmit} noValidate>
							<div className="flex flex-col w-full mb-2 md:mb-0 gap-5">
								<InputText
									type="email"
									name="email"
									label="Email"
									isRequired
									onChange={formik.handleChange}
									value={formik.values.email}
									error={formik.errors.email}
									touched={formik.touched.email}
								/>

								<InputText
									type="password"
									name="password"
									label="Password"
									isRequired
									onChange={formik.handleChange}
									value={formik.values.password}
									error={formik.errors.password}
									touched={formik.touched.password}
								/>

								<div className="flex flex-col gap-3 mt-5">
									<Button color="primary" type="submit">
										Login
									</Button>

									<p className="text-center">or</p>

									<Button color="primary" variant='bordered' onPress={() => navigate('/signin')}>
										Sign in
									</Button>
								</div>
							</div>
						</form>
					</CardBody>
				</Card>
			</div>
		</main>
	);
};

export default Login;
