import { types } from '../types/types';

const initialState = {
    usuarios: [{
        name: "Eve",
        nombre: "Evelin",
        apellido: "Santamaria",
        dni: 38615448,
        //password: '#fafafa',
        perfil: "admin",
    }],
    
};

export const usuariosReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.usuarioLoaded:
            return {
                ...state,
                usuarios: [ ...action.payload ]
            }


        default:
            return state;
    }


}
