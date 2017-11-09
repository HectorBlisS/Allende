import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavBarDisplay} from './NavBarDisplay';
import {withRouter} from 'react-router-dom';
import {toggleDrawer} from '../../actions/barActions';
import * as userActions from '../../actions/userActions';

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        bar:state.bar,
        user:state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onMenuClick: bindActionCreators(toggleDrawer, dispatch),
        userActions:bindActionCreators(userActions, dispatch)

    };
}

export const NavBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarDisplay));