import './Searcher.css'
import { useState, useContext } from 'react'
import { useLocation } from 'wouter'
import TypeContext from '../../../context/typeContext'

export default function Searcher() {
	const [keyword, setKeyword] = useState('')
	const [isInputVisible, setIsInputVisible] = useState(false)
	const [location, navigate] = useLocation()
	const [type, setType] = useContext(TypeContext)

	const handleChange = event => {
		setKeyword(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()
		if (keyword !== '') navigate(`/${type}/search/${keyword}`)
	}

	const toggleInput = () => {
		setIsInputVisible(prev => !prev)
	}

	const input = (
		<input
			type='text'
			placeholder='Type title to search'
			value={keyword}
			onChange={handleChange}
			className={isInputVisible ? 'visible' : ''}
		/>
	)

	const searchButton = (
		<button type='submit' className={isInputVisible ? 'visible' : ''}>
			<i className='fa fa-search'></i>
		</button>
	)

	return (
		<form className='searcher' onSubmit={handleSubmit}>
			{input}
			<button type='button' onClick={toggleInput}>
				<i className={`fa ${isInputVisible ? 'fa-times' : 'fa-search'}`}></i>
			</button>
			{searchButton}
		</form>
	)
}