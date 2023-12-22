import { Outlet } from 'react-router-dom';

import Nav from '../Nav';

const Layout = () => {
	return (
		<main className="flex flex-col gap-y-10 min-h-screen">
			<Nav />

			<div className="px-4 lg:px-10 flex-1">
				<Outlet />
			</div>
		</main>
	);
};

export default Layout;
