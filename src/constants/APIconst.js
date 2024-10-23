export const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const API_URL = 'https://api.themoviedb.org/3'

export const API_base_img = 'http://image.tmdb.org/t/p/'

export const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${API_KEY}`,
	},
}