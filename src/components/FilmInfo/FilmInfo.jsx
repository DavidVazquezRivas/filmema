import './FilmInfo.css'
import { API_base_img } from '../../constants/APIconst'
import GenreTag from '../GenreTag/GenreTag'
import Card from '../Card/Card'
import CollapsableList from '../CollapsableList/CollapsableList'

export default function FilmInfo({ film }) {

  const bannerSize = 'w1280'
  const banner = `${API_base_img}/${bannerSize}/${film.backdropPath}`

	const posterSize = 'w342'
	const poster = `${API_base_img}/${posterSize}/${film.posterPath}`

  const tags = film.genres && film.genres.map((genre) => {
    return <GenreTag key={genre.id} id={genre.id} name={genre.name}/>
  })

  const profileSize = 'w185'
  const cast = film.cast && film.cast.map((actor) => {
    return (
      <Card 
        href='#'
        image={`${API_base_img}/${profileSize}/${actor.profile_path}`}
        key={actor.id}
        subtitle={actor.character}
        title={actor.name}
      />
    )
  })

  return(
    <section className='filminfo'>
      <header className='filminfo-header'>
        <div className='banner-wrapper'>
          <img src={banner} alt="Film's banner (backdrop)"/>
        </div>
        <aside className='score'>
          Score: <b>{film.voteAverage ? film.voteAverage.toFixed(1) : ''}</b> /10
        </aside>
        <div className='filminfo-header-data'>
          <img src={poster} alt="Film's poster"/>
          <div>
            <h2>{film.title}</h2>
            <ul>
              {tags}
            </ul>
            <time dateTime={film.releaseDate}>
              {formatDate(film.releaseDate)}
            </time>
            <p>Status: {film.status}</p>
          </div>
        </div>
        <p className='overview'>
          {film.overview}
        </p>
      </header>
      <main className='extra-info'>
        <article>
          <h3>Cast</h3>
          <CollapsableList collapsedRows={3} elements={cast} rowHeight={60}/>
        </article>
        <article>
          <div>
            <i className="fa fa-solid fa-film"></i>
            <span>Country: {film.productionCountries}</span>
          </div>
          <div>
            <i className="fa fa-regular fa-clock"></i>
            <span>Runtime: {film.runtime}</span>
          </div>
        </article>
      </main>
    </section>
  )
}

function formatDate (date) {
  if (!date) return undefined

  const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
  const [year, month, day] = date.split('-');
  const formattedMonth = months[parseInt(month) - 1];
  return `${formattedMonth} ${parseInt(day)}, ${year}`;
}