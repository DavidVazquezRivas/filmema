import './MovieCard.css'
import { API_base_img } from '../../constants/APIconst'
import GenreContext from '../../context/genresContext'
import TypeContext from '../../context/typeContext'
import { useContext } from 'react'
import { Link } from 'wouter'

export default function MovieCard({
	genreIds,
	id,
	posterPath,
	release,
	title,
}) {

	const [type, setType] = useContext(TypeContext)

	const genreMap = useContext(GenreContext)
	const genre = genreIds.map(id => genreMap[id]).join(' / ')

	const posterSize = 'w500'
	const poster = `${API_base_img}/${posterSize}/${posterPath}`

	return (
		<Link
			className='movie-card'
			to={`/${type}/details/${id}`}
		>
			<img src={poster} />
			<section className='movie-card-data'>
				<p>{release}</p>
				<h3>{title}</h3>
				<span>{genre}</span>
			</section>
		</Link>
	)
}
