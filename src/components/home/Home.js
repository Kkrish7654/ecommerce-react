import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../actions/ProductActions'
import ProductsCard from './ProductsCard'

const Home = () => {
    const products = useSelector((state)=>state.allProducts.products)
    const dispatch = useDispatch();
    const ProductfetchApi = async() => {
      const response = await axios.get("https://fakestoreapi.com/products")
      .catch((err)=>console.log(err))
      console.log(response.data)
      dispatch(setProducts(response.data))
  
    }
    useEffect(() => {
      ProductfetchApi();
      //if(products && products.lenght===0 ? )
    },[])
  return (
    <div>
      <div className='grid grid-cols-2 gap-3'>
        {
            products.map((product)=> {
                return (
                    <ProductsCard key={product.id}/>
                )
            })
         }
      </div>
    </div>
  )
}

export default Home
