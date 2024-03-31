import { API_URL, options } from '../constants/APIconst'

export async function getGenresMap() {
  const types = ['movie', 'tv']

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