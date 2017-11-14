import React, {Component} from 'react';
import './ChangePasswordStyles.css'
import ChangePasswordDisplay from "./ChangePasswordDisplay";
import toastr from 'toastr';
import firebase from '../../firebase';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from '../../actions/userActions';

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

    componentWillMount(){
        console.info(this.props.user);
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
        const {credential} = this.state;
        this.props.userActions.updatePassword(credential.password)
            .then( r => {
                toastr.success('Se ha actualizado correctamente');
                this.props.history.push('/dashboard')
            })
            .catch( e => {
                toastr.error('Something wrong' + e.message);
            });
    };

    render() {
        const {credential, error} = this.state;
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