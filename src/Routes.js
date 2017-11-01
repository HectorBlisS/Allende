import {Switch, Route} from 'react-router-dom';
import React from 'react';
import InventarioPage from "./components/inventario/InventarioPage";
import LoginContainer from "./components/login/LoginContainer";
import RegistroContainer from './components/login/RegistroContainer';
import CajaComponent from "./components/caja/CajaComponent";
import HomePage from './components/home/HomePage';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/inventario" component={InventarioPage}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/registro" component={RegistroContainer}/>
        <Route path="/caja" component={CajaComponent}/>
    </Switch>
);

export default Routes