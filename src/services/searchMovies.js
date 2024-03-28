import { APIkey } from "../constants"

export default async function searchMovies(search) {
  try {
    const result = [];
    let page = 1;

    const fetchMovies = async () => {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${APIkey}&s=${search}&page=${page}&type=movie`);
      const data = await response.json();
      return data;
    };

    let data = await fetchMovies();

    while (data.Response === 'True') {
      data.Search.forEach(({ imdbID, Poster, Title, Year }) => {
        result.push({ imdbID, Poster, Title, Year });
      });
      
      page++;
      data = await fetchMovies();
    }

    return result;
  } catch (error) {
    console.error('Error in API key', error);
    return [];
  }
}