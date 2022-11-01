import { Link } from 'react-router-dom';

export function Navigation() {
	return (
		<nav className='nav'>
			<Link className='nameSite link' to='/'>
				Resume
			</Link>

			<span>
				<Link className='link' to='/'>
					Menu
				</Link>
				<Link className='link' to='/gallery'>
					Gallery
				</Link>
				<Link className='link' to='/about'>
					About
				</Link>
			</span>
		</nav>
	);
}
