import { Link } from "react-router-dom"

interface CardMenuProps {
	url: string;
	urlImage: string;
	name: string;
}

export function MenuCard(props: CardMenuProps) {
	return (
		<Link className='link' to={props.url}>
			<div className='cardMenu'>
				<img className='cardMenuImage' src={props.urlImage} alt={props.name} />
				<span className='cardMenuName'>{props.name}</span>
			</div>
		</Link>
	);
}