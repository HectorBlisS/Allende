import React, {Component} from 'react';
import * as distributorActions from '../../redux/actions/distributorActions';
import {Link} from 'react-router-dom';
//components
import './admin.css';
import NewDistributorForm from "./NewDistributorForm";
import DistributorList from "./DistributorList";
import toastr from 'toastr';
//material-ui
import {FloatingActionButton, Dialog, FlatButton, RaisedButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class AdminContainer extends Component {



    state={
        newDistModal:false,
        newDistributor:{},
        distributors:[]
    };

    //all to save a new distributor
    newDistributorText=(e)=>{
        let newDistributor = this.state.newDistributor;
        let field = e.target.name;
        newDistributor[field] = e.target.value;
        this.setState({newDistributor});
        console.log(e.target.value)
    };
    addDistributor=()=>{
        this.props.distributorActions.addDistributor(this.state.newDistributor).then(r=>{
            console.log(r);
            this.closeNewDistributorModal();
            toastr.success('You added a new Distributor')
        })
    };
    openNewDistributorModal=()=>{
        this.setState({newDistModal:true})
    };
    closeNewDistributorModal=()=>{
        this.setState({newDistModal:false})
    };
    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.closeNewDistributorModal}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.addDistributor}
            />,
        ];
        return (
            <div>
                {!this.props.fecthed?
                    <div style={{paddingTop:20}}>
                        <div style={{display:"flex", justifyContent:"space-around"}}>
                            <RaisedButton containerElement={<Link to="/admin/inventario"/>} label={"Actualizar Catálogo"}/>
                            <RaisedButton label={"Ver Graficas de ventas"}/>
                            <RaisedButton label={"Ver pedidos de distribuidores"}/>
                            <RaisedButton label={"Proyecciones"}/>
                        </div>
                        <DistributorList distributors={this.props.distributors}/>
                        <FloatingActionButton
                            className="add-distributor-button"
                            onTouchTap={this.openNewDistributorModal}>
                            <ContentAdd />
                        </FloatingActionButton>
                        <Dialog
                            title="Add a new Distributor"
                            actions={actions}
                            modal={false}
                            open={this.state.newDistModal}
                            contentStyle={{width:'30%'}}
                            onRequestClose={this.closeNewDistributorModal}>
                            <NewDistributorForm newDistributorText={this.newDistributorText}/>
                        </Dialog>
                    </div>:
                    <p>loading</p>
                }
            </div>
        )
    }
}


function mapStateToProps(state, ownProps){
    return{
        distributors:state.distributors,
        fetched:state.distributors!==undefined
    }
}

function mapDispatchToProps(dispatch){
    return{
        distributorActions:bindActionCreators(distributorActions, dispatch),
    }
}

AdminContainer = connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
export default AdminContainer;