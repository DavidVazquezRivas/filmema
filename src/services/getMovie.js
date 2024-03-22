import { APIkey } from "../constants"

export default function getMovie(title) {
  return fetch(`http://www.omdbapi.com/?apikey=${APIkey}&t=${title}`)
    .then(res => res.json())
    .then(data => {
      const { Title, Released, Genre, Poster } = data
      return { Title, Released, Genre, Poster }
    })
}