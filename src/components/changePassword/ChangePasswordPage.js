import React, {Component} from 'react';
import './ChangePasswordStyles.css'
import {ChangePasswordDisplay} from "./ChangePasswordDisplay";
import toastr from 'toastr';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from '../../redux/actions/userActions';
import {Redirect} from "react-router-dom";

class ChangePasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credential:{
                password: '',
                passwordConfirm: ''
            },
            error:{
                passwordConfirm: false
            }
        };
    }


    changeCredentialFields = (e) => {
        let {credential} = this.state;
        const name = e.target.name;
        credential[name] = e.target.value;
        this.setState({credential}, prevState => {
            this.isMatching(this.state.credential);
        })
    };


    isMatching = (credential) => {
        const {password, confirmPassword} = credential;
        let {error} = this.state;
        error.passwordConfirm = (password !== confirmPassword );
        this.setState({error });

    };

    updatePassword = () => {
        const {credential, error} = this.state;
        if(credential.password.length > 6) {
            if (!error.passwordConfirm) {
                this.props.userActions.updatePassword(credential.password)
                    .then(r => {
                        toastr.success('Se ha actualizado correctamente');
                        this.props.history.push('/dashboard')
                    })
                    .catch(e => {
                        toastr.error('Something wrong' + e.message);
                    });
            } else {
                toastr.error('La contraseña no coincide');
            }
        }else{
            toastr.error('La contraseña debe ser mayor a 6 caracteres');
        }
    };

    redirectToDash = () => {
      this.props.history.push('/dashboard');
    };

    render() {
        const {credential, error} = this.state;
        const {user,usuarioVerificado,logged} = this.props;
        return (
            <div>
                {
                    !usuarioVerificado         ? <p>Loading...</p>             :
                    !logged                    ? <Redirect to="/"/>            :
                    !user.profile.just_created ? <Redirect to="/dashboard"/>   :
                        <ChangePasswordDisplay
                            credential={credential}
                            error={error}
                            onChange={this.changeCredentialFields}
                            updatePassword={this.updatePassword}
                            redirectToDash={this.redirectToDash}
                        />
                }
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user,
        usuarioVerificado: state.usuarioVerificado,
        logged: state.user !== null
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

ChangePasswordPage = connect(mapStateToProps, mapDispatchToProps)(ChangePasswordPage);
export default ChangePasswordPage;