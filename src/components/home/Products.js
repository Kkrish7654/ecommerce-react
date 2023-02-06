import Axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../actions/ProductActions'
import ProductsCard from './ProductsCard'
import { useSelector } from 'react-redux'

const Products = () => {
    const products = useSelector((state)=>state.allProducts.products)
    const dispatch = useDispatch();
    const ProductsfetchApi = async() => {
      const response = await Axios
      .get("https://fakestoreapi.com/products")
      .catch((err)=>{
        console.log(err)
      });
     console.log("from fetch",response.data)
      dispatch(setProducts(response.data))
    }
  
    useEffect(() => {
      ProductsfetchApi();
    },[])

  return (
    <div>
      <div className='grid grid-cols-2 gap-3'>
        <ProductsCard key={products.id}/>
      </div>
    </div>
  )
}

export default Products;
