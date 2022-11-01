import { IImageFromServer } from '../modelsImgFromServer';

interface ImageProps {
	image: IImageFromServer;
}

export function Image(porps: ImageProps) {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<img
				style={{
					width: '80%',
					height: '95%',
					border: '1px solid #ccc',
					borderRadius: '8px',
				}}
				src={porps.image.download_url}
				alt='img'
			/>
		</div>
	);
}
