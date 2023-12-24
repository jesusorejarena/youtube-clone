/* eslint-disable react/prop-types */
import Login from '../../../pages/WithoutAuth/Login';
import ModalContent from '../../Modals/ModalContent';

const ModalLogin = ({ isOpen, onOpenChange, onClose }) => {
	return (
		<ModalContent isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose} close={false}>
			<Login
				onClose={() => {
					onClose();
				}}
			/>
		</ModalContent>
	);
};

export default ModalLogin;
