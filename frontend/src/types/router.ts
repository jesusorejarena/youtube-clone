enum WithUser {
	Home = '/',
	AddVideo = '/add-video',
	MyVideos = '/my-videos',
	VideoDetails = '/video/:id',
	History = '/history',
	Popular = '/popular',
}

enum WithoutUser {
	Login = '/login',
	SignIn = '/signin',
	Home = '',
	VideoDetails = '/video/:id',
	Popular = '/popular',
}

export const EnumPaths = {
	WithUser,
	WithoutUser,
};
