import { processCardData } from './processCardData'
import { API_URL, options } from '../constants/APIconst'

export default async function getMovies({
	keyword = '',
	page,
	search,
	type = 'movie',
}) {
	const pageSize = 5
	const mode = search ? 'search' : 'discover'

	const searchResult = []
	const uniqueMovies = new Set()

	let APIpage = (page - 1) * pageSize + 1

	let result
	for (let i = APIpage; i < APIpage + pageSize; i++) {
		result = await fetchFilms({ keyword: keyword, mode: mode, page: i, type: type })
		result.forEach((movie) =>
			processCardData(movie, uniqueMovies, searchResult, type)
		)
	}

	return searchResult
}

async function fetchFilms({ keyword, mode, page, type }) {

	let query = `${API_URL}/${mode}/${type}?language=en-US&page=${page}&sort_by=popularity.desc`
	if (mode === 'search') query += `&query=${keyword}`

	const response = await fetch(query, options)
	const { results } = await response.json()
	return results
}