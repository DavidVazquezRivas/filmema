export function processCardData(data, dataSet, result, type) {
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
	if (poster_path === null || dataSet.has(id)) return
	
	dataSet.add(id)
	const processedData = {
		genre_ids: data[map.genre_ids],
		id: data[map.id],
		poster_path: data[map.poster_path],
		release_date: data[map.release_date],
		title: data[map.title],
	}

	processedData.release_date = processedData.release_date ? processedData.release_date.split('-')[0] : 'unknown'

	result.push(processedData)
}