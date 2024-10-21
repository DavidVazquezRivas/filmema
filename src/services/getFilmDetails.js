import { API_URL, options } from "../constants/APIconst"
import { processCardData } from "./processCardData"

export default async function getFilmDetails(id = 550, type = 'movie') {
  const basicDetails = await getBasicDetails(id, type)
  const creditsInfo = await getCreditInfo(id, type)
  const related = await getRelated(id, type)
  
  return {
    ...basicDetails,
    ...creditsInfo,
    ...related
  }
}

async function getBasicDetails (id, type) {
  const propertyMap = {
		movie: {
			backdropPath: 'backdrop_path',
      genres: 'genres',
      originalLanguage: 'original_language',
      overview: 'overview',
      posterPath: 'poster_path',
      productionCompanies: 'production_companies',
      productionCountries: 'production_countries',
      releaseDate: 'release_date',
      runtime: 'runtime',
      status: 'status',
      title: 'title',
      voteAverage: 'vote_average'
		},
		tv: {
			backdropPath: 'backdrop_path',
      genres: 'genres',
      originalLanguage: 'original_language',
      overview: 'overview',
      posterPath: 'poster_path',
      productionCompanies: 'production_companies',
      productionCountries: 'production_countries',
      releaseDate: 'first_air_date',
      runtime: 'episode_run_time',
      status: 'status',
      title: 'name',
      voteAverage: 'vote_average',
		},
	}

  const map = propertyMap[type]

  const res = await fetch(`${API_URL}/${type}/${id}?language=en-US`, options)
  const response = await res.json();

  return {
    id: id,
    backdropPath: response[map.backdropPath],
    genres: response[map.genres], 
    originalLanguage: response[map.originalLanguage], 
    overview: response[map.overview], 
    posterPath: response[map.posterPath], 
    productionCompanies: response[map.productionCompanies], 
    productionCountries: response[map.productionCountries][0] ? response[map.productionCountries][0].iso_3166_1 : undefined, 
    releaseDate: response[map.releaseDate], 
    runtime: type !== 'tv' ? response[map.runtime] : response[map.runtime][0] ? response[map.runtime][0] : 45, 
    seasons: response.seasons ? response.seasons.map(season => ({name: season.name,season_number: season.season_number})) : null,
    status: response[map.status], 
    title: response[map.title], 
    voteAverage: response[map.voteAverage]
  }
}

async function getCreditInfo (id, type) {
  const res = await fetch(`${API_URL}/${type}/${id}/credits?language=en-US`, options)
  const response = await res.json()

  const cast = response.cast.map(({ id, name, profile_path, character }) => ({ id, name, profile_path, character }))
  const crew = response.crew.map(({ id, name, profile_path, job }) => ({ id, name, profile_path, job }))

  return {
    cast: cast,
    crew: crew
  }
}

async function getRelated(id, type) {

  const filmSet = new Set()
  const related = []

  const response = await fetch(`${API_URL}/${type}/${id}/recommendations?language=en-US&page=1`, options)
  const { results } = await response.json()

  results.forEach(film => {
    processCardData(film, filmSet, related, type)
  });

  return {related: related}
}