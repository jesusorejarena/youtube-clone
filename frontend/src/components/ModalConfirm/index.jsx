/* eslint-disable react/prop-types */
import { Button, Modal, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';

const ModalConfirm = ({ isOpen, onOpenChange, button }) => {
	return (
		<Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange} className="extend">
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							{button.header ? button.header : ' Are you sure you want to delete it?'}
						</ModalHeader>
						<ModalFooter>
							{button.noButtons ? (
								''
							) : (
								<>
									<Button color="danger" onPress={onClose}>
										Close
									</Button>
									<Button
										color="default"
										className="text-danger"
										onPress={() => {
											button.onClick();
											onClose();
										}}
									>
										{button.title}
									</Button>
								</>
							)}
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default ModalConfirm;
