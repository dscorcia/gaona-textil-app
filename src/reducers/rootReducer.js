import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { usuariosReducer } from './usuariosReducer';
import { clientesReducer } from './clientesReducer';
import { ventasReducer } from './ventasReducer';


export const rootReducer = combineReducers({

    ui: uiReducer,
    auth: authReducer,
    usuarios: usuariosReducer,
    clientes: clientesReducer,
    ventas: ventasReducer,
})

