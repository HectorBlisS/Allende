/**
 * Created by BlisS on 22/03/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Dialog, MenuItem, SelectField} from 'material-ui';

class ProductosForm extends Component {
    state = {
        cerveza:{},
        stock:0,
        cervezas:[
            {
                name:"roja",
                stock:100,
                medida:"cajas"
            },
            {
                name:"vieja",
                stock:234,
                medida:"piezas"
            },
            {
                name:"azul",
                stock:10,
                medida:"cajas"
            },
            {
                name:"cruda",
                stock:0,
                medida:"piezas"
            },
            {
                name:"mesta",
                stock:0,
                medida:"cajas"
            }
            ]
    };

    handleChangeProduct = (e, i, v) => {
        let cerveza = this.state.cervezas.filter(c=>c.name === v)[0];
        this.setState({
            cerveza
        });
    };

    render() {
        const {onSubmit, open, handleCloseForm} = this.props;
        const {cerveza} = this.state;
        return (
            <Dialog
                open={open}
                modal={false}
                onRequestClose={handleCloseForm}
            >
                <form className="productos-form" onSubmit={onSubmit}>
                    <h3>Agrega productos a tu inventario:</h3>
                    <div className="productos-wrapper">
                        <SelectField
                            floatingLabelText="Selecciona La Cerveza"
                            value={cerveza.name}
                            onChange={this.handleChangeProduct}
                        >
                            <MenuItem value={"roja"} primaryText="Brown Ale" />
                            <MenuItem value={"vieja"} primaryText="Agave Lager" />
                            <MenuItem value={"azul"} primaryText="Golden Ale" />
                            <MenuItem value={"cruda"} primaryText="IPA" />

                        </SelectField>
                        <h3>Stock actual: {cerveza.stock}{cerveza.medida} </h3>
                    </div>
                </form>
            </Dialog>
        );
    }
}

//ProductosForm.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductosForm);