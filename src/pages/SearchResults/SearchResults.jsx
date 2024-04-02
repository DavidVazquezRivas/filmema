import FilmCardList from '../../components/FilmCardList/FilmCardList'
import Spinner from '../../components/Spinner/Spinner'
import { useFilms } from '../../hooks/useFilms'

export default function SearchResults({ params }) {
	const { keyword, type } = params
	const { loading, films } = useFilms({keyword, search: true, type: type})

	return <>
		{loading 
			? <Spinner /> 
			: <FilmCardList films={films} />}
	</>
}
