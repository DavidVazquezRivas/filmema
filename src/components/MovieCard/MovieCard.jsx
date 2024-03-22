import { useEffect, useState } from 'react'
import getMovie from '../../services/getMovie'
import './MovieCard.css'

export default function MovieCard({ title }) {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    getMovie(title).then(res => setMovie(res))
  }, [movie])

  return (
    <a className='movie-card' href='#'>
      <img src={movie.Poster} />
      <section className='movie-card-data'>
        <p>{movie.Released}</p>
        <h3>{movie.Title}</h3>
        <span>{movie.Genre}</span>
      </section>
    </a>
  )
}