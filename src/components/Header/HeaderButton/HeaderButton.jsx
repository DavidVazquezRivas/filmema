import './HeaderButton.css'
import { useContext } from 'react'
import { types } from '../../../constants/const'
import TypeContext from '../../../context/typeContext'
import { useLocation } from 'wouter'

export default function HeaderButton({ active, children, number, setActive }) {
	const buttonClass = 'header-button' + (active === number ? ' active' : '')

	const [type, setType] = useContext(TypeContext)
	const [location, navigate] = useLocation()

	const handleClick = () => {
		if (location.includes('/details')) return
		setActive(number)
		if (type != types[number]) {
			// prevent unnecesary navigate and state change (check on docs if useState(React) and useLocation(wouter) already does the comprobation)
			const newPath = location.replace(`/${type}`, `/${types[number]}`)
			setType(types[number])
			navigate(newPath)
		}
	}

	return (
		<button onClick={handleClick} className={buttonClass}>
			{children}
		</button>
	)
}
