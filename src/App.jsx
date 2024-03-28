import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard/MovieCard'
import MovieCardList from './components/MovieCardList/MovieCardList'
import searchMovies from './services/searchMovies'

function App() {

  return (
    <div className="app">
      <MovieCardList keyword={'spiderman'}></MovieCardList>
    </ div>
  )
}

export default App
