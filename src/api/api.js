const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGU1ZTVkOWZkZGEzZTIyY2M5M2QyMjg5MjZjNTFmZiIsInN1YiI6IjY0N2ExNWZkY2FlZjJkMDBhYTQxZmVkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5G2EkElJ2f_RzxEQ3AS1qf-lpG7nb_E8xcXIDPA30pw'
	}
};

export const fetchToApiTrending = async () => {
	const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
		.then(response => response.json())
		.then(response => { return response })
		.catch(err => console.error(err));
	return data;
}

export const fetchToApiUseName = async (value) => {
	const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=true&language=en-US&page=1`, options)
		.then(response => response.json())
		.then(response => { return response })
		.catch(err => console.error(err));
	return data;
}

export const fetchToApiUseFilmId = async (filmId) => {
	const data = await fetch(`https://api.themoviedb.org/3/movie/${filmId}?language=en-US`, options)
		.then(response => response.json())
		.then(response => { return response })
		.catch(err => console.error(err));
	return data;
}

export const fetchToApiUseFilmIdToSeeCredits = async (filmId) => {
	const data = await fetch(`https://api.themoviedb.org/3/movie/${filmId}/credits?language=en-US`, options)
		.then(response => response.json())
		.then(response => { return response })
		.catch(err => console.error(err));
	return data;

}

export const fetchToApiUseFilmIdToSeeReviews = async (filmId) => {
	const data = await fetch(`https://api.themoviedb.org/3/movie/${filmId}/reviews?language=en-US&page=1`, options)
		.then(response => response.json())
		.then(response => { return response })
		.catch(err => console.error(err));
	return data;

}

