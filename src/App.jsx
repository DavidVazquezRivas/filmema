import { Route } from 'wouter'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/SearchResults'
import Discover from './pages/Discover/Discover'
import { TypeContextProvider } from './context/typeContext'

function App() {
	return (
		<div className='app'>
			<TypeContextProvider>
				<Header />
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
			</TypeContextProvider>
		</div>
	)
}

export default App
