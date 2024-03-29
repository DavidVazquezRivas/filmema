import './Header.css'
import { Link } from 'wouter'

export default function Header() {
	return (
		<header>
			<Link
				to="/"
				className="header-logo"
			>
				<img src="../../../logo.svg" />
			</Link>
			<div className="type-select">
				<button>MOVIES</button>
				<button>SERIES</button>
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
