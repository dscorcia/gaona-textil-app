import React from 'react';
import { Navbar } from '../../Navbar';

export const RemitoHilanderia = () => {
    return (
        <div>
            <Navbar/>

            <div className="container animated fadeIn faster">
            <br></br>
            <h3>Remitos</h3>
            <br></br>            
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Remito Hilanderia</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Factura</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                    </tbody>
                </table>
            
            </div>
        </div>
    )
}
