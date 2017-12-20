/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {Paper} from 'material-ui';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import Cup from 'material-ui/svg-icons/maps/local-bar';
import {blue500} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const list = [
    {
        id:0,
        nombre:"Brown Ale",
        stock:10,
        precioCompra:120,
        precioVenta:350,
        color:"cafe",
        aroma:"frutal",
        medida:"cajas"
    },
    {
        id: 1,
        nombre: "Agave Laguer",
        stock: 10,
        precioCompra: 120,
        precioVenta: 350,
        color: "dorada",
        aroma: "frutal",
        medida:"cajas"

    },
    {
        id: 3,
        nombre: "Golden Ale",
        stock: 10,
        precioCompra: 120,
        precioVenta: 350,
        color: "cafe",
        aroma: "frutal",
        medida:"piezas"

    },
    {
        id: 4,
        nombre: "IPA",
        stock: 10,
        precioCompra: 120,
        precioVenta: 350,
        color: "cafe",
        aroma: "frutal",
        medida:"piezas"

    },
];

const RowPaper = ({nombre,stock, medida}) => (
    <Paper>
        <div className="row-paper">
            <Cup />
            <h4>{nombre}</h4>
            <p>{stock} {medida} </p>
        </div>
    </Paper>
);

export const ProductosDisplay = ({handleOpenForm}) => {
    return (
        <div>
            <h2>Tus productos</h2>

            {list.map((i, index)=><RowPaper key={index} {...i} />)}

            <FloatingActionButton
                onClick={handleOpenForm}
                style={styles.float}>
                <ContentAdd />
            </FloatingActionButton>
        </div>
    );
};

const styles = {
    float:{
        position:"fixed",
        bottom:25,
        right:25
    }
};

//ProductosDisplay.propTypes = {};



