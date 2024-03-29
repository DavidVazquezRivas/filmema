import { useState, useEffect } from 'react'
import MovieCardList from '../../components/MovieCardList/MovieCardList'
import Spinner from '../../components/Spinner/Spinner'
import getMovies from '../../services/getMovies'

export default function Discover({ params }) {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getMovies({ page: 1, search: false }).then((movies) => {
			setMovies(movies)
			setLoading(false)
		})
	}, [])

	return <>{loading ? <Spinner /> : <MovieCardList movies={movies} />}</>
}