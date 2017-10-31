import {GET_ALL_DISTRIBUTORS_SUCCESS, ADD_DISTRIBUTOR_SUCCESS} from "../actions/distributorActions";

export function distributorReducer(state=[], action){
    switch (action.type){
        case GET_ALL_DISTRIBUTORS_SUCCESS:
            return action.distributors;

        default:
            return state;
    }
}