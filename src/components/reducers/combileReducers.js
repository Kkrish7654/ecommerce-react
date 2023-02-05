import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";

const reducer = combineReducers( 
    {
    allProducts:ProductReducer,
}
)

export default reducer;