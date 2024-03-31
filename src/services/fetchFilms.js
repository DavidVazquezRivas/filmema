import { API_URL, options } from '../constants/APIconst'

export default async function fetchFilms({ keyword, mode, page, type }) {

	let query = `${API_URL}/${mode}/${type}?language=en-US&page=${page}&sort_by=popularity.desc`
	if (mode === 'search') query += `&query=${keyword}`

	const response = await fetch(query, options)
	const { results } = await response.json()
	return results
}
