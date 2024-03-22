import { useEffect, useState } from 'react'
import getMovie from '../../services/getMovie'
import './MovieCard.css'

export default function MovieCard({ Title, Released, Genre, Poster}) {

  return (
    <a className='movie-card' href='#'>
      <img src={Poster} />
      <section className='movie-card-data'>
        <p>{Released}</p>
        <h3>{Title}</h3>
        <span>{Genre}</span>
      </section>
    </a>
  )
}