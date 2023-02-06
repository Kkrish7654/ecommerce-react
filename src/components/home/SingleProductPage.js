import Axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectProducts, selectProducts } from '../actions/ProductActions';

const SingleProductPage = () => {
    const product = useSelector((state)=>state.product);
    const {id,title,image,description,price,category} = product;
    console.log(product)
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product);
    async function ProductFetchApi(){
        const res = await Axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=> {
            console.log("error",err);
        })
        dispatch(selectProducts(res.data))
        console.log(res);
    }

    useEffect(()=>{
        if (productId && productId !== "") ProductFetchApi();
        return () => {
            dispatch(removeSelectProducts())
        }
    },[productId,dispatch])
  return (
    <div>
      {
        Object.keys(product).length === 0 ? (<div>Loading</div>) : (
            <div key={id}>
                <img src={image} alt={title}/>
                <h1>{title}</h1>
                <p>{price}</p>
                <p>{category}</p>
                <p>{description}</p>
            </div>
        )
      }
    </div>
  )
}

export default SingleProductPage;
