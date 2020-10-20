import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usuarioStartLoading } from '../../../actions/usuarios';
import { Navbar } from '../../Navbar';


export const Usuarios = () => {

    const dispatch = useDispatch();

    const { usuarios } = useSelector( state => state.usuarios );

    //console.log(usuarios);

    useEffect(() => {
        dispatch( usuarioStartLoading() );
        
    }, [ dispatch ]);

   
    return (
        <div>
            <Navbar/>
        
        <div className="container animated fadeIn faster">
            <br></br>
            <h3>Usuarios</h3>
        
            <div className="bot-sum">
                <button className="btn btn-success fab">
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            
            <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Usuario</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">DNI</th>
                    <th scope="col">Perfil</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>

            <tbody>
                {
                    usuarios.map ( usuario => {
                        return(
                            <tr key={ usuario.name}>
                                <td>{ usuario.name }</td>
                                <td>{ usuario.nombre }</td>
                                <td>{ usuario.apellido }</td>
                                <td>{ usuario.dni }</td>
                                <td>{ usuario.perfil }</td>
                                <td>
                                    <button className="btn btn-info mr-2">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button className="btn btn-danger">
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>

                        )
                    })

                }
            </tbody>

        </table>
            
        </div>
        </div>
    )
}
