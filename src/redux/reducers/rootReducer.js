import {combineReducers} from 'redux';
import {barReducer} from "./barReducer";
import {distributorReducer} from "./distributorReducer";
import {userReducer} from "./userReducer";
import {inventarioreducer} from "./inventarioReducer";
import {clientsReducer} from "./clientsReducer";
import usuarioVerificadoReducer from "./usuarioVerificadoReducer";
import {productsReducer} from "./productsReducer";



function mientrasReducer(state="", action){
    switch (action.type){
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    mientrasReducer,
    bar:barReducer,
    distributors:distributorReducer,
    user:userReducer,
    inventario:inventarioreducer,
    clients:clientsReducer,
    usuarioVerificado:usuarioVerificadoReducer,
    products:productsReducer,
    //products:productsReducer
});