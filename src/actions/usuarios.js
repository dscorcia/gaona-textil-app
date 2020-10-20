import { types } from "../types/types";



export const usuarioAddNew = (usuario) => ({
    type: types.usuarioAddNew,
    payload: usuario
});


export const usuarioUpdated = ( usuario ) => ({
    type: types.usuarioUpdated,
    payload: usuario
});


export const usuarioDeleted = () => ({ type: types.usuarioDeleted });

export const usuarioStartLoading = () => {
    return (dispatch) =>{
        
    }
}
