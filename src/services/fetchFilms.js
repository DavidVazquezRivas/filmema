import { API_URL, API_KEY } from '../constants/APIconst'

export default async function fetchFilms({ keyword, mode, page, type }) {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${API_KEY}`,
		},
	}

	let query = `${API_URL}/${mode}/${type}?language=en-US&page=${page}&sort_by=popularity.desc`
	if (mode === 'search') query += `&query=${keyword}`

	const response = await fetch(query, options)
	const { results } = await response.json()
	return results
}
