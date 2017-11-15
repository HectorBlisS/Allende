import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Dialog, FloatingActionButton, FlatButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DashboardComponent from "../dashboard/DashboardComponent";
import NewItemForm from "./NewItemForm";
import * as productsActions from '../../actions/productsActions';
import toastr from 'toastr';
import firebase from '../../firebase';
import ProductsList from './ProductsList';



class InventarioAdmin extends Component {
    state = {
        open: false,
        newProduct:{},
        loader:false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    onChangeText=(e)=>{
        let newProduct = this.state.newProduct;
        let field = e.target.name;
        newProduct[field]= e.target.value;
        this.setState({newProduct});
        console.log(newProduct)
    };
    addItem=()=>{
        this.props.productsActions.newProduct(this.state.newProduct).then(r=>{
            toastr.success('Agregado');
            this.handleClose()
            this.setState({newProduct:{}})
        })
    };
    uploadPhoto=(e)=>{
        let newProduct = this.state.newProduct;
        let file = e.target.files[0];
        let uploadTask = firebase.storage().ref().child('products/'+newProduct.name).put(file);
        uploadTask.then(r=>{
            console.log(r);
            newProduct['image']=r.downloadURL;
            this.setState({newProduct, loader:false})
        });
        uploadTask.on('state_changed', snapshot=>{
            this.setState({loader:true});
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        });

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
                    <div>
                        <ProductsList products={this.props.products}/>
                        <Dialog
                            title="Agrega un Nuevo Producto"
                            autoScrollBodyContent
                            actions={actions}
                            modal={false}
                            contentStyle={{width:'30%'}}
                            open={this.state.open}
                            onRequestClose={this.handleClose}>
                            <NewItemForm
                                product={this.state.newProduct}
                                loader={this.state.loader}
                                onChangeText={this.onChangeText}
                                uploadPhoto={this.uploadPhoto}/>
                        </Dialog>
                        <FloatingActionButton
                            className="add-distributor-button"
                            onTouchTap={this.handleOpen}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {

    return{

        products:state.products,


    }
}

function mapDispatchToProps(dispatch) {
    return {
        productsActions: bindActionCreators(productsActions, dispatch)
    }
}

InventarioAdmin = connect(mapStateToProps, mapDispatchToProps)(InventarioAdmin);
export default InventarioAdmin