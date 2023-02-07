import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductsCard = () => {
    const products = useSelector((state)=>state.allProducts.products)
   
    const listProducts = Object.values(products).map(function(product){
    const {id,title,image,price} = product;
      return (
        <div key={id} className="flex flex-col gap-3 p-4 m-2 bg-gray-50 drop-shadow-md rounded-md h-72">
            <Link to={`product/${id}`}>
            <div className="min-h-[60%] flex justify-center">
                <img className="h-full object-cover" src={image} alt={title} />
            </div>
            <div className="h-[30%] overflow-hidden">
                <h1>{title}</h1>
            </div>
            <div>
                <p>${price}</p>
            </div>
            </Link>
        </div>
      ) 
    })
    return <>{listProducts}</>
}

export default ProductsCard;