import { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieCardList.css'
import searchMovies from '../../services/searchMovies';

export default function MovieCardList({ params }) {
  const { keyword } = params
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      searchMovies(keyword, 1)
        .then((movies) => {
          setMovies(movies)
        })
  }, []);

  const movieCards = movies.map((movie) => {
    if (movie.poster_path === null) return
    return(
      <MovieCard 
        genreIds={movie.genre_ids}
        key={movie.id}
        id={movie.id}
        posterPath={movie.poster_path}
        release={movie.release_date}
        title={movie.title}
      />
    )
  })
  return (
    <ul className='MovieCardList'>
      {movieCards}
    </ul>
  )
}