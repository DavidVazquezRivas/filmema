import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard/MovieCard'
import MovieCardList from './components/MovieCardList/MovieCardList'
import searchMovies from './services/searchMovies'

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const arr = await searchMovies('spiderman');
        setMovies(arr);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className="app">
      <MovieCardList movies={movies}></MovieCardList>
    </ div>
  )
}

export default App
