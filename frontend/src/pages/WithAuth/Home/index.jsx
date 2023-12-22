import { useContext } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { cards } from './cards';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';

const Home = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<div className="w-full flex justify-center">
			<Card className="max-w-[1296px]">
				<CardBody className="space-y-10 lg:p-14">
					<header className="flex flex-col justify-between items-start">
						<div className="flex flex-row justify-between w-full items-center mb-5">
							<h2 className="text-primary font-medium text-2xl">Welcome {user.name ? user.name : ''} </h2>
						</div>
					</header>

					<main className="flex flex-wrap justify-center lg:justify-start gap-5">
						{cards.map((card, index) => (
							<Card key={index} className="w-full lg:h-[220px] lg:w-[276px] border border-[#CACDD8] cursor-pointer">
								<CardBody className="flex flex-row lg:flex-col gap-4" onClick={() => navigate(card.navigate)}>
									<div className="">
										<h2 className="font-bold text-lg">{card.title}</h2>
										{(user.roleID === 1 || user.roleID === 2) && (
											<p className="text-[#6F6F78] text-sm font-normal">{card.description}</p>
										)}
										{user.roleID === 3 && (
											<p className="text-[#6F6F78] text-sm font-normal">{card.descriptionOther ?? card.description}</p>
										)}
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
