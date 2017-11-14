import React from 'react';
import {Paper, Avatar, List, ListItem, CardTitle} from 'material-ui';
import moment from 'moment';

const DistributorMain = ({distributor}) => {
    return (
        <Paper className="summary_container" zDepth={2}>
            <Avatar
                className="summary_avatar"
                src={'http://cerveceriaallende.mx/wp-content/uploads/2015/05/logo.png'}
                size={150}/>
            <ul className="summary_list">
                <li className="summary_element"><h2>{distributor.name}</h2></li>
                <li className="summary_element">Dirección: {distributor.address}</li>
                <li className="summary_element">Rfc: {distributor.rfc}</li>
                <li className="summary_element">Cajas vendidas: { Math.round( Math.random() * 500 + 100)  }</li>
                <li className="summary_element">Cantidad vendida: ${ Math.round( Math.random() * 50000 + 100)  }</li>
                <li className="summary_element">Stock: 20000 </li>
                <li className="summary_element">última venta: {moment().format('DD MMM YYYY')}</li>
            </ul>
        </Paper>
    )
};

export default DistributorMain;