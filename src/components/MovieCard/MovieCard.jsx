import { useEffect, useState } from 'react'
import getMovie from '../../services/getMovie'
import './MovieCard.css'

export default function MovieCard({ id, Poster, Title, Year }) {

  return (
    <a className='movie-card' href='#'>
      <img src={Poster} />
      <section className='movie-card-data'>
        <p>{Year}</p>
        <h3>{Title}</h3>
      </section>
    </a>
  )
}