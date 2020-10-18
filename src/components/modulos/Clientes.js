import React from 'react';
import { Navbar } from '../Navbar';

export const Clientes = () => {
    return (
        <div>
            <Navbar/>
        
        <div className="container animated fadeIn faster">
            <br></br>
            <h3>Clientes</h3>
                   
            <div className="bot-sum">
            <button className="btn btn-success fab">
                <i className="fas fa-plus"></i>
            </button>
            </div>
            
            <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">CUIT</th>
                    <th scope="col">Razon Social</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">1</th>
                        <td>Mark</td>
                        <td>1234567890</td>
                        <td>1234567890</td>
                        <td>
                            <button className="btn btn-info mr-2">
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-danger">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </td>
                        
                </tr>
                <tr>
                    <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>1234585201</td>
                        <td>1234567890</td>
                        <td>
                            <button className="btn btn-info mr-2">
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-danger">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                <tr>
                    <th scope="row">3</th>
                        <td>Larry</td>
                        <td>5214569854</td>
                        <td>1234567890</td>
                        <td>
                            <button className="btn btn-info mr-2">
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-danger">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </td>
                </tr>
            </tbody>

        </table>
            
        </div>
        </div>
    )
}
