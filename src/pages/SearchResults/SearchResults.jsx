import { useState, useEffect } from 'react'
import MovieCardList from '../../components/MovieCardList/MovieCardList'
import Spinner from '../../components/Spinner/Spinner'
import getFilms from '../../services/getFilms'
import { useFilms } from '../../hooks/useFilms'

export default function SearchResults({ params }) {
	const { keyword } = params
	const {loading, films} = useFilms({keyword, search: true, type: 'movie'})

	return <>
		{loading 
			? <Spinner /> 
			: <MovieCardList movies={films} />}
	</>
}
