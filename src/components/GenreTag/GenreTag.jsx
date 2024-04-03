import { Link } from "wouter";
import './GenreTag.css'

export default function GenreTag({ id, name }) {
  return (
    <Link to='#' className='genre-tag'>
      {name}
    </Link>
  )
}