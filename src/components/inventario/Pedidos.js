/**
 * Created by BlisS on 22/03/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, TableHeaderColumn, TableHeader, TableBody, TableRow, TableRowColumn, FloatingActionButton, Dialog, MenuItem, SelectField, TextField, RaisedButton} from 'material-ui';
import {bindActionCreators} from 'redux';
import ContentAdd from 'material-ui/svg-icons/content/add';


class Pedidos extends Component {
    state = {
        openForm:false
    };

    handleOpenForm = () => {
        this.setState({openForm:!this.state.openForm});
    };
    render() {
        return (
            <div style={{padding:'3% 6%'}}>
                <h2>Pedidos Surtidos</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Fecha</TableHeaderColumn>
                            <TableHeaderColumn>Monto</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>1234wert</TableRowColumn>
                            <TableRowColumn>12-ago-2017</TableRowColumn>
                            <TableRowColumn>$20000</TableRowColumn>
                            <TableRowColumn>Pagado</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>h3h3hh2h2h</TableRowColumn>
                            <TableRowColumn>15-sep-2017</TableRowColumn>
                            <TableRowColumn>$10000</TableRowColumn>
                            <TableRowColumn>Pagado</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>9ds9ew</TableRowColumn>
                            <TableRowColumn>12-oct-2017</TableRowColumn>
                            <TableRowColumn>$15000</TableRowColumn>
                            <TableRowColumn>Pagado</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>4h3h4h8</TableRowColumn>
                            <TableRowColumn>20-nov-2017</TableRowColumn>
                            <TableRowColumn>$30000</TableRowColumn>
                            <TableRowColumn>Pendiente</TableRowColumn>
                        </TableRow>


                    </TableBody>
                </Table>
                <FloatingActionButton
                    onClick={this.handleOpenForm}
                    backgroundColor={"grey"}
                    style={{position:"fixed", right:25, bottom:25}}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    contentStyle={{width:'30%'}}
                    open={this.state.openForm}
                    onRequestClose={this.handleOpenForm}
                >
                    <form action="">
                        <SelectField
                            fullWidth={true}
                            floatingLabelText="Cliente"
                            value={1}

                        >
                            <MenuItem value={1} primaryText="Super Chelas" />
                            <MenuItem value={2} primaryText="Expendio Beeer" />
                            <MenuItem value={3} primaryText="Miscelanea Don Gorro" />
                            <MenuItem value={4} primaryText="Bar el Oso" />
                            <MenuItem value={5} primaryText="La barata" />
                        </SelectField>
                        <br/>

                        <SelectField
                            fullWidth={true}
                            floatingLabelText="Producto"
                            value={1}

                        >
                            <MenuItem value={1} primaryText="Brown Ale" />
                            <MenuItem value={2} primaryText="IPA" />
                            <MenuItem value={3} primaryText="Golden Ale" />
                            <MenuItem value={4} primaryText="Agave Lager" />

                        </SelectField>
                        <br/>
                        <TextField
                            fullWidth={true}
                            floatingLabelFixed={true}
                            floatingLabelText="Cantidad"
                            hintText="Cantidad"/>
                        <br/>
                        <TextField
                            fullWidth={true}
                            floatingLabelFixed={true}
                            floatingLabelText="Presentacion"
                            hintText="Presentacion"/>
                        <br/>
                        <RaisedButton label={'Enviar'} fullWidth={true}/>
                    </form>
                </Dialog>
            </div>
        );
    }
}

//Pedidos.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Pedidos);