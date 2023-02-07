import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../actions/ProductActions'
import ProductsCard from './ProductsCard'
import { useSelector } from 'react-redux'

const Products = () => {
 
   const products = useSelector((state)=>state.allProducts.products)
    const dispatch = useDispatch();
 

    useEffect(() => {
      const productFetchApi = async () => {
        const response = await axios
        .get("https:/fakestoreapi.com/products")
        .catch((err) => {
            console.log("err",err);

        });

        dispatch(setProducts(response.data))
    };
        productFetchApi();
    },[dispatch])

  return (
    <div>
      <div className='grid grid-cols-2 gap-3'>
        <ProductsCard key={products.id}/>
      </div>
    </div>
  )
}

export default Products;
