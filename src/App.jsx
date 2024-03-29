import { Route } from 'wouter'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/SearchResults'

function App() {
	return (
		<div className="app">
			<Header />
			<main>
				<Route
					component={Home}
					path="/"
				/>
				<Route
					component={SearchResults}
					path="/search/:keyword"
				/>
			</main>
		</div>
	)
}

export default App
