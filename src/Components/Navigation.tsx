import { Link } from 'react-router-dom';

export function Navigation() {
	return (
		<nav className='nav'>
			<Link className='nameSite link' to='/'>
				Resume
			</Link>

			<span>
				<Link className='link' to='/'>
					Gallery
				</Link>
				<Link className='link' to='/about'>
					About
				</Link>
			</span>
		</nav>
	);
}
