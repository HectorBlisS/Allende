import React, {Component} from 'react';
import DistributorList from "./DistributorList";
import {FloatingActionButton, Dialog, FlatButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './admin.css';
import NewDistributorForm from "./NewDistributorForm";

class AdminContainer extends Component {

    state={
        newDist:false,
    };


    openNewDistributorModal=()=>{
        this.setState({newDist:true})
    };
    closeNewDistributorModal=()=>{
        this.setState({newDist:false})
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
                onClick={this.closeNewDistributorModal}
            />,
        ];
        return (
            <div>
                <DistributorList/>
                <FloatingActionButton
                    className="add-distributor-button"
                    onTouchTap={this.openNewDistributorModal}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title="Add a new Distributor"
                    actions={actions}
                    modal={false}
                    open={this.state.newDist}
                    contentStyle={{width:'100%'}}
                    onRequestClose={this.closeNewDistributorModal}>
                    <NewDistributorForm/>
                </Dialog>
            </div>
        )
    }
}

export default AdminContainer;