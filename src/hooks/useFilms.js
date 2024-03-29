import getFilms from '../services/getFilms'
import { useState, useEffect } from 'react'

export function useFilms ({ keyword = '', search, type = 'movie'}) {
  const [films, setFilms] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getFilms({ keyword: keyword, page: 1, search: search, type: type}).then((movies) => {
			setFilms(movies)
			setLoading(false)
		})
	}, [keyword])

  return {loading, films}
}