import React from 'react';
import {Paper, Avatar, List, ListItem, CardTitle} from 'material-ui';
import moment from 'moment';

const DistributorMain = (props, {name, address, rfc}) => {
    return (
        <Paper className="summary" zDepth={2}>
            <Avatar
                className="summary_avatar"
                src={'http://cerveceriaallende.mx/wp-content/uploads/2015/05/logo.png'}
                size={150}/>
            <ul className="summary_list">
                <li className="summary_element"><h2>Distribuidor Bajio</h2></li>
                <li className="summary_element">Dirección: Venustiano Carranza #114</li>
                <li className="summary_element">Rfc: CAMHGNRR02</li>
                <br/>
                <hr className="line"/>
                <br/>
                <li className="summary_element">Cajas vendidas: 4,000</li>
                <li className="summary_element">Cantidad vendida: $500,000</li>
                <li className="summary_element">Stock: 2800 </li>
                <li className="summary_element">última venta: {moment().format('DD MMM YYYY')}</li>
            </ul>
        </Paper>
    )
};

export default DistributorMain;