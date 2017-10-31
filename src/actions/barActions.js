//example object

//let bar = {
  //      title:"Cervecería Allende",
    //    slug:"cerveceria",
      //  drawer:false
//};

export const TOGGLE_DRAWER_SUCCESS = "TOGGLE_DRAWER_SUCCESS";

export function toggleDrawerSuccess(barObject){
    return {
        type: TOGGLE_DRAWER_SUCCESS,
        barObject
    }
}

export function toggleDrawer(){
    return function(dispatch, getState){
        let barObject = getState().bar;
        barObject.drawer = !barObject.drawer;
        dispatch(toggleDrawerSuccess(barObject))
    }
}