import React from 'react'

export const Stock = () => {
    return (
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
                    <th scope="col">ID Articulo</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Color</th>
                    <th scope="col">Cantidad</th>
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
                           
                        </td>
                </tr>
            </tbody>

        </table>
            
        </div>
    )
}
