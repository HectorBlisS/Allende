import {combineReducers} from 'redux';
import {barReducer} from "./barReducer";

function mientrasReducer(state="", action){
    switch (action.type){
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    mientrasReducer,
    bar:barReducer
});