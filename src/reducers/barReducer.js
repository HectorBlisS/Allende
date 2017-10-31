//import {combineReducers} from 'redux';
import initial from './initialState';
import {TOGGLE_DRAWER_SUCCESS} from '../actions/barActions';

export function barReducer(state = initial.bar, action){
    switch (action.type){
        case TOGGLE_DRAWER_SUCCESS:
            return action.barObject;
        default:
            return state;
    }
}

//
// export const barReducer = combineReducers({
//     bar
// });

