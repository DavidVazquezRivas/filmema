import { API_URL, API_KEY } from '../APIconst'

export async function getGenresMap() {
  const types = ['movie', 'tv']

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				`Bearer ${API_KEY}`,
		},
	}

  const map = {}

  for (const type of types) {
    const res = await fetch(`${API_URL}/genre/${type}/list?language=en`, options)
    const response = await res.json()
    const genres = response.genres
  
    genres.forEach(({id, name}) => {
      if (!map.hasOwnProperty(id)) {
        map[id] = name
      }
    });
  }

  return map
}