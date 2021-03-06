import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavBarDisplay} from './NavBarDisplay';
import {withRouter} from 'react-router-dom';
import {toggleDrawer} from '../../redux/actions/barActions';
import * as userActions from '../../redux/actions/userActions';

function mapStateToProps(state, ownProps) {

    //console.log(state);
   // return {...state.bar};
    return {
        bar:state.bar,
        user:state.user,
        history: ownProps.history
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    // const path = ownProps.match.path;
    // if(path === "/") dispatch(setTitle("Cerveceria Allende"));
    return {
        onMenuClick: bindActionCreators(toggleDrawer, dispatch),
        userActions:bindActionCreators(userActions, dispatch)

    };
}

export const NavBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarDisplay));