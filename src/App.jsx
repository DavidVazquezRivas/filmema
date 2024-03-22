import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard/MovieCard'

function App() {
  return (
    <div className="movies">
      <MovieCard title='Star Wars'></MovieCard>
      <MovieCard title='Barbie'></MovieCard>
    </ div>
  )
}

export default App
