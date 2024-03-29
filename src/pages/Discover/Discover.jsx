import { useState, useEffect } from 'react'
import MovieCardList from '../../components/MovieCardList/MovieCardList'
import Spinner from '../../components/Spinner/Spinner'
import getFilms from '../../services/getFilms'

export default function Discover({ params }) {
	const [films, setFilms] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getFilms({ page: 1, search: false, type: 'tv' }).then((movies) => {
			setFilms(movies)
			setLoading(false)
		})
	}, [])

	return <>{loading ? <Spinner /> : <MovieCardList movies={films} />}</>
}