import {Switch, Route} from 'react-router-dom';
import React from 'react';
import InventarioPage from "./components/inventario/InventarioPage";
import LoginContainer from "./components/login/LoginContainer";
import RegistroContainer from './components/login/RegistroContainer';
import CajaComponent from "./components/caja/CajaComponent";

import HomePage from './components/home/HomePage';
import {Admin} from './components/admin/Admin';

import {AdminDistribuitorDetail} from './components/admin/AdminDistribuitorDetail';
import DistributorDashboard from './components/distributor/DistributorDashboard';
import ChangePasswordPage from "./components/changePassword/ChangePasswordPage";
import InventarioAdmin from './components/admin/InventarioAdmin';
import AdminContainer from "./components/admin/AdminContainer";



const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/inventario" component={InventarioPage}/>
        <Route path="/login" component={LoginContainer}/>
        {/*<Route path="/registro" component={RegistroContainer}/>*/}
        <Route path="/dashboard" component={DistributorDashboard}/>
        <Route path="/caja" component={CajaComponent}/>
        <Route exact path="/admin" component={AdminContainer}/>
        <Route path="/admin/distributors/:id" component={AdminDistribuitorDetail}/>
        
        <Route path="/changePassword" component={ChangePasswordPage}/>
            <Route path="/admin/inventario" component={InventarioAdmin}/>

    </Switch>
);

export default Routes