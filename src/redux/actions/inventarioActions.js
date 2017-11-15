import firebase from '../../firebase/firebase';

export const ADD_ITEMS_SUCCESS = 'ADD_ITEMS_SUCCESS';

export function addItemsSuccess(item){
    return{
        type: ADD_ITEMS_SUCCESS, item
    }
}

export function addItem(item){
    return function(dispatch, getState){
        return firebase.database().ref('inventarios/'+getState().user.uid).push(item)
            .then(r=>{
                //item['key'] = r.key ;
                dispatch(addItemsSuccess(item))
            }).catch(e=>{
                console.log(e)
            })
    }
}

export const GET_INVENTARIO_SUCCESS = 'GET_INVENTARIO_SUCCESS';

export function getInventarioSuccess(item){
    return{
        type:GET_INVENTARIO_SUCCESS, item
    }
}
export function getInventario(){
    return function(dispatch, getState){
        return firebase.database().ref('inventarios/'+getState().user.uid).on('child_added', snap=>{
            dispatch(getInventarioSuccess(snap.val()))
        })
    }
}