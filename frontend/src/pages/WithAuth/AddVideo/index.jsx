import { Button, Card, CardBody } from '@nextui-org/react';
import { useFormik } from 'formik';
import { videoInitialValues, videoSchema } from './initialForms';
import InputText from '../../../components/Commons/InputText';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { createVideoAPI } from '../../../services/videos';
import { getYouTubeVideoId } from '../../../helpers';

const Login = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: videoInitialValues,
		validationSchema: videoSchema,
		onSubmit: async (values) => {
			try {
				await createVideoAPI(values);

				toast.success('Video guardado correctamente.');

				navigate('/');
			} catch (error) {
				toast.error(error.response.data.message ?? 'Error al subir el video');
			}
		},
	});

	return (
		<main className="flex flex-col gap-y-10 items-center justify-center">
			<div className="w-full max-w-[1296px] max-h-[600px]">
				<Card className="max-w-[1296px]">
					<CardBody className="space-y-10 lg:p-14">
						<header className="flex flex-col justify-between items-start p-5 lg:p-0 lg:pb-5">
							<div className="flex flex-row justify-between w-full items-center mb-5">
								<h2 className="text-primary font-medium text-3xl">Subir video</h2>
							</div>
						</header>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-2">
							<div className="flex justify-center">
								<form onSubmit={formik.handleSubmit} noValidate className="max-w-[400px] w-full">
									<div className="flex flex-col w-full mb-2 md:mb-0 gap-5">
										<InputText
											type="text"
											name="title"
											label="Title video"
											isRequired
											onChange={formik.handleChange}
											value={formik.values.title}
											error={formik.errors.title}
											touched={formik.touched.title}
										/>

										<InputText
											type="text"
											name="video"
											label="Link Video"
											isRequired
											onChange={formik.handleChange}
											value={formik.values.video}
											error={formik.errors.video}
											touched={formik.touched.video}
										/>

										<Button className="mt-5 w-full" color="primary" type="submit">
											Guardar
										</Button>
									</div>
								</form>
							</div>

							<div className="flex justify-center">
								<div className="flex flex-col mb-2 md:mb-0 gap-5 bg-gray-500 w-[640px] h-[390px]">
									{formik.values.video.length > 0 && (
										<iframe
											width="640"
											height="390"
											src={`https://www.youtube.com/embed/${getYouTubeVideoId(formik.values.video)}?start=103`}
											title="	"
											allow="accelerometer; 
									autoplay; 
									clipboard-write; 
									encrypted-media; 
									gyroscope; 
									picture-in-picture; 
									web-share"
										></iframe>
									)}
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</main>
	);
};

export default Login;
