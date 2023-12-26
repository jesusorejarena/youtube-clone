/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, Suspense, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import withoutAuth from './WithoutAuth';
import withAuth from './WithAuth';
import Loader from '../components/Loader';
import Layout from '../components/Layout';
import AuthContext from '../context/AuthContext';
import { tokenAuth } from '../config/token';
import Page404 from '../pages/404';

const RouterIndex = () => {
	const { user, restoreSesion } = useContext(AuthContext);

	useEffect(() => {
		tokenAuth();

		restoreSesion();
	}, []);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					{user.email.length > 0
						? withAuth.map((route, index) => {
								return (
									<Fragment key={index}>
										<Route path={route.path} element={<Suspense fallback={<Loader />}>{route.element}</Suspense>} />
										<Route path="*" element={<Page404 />} />
									</Fragment>
								);
						})
						: withoutAuth.map((route, index) => {
								return (
									<Fragment key={index}>
										<Route path={route.path} element={<Suspense fallback={<Loader />}>{route.element}</Suspense>} />
										<Route path="*" element={<Page404 />} />
									</Fragment>
								);
						})}
				</Route>
			</Routes>
		</Router>
	);
};

export default RouterIndex;
