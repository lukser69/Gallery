import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { SearchStore } from './ComponentsStore/SearchStore'
import { IProductStore } from './modelsProductsStore'
import { ProductsBox } from './ComponentsStore/ProductsBox';
import './Store.css'

export function Store() {
  const [products, setProducts] = useState<IProductStore[]>([])

  async function fetchProducts() {
    try {
      const response = await axios.get<IProductStore[]>(
				'https://fakestoreapi.com/products/'
			);
			setProducts(response.data);
    } catch (e: unknown) {
      const error = e as AxiosError;
			console.log('ERROR: ', error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  
  return(
    <div className="wrapperStore">
      <div className='storeContainer'>
        <SearchStore />
        <ProductsBox products={products}/>
      </div>
    </div>
  )
}