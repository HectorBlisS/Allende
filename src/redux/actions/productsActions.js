import firebase from '../../firebase/firebase';

export const NEW_PRODUCT_SUCCESS =  'NEW_PRODUCT_SUCCESS';

export function newProductSuccess(product){
    return{
        type:NEW_PRODUCT_SUCCESS, product
    }
}

export function newProduct(product){
    return function(dispatch, getstate){
        return firebase.database().ref('products').push(product)
            .then(r=>{
                product['key']=r.key;
                dispatch(newProductSuccess(product))
            })
    }
}

export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';

export function getAllProductsSuccess(product){
    return{
        type:GET_ALL_PRODUCTS_SUCCESS, product
    }
}

export function getAllProducts(){
    return function(dispatch, getState){
        return firebase.database().ref('products').on('child_added', snap=>{
            let product = snap.val();
            product['key'] = snap.key;
            dispatch(getAllProductsSuccess(product))
        })
    }
}