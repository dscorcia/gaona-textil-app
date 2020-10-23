import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../../actions/ui';
import { usuarioStartLoading, usuarioClearActiveUsuario, usuarioSetActive, usuarioDeleted } from '../../../actions/usuarios';
import { Navbar } from '../../Navbar';
import { UsuariosModal } from '../usuarios/UsuariosModal';


export const Usuarios = () => {

    const dispatch = useDispatch();

    const { usuarios, activeUsuario } = useSelector( state => state.usuarios );


    //console.log(usuarios);

    useEffect(() => {
        dispatch( usuarioStartLoading() );
        
    }, [ dispatch ]);


    const onOpenModal = (e) => {
        // console.log(e);
        dispatch( uiOpenModal() );
    }

    const onSelectUsuario = (e) => {
   //     dispatch( usuarioSetActive( e ) );
        //console.log(e);
        //console.log("click!");
    }



    function onModifyUsuario(usuario){

        dispatch( usuarioSetActive(usuario ) );
        dispatch( uiOpenModal() );

    }

    function onDeleteUsuario(usuario){
        dispatch( usuarioSetActive(usuario ) );
        dispatch( usuarioDeleted(usuario) );
    }

   
    return (
        <div>
            <Navbar/>
        
        <div className="container animated fadeIn faster">
            <br></br>
            <h3>Usuarios</h3>
        
            <div className="bot-sum" onClick={ onOpenModal }>
                <button className="btn btn-success fab">
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            
            <table className="table" >
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
                                    <button className="btn btn-info mr-2" onClick={ ()=> onModifyUsuario(usuario)}>
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button className="btn btn-danger" onClick={ ()=> onDeleteUsuario(usuario)}>
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
      


        <UsuariosModal />
        </div>
    )
}
