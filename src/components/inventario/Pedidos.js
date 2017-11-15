/**
 * Created by BlisS on 22/03/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Pedidos extends Component {
    state = {};

    render() {
        return (
            <div>
                <h1>BlisS</h1>
            </div>
        );
    }
}

//Pedidos.propTypes = {
// myProp: PropTypes.string.isRequired
//};

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

export default connect(mapStateToProps, mapDispatchToProps)(Pedidos);