/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Input } from '@nextui-org/react';
import { EyeIcon, EyeSlashIcon } from '../../../assets/icons/icons';

const InputText = ({ label, name, value, type = 'text ', error, touched, isRequired = false, onChange, ...props }) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<Input
			type={type === 'password' ? (isVisible ? 'text' : 'password') : type}
			id={name}
			name={name}
			label={label}
			isRequired={isRequired}
			variant="bordered"
			labelPlacement="outside"
			placeholder=" "
			validationState={error && touched ? 'invalid' : 'valid'}
			classNames={{ inputWrapper: [props.disabled ? '' : 'border-2 border-primary'], label: 'text-[#6F6F78]' }}
			onChange={onChange}
			value={value}
			errorMessage={error && touched && error}
			endContent={
				type === 'password' && (
					<button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)}>
						{isVisible ? (
							<img src={EyeSlashIcon} className="text-2xl text-default-400 pointer-events-none" alt="Hide" />
						) : (
							<img src={EyeIcon} className="text-2xl text-default-400 pointer-events-none" alt="Show" />
						)}
					</button>
				)
			}
			{...props}
		/>
	);
};

export default InputText;
