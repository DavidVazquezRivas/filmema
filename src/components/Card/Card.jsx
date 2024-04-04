import './Card.css'
import { Link } from 'wouter'

export default function Card({ href, image, title, subtitle }) {
  return (
  <Link to={href} className='card'>
    <img src={image} />
    <h4>{title}</h4>
    <h5>{subtitle}</h5>
  </Link>
  )
}