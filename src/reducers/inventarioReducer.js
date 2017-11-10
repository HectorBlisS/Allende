

import {ADD_ITEMS_SUCCESS, GET_INVENTARIO_SUCCESS} from "../actions/inventarioActions";

export function inventarioreducer(state=[], action){
    switch(action.type){

        case GET_INVENTARIO_SUCCESS:
            return [...state.items, action.item];
        case ADD_ITEMS_SUCCESS:
            return [...state.items, action.item];
        default:
            return state;
    }
}