import { useState, useContext } from 'react'
import TypeContext from '../../context/typeContext'
import './Header.css'
import { Link } from 'wouter'
import TypeButton from './TypeButton/TypeButton'
import Searcher from './Searcher/Searcher'

export default function Header() {
	const [type, setType] = useContext(TypeContext)
	const [active, setActive] = useState(type === 'movie' ? 0 : 1)

	return (
		<header className='app-header'>
			<Link to={`/${type}/discover`} className='header-logo'>
				<img src='../../../logo.webp' />
			</Link>
			<nav className='type-select'>
				<TypeButton active={active} number={0} setActive={setActive}>
					MOVIES
				</TypeButton>
				<TypeButton active={active} number={1} setActive={setActive}>
					SERIES
				</TypeButton>
			</nav>
			<Searcher />
		</header>
	)
}
