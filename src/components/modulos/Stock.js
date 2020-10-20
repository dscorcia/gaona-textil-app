import React from 'react';
import { Navbar } from '../Navbar';

export const Stock = () => {
    return (
        <div>
            <Navbar/>
        
        <div className="container animated fadeIn faster">
            <br></br>
            <h3>Articulos</h3>
        
            <div className="bot-sum">
                <button className="btn btn-success fab">
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            
            
            <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Estado</th>
                    <th scope="col">ID Articulo</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Color</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Ubicacion</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <button className="btn btn-info mr-2">
                                <i className="fas fa-map-marked-alt mr-2"></i>
                                 Ubicacion
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-success mr-2">
                                <i className="fas fa-file-alt mr-2"></i>
                                 Ver Detalle
                            </button>
                            <button className="btn btn-info mr-2">
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-danger mr-2">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        
                        </td>
                        
                </tr>
                <tr>
                    <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <button className="btn btn-info mr-2">
                                <i className="fas fa-map-marked-alt mr-2"></i>
                                 Ubicacion
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-success mr-2">
                                <i className="fas fa-file-alt mr-2"></i>
                                 Ver Detalle
                            </button>
                            <button className="btn btn-info mr-2">
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-danger mr-2">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                            
                        </td>
                    </tr>
                <tr>
                    <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>    
                            <button className="btn btn-info mr-2">
                                <i className="fas fa-map-marked-alt mr-2"></i>
                                 Ubicacion
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-success mr-2">
                                <i className="fas fa-file-alt mr-2"></i>
                                 Ver Detalle
                            </button>
                            <button className="btn btn-info mr-2">
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-danger mr-2">
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