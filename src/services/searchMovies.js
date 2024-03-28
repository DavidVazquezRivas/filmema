import { API_URL, API_KEY } from "../APIconst"

export default async function searchMovies(keyword, page) {

  const pageSize = 5;

  const fetchMovies = async (page) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    };
    
    const response = await fetch(`${API_URL}/search/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&query=${keyword}`, options);
    const { results } = await response.json();
    return results
  }

  const searchResult = []

  let APIpage = (page - 1) * pageSize + 1

  let result
  for (let i = APIpage; i < APIpage + pageSize; i++) {
    result = await fetchMovies(i)
    result.forEach(({genre_ids, id, poster_path,release_date, title}) => {
      searchResult.push({genre_ids, id, poster_path,release_date, title})
    });
  }

  console.log(searchResult)
  return searchResult.filter(movie => movie.poster_path !== null)
}