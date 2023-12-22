/* eslint-disable react/prop-types */
import { Input } from '@nextui-org/react';
import { Close, Search } from '../../../assets/icons/icons';

const InputSearch = ({ label = '', placeholder = '', setPaginationSearch, paginationSearch, getSearch }) => {
	const handleKeyPress = () => {
		if (event.key === 'Enter') {
			event.preventDefault();

			getSearch();
		}
	};

	return (
		<Input
			type="text"
			label={label}
			color="primary"
			isRequired
			labelPlacement="outside"
			value={paginationSearch.search}
			enterKeyHint="search"
			onKeyPress={handleKeyPress}
			onChange={(e) => {
				if (e.target.value === '') {
					getSearch({
						...paginationSearch,
						search: '',
					});
				}
				setPaginationSearch({
					...paginationSearch,
					search: e.target.value,
				});
			}}
			placeholder={placeholder}
			startContent={
				paginationSearch.search.length > 0 && (
					<img
						src={Close}
						alt="Clear"
						className="cursor-pointer"
						onClick={() => {
							setPaginationSearch({
								...paginationSearch,
								search: '',
							});
							getSearch({
								...paginationSearch,
								search: '',
							});
						}}
					/>
				)
			}
			endContent={<img src={Search} alt="Search" className="cursor-pointer" onClick={() => getSearch()} />}
		/>
	);
};

export default InputSearch;
