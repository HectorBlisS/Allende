import {Switch, Route} from 'react-router-dom';
import React from 'react';
import InventarioPage from "./components/inventario/InventarioPage";
import LoginContainer from "./components/login/LoginContainer";
import RegistroContainer from './components/login/RegistroContainer';
import CajaComponent from "./components/caja/CajaComponent";
import {AdminDistribuitorDetail} from './components/admin/AdminDistribuitorDetail';
import DistributorDashboard from './components/distributor/DistributorDashboard';
import InventarioAdmin from './components/admin/InventarioAdmin';
import AdminContainer from "./components/admin/AdminContainer";



const Routes = () => (
    <Switch>
        <Route path="/inventario" component={InventarioPage}/>
        <Route path="/login" component={LoginContainer}/>
        {/*<Route path="/registro" component={RegistroContainer}/>*/}
        <Route path="/dashboard" component={DistributorDashboard}/>
        <Route path="/caja" component={CajaComponent}/>
        <Route exact path="/admin" component={AdminContainer}/>
        <Route path="/admin/distributors/:id" component={AdminDistribuitorDetail}/>
            <Route  exact path="/admin/inventario" component={InventarioAdmin}/>
    </Switch>
);

export default Routes