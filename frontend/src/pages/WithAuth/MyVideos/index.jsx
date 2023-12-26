import { useEffect, useState } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { toast } from 'sonner';
import { getAllMyVideosAPI } from '../../../services/videos';
import { tokenAuth } from '../../../config/token';
import CardVideo from '../../../components/CardVideo';

const MyVideos = () => {
	const [videos, setVideos] = useState([]);

	const getVideos = async () => {
		try {
			tokenAuth();

			const response = await getAllMyVideosAPI();

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
							<h2 className="text-primary font-medium text-3xl">Mis videos</h2>
						</div>
					</header>

					<main className="flex flex-wrap justify-center lg:justify-start gap-5">
						{videos.length > 0 ? (
							videos.map((video, index) => <CardVideo key={index} item={video} size="h-[275px] w-[350px]" />)
						) : (
							<p className="p-3 mb-10 text-2xl font-bold">No has subido videos aun</p>
						)}
					</main>
				</CardBody>
			</Card>
		</div>
	);
};

export default MyVideos;
