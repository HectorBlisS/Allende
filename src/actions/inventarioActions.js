import firebase from '../firebase';

export const ADD_ITEMS_SUCCESS = 'ADD_ITEMS_SUCCESS';

export function addItemsSuccess(item){
    return{
        type: ADD_ITEMS_SUCCESS, item
    }
}

export function addItemSuccess(item){
    return function(dispatch, getState){
        return firebase.database().ref('inventarios/'+getState().user.uid).push(item)
            .then(r=>{
                item['key'] = r.key ;
                dispatch(addItemsSuccess(item))
            })
    }
}

export const GET_INVENTARIO_SUCCESS = 'GET_INVENTARIO_SUCCESS';

export function getInventarioSuccess(inventario){
    return{
        type:GET_INVENTARIO_SUCCESS, inventario
    }
}
export function getInventario(){
    return function(dispatch, getState){
        return firebase.database().ref('inventario/'+getState().user.uid).on('child_added', function(snap){
            dispatch(getInventarioSuccess(snap.val()))
        })
    }
}