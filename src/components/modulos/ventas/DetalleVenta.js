import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../../Navbar';
import { useParams } from 'react-router-dom';
import { ventaGetOne } from '../../../actions/ventas';

export const DetalleVenta = () => {
    
    const { remitoVenta } = useParams();
    const dispatch = useDispatch();
    const { venta } = useSelector( state => state.ventas );

    useEffect(() => {
        dispatch( ventaGetOne(remitoVenta) );
        
    }, [ dispatch ]);

    
    const { Articulos }  = venta;

    console.log(Articulos);
    


        return (
            <div>
                <Navbar/>
                <div className="container animated fadeIn faster">
                    <br></br>
                    <h3>Detalle Venta - {remitoVenta}</h3>
                    <br></br>
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Remito Venta</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Articulos</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                                
                            <tbody>
                                <tr>
                                    <td> { remitoVenta} </td>
                                    <td> { venta.fecha } </td>
                                    <td> { venta.cliente } </td>
                                    <td> 
                                        
                                    </td>
                                    <td> { venta.total } </td>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                </div>
    
    
            </div>
    
        )
    }
    




