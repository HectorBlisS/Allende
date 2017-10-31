import React from 'react';
import {Paper} from 'material-ui';

const ShowResumen = (props) => {
    const {
        ultimaVenta,
        promedioCompras,
        productoMasComprado,
        productoMenosComprado
    } = props;
    return (
            <Paper className="showResumen" zDepth={3}>
                <div>
                    <p> Última venta: {ultimaVenta} </p>
                    <p>Cantidad promedio de compras: {promedioCompras}</p>
                    <p>Producto más comprado: {productoMasComprado}</p>
                    <p>Producto menos comprado: {productoMenosComprado}</p>
                </div>
            </Paper>
    );
};

export default ShowResumen;