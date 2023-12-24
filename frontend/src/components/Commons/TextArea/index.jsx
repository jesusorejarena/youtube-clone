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
	isDisabled = false,
	onChange,
	placeholder = ' ',
	className,
}) => {
	return (
		<Textarea
			type={type}
			id={name}
			name={name}
			label={label}
			isRequired={isRequired}
			isDisabled={isDisabled}
			variant="bordered"
			labelPlacement="outside"
			placeholder={placeholder ?? ' '}
			className={`${className ?? ''}`}
			validationState={error && touched ? 'invalid' : 'valid'}
			classNames={{
				label: `mb-2 ${error && touched ? '!text-[#EF4444]' : '!text-[#6F6F78] dark:!text-white'}`,
				inputWrapper: '!border-[#E4E4E7]',
				input: '!text-black dark:!text-white',
				errorMessage: 'text-xs text-[#EF4444]',
			}}
			onChange={(e) => {
				onChange({
					target: {
						name: e.target.name,
						value: e.target.value,
					},
				});
			}}
			value={value}
			minRows={10}
			errorMessage={error && touched && error}
		/>
	);
};

export default InputTextarea;
