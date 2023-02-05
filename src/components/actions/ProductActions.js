import { ActionType } from "../content/ActionType";

export const setProducts = (products) =>{
    return {
        type:ActionType.SET_PRODUCTS,
        payload:products
    }
}

export const selectProducts = (product) => {
    return {
        type:ActionType.SELECT_PRODUCTS,
        payload:product
    }
}