import { useEffect, useState } from 'react';
import { BtnScroll } from './BtnScroll';
import { СontentСontainer } from './СontentСontainer';
import axios, { AxiosError } from 'axios';
import { IImageFromServer } from './modelsImgFromServer';

export function Gallery() {
	const [page, setPage] = useState<number>(1);
	const [images, setImages] = useState<IImageFromServer[]>([]);

	async function fetchImages() {
		try {
			const response = await axios.get<IImageFromServer[]>(
				`https://picsum.photos/v2/list?page=${page}&limit=25`
			);
			setImages(response.data);
		} catch (e: unknown) {
			const error = e as AxiosError;
			console.log('ERROR: ', error.message);
		}
	}

	useEffect(() => {
		fetchImages();
	}, []);

	function scrollLeft() {
		setPage(page - 1);
	}

	function scrollRight() {
		setPage(page + 1);
	}

	return (
		<div className='wrapper'>
			{!!(page - 1) && (
				<BtnScroll
					data={'<'}
					onClick={() => {
						scrollLeft();
						fetchImages();
						console.log(page);
					}}
				/>
			)}
			<СontentСontainer page={page} images={images} />
			<BtnScroll
				data={'>'}
				onClick={() => {
					scrollRight();
					fetchImages();
					console.log(page);
				}}
			/>
		</div>
	);
}
