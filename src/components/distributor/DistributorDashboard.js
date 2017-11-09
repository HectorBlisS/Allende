import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DashboardComponent from "../dashboard/DashboardComponent";

class DistributorDashboard extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log( this.props.user, this.props.distributor)
        return (
            <div>
                {this.props.fetched&&this.props.fetched2?
                    <DashboardComponent distributor={this.props.distributor}/>:
                    <p>loading</p>}
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
     let distributor = state.distributors.filter(d=>{
         return d.key === state.user.uid
     });
    return{
        distributor:distributor[0],
        user:state.user,
        fetched:distributor[0]!==undefined,
        fetched2:state.user!==undefined

    }
}

function mapDispatchToProps(dispatch) {
    return {
        //actions: bindActionCreators(actions, dispatch)
    }
}

DistributorDashboard = connect(mapStateToProps, mapDispatchToProps)(DistributorDashboard);
export default DistributorDashboard
