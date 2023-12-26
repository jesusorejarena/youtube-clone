/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, CardBody, Spinner, useDisclosure } from '@nextui-org/react';
import { useParams } from 'react-router-dom';
import { getYouTubeVideoId } from '../../../helpers';
import { getVideoByIdAPI } from '../../../services/videos';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useFormik } from 'formik';
import InputTextarea from '../../../components/Commons/TextArea';
import { commentsInitialValues, commentsSchema } from './initialForms';
import AuthContext from '../../../context/AuthContext';
import ModalCreatAccount from '../../../components/Modals/ModalCreatAccount';
import Comment from '../../../components/Comment';
import { createCommentsAPI, getAllCommentsByVideoAPI } from '../../../services/comments';
import { saveHistoryByUserAPI } from '../../../services/history';
import { createOrUpdateLikeAPI, getCountLikesByVideoAPI, getLikeByVideoAPI } from '../../../services/likes';

const VideoDetails = () => {
	const { id } = useParams();

	const { user } = useContext(AuthContext);

	const [video, setVideo] = useState();

	const getVideo = async () => {
		try {
			const response = await getVideoByIdAPI(id);

			setVideo(response.data);
		} catch (error) {
			toast.error(error.response?.message ?? 'Error loading videos');
		}
	};

	const saveHistory = async () => {
		try {
			await saveHistoryByUserAPI(id);
		} catch (error) {
			toast.error(error.response?.message ?? 'Error save history');
		}
	};

	useEffect(() => {
		getVideo();
		user.email.length > 0 && saveHistory();
	}, []);

	const Comments = () => {
		const { isOpen, onOpen, onOpenChange } = useDisclosure();

		const [comments, setComments] = useState([]);
		const [isLoading, setIsLoading] = useState(true);

		const formik = useFormik({
			initialValues: commentsInitialValues,
			validationSchema: commentsSchema,
			onSubmit: async (values) => {
				try {
					const response = await createCommentsAPI({ ...values, id_video: video.id });

					formik.resetForm();

					console.log(response);

					toast.success(response?.data?.message ?? 'Comentario creado correctamente.');

					getComments();
				} catch (error) {
					toast.error(error.response?.message ?? 'Error al crear el comentario.');
				}
			},
		});

		const getComments = async () => {
			try {
				setIsLoading(true);

				const response = await getAllCommentsByVideoAPI(video?.id);

				setComments(response.data);
			} catch (error) {
				toast.error(error.response?.message ?? 'Hubo un error al cargar los comentarios');
			} finally {
				setIsLoading(false);
			}
		};

		useEffect(() => {
			video?.id !== undefined && getComments();
		}, [video?.id]);

		return (
			<div className="mx-auto w-full lg:max-w-[70%]">
				<div className="pt-5" onClick={() => user.token.length === 0 && onOpen()}>
					<h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Deja un comentario</h3>
					<form className="nc-SingleCommentForm mt-5" onSubmit={formik.handleSubmit} noValidate>
						<InputTextarea
							type="text"
							name="comment"
							label="Comentario"
							isRequired
							className="py-3"
							isDisabled={user.token.length === 0}
							onChange={formik.handleChange}
							value={formik.values.comment}
							error={formik.errors.comment}
							touched={formik.touched.comment}
						/>
						<div className="mt-2 space-x-3">
							<Button isDisabled={user.token.length === 0} type="submit">
								Enviar comentario
							</Button>
						</div>
					</form>
				</div>

				{isLoading ? (
					<div className="flex flex-col items-center justify-center pt-10">
						<Spinner size="lg" />
					</div>
				) : (
					<div className="nc-SingleCommentLists space-y-5 pt-10">
						{comments.length > 0 && comments?.map((comment, index) => <Comment key={index} item={comment} />)}
					</div>
				)}

				<ModalCreatAccount
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					close={false}
					title="Para poder hacer un comentario necesitas tener una cuenta"
				/>
			</div>
		);
	};

	const Likes = () => {
		const { isOpen, onOpen, onOpenChange } = useDisclosure();

		const [typeLike, setTypeLike] = useState();
		const [countLikes, setCountLikes] = useState({
			likes: 0,
			dislikes: 0,
		});

		const onSubmit = async (type) => {
			try {
				const response = await createOrUpdateLikeAPI({
					type,
					id: video.id,
				});

				toast.success(response?.message ?? 'Reacción hecha correctamente');

				setTypeLike(response?.type);

				getCountLikeOrDislike();
			} catch (error) {
				toast.error(error.response?.message ?? 'Error al crear la reaccion.');
			}
		};

		const getLikeOrDislike = async () => {
			try {
				const response = await getLikeByVideoAPI(video?.id);

				setTypeLike(response?.data?.type);
			} catch (error) {
				toast.error(error.response?.message ?? 'Hubo un error al cargar la reaccion');
			}
		};

		const getCountLikeOrDislike = async () => {
			try {
				const response = await getCountLikesByVideoAPI(video?.id);

				setCountLikes(response.data);
			} catch (error) {
				toast.error(error.response?.message ?? 'Hubo un error al cargar las reacciones');
			}
		};

		useEffect(() => {
			user.email.length > 0 && video?.id !== undefined && getLikeOrDislike();
			video?.id !== undefined && getCountLikeOrDislike();
		}, [video?.id]);

		return (
			<div className="mx-auto w-full lg:max-w-[70%]">
				<div className="pt-5" onClick={() => user.token.length === 0 && onOpen()}>
					<div className="flex space-x-5">
						<Button
							color="primary"
							isDisabled={user.token.length === 0}
							variant={typeLike !== 'like' || typeLike === '' ? 'bordered' : 'solid'}
							onPress={() => onSubmit(typeLike === 'like' ? 'deleted' : 'like')}
						>
							Like ({countLikes.likes})
						</Button>
						<Button
							color="primary"
							isDisabled={user.token.length === 0}
							variant={typeLike !== 'dislike' || typeLike === '' ? 'bordered' : 'solid'}
							onPress={() => onSubmit(typeLike === 'dislike' ? 'deleted' : 'dislike')}
						>
							Dislike ({countLikes.dislikes})
						</Button>
					</div>
				</div>

				<ModalCreatAccount
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					close={false}
					title="Para poder reaccionar a un video necesitas tener una cuenta"
				/>
			</div>
		);
	};

	return (
		<main className="flex flex-col gap-y-10 items-center justify-center">
			<div className="w-full max-w-[1296px] max-h-[600px]">
				<Card className="max-w-[1296px]">
					<CardBody className="space-y-10 lg:p-14">
						<header className="flex flex-col justify-between items-start p-5 lg:p-0 lg:pb-5">
							<div className="flex flex-row justify-between w-full items-center mb-5">
								<h2 className="text-primary font-medium text-3xl">{video?.title}</h2>
							</div>
						</header>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 py-2">
							<div className="flex justify-center">
								<div className="flex flex-col mb-2 md:mb-0 bg-gray-500 w-[640px] h-[390px]">
									{video?.video && (
										<iframe
											width="640"
											height="390"
											src={`https://www.youtube.com/embed/${getYouTubeVideoId(video.video)}?start=103`}
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

							<div className="flex justify-center">
								<div className="flex flex-col w-full mb-2 md:mb-0 gap-5">
									<Likes />
									<Comments />
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</main>
	);
};

export default VideoDetails;
