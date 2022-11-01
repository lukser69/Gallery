import { Image } from './Image';
import { IImageFromServer } from '../modelsImgFromServer';

interface IContentContainer {
	page: number;
	images: IImageFromServer[];
}

export function СontentСontainer(props: IContentContainer) {
	return (
		<div className='СontentСontainer'>
			{props.images.map((image) => (
				<Image image={image} key={+image.id} />
			))}
		</div>
	);
}
