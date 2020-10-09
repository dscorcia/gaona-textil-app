import React from 'react';


export const Usuarios = () => {

   
    return (
        <div className="container animated fadeIn faster">
            <br></br>
            <h3>Usuarios</h3>
            <br></br>
        
            <button className="btn btn-success fab">
                <i className="fas fa-plus"></i>
            </button>
            
            <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">DNI</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
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
                        <td>Thornton</td>
                        <td>@fat</td>
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
                        <td>the Bird</td>
                        <td>@twitter</td>
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
    )
}
