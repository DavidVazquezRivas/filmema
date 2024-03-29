import './Header.css'
import { Link } from 'wouter'

export default function Header() {
	return (
		<header className='app-header'>
			<div className='header-left'>
				<Link to='/' className='header-logo'>
					<img src='../../../logo.svg' />
				</Link>
				<Link to='/discover/movies'className='header-button'>DISCOVER</Link>
			</div>
			<div className="type-select">
				<button className='header-button'>MOVIES</button>
				<button className='header-button'>SERIES</button>
			</div>
			<form className="searcher">
				<input
					type="text"
					placeholder="Type title to search"
				></input>
				<button type="submit">
					<i className="fa fa-search"></i>
				</button>
			</form>
		</header>
	)
}
