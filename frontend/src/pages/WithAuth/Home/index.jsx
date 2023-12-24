import { useEffect, useState } from 'react';
import { Button, Card, CardBody } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { getYouTubeVideoId } from '../../../helpers';
import { getAllVideosAPI } from '../../../services/videos';

const Home = () => {
	const navigate = useNavigate();

	const [videos, setVideos] = useState([]);

	const getVideos = async () => {
		try {
			const response = await getAllVideosAPI();

			setVideos(response.data);
		} catch (error) {
			toast.error(error.response.data.message ?? 'Error loading videos');
		}
	};

	useEffect(() => {
		getVideos();
	}, []);

	return (
		<div className="w-full flex justify-center">
			<Card className="max-w-[1296px]">
				<CardBody className="space-y-10 lg:p-14">
					<header className="flex flex-col justify-between items-start p-5 lg:p-0 lg:pb-5">
						<div className="flex flex-row justify-between w-full items-center mb-5">
							<h2 className="text-primary font-medium text-3xl">Ultimos videos</h2>
						</div>
					</header>

					<main className="flex flex-wrap justify-center lg:justify-start gap-5">
						{videos.map((video, index) => (
							<Card key={index} className="h-[275px] w-[350px] border border-[#CACDD8] cursor-pointer">
								<CardBody className="flex flex-row lg:flex-col gap-4" onClick={() => navigate(`/video/${video.id}`)}>
									<div className="">
										<div className="flex justify-between items-center mb-3">
											<h2 className="font-bold text-lg">{video.title}</h2>
											<Button color="primary" size="sm" onClick={() => navigate(`/video/${video.id}`)}>
												Ver detalles
											</Button>
										</div>
										<iframe
											width="320"
											height="200"
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
									</div>
								</CardBody>
							</Card>
						))}
					</main>
				</CardBody>
			</Card>
		</div>
	);
};

export default Home;
