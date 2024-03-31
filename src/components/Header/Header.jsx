import { useState, useContext } from 'react'
import TypeContext from '../../context/typeContext'
import './Header.css'
import { Link } from 'wouter'
import TypeButton from './TypeButton/TypeButton'
import Searcher from './Searcher/Searcher'

export default function Header() {
	const [active, setActive] = useState(0)
	const [type, setType] = useContext(TypeContext)

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
