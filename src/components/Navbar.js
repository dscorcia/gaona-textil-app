import React from 'react';
import logo from '../assets/images/logoGaona.jpg';

export const Navbar = () => {
    return (

        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand mr-100" href="#">
                <img src={ logo } width="50" height="50" alt="" loading="lazy"></img>
                &nbsp;Gaona Textil
            </a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
                <ul className="navbar-nav mr-auto">
                
                    <li className="nav-item">
                        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Stock</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Ventas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Clientes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Usuarios</a>
                    </li>
                </ul>

                <button className="btn btn-outline-success my-2 my-sm-0 mr-2">
                    <i className="fas fa-user-check"></i>
                    Usuario 
                </button>
                <button className="btn btn-outline-danger my-2 my-sm-0">
                    <i className="fas fa-sign-out-alt"></i>
                    Salir 
                </button>
            </div>

        </div>
    
   
    )
}
