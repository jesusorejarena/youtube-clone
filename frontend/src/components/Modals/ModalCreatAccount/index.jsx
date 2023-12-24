/* eslint-disable react/prop-types */
import { Button, Modal, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import ModalLogin from '../../ModalAuth/ModalLogin';
import ModalSignup from '../../ModalAuth/ModalSignup';

const ModalCreatAccount = ({ isOpen, onOpenChange, title }) => {
	const {
		isOpen: isOpenLogin,
		onOpen: onOpenLogin,
		onOpenChange: onOpenChangeLogin,
		onClose: onCloseLogin,
	} = useDisclosure();
	const {
		isOpen: isOpenSignup,
		onOpen: onOpenSignup,
		onOpenChange: onOpenChangeSignup,
		onClose: onCloseSignup,
	} = useDisclosure();

	return (
		<>
			<Modal
				isOpen={isOpen}
				placement="center"
				onOpenChange={onOpenChange}
				className="extend"
				classNames={{
					base: '!bg-[#F5F5F6] dark:!bg-[#27272B]',
					closeButton: 'hover:!bg-[#e3e3e3] dark:hover:!bg-[#3e3e41]',
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 mr-4">{title}</ModalHeader>
							<ModalFooter>
								<div className="flex items-center justify-center w-full space-x-10">
									<Button
										color="primary"
										className="w-full"
										onPress={() => {
											onOpenLogin();
											onClose();
										}}
									>
										Iniciar sesión
									</Button>
									<Button
										variant="bordered"
										className="w-full"
										onPress={() => {
											onOpenSignup();
											onClose();
										}}
									>
										Regístrate
									</Button>
								</div>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>

			<ModalLogin isOpen={isOpenLogin} onOpenChange={onOpenChangeLogin} onClose={onCloseLogin} />
			<ModalSignup isOpen={isOpenSignup} onOpenChange={onOpenChangeSignup} onClose={onCloseSignup} />
		</>
	);
};

export default ModalCreatAccount;
