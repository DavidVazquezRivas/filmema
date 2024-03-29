import { useState, useEffect } from 'react'
import MovieCardList from '../../components/MovieCardList/MovieCardList'
import Spinner from '../../components/Spinner/Spinner'
import getFilms from '../../services/getFilms'

export default function SearchResults({ params }) {
	const { keyword } = params
	const [films, setFilms] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getFilms({ keyword: keyword, page: 1, search: true, type: 'tv'}).then((movies) => {
			setFilms(movies)
			setLoading(false)
		})
	}, [keyword])

	return <>{loading ? <Spinner /> : <MovieCardList movies={films} />}</>
}
