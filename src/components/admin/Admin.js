//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as distributorActions from '../../actions/distributorActions';
import AdminContainer from "./AdminContainer";


function mapStateToProps(state, ownProps){
    return{
        distributors:state.distributorReducer,
        fetched:state.distributors!==undefined
    }
}

function mapDispatchToProps(dispatch){
    return{
        distributorActions:bindActionCreators(distributorActions, dispatch),
    }
}

export const Admin = connect(mapStateToProps, mapDispatchToProps)(AdminContainer);