import {combineReducers} from 'redux';
import {ADD_CLIENT_SUCCESS, REMOVE_CLIENT_SUCCESS} from "../actions/clientsActions";

function myClients(state=[], action){
    switch(action.type){
        case ADD_CLIENT_SUCCESS:
            let list = state.filter(i=>i.id !== action.client.id);
            return [action.client, ...list];
        case REMOVE_CLIENT_SUCCESS:
            return [...state.filter(c=>c.id !== action.key)];
        default:
            return state;
    }
}

export const clientsReducer = combineReducers({
    myClients
});