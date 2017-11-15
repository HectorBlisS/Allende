import React, {Component} from 'react';
import './ChangePasswordStyles.css'
import ChangePasswordDisplay from "./ChangePasswordDisplay";
import toastr from 'toastr';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from '../../redux/actions/userActions';

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

    render() {
        const {credential, error} = this.state;
        console.info(this.props);
        return (
            <div>
                <ChangePasswordDisplay
                    credential={credential}
                    error={error}
                    onChange={this.changeCredentialFields}
                    updatePassword={this.updatePassword}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

ChangePasswordPage = connect(mapStateToProps, mapDispatchToProps)(ChangePasswordPage);
export default ChangePasswordPage;