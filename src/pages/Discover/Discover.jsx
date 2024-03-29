import MovieCardList from '../../components/MovieCardList/MovieCardList'
import Spinner from '../../components/Spinner/Spinner'
import { useFilms } from '../../hooks/useFilms'

export default function Discover({ params }) {
	const {loading, films} = useFilms({search: false, type: 'movie'})

	return <>
		{loading 
			? <Spinner /> 
			: <MovieCardList movies={films} />}
	</>
}