/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { EnumPaths } from '../types/router';

const Home = lazy(() => import('../pages/WithAuth/Home'));
const AddVideo = lazy(() => import('../pages/WithAuth/AddVideo'));
const MyVideos = lazy(() => import('../pages/WithAuth/MyVideos'));
const VideoDetails = lazy(() => import('../pages/WithAuth/VideoDetails'));
const History = lazy(() => import('../pages/WithAuth/History'));
const Popular = lazy(() => import('../pages/WithAuth/Popular'));

const withAuth = [
	{
		path: EnumPaths.WithUser.Home,
		name: 'Home',
		element: <Home />,
	},
	{
		path: EnumPaths.WithUser.AddVideo,
		name: 'AddVideo',
		element: <AddVideo />,
	},
	{
		path: EnumPaths.WithUser.MyVideos,
		name: 'MyVideos',
		element: <MyVideos />,
	},
	{
		path: EnumPaths.WithUser.VideoDetails,
		name: 'VideoDetails',
		element: <VideoDetails />,
	},
	{
		path: EnumPaths.WithUser.History,
		name: 'History',
		element: <History />,
	},
	{
		path: EnumPaths.WithUser.Popular,
		name: 'Popular',
		element: <Popular />,
	},
];

export default withAuth;
