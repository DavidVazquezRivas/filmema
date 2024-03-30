import { useState, useContext } from 'react'
import TypeContext from '../../context/typeContext'
import './Header.css'
import { Link, useLocation } from 'wouter'

export default function Header() {
	const [keyword, setKeyword] = useState('')
	const [location, navigate] = useLocation()
	const [type, setType] = useContext(TypeContext)

	const handleChange = event => {
		setKeyword(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()
		navigate(`/${type}/search/${keyword}`)
	}

	const setMovie = () => {
		setType('movie')
		updateLocation('/movie')
	}

	const setTv = () => {
		setType('tv')
		updateLocation('/tv')
	}

	const updateLocation = (newTypePath) => {
    const newPath = location.replace(/\/(movie|tv)/, newTypePath);
    navigate(newPath);
  };

	return (
		<header className='app-header'>
			<Link to={`/${type}/discover`} className='header-logo'>
				<img src='../../../logo.svg' />
			</Link>
			<div className="type-select">
				<button className='header-button' onClick={setMovie}>MOVIES</button>
				<button className='header-button' onClick={setTv}>SERIES</button>
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
