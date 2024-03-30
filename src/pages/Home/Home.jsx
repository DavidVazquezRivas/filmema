import { useEffect } from 'react'
import { useLocation } from 'wouter'

export default function Home() {
	
	const [location, navigate] = useLocation()
	useEffect(() => {
		navigate('/movie/discover')
	})
}