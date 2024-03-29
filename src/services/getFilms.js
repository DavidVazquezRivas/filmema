import fetchMovies from './fetchFilms'

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
		result = await fetchMovies({
			keyword: keyword,
			mode: mode,
			page: i,
			type: type,
		})
		result.forEach((movie) =>
			processData(movie, uniqueMovies, searchResult, type)
		)
	}

	return searchResult
}

function processData(data, dataSet, result, type) {
	const propertyMap = {
		movie: {
			title: 'title',
			release_date: 'release_date',
			genre_ids: 'genre_ids',
			id: 'id',
			poster_path: 'poster_path',
		},
		tv: {
			title: 'name',
			release_date: 'first_air_date',
			genre_ids: 'genre_ids',
			id: 'id',
			poster_path: 'poster_path',
		},
	}

	const map = propertyMap[type]

	const { id, poster_path } = data
	if (poster_path != null && !dataSet.has(id)) {
		dataSet.add(id)
		const processedData = {
			genre_ids: data[map.genre_ids],
			id: data[map.id],
			poster_path: data[map.poster_path],
			release_date: data[map.release_date],
			title: data[map.title],
		}

		processedData.release_date = processedData.release_date.split('-')[0]

		result.push(processedData)
	}
}
