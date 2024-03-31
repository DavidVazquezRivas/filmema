import './Searcher.css'
import { useState, useContext } from 'react'
import { useLocation } from 'wouter'
import TypeContext from '../../../context/typeContext'

export default function Searcher() {
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

	return (
		<form className='searcher' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Type title to search'
				value={keyword}
				onChange={handleChange}
			></input>
			<button type='submit'>
				<i className='fa fa-search'></i>
			</button>
		</form>
	)
}
