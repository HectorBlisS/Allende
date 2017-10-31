import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavBarDisplay} from './NavBarDisplay';
import {withRouter} from 'react-router-dom';

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export const NavBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarDisplay));