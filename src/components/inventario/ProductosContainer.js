/**
 * Created by BlisS on 22/03/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ProductosDisplay} from "./ProductosDisplay";
import ProductosForm from './ProductosForm';


class ProductosContainer extends Component {
    state = {
        openForm:false
    };

    handleOpenForm = () => {
        this.setState({openForm:true})
    };

    handleCloseForm = () => {
        this.setState({openForm:false})
    };

    render() {
        const {openForm} = this.state;
        return (
            <div className={"productos-container"}>
               <ProductosDisplay
                   handleOpenForm={this.handleOpenForm}
               />
                <ProductosForm
                    handleCloseForm={this.handleCloseForm}
                    open={openForm}
                />
            </div>
        );
    }
}

//ProductosContainer.propTypes = {
// myProp: PropTypes.string.isRequired
//};

function mapStateToProps(state, ownProps) {
    return {
        drawer: state.bar.drawer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductosContainer);