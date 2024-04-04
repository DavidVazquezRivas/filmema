import './FilmInfo.css'
import { API_base_img } from "../../constants/APIconst"
import GenreTag from "../GenreTag/GenreTag"

export default function FilmInfo({ film }) {

  const bannerSize = 'w1280'
  const banner = `${API_base_img}/${bannerSize}/${film.backdropPath}`

	const posterSize = 'w342'
	const poster = `${API_base_img}/${posterSize}/${film.posterPath}`

  const tags = film.genres && film.genres.map((genre) => {
    return <GenreTag key={genre.id} id={genre.id} name={genre.name}/>
  })

  const formatDate = (date) => {
    if (!date) return undefined

    const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
    const [year, month, day] = date.split('-');
    const formattedMonth = months[parseInt(month) - 1];
    return `${formattedMonth} ${parseInt(day)}, ${year}`;
  }

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
    </section>
  )
}