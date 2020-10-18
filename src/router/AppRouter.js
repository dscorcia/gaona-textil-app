import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { LandingHome } from '../components/LandingHome';
import { Login } from '../components/Login';
import { startChecking } from '../actions/auth';
import { Clientes } from '../components/modulos/Clientes';
import { Ventas } from '../components/modulos/Ventas';
import { Stock } from '../components/modulos/Stock';
import { Usuarios } from '../components/modulos/Usuarios';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Remitos } from '../components/modulos/Remitos';
import { Facturas } from '../components/modulos/Facturas';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])

    if ( checking ) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact 
                        path="/login" 
                        component={ Login }
                        isAuthenticated={ !!uid } 
                    />
                    <PrivateRoute
                        exact 
                        path="/home" 
                        component={ LandingHome }
                        isAuthenticated={ !!uid }
                    />      
                    <PrivateRoute 
                        exact 
                        path="/clientes" 
                        component={ Clientes }
                        isAuthenticated={ !!uid } 
                    />
                    <PrivateRoute 
                        exact 
                        path="/ventas" 
                        component={ Ventas } 
                        isAuthenticated={ !!uid }
                    />
                    <PrivateRoute 
                        exact 
                        path="/stock" 
                        component={ Stock }
                        isAuthenticated={ !!uid } 
                    />
                    <PrivateRoute 
                        exact 
                        path="/usuarios" 
                        component={ Usuarios }
                        isAuthenticated={ !!uid } 
                    />

                    <PrivateRoute 
                        exact 
                        path="/remitos" 
                        component={ Remitos }
                        isAuthenticated={ !!uid } 
                    />

                    <PrivateRoute 
                        exact 
                        path="/facturas" 
                        component={ Facturas }
                        isAuthenticated={ !!uid } 
                    />

                    <Redirect to="/home" />   
                </Switch>
            </div>
        </Router>
    )
}
