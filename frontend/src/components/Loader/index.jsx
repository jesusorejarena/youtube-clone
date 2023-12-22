import { Spinner } from '@nextui-org/react';

const Loader = () => {
	return (
		<div className="flex items-center w-full h-full justify-center gap-x-10 absolute top-0 left-0">
			<Spinner color="white" size="lg" />
		</div>
	);
};

export default Loader;
