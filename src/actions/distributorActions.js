import firebase from '../firebase';


export const ADD_DISTRIBUTOR_SUCCESS = 'ADD_DISTRIBUTOR_SUCCESS';
export const GET_ALL_DISTRIBUTORS_SUCCESS = 'GET_ALL_DISTRIBUTORS_SUCCESS';

export function addDistributorSuccess(distributor){
    return{
        type: ADD_DISTRIBUTOR_SUCCESS,
        distributor
    }
}

export function addDistributor(distributor){
    return function(dispatch, getState){
        return firebase.database().ref('distributors').push(distributor)
            .then(r=>{
                //dispatch(addDistributorSuccess(distributor);
                console.log(r)
            })
    }
}

export function getAllDistributorsSuccess(distributors){
    return{
        type: GET_ALL_DISTRIBUTORS_SUCCESS,
        distributors
    }
}

export function getAllDistributors(distributor){
    return function(dispatch, getState){
        return firebase.database().ref('distributors').once('value')
            .then(r=>{
                let array = [];
                for (let k in r.val()){
                    let c = r.val()[k];
                    //console.log(s.val()[k]);
                    c['key'] = k;
                    array.push(c);
                }
                dispatch(getAllDistributorsSuccess(array))
            })
    }
}


