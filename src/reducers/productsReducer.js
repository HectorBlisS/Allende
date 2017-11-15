import {GET_ALL_PRODUCTS_SUCCESS, NEW_PRODUCT_SUCCESS} from "../actions/productsActions";

export function productsReducer(state=[], action){
    switch(action.type){

        case GET_ALL_PRODUCTS_SUCCESS:
            return [...state, action.product];
        case NEW_PRODUCT_SUCCESS:
            return [...state];
        default:
            return state;
    }
}