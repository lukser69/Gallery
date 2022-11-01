import { MenuCard } from './ComponentsMenu/MenuCard';
import './Menu.css';

export function Menu() {
	return (
		<div className='wrapper'>
			<div className='menuContainer'>
				<MenuCard
					url='/gallery'
					urlImage='https://img04.rl0.ru/afisha/e904x508p0x0f1006x575q85i/s5.afisha.ru/mediastorage/f5/b2/0f857f5bed8f472198949495b2f5.jpg'
					name='Gallery'
				/>
			</div>
		</div>
	);
}
