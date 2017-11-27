import React, {Component} from 'react';
import {LoginDisplay} from './LoginDisplay';
import firebase from '../../firebase/firebase';
import toastr from 'toastr';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from '../../redux/actions/userActions';
const distributorsDb = firebase.database().ref("distributors");
class LoginContainer extends Component{

    state = {
        loading:false,
        auth:{
            email:'',
            password:''
        },
        profile:{}
    };

    componentWillMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                distributorsDb.child(user.uid).on("value", s=>{
                   if(!s.val()) return;
                    let {profile} = this.state;
                    profile = s.val();
                    this.setState({profile}, () => {
                        if(profile.just_created){
                            this.props.history.push('/changePassword');
                        }else {
                            this.decideRoute();
                        }

                    } );

                });

            }
        })
    }

    decideRoute = () => {
        const search = this.props.location.search;
        if(search){
            const params = new URLSearchParams(search);
            const next = params.get('next');
            if(next){
                this.routeNext(next);
            }
        } else{
            this.routeNatural();
        }
    };

    routeNext = (next) => {
        this.props.history.push(next);
    };

    routeNatural = () => {
        this.props.history.push('/dashboard');
    };

    onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        let auth = this.state.auth;
        auth[field] = value;
        this.setState({auth});
    };

    onLogin = (e) => {
        e.preventDefault();
        const auth = this.state.auth;
        this.setState({loading:true});
        this.props.userActions.iniciarSesion(auth.email, auth.password)
            .then(()=>{
                toastr.success("Bienvenido");
                this.decideRoute();
            })
            .catch(e=>{
                console.log(e);
                toastr.error(e);
                this.setState({loading:false});
            });
    };

    render(){
        const {auth, loading} = this.state;
        return(
            <LoginDisplay
                {...auth}
                loading={loading}
                onLogin={this.onLogin}
                onChange={this.onChange}
            />
        );
    }
}

function mapStateToProps(state){
    return{

    }
}
function mapDispatchToProps(dispatch, getState){
    return{
        userActions:bindActionCreators(userActions, dispatch)
    }
}


LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
export default LoginContainer;