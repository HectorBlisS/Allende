import firebase from './firebase';
import {store} from '../index';

//actionCreators
import {addClientWatched, removeClientWatched} from "../redux/actions/clientsActions";

//MainLogic

//const db = firebase.database().ref("dev");
const db = firebase.database().ref();



class keyPathWatcher{
    constructor(object){
        this.key = null;
        this.userKey = null;
        this.userRef = null;
        this.keyPath = object.keyPath;
        this.actions = object.actions;
        this.cache = [];
        this.dbRef = db.child(object.keyPath)
    }

    watchSelfChild(){
        console.log("corriendo por: ", this.userKey);
        if(!this.userRef) return;
        this.userRef.child(this.keyPath).on("child_added", this.onChildAdded.bind(this));
        this.userRef.child(this.keyPath).on("child_removed", this.onChildRemoved.bind(this));
    }

    onChildAdded(snap){
        let key = snap.key;
        //this.key = snap.key;
        db.child(this.keyPath).child(key).on("value", this.executeAction.bind(this))
    }

    onChildRemoved(snap){
        console.log(snap.key);
        let key = snap.key;
        this.actions.remove(key);
    }

    executeAction(snap){
        if(!snap.val()) return this.onChildRemoved(snap);
        let item = snap.val();
        //item["key"] = this.key;
        this.actions.upsert(item);
    }

    initWatch(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.userKey = user.uid;
                this.userRef = db.child("distributors").child(this.userKey);
                this.watchSelfChild();
            }
        });
    }
}


//Callbacks
function watchMyClients(){
    let objectToListen = {
        keyPath:"clients",
        actions: {
            upsert: item => {
                store.dispatch(addClientWatched(item));
            },
            remove:key=>store.dispatch(removeClientWatched(key))
        }
    };
    return new keyPathWatcher(objectToListen);
}
export const clientWatcher = watchMyClients();