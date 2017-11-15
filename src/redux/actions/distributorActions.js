import firebase, {secondaryApp} from '../../firebase/firebase';



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
        return secondaryApp.auth().createUserWithEmailAndPassword(distributor.email, 'putostodos')
            .then(user=>{

                distributor['isAdmin']=false;
                distributor['key']=user.uid;
                distributor['just_created']=true;
                firebase.database().ref('distributors/'+user.uid).set(distributor)
                    .then(r=>{
                        dispatch(addDistributorSuccess(distributor));
                    })
            });

    }
}

export function getAllDistributorsSuccess(distributors){
    return{
        type: GET_ALL_DISTRIBUTORS_SUCCESS,
        distributors
    }
}

export function getAllDistributors(){
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


