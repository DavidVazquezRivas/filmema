import { Route } from 'wouter'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/SearchResults'
import Discover from './pages/Discover/Discover'

function App() {
	return (
		<div className='app'>
			<Header />
			<main>
				<Route
					component={Home}
					path='/'
				/>
				<Route
					component={SearchResults}
					path='/search/:keyword'
				/>
				<Route 
					component={Discover}
					path='/discover'
				/>
			</main>
		</div>
	)
}

export default App
