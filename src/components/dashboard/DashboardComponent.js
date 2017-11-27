import React from 'react';
import './DashboardStyles.css';
//material-ui
import {GridList, GridTile, Paper} from 'material-ui';
import DistributorMain from "./DistributorMain";
import * as fakeFirebase from './fake';
import Grafica from "./Grafica";

const DashboardComponent = (props) => {
    const {
        distributor,
        slogan,
        ultimaVenta,
        promedioCompras,
        productoMasComprado,
        productoMenosComprado
    } = props;
    return (
        <div>
            <GridList className='dashboard-component' cols={3} cellHeight={'auto'}>
                <GridTile className="dashboard-summary-container" cols={1}>
                    <DistributorMain distributor={distributor}/>
               </GridTile>
               <GridList cols={2} cellHeight={'auto'}>
                   <GridList cols={2} cellHeight={'auto'}>
                       <GridTile className="dashboard-summary-container" cols={1}>
                           <Paper className="summary_container" zDepth={2}>
                               <h2>Tus cervezas más vendidas</h2>
                               <Grafica
                                   medidasLista={fakeFirebase.data}
                               />
                           </Paper>
                       </GridTile>
                       <GridTile className="dashboard-summary-container" cols={1}>
                           <Paper className="summary_container" zDepth={2}>
                               <h2>Tus mejores clientes</h2>
                               <Grafica
                                   medidasLista={fakeFirebase.data}
                               />
                           </Paper>
                       </GridTile>
                   </GridList>
                   <GridList cellHeight={'auto'} cols={2}>
                       <GridTile className="dashboard-summary-container" cols={1}>
                           <Paper className="summary_container" zDepth={2}>
                               <h2>Días de mayor demanda</h2>
                               <Grafica
                                   medidasLista={fakeFirebase.data}
                               />
                           </Paper>
                       </GridTile>
                       <GridTile className="dashboard-summary-container" cols={1}>
                           <Paper className="summary_container" zDepth={2}>
                               <h2>Ventas del mes</h2>
                               <Grafica
                                   medidasLista={fakeFirebase.data}
                               />
                           </Paper>
                       </GridTile>
                   </GridList>
               </GridList>

           </GridList>
       </div>
    );
};

export default DashboardComponent;