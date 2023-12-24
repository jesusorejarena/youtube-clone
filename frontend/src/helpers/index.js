export const getYouTubeVideoId = (url) => {
	const regex = /[?&]v=([^&]+)/;
	const match = url.match(regex);

	return match && match[1] ? match[1] : null;
};
