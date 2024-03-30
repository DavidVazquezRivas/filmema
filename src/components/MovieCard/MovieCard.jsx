import './MovieCard.css'
import { API_base_img } from '../../APIconst'
import GenreContext from '../../context/genresContext'
import { useContext } from 'react'

export default function MovieCard({
	genreIds,
	id,
	posterPath,
	release,
	title,
}) {

	const genreMap = useContext(GenreContext)
	const genre = genreIds.map(id => genreMap[id]).join(' / ')

	const posterSize = 'w500'
	const poster = `${API_base_img}/${posterSize}/${posterPath}`

	return (
		<a
			className="movie-card"
			href="#"
		>
			<img src={poster} />
			<section className="movie-card-data">
				<p>{release}</p>
				<h3>{title}</h3>
				<span>{genre}</span>
			</section>
		</a>
	)
}
