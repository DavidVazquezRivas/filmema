import MovieCard from '../MovieCard/MovieCard'
import './MovieCardList.css'

export default function MovieCardList({ movies }) {
	const movieCards = movies.map((movie) => {
		return (
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

	return <ul className='movie-card-list'>{movieCards}</ul>
}
