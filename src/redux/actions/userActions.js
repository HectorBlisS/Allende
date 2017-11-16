import firebase from '../../firebase/firebase';
import toastr from 'toastr';
import {getInventario} from "./inventarioActions";
import {usuarioVerificado} from "./usuarioVerificadoActions";
import {getAllProducts} from "./productsActions";
//import alertify from 'alertify.js';
const distributorsDb = firebase.database().ref("distributors");

export function iniciarSesionAction(usuario) {
    return {type:"INICIAR_SESION" , usuario};
}

export function cerrarSesionAction(usuario) {
    return { type:"CERRAR_SESION" , usuario };
}

export function comprobarUsuarioAction(usuario) {
    return { type:"COMPROBAR_USUARIO", usuario};
}

export function comprobarUsuarioSuccess(usuario) {
    return function (dispatch) {
        dispatch( comprobarUsuarioAction(usuario));
        return Promise.resolve();
    }
}

export function iniciarSesion(email, password) {
    return function(dispatch, getState) {
        // console.log(user)
        return firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((u) => {
                distributorsDb.child(u.uid).on("value", s=>{
                    u["profile"] = s.val();
                    dispatch(iniciarSesionAction(u));
                    return Promise.resolve();
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                let errorMessage = '';
                if (errorCode === 'auth/user-not-found') {
                    errorMessage = 'Usuario no encontrado';
                } else if (errorCode === 'auth/wrong-password') {
                    errorMessage = 'La contraseña es inválida';
                }
                return Promise.reject(error.message);
                console.log('Algo estuvo mal ',error );
            });

    }
}

export function registrarEIniciarSesion(user) {
    return function (dispatch, getState) {
        return firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((u) => {
                actualizarPerfil(u);
                iniciarSesion(user);

                //this.props.history.push('/login');
            })
            .catch(function(error) {
                //var errorCode = error.code;
                let errorMessage = error.message;
                console.log('something wrong ' + errorMessage);
            });
    }
}

export function actualizarPerfil (user) {
    return function (dispatch, getState) {
        let userFirebase = firebase.auth().currentUser;
        let fullname = user.fullName;
        userFirebase.updateProfile({
            displayName: fullname,
            //photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then( () => {
            console.log('Perfil actualizado');
        }, error => {
            console.error(error);
        });
    }
}



export function cerrarSesion() {
    return function (dispatch,getState) {
        return firebase.auth().signOut()
            .then((r) => {
                console.log('Ya sali ', r);
                //toastr.success('vuelveeeeee');

                dispatch(cerrarSesionAction(null));
            }).catch( (error) => {
                console.error('No pude salir');
            });

    }
}

export function comprobarUsuario(){
    return function (dispatch, getState) {
        return firebase.auth().onAuthStateChanged((u) => {
            if(u){
                distributorsDb.child(u.uid).on("value", s=>{
                    u["profile"] = s.val();
                    dispatch(comprobarUsuarioAction(u));
                    dispatch(usuarioVerificado())
                    dispatch(getAllProducts())
                });
                //dispatch(getAllProducts());

            }else{
                dispatch(usuarioVerificado())
            }
        });
    }
}

export function changeJustCreatedToFalse(){
    return function (dispatch, getState) {
        let updates = {};
        let {profile} = getState().user;
        profile['just_created'] = false;
        updates['/distributors/'  +  profile.key] = profile;
        return firebase.database().ref().update(updates);
    }
}

export function updatePassword(newPassword) {
    return function (dispatch, getState) {
        const {user} = getState();
        return user.updatePassword(newPassword)
            .then( r => {
                dispatch(changeJustCreatedToFalse());
                return Promise.resolve(r);
            })
            .catch( e => {
                toastr.error(e.message);
                return Promise.reject(e);
            });
    }
}