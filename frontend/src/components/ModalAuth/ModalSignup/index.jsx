/* eslint-disable react/prop-types */
import SignIn from '../../../pages/WithoutAuth/SignIn';
import ModalContent from '../../Modals/ModalContent';

const ModalSignup = ({ isOpen, onOpenChange, onClose }) => {
	return (
		<ModalContent isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose} close={false}>
			<SignIn
				onClose={() => {
					onClose();
				}}
			/>
		</ModalContent>
	);
};

export default ModalSignup;
