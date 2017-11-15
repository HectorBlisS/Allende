//example object

//let bar = {
  //      title:"Cervecería Allende",
    //    slug:"cerveceria",
      //  drawer:false
//};

export const TOGGLE_DRAWER_SUCCESS = "TOGGLE_DRAWER_SUCCESS";
export const SET_TITLE_SUCCESS = "SET_TITLE_SUCCESS";
export const SET_SLUG_SUCCESS = "SET_SLUG_SUCCESS";
export const SET_BAR_SUCCESS = "SET_BAR_SUCCESS";

function toggleDrawerSuccess(drawer){
    return {
        type: TOGGLE_DRAWER_SUCCESS,
        drawer
    }
}

function setTitleSuccess(title){
    return {
        type: SET_TITLE_SUCCESS,
        title
    }
}

function setSlugSuccess(slug){
    return {
        type: SET_SLUG_SUCCESS,
        slug
    }
}

function setBarSuccess(bar){
    return {
        type: SET_BAR_SUCCESS,
        bar
    }
}


export const toggleDrawer = () => (dispatch, getState) => {
        let barObject = getState().bar;
        barObject.drawer = !barObject.drawer;
        //console.log(barObject.drawer);
        dispatch(toggleDrawerSuccess(barObject.drawer));
    };


export const setTitle = (title) => (dispatch) => {
        dispatch(setTitleSuccess(title));
};

export function setSlug(slug){
    //console.log("llego: ",title);
    return function(dispatch){
        dispatch(setSlugSuccess(slug));
    }
}

export function setBar(bar){
    //console.log("llegó: ", bar);
    return function(dispatch){
        dispatch(setBarSuccess(bar));
    }
}

