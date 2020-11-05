import { types } from '../types/types';
import moment from 'moment';

const initialState = {
    ventas: [{
        remitoVenta: 0,
        fecha: new Date().getTime(),
        cliente: "",
        articulos: [],
        subtotalArt: 0,
        total: 0
    }],
    activeVenta: null
    
};

export const ventasReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.ventaLoaded:
            return {
                ...state,
                ventas: [ ...action.payload ]
            }
        
        case types.ventaSetActive:
            return {
                ...state,
                activeVenta: action.payload
            }
            
        case types.ventaAddNew:
            return {
                ...state,
                ventas: [
                    ...state.ventas,
                    action.payload
                ]
            }
        
        case types.ventaClearActiveVenta:
            return {
                ...state,
                activeVenta: null
            }
    
        case types.ventaUpdated:
            return {
                ...state,
                ventas: state.ventas.map(
                    e => ( e.remitoVenta === action.payload.remitoVenta ) ? action.payload : e
                )
            }
        
        case types.ventaDeleted:
            return {
                ...state,
                venta: state.ventas.filter(
                    e => ( e.remitoVenta !== state.activeVenta.remitoVenta )
                ),
                activeVenta: null

                }
        
        default:
            return state;
    }

}