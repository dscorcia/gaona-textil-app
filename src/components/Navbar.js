import React from 'react';
import logo from '../assets/images/logoGaona.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    
    const handleLogout = () => {
        dispatch( startLogout() );
    }
    
    return (

        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand mr-100" href="/home">
                <img src={ logo } width="50" height="50" alt="" loading="lazy"></img>
                &nbsp;Gaona Textil
            </a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                
            </button>

            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
                <ul className="navbar-nav mr-auto">
                
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/stock">Stock</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/ventas">Ventas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/clientes">Clientes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/usuarios">Usuarios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/remitos">Remitos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/facturas">Facturas</a>
                    </li>
                </ul>

                <button className="btn btn-outline-success my-2 my-sm-0 mr-2">
                    <i className="fas fa-user-check"></i>
                    <span> { name } </span> 
                </button>
                <button className="btn btn-outline-danger my-2 my-sm-0" onClick={ handleLogout }>
                    <i className="fas fa-sign-out-alt"></i>
                    Salir 
                </button>
            </div>

        </div>
    
   
    )
}
