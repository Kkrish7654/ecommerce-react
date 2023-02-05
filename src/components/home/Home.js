import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../actions/ProductActions'
import ProductsCard from './ProductsCard'

const Home = () => {
    const products = useSelector((state)=>state.allProducts.products)
    const dispatch = useDispatch();
    const ProductfetchApi =  useCallback(async() => {
      try{
      const response = await axios.get("https://fakestoreapi.com/products")
      console.log(response.data)
      dispatch(setProducts(response.data))
      }catch(err){
        console.log(err);
      }
  
    })
    useEffect(() => {
      ProductfetchApi();
    },[])

  return (
    <div>
      <div className='grid grid-cols-2 gap-3'>
        <ProductsCard/>
      </div>
    </div>
  )
}

export default Home
