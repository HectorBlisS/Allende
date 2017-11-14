//import {combineReducers} from 'redux';
import initial from './initialState';
import {TOGGLE_DRAWER_SUCCESS, SET_TITLE_SUCCESS, SET_BAR_SUCCESS, SET_SLUG_SUCCESS} from '../actions/barActions';

export function barReducer(state = initial.bar, action){
    switch (action.type){
        case TOGGLE_DRAWER_SUCCESS:
            return {...state, drawer:action.drawer};
        case SET_TITLE_SUCCESS:
            return {...state, title:action.title};
        case SET_SLUG_SUCCESS:
            return {...state, slug:action.slug};
        case SET_BAR_SUCCESS:
            return action.bar;
        default:
            return state;
    }
}

//
// export const barReducer = combineReducers({
//     bar
// });

