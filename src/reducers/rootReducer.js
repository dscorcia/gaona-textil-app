import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { usuariosReducer } from './usuariosReducer';


export const rootReducer = combineReducers({

    ui: uiReducer,
    auth: authReducer,
    usuarios: usuariosReducer
})

