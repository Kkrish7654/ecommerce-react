import { ActionType } from '../content/ActionType'

const initialState = {
    products:[]
}

const ProductReducer = (state=initialState,{type,payload}) => {
  switch(type){
    case ActionType.SET_PRODUCTS:
        return{...state,products:payload}
    default:
        return state;
  }

}


export default ProductReducer;
