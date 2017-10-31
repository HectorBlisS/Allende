import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAEggDZlKI8w67e_cPG7hFAVKAjvvY9Fqk",
    authDomain: "cerveceriaallende-56478.firebaseapp.com",
    databaseURL: "https://cerveceriaallende-56478.firebaseio.com",
    projectId: "cerveceriaallende-56478",
    storageBucket: "cerveceriaallende-56478.appspot.com",
    messagingSenderId: "443694211752"
};
    firebase.initializeApp(config);
export default firebase;

export async function registrarTienda(tienda){
    const user = {
            displayName:tienda.responsable,
            email:tienda.email
        };
    //creamos el usuario
    const r = await firebase.auth().createUserWithEmailAndPassword(tienda.email, tienda.password)
    tienda["owner"] = r.uid;
    //creamos la tienda
    await firebase.database().ref("tiendas").push(tienda);
    //creamos el perfil
    await firebase.database().ref("users/" + r.uid).set(user);
    //logueamos al usuario
    await firebase.auth().signInWithEmailAndPassword(tienda.email, tienda.password);


}