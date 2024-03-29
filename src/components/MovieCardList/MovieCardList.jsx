import { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieCardList.css'
import searchMovies from '../../services/searchMovies';
import Spinner from '../Spinner/Spinner';

export default function MovieCardList({ params }) {
  const { keyword } = params
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      searchMovies(keyword, 1)
        .then((movies) => {
          setMovies(movies)
          setLoading(false)
        })
  }, [keyword]);

  const movieCards = movies.map((movie) => {
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
    <>
    {
      loading
      ? <Spinner />
      :
      <ul className='MovieCardList'>
      {movieCards}
      </ul>
    }
    </>
    
  )
}