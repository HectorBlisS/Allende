import firebase from '../../firebase/firebase';

const db = firebase.database().ref();
//const db = firebase.database().ref("dev");


export const ADD_CLIENT_SUCCESS = "ADD_CLIENT_SUCCESS";
export const REMOVE_CLIENT_SUCCESS = "REMOVE_CLIENT_SUCCESS";

export function addClientWatched(client){
    return {
        type:ADD_CLIENT_SUCCESS,
        client
    }
}

export function removeClientWatched(key){
    return {
        type:REMOVE_CLIENT_SUCCESS,
        key
    }
}

export const saveClient = (client) => (dispatch, getState) => {
    let clientKey;
    if(client.id)
        clientKey = client.id;
    else
        clientKey = db.child('clients').push().key;

    const userId = getState().user.uid;
    client["id"] = clientKey;
    const newData = {
        [`distributors/${userId}/clients/${clientKey}`]: true,
        [`clients/${clientKey}`]: client,
    };
    return db.update(newData)
        .then(()=>{
        return Promise.resolve();
        })
        .catch(e=>{
        console.log(e);
        return Promise.reject(e.message);
        });
};

export const removeClient = (client) => (dispatch, getState) =>{
    const userId = getState().user.uid;
    const clientKey = client.id;
    const newData = {
        [`distributors/${userId}/clients/${clientKey}`]: null,
        [`clients/${clientKey}`]: null,
    };
    return db.update(newData)
        .then(()=>{
            return Promise.resolve();
        })
        .catch(e=>{
            console.log(e);
            return Promise.reject(e.message);
        });
};

//getClients for logged distributor
export const getUserClients = (user) => (dispatch) => {
    console.log("trallendo clientes de ", user);
    db.child("clients")
        .on("child_added", snap=>{
           const client = snap.val();
           dispatch(addClientWatched(client));
        });

};