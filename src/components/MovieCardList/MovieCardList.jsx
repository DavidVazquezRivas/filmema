import { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieCardList.css'

export default function MovieCardList({ movies }) {
  const movieCards = movies.map((movie) => {
    return(
      <MovieCard 
        Title={movie.Title}
        Released={movie.Released}
        Genre={movie.Genre}
        Poster={movie.Poster}
      />
    )
  })
  return (
    <ul className='MovieCardList'>
      {movieCards}
    </ul>
  )
}