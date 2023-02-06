import { combineReducers } from "redux";
import {ProductReducer,SingleProductReducer} from "./ProductReducer";

const reducer = combineReducers( 
    {
    allProducts:ProductReducer,
    product:SingleProductReducer,
}
)

export default reducer;