import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavBarDisplay} from './NavBarDisplay';
import {withRouter} from 'react-router-dom';
import {toggleDrawer} from '../../actions/barActions';

function mapStateToProps(state, ownProps) {
    //console.log(state);
    return {...state.bar};
}

function mapDispatchToProps(dispatch, ownProps) {
    // const path = ownProps.match.path;
    // if(path === "/") dispatch(setTitle("Cerveceria Allende"));
    return {
        onMenuClick: bindActionCreators(toggleDrawer, dispatch)
    };
}

export const NavBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarDisplay));