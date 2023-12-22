/* eslint-disable react/prop-types */
import { ChevronDown } from '../../../assets/icons/icons';
import ErrorMessageFild from '../../ErrorMessageFild';

const InputSelect = ({
	options,
	value,
	title,
	isRequired = false,
	name,
	color = null,
	variant = 'border',
	className = '',
	size = 'md',
	firstSelect = true,
	onChange,
	error,
	touched,
	disabled = false,
}) => {
	const classNameSize = size === 'sm' ? 'px-2.5 pr-10 py-1' : 'py-2 px-2.5';
	const classNameArrow = size === 'sm' ? 'top-3' : 'top-4';

	return (
		<>
			{title && (
				<label
					htmlFor={name}
					className={`block mb-2 text-sm font-medium ${error && touched ? 'text-red-500' : 'text-gray-900'}`}
				>
					{title}
					{isRequired && <span className="text-danger select-none"> *</span>}
				</label>
			)}
			<div className="flex relative">
				<select
					id={name}
					name={name}
					className={`text-sm ${
						color && `bg-${color}`
					} rounded-lg focus:ring-primary focus:border-primary block w-full ${
						variant === 'border' ? (error && touched ? 'border-2 border-red-500' : 'border-2 border-primary') : 'py-2.5'
					} appearance-none font-medium ${className} ${classNameSize}`}
					value={value}
					onChange={onChange}
					disabled={disabled}
				>
					{firstSelect && <option value="">Select...</option>}
					{options.map((item, index) => {
						return (
							<option key={index} value={item.value}>
								{item.label}
							</option>
						);
					})}
				</select>
				<div className={`flex absolute right-3 ${classNameArrow}`}>
					<img src={ChevronDown} alt="Select" />
				</div>
			</div>
			{error && touched && <ErrorMessageFild error={error} touched={touched} />}
		</>
	);
};

export default InputSelect;
