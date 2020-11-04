import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2';

export const ventasAddNew = (venta) => ({
    type: types.ventaAddNew,
    payload: venta
});

export const ventaSetActive = (venta) => ({
    type: types.ventaSetActive,
    payload: venta
});

export const ventaClearActiveVenta = () => ({ type: types.ventaClearActiveVenta });

export const ventaUpdated = ( venta ) => ({
    type: types.ventaUpdated,
    payload: venta
});

export const ventaDeleted = () => ({ 
    type: types.ventaDeleted
 });

 const ventaLoaded = (ventas) => ({
    type: types.ventaLoaded,
    payload: ventas
});


export const ventaStartLoading = () => {
    return async (dispatch) =>{
        try {
            const resp = await fetchConToken( 'venta/ventas' );
            const body = await resp.json();

            const ventas = body.ventas;
            console.log(ventas);
            dispatch (ventaLoaded(ventas))

        }catch (error){
            console.log(error)
        }
    }
}

export const ventaStartDelete = () => {
    return async ( dispatch, getState ) => {

        const { remitoVenta } = getState().ventas.activeVenta;
        try {
            const resp = await fetchConToken(`venta/delete/${ remitoVenta }`, {}, 'DELETE' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( ventaDeleted() );
                Swal.fire(`Venta ${remitoVenta} Eliminada`, body.msg, 'success');
                setInterval(function(){ window.location.reload(); }, 2000);
                
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error)
        }

    }
}

export const ventaStartAddNew = ( venta ) => {
    return async( dispatch, getState ) => {

        //const { uid, name } = getState().auth;

        try {
            const resp = await fetchConToken('venta/new', venta, 'POST');
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( ventaAddNew( venta ) );
                Swal.fire(`Venta creada con exito!`, '', 'success');
                //setInterval(function(){ window.location.reload(); }, 1000);
                dispatch( ventaStartLoading());
            }
            else {
            Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const ventaStartUpdate = ( venta ) => {
    return async(dispatch) => {

        try {
            const resp = await fetchConToken(`venta/modify/${ venta.remitoVenta }`, venta, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( ventaUpdated( venta ) );
                Swal.fire(`Venta modificada con exito!`, '', 'success');
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error)
        }
    }
}

