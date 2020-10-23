import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";



export const usuarioAddNew = (usuario) => ({
    type: types.usuarioAddNew,
    payload: usuario
});


export const usuarioSetActive = (usuario) => ({
    type: types.usuarioSetActive,
    payload: usuario
});




export const usuarioClearActiveUsuario = () => ({ type: types.usuarioClearActiveUsuario });


export const usuarioUpdated = ( usuario ) => ({
    type: types.usuarioUpdated,
    payload: usuario
});


export const usuarioDeleted = (usuario) => ({ 
    type: types.usuarioDeleted,
    payload: usuario
 });


export const usuarioStartLoading = () => {
    return async (dispatch) =>{
        try {
            const resp = await fetchConToken( 'auth/usuarios' );
            const body = await resp.json();

            //console.log(body);

            const usuarios = body.usuarios;
            console.log(usuarios);
            dispatch (usuarioLoaded(usuarios))
            

        }catch (error){
            console.log(error)

        }
    }
}




const usuarioLoaded = (usuarios) => ({
    type: types.usuarioLoaded,
    payload: usuarios
})
