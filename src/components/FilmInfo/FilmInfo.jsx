import './FilmInfo.css'
import { API_base_img } from '../../constants/APIconst'
import TypeContext from '../../context/typeContext'
import { useContext } from 'react'
import { Link } from 'wouter'
import GenreTag from '../GenreTag/GenreTag'
import Card from '../Card/Card'
import CollapsableList from '../CollapsableList/CollapsableList'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function FilmInfo({ film }) {

  const [type, setType] = useContext(TypeContext)

  const bannerSize = 'w1280'
  const banner = `${API_base_img}/${bannerSize}/${film.backdropPath}`

	const posterSize = 'w342'
	const poster = `${API_base_img}/${posterSize}/${film.posterPath}`

  const tags = film.genres && film.genres.map((genre) => {
    return <GenreTag key={genre.id} id={genre.id} name={genre.name}/>
  })

  // Cast 
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

  const relatedSize = 'w185';

  // Related films
  const related = film.related && film.related.map((relatedFilm) => {
    return (
      <li key={relatedFilm.id}>
        <Link 
          to={`/${type}/details/${relatedFilm.id}`}
        >
          <img src={`${API_base_img}/${relatedSize}/${relatedFilm.poster_path}`}/>
        </Link>
      </li>
    )
  })

  const responsiveSlideSettings = [
    {
      breakpoint: 1000,
      settings: {
          slidesToShow: 5,
          slidesToScroll: 1
      }
    },
    {
      breakpoint: 750,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 1
      }
    },
    {
        breakpoint: 550,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 300,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
];

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
        <article>
          <h3>Related</h3>
          <Slide slidesToScroll={1} slidesToShow={5} indicators={true} responsive={responsiveSlideSettings}>
            {related}
          </Slide>
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