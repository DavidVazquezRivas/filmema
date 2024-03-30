import { Route } from 'wouter'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/SearchResults'
import Discover from './pages/Discover/Discover'
import { TypeContextProvider } from './context/typeContext'
import { GenresContextProvider } from './context/genresContext'

function App() {
	return (
		<div className='app'>
			<TypeContextProvider>
				<Header />
				<GenresContextProvider>
					<main>
						<Route
							component={Home}
							path='/'
						/>
						<Route
							component={SearchResults}
							path=':type/search/:keyword'
						/>
						<Route 
							component={Discover}
							path=':type/discover'
						/>
					</main>
				</GenresContextProvider>
			</TypeContextProvider>
		</div>
	)
}

export default App
