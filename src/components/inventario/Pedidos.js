/**
 * Created by BlisS on 22/03/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, TableHeaderColumn, TableHeader, TableBody, TableRow, TableRowColumn} from 'material-ui';
import {bindActionCreators} from 'redux';


class Pedidos extends Component {
    state = {};

    render() {
        return (
            <div style={{padding:'3% 6%'}}>
                <h2>Últimos Pedidos</h2>
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