import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Dialog, FloatingActionButton, FlatButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DashboardComponent from "../dashboard/DashboardComponent";
import NewItemForm from "./NewItemForm";
import * as inventarioActions from '../../actions/inventarioActions';
import toastr from 'toastr';

class DistributorDashboard extends Component {
    state = {
        open: false,
        newItem:{}
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    onChangeText=(e)=>{
        let newItem = this.state.newItem;
        let field = e.target.name;
        newItem[field]= e.target.value;
        this.setState({newItem});
        console.log(newItem)
    };
    addItem=()=>{
        this.props.inventarioActions.addItem(this.state.newItem).then(r=>{
            toastr.success('Agregado');
            this.handleClose()
        })
    };


    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.addItem}
            />,
        ];

        return (
            <div>
                {this.props.fetched&&this.props.fetched2?
                    <div>
                        <DashboardComponent distributor={this.props.distributor}/>
                        <Dialog
                            title="Dialog With Actions"
                            actions={actions}
                            modal={false}
                            contentStyle={{width:'30%'}}
                            open={this.state.open}
                            onRequestClose={this.handleClose}>
                            <NewItemForm onChangeText={this.onChangeText}/>
                        </Dialog>
                        <FloatingActionButton onTouchTap={this.handleOpen}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>:
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
        fetched:distributor[0]!==undefined,
        fetched2:state.user!==undefined,
        inventario:state.inventario,


    }
}

function mapDispatchToProps(dispatch) {
    return {
        inventarioActions: bindActionCreators(inventarioActions, dispatch)
    }
}

DistributorDashboard = connect(mapStateToProps, mapDispatchToProps)(DistributorDashboard);
export default DistributorDashboard
