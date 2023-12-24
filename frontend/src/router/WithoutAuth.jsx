/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { EnumPaths } from '../types/router';

const Login = lazy(() => import('../pages/WithoutAuth/Login'));
const SignIn = lazy(() => import('../pages/WithoutAuth/SignIn'));
const Home = lazy(() => import('../pages/WithAuth/Home'));
const VideoDetails = lazy(() => import('../pages/WithAuth/VideoDetails'));
const Popular = lazy(() => import('../pages/WithAuth/Home'));

const withoutAuth = [
	{
		path: EnumPaths.WithoutUser.Login,
		name: 'Login',
		element: <Login />,
	},
	{
		path: EnumPaths.WithoutUser.SignIn,
		name: 'SignIn',
		element: <SignIn />,
	},
	{
		path: EnumPaths.WithUser.Home,
		name: 'Home',
		element: <Home />,
	},
	{
		path: EnumPaths.WithUser.VideoDetails,
		name: 'VideoDetails',
		element: <VideoDetails />,
	},
	{
		path: EnumPaths.WithUser.Popular,
		name: 'Popular',
		element: <Popular />,
	},
];

export default withoutAuth;
