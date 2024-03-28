import { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieCardList.css'
import searchMovies from '../../services/searchMovies';

export default function MovieCardList({ keyword }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const arr = await searchMovies(keyword);
        setMovies(arr);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    fetchMovies();
  }, []);

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