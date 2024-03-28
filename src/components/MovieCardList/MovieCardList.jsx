import { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieCardList.css'

export default function MovieCardList({ movies }) {
  const movieCards = movies.map((movie) => {
    if (movie.Poster === 'N/A') return;
    return(
      <MovieCard 
        id={movie.imdbID}
        Poster={movie.Poster}
        Title={movie.Title}
        Year={movie.Year}
      />
    )
  })
  return (
    <ul className='MovieCardList'>
      {movieCards}
    </ul>
  )
}