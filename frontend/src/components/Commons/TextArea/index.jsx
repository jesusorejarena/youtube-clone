/* eslint-disable react/prop-types */
import { Textarea } from '@nextui-org/react';

const InputTextarea = ({
	label,
	name,
	value,
	type = 'text ',
	error,
	touched,
	isRequired = false,
	onChange,
	...props
}) => {
	return (
		<Textarea
			type={type}
			id={name}
			name={name}
			label={label}
			isRequired={isRequired}
			variant="bordered"
			labelPlacement="outside"
			placeholder=" "
			validationState={error && touched ? 'invalid' : 'valid'}
			classNames={{ inputWrapper: [props.disabled ? '' : 'border-2 border-primary '], label: 'text-[#6F6F78]' }}
			onChange={onChange}
			value={value.toString()}
			errorMessage={error && touched && error}
			{...props}
		/>
	);
};

export default InputTextarea;
