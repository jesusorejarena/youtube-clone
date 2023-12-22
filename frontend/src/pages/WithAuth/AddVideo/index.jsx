import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import { useFormik } from 'formik';
import { loginInitialValues, loginSchema } from './initialForms';
import InputText from '../../../components/Commons/InputText';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { createVideoAPI } from '../../../services/videos';

const Login = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: loginInitialValues,
		validationSchema: loginSchema,
		onSubmit: async (values) => {
			try {
				await createVideoAPI(values);

				toast.success('Video guardado correctamente.');
			} catch (error) {
				toast.error(error.response.data.message ?? 'Error al subir el video');
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
									type="text"
									name="name"
									label="Title video"
									isRequired
									onChange={formik.handleChange}
									value={formik.values.name}
									error={formik.errors.name}
									touched={formik.touched.name}
								/>

								<InputText
									type="text"
									name="link"
									label="Link Video"
									isRequired
									onChange={formik.handleChange}
									value={formik.values.link}
									error={formik.errors.link}
									touched={formik.touched.link}
								/>

								<div className="flex flex-col gap-3 mt-5">
									<Button color="primary" type="submit">
										Login
									</Button>

									<p className="text-center">or</p>

									<Button color="primary" variant="bordered" onPress={() => navigate('/signin')}>
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
