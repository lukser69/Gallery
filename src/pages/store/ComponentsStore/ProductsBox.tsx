import { IProductStore } from "../modelsProductsStore"
import { ProductStore } from "./ProductStore";

interface productsBoxProps {
	products: IProductStore[];
}

export function ProductsBox({ products }: productsBoxProps) {
	return (
		<div className='productsBox'>
			{products.map((product) => (
				<ProductStore product={product} key={product.id}/>
			))}
		</div>
	);
}