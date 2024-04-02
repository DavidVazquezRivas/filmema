import FilmCard from '../FilmCard/FilmCard'
import './FilmCardList.css'

export default function FilmCardList({ films }) {
	const filmCards = films.map((film) => {
		return (
			<FilmCard
				genreIds={film.genre_ids}
				key={film.id}
				id={film.id}
				posterPath={film.poster_path}
				release={film.release_date}
				title={film.title}
			/>
		)
	})

	return <ul className='film-card-list'>{filmCards}</ul>
}
