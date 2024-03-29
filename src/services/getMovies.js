import fetchMovies from './fetchFilms'

export default async function getMovies({ keyword = '', page, search }) {
  const pageSize = 5;
  const mode = search ? 'search' : 'discover';

  const searchResult = [];
  const uniqueMovies = new Set();

  let APIpage = (page - 1) * pageSize + 1;

  let result;
  for (let i = APIpage; i < APIpage + pageSize; i++) {
    result = await fetchMovies({keyword: keyword, mode: mode, page: i, type: 'movie'});
    result.forEach(({ genre_ids, id, poster_path, release_date, title }) => {
      if (poster_path != null && !uniqueMovies.has(id)) {
        uniqueMovies.add(id)
        searchResult.push({ genre_ids, id, poster_path, release_date, title });
      }
    });
  }

  return searchResult;
}