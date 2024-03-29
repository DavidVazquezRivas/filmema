import { useEffect, useState } from 'react'
import './MovieCard.css'
import { API_base_img } from '../../APIconst'

export default function MovieCard({
	genreIds,
	id,
	posterPath,
	release,
	title,
}) {
	// TODO manage genre stuff
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
			</section>
		</a>
	)
}
