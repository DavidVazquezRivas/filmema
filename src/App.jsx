import { useEffect, useState } from 'react'
import { Route } from 'wouter'
import './App.css'
import MovieCard from './components/MovieCard/MovieCard'
import MovieCardList from './components/MovieCardList/MovieCardList'
import searchMovies from './services/searchMovies'

function App() {

  return (
    <div className="app">
      <Route 
        component={MovieCardList}
        path='/search/:keyword'
      />
    </ div>
  )
}

export default App
