import React from 'react';
import './DashboardStyles.css';
//material-ui
import {GridList, GridTile} from 'material-ui';
import DistributorMain from "./DistributorMain";
import VentasComponent from "./VentasComponent";
import ShowResumen from "./ShowResumen";

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
       <div className='dashboard-component'>
           <GridList cols={4} cellHeight={'auto'}>
               <GridTile cols={1}>
                   <DistributorMain distributor={distributor}/>
               </GridTile>
               <GridTile cols={3}>
                   <GridList>
                       <GridTile>
                           <VentasComponent
                               title='Lista de ventas'
                                ventas='200'/>
                       </GridTile>
                       <GridTile>
                           <ShowResumen/>
                       </GridTile>
                   </GridList>
               </GridTile>
           </GridList>
       </div>
    );
};

export default DashboardComponent;