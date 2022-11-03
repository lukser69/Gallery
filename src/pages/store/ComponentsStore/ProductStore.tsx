import { IProductStore } from "../modelsProductsStore";

interface ProductProps {
	product: IProductStore;
	key: number;
}

export function ProductStore( {product}: ProductProps ) {
  return(
    <div className="productStore">
      <img className="productStoreImg" src={product.image} alt="product.title" />
      <p>{product.title}</p>
      <p className="productStorePrice">{product.price}$</p>
    </div>
  )
}