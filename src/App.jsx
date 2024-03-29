import { useEffect, useState } from 'react'
import { Route } from 'wouter'
import './App.css'
import MovieCard from './components/MovieCard/MovieCard'
import MovieCardList from './components/MovieCardList/MovieCardList'
import searchMovies from './services/searchMovies'

function App() {

  return (
    <div className="app">
      <header>
        <div className='type-select'>
          <button>MOVIES</button>
          <button>SERIES</button>
        </div> 
        <form className='searcher'>
          <input type='text' placeholder='Type title to search'></input>
          <button type='submit'><i class="fa fa-search"></i></button>
        </form>
      </header>
      <main>
        <Route 
          component={MovieCardList}
          path='/search/:keyword'
        />
      </main>
    </ div>
  )
}

export default App
