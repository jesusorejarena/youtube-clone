/* eslint-disable react/prop-types */
import { Button, Card, CardBody, Chip } from '@nextui-org/react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { getYouTubeVideoId } from '../../helpers';

const CardVideo = ({ item, popularity = false, history = false, size = 'h-[275px] w-[350px] ' }) => {
	const navigate = useNavigate();

	return (
		<Card className={`${size} border border-[#CACDD8] cursor-pointer`}>
			<CardBody className="flex flex-row lg:flex-col gap-4" onClick={() => navigate(`/video/${item.id}`)}>
				<div className="">
					<div className="flex justify-between items-center mb-3">
						<div className="">
							<h2 className="font-bold text-lg">{item.title}</h2>
							{popularity && format(new Date(item.created), 'MM/dd/yyyy') === format(new Date(), 'MM/dd/yyyy') && (
								<Chip size="sm" color="danger">
									En tendencia
								</Chip>
							)}
							{history && <h6 className="text-xs">Visto el {format(item.created, 'dd-MM-yyyy hh:mm aa')}</h6>}
						</div>
						<Button color="primary" size="sm" onClick={() => navigate(`/video/${item.id}`)}>
							Ver detalles
						</Button>
					</div>
					<iframe
						width="320"
						height="200"
						src={`https://www.youtube.com/embed/${getYouTubeVideoId(item.video)}?start=103`}
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
	);
};

export default CardVideo;
