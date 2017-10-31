import {connect} from 'react-redux';
import DistribuitorDetailContainer from "./DistribuitorDetailContainer";




function mapStateToProps(state, ownProps){
    let distributor = state.distributorReducer.filter(d=>{
        return d.key === ownProps.match.params.id
    });
    return{
        distributor:distributor[0],
        fetched:distributor[0]!==undefined
    }
}

function mapDispatchToProps(dispatch){
    return{

    }
}


export const AdminDistribuitorDetail = connect(mapStateToProps, mapDispatchToProps)(DistribuitorDetailContainer);