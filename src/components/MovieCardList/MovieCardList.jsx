import { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieCardList.css'
import searchMovies from '../../services/searchMovies';

export default function MovieCardList({ params }) {
  const { keyword } = params
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const arr = await searchMovies(keyword, 1);
        setMovies(arr);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    fetchMovies();
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