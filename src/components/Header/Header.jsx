import { useState } from 'react'
import './Header.css'
import { Link, useLocation } from 'wouter'

export default function Header() {
	const [keyword, setKeyword] = useState('')
	const [location, navigate] = useLocation()

	const handleChange = event => {
		setKeyword(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()

		navigate(`/search/${keyword}`)
	}

	return (
		<header className='app-header'>
			<div className='header-left'>
				<Link to='/' className='header-logo'>
					<img src='../../../logo.svg' />
				</Link>
				<Link to='/discover'className='header-button'>DISCOVER</Link>
			</div>
			<div className="type-select">
				<button className='header-button'>MOVIES</button>
				<button className='header-button'>SERIES</button>
			</div>
			<form className="searcher" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Type title to search"
					value={keyword}
					onChange={handleChange}
				></input>
				<button type="submit">
					<i className="fa fa-search"></i>
				</button>
			</form>
		</header>
	)
}
