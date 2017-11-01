import React, {Component} from 'react';

//components
import './admin.css';
import NewDistributorForm from "./NewDistributorForm";
import DistributorList from "./DistributorList";
import toastr from 'toastr';
//material-ui
import {FloatingActionButton, Dialog, FlatButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';


class AdminContainer extends Component {



    state={
        newDistModal:false,
        newDistributor:{},
        distributors:[],
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
            </div>
        )
    }
}

export default AdminContainer;