import { combineReducers } from 'redux';

//import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { usuariosReducer } from './usuariosReducer';


export const rootReducer = combineReducers({

    auth: authReducer,
    usuarios: usuariosReducer
})

