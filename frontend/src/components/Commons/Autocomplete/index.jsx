/* eslint-disable react/prop-types */
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDown, CloseBlue } from '../../../assets/icons/icons';
import { Divider } from '@nextui-org/react';
import ErrorMessageFild from '../../ErrorMessageFild';

const Autocomplete = ({
	options,
	value,
	onChange,
	title,
	isRequired = false,
	name,
	error,
	touched,
	disabled = false,
}) => {
	const [showOptions, setShowOptions] = useState(false);
	const [labelValue, setLabelValue] = useState('');
	const [cursor, setCursor] = useState(-1);
	const ref = (useRef < HTMLDivElement) | (null > null);

	useEffect(() => {
		function handleClickOutside() {
			if (ref.current && !ref.current.contains(event.target)) {
				setShowOptions(false);
			}
		}

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [ref]);

	const select = (option) => {
		onChange(option);
		setShowOptions(false);
	};

	const handleChange = (e) => {
		onChange(e);
		setCursor(-1);
		if (!showOptions) {
			setShowOptions(true);
		}
	};

	const filteredOptions = options.filter((option) => {
		return String(option.label).toLowerCase().includes(labelValue?.toLowerCase());
	});

	const moveCursorDown = () => {
		if (cursor < filteredOptions.length - 1) {
			setCursor((c) => c + 1);
		}
	};

	const moveCursorUp = () => {
		if (cursor > 0) {
			setCursor((c) => c - 1);
		}
	};

	const handleNav = (e) => {
		switch (e.key) {
			case 'ArrowUp':
				moveCursorUp();
				break;
			case 'ArrowDown':
				moveCursorDown();
				break;
			case 'Enter':
				if (cursor >= 0 && cursor < filteredOptions.length) {
					select({
						target: {
							name: name,
							value: filteredOptions[cursor]?.value,
						},
					});
				}
				break;
		}
	};

	useEffect(() => {
		const findValueLabel = options.find((options) => options.value === value) ?? { label: value };

		setLabelValue(findValueLabel.label.toString() ?? value);
	}, [options, value]);

	return (
		<div className="relative w-full" ref={ref}>
			{title && (
				<label
					htmlFor={name}
					className={`block mb-2 text-sm font-medium ${error && touched ? 'text-red-500' : 'text-[#6F6F78]'}`}
				>
					{title}
					{isRequired && <span className="text-danger select-none"> *</span>}
				</label>
			)}
			<div className="flex relative z-20">
				<input
					id={name}
					name={name}
					type="text"
					disabled={disabled}
					className={`w-full ${
						error && touched ? 'border-2 border-red-500' : 'border-2 border-primary'
					} px-4 py-1.5 outline-none rounded-lg`}
					value={labelValue}
					onChange={(e) => handleChange(e)}
					onFocus={() => setShowOptions(true)}
					onKeyDown={handleNav}
				/>
				<div className={`flex absolute right-3 ${labelValue?.length > 0 ? 'top-3' : 'top-3.5'}`}>
					{showOptions || labelValue?.length > 0 ? (
						<img
							src={CloseBlue}
							alt="Clear"
							className="cursor-pointer"
							onClick={() => {
								labelValue?.length > 0 &&
									select({
										target: {
											name: name,
											value: '',
										},
									});
								setShowOptions(false);
							}}
						/>
					) : (
						<img src={ChevronDown} alt="Select" className="cursor-pointer" onClick={() => setShowOptions(true)} />
					)}
				</div>
			</div>

			<ul
				className={`absolute w-full rounded-lg bg-white border-2 border-primary max-h-[240px] overflow-y-scroll shadow-lg z-10 ${
					!showOptions && 'hidden'
				} select-none top-[62px] rounded-t-none`}
			>
				{filteredOptions.length > 0 ? (
					filteredOptions.map((option, i, arr) => {
						let className = 'px-4 py-2 hover:bg-gray-100 cursor-pointer';

						if (i === 0 && i === arr.length - 1) className += ' mt-1 rounded-b-md';
						else if (i === 0) className += ' mt-1';
						else if (i === arr.length - 1) className += ' rounded-b-md';

						if (cursor === i) className += ' bg-gray-100';

						return (
							<Fragment key={`${option}${i}`}>
								{i >= 1 && i !== arr.length && <Divider />}

								<li
									className={className}
									onClick={() => {
										select({
											target: {
												name: name,
												value: option.value,
											},
										});
									}}
								>
									{option.label}
								</li>
							</Fragment>
						);
					})
				) : (
					<li className="px-4 py-2 text-gray-500">No results</li>
				)}
			</ul>
			{error && touched && <ErrorMessageFild error={error} touched={touched} />}
		</div>
	);
};

export default Autocomplete;
