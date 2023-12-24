/* eslint-disable react/prop-types */
import { Modal, ModalContent as ModalContentNew, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';

const ModalContent = ({ title, children, childrenFooter, isOpen, onOpenChange, onClose, close = true }) => {
	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			onClose={onClose}
			className="extend"
			classNames={{
				base: '!bg-[#F5F5F6] dark:!bg-[#27272B]',
				closeButton: 'hover:!bg-[#e3e3e3] dark:hover:!bg-[#3e3e41]',
			}}
		>
			<ModalContentNew>
				{(onClose) => (
					<>
						{title && <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>}
						{children && <ModalBody className={`${!title && 'mt-10'}`}>{children}</ModalBody>}
						<ModalFooter>
							{close && (
								<Button color="danger" variant="light" onPress={onClose}>
									Cerrar
								</Button>
							)}
							{childrenFooter}
						</ModalFooter>
					</>
				)}
			</ModalContentNew>
		</Modal>
	);
};

export default ModalContent;
