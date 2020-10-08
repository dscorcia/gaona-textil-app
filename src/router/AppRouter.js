import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { LandingHome } from '../components/LandingHome';
import { Login } from '../components/Login';
import { Clientes } from '../components/modulos/Clientes';
import { Ventas } from '../components/modulos/Ventas';
import { Stock } from '../components/modulos/Stock';
import { Usuarios } from '../components/modulos/Usuarios';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/home" component={ LandingHome } />     
                    <Route exact path="/login" component={ Login } /> 
                    <Route exact path="/clientes" component={ Clientes } />
                    <Route exact path="/ventas" component={ Ventas } />
                    <Route exact path="/stock" component={ Stock } />
                    <Route exact path="/usuarios" component={ Usuarios } />

                    <Redirect to="/home" />   
                </Switch>
            </div>
        </Router>
    )
}
