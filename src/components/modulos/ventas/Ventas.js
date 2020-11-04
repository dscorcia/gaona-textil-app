import React from 'react';
import { Navbar } from '../../Navbar';

export const Ventas = () => {
    return (
        <div>
            <Navbar/>
        
        <div className="container animated fadeIn faster">
            
            <br></br>
            <h3>Ventas</h3>
        
            <div className="bot-sum">
                <button className="btn btn-success fab">
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            
            <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Transaccion</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <button className="btn btn-info mr-2">
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-danger mr-2">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                            <button className="btn btn-primary">
                                <i className="fas fa-file-alt mr-2"></i>
                                Ver detalle
                            </button>
                        </td>
                        
                </tr>
                <tr>
                    <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>
                            <button className="btn btn-info mr-2">
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-danger mr-2">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                            <button className="btn btn-success">
                                <i className="fas fa-file-alt mr-2"></i>
                                Ver detalle
                            </button>
                        </td>
                    </tr>
                <tr>
                    <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>
                            <button className="btn btn-info mr-2">
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-danger mr-2">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                            <button className="btn btn-success">
                                <i className="fas fa-file-alt mr-2"></i>
                                Ver detalle
                            </button>
                        </td>
                </tr>
            </tbody>

        </table>
            
        </div>
        </div>
    )
}
