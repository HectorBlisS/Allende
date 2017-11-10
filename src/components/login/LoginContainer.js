import React, {Component} from 'react';
import {LoginDisplay} from './LoginDisplay';
import firebase from '../../firebase';
import toastr from 'toastr';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from '../../actions/userActions';

class LoginContainer extends Component{

    state = {
        loading:false,
        auth:{
            email:'',
            password:''
        }
    };

    componentWillMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.props.history.push("/dashboard");
            }
        })
    }

    onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        let auth = this.state.auth;
        auth[field] = value;
        this.setState({auth});
    };

    onLogin = () => {
        const auth = this.state.auth;
        this.setState({loading:true});
        this.props.userActions.iniciarSesion(auth.email, auth.password)
            .then(()=>{
                toastr.success("Bienvenido");
                this.props.history.push("/dashboard");
            })
            .catch(e=>{
                console.log(e);
                toastr.error("algo malo pasó ",e);
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