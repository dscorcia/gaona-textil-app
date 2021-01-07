import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2';

/** REMITOS HILANDERIA */

export const remitoHAddNew = (remito) => ({
    type: types.remitoHAddNew,
    payload: remito
});

export const remitoHSetActive = (remito) => ({
    type: types.remitoHSetActive,
    payload: remito
});

export const remitoHClearActiveRemito = () => ({ type: types.remitoHClearActiveRemito });

export const remitoHUpdated = ( remito ) => ({
    type: types.remitoHUpdated,
    payload: remito
});

export const remitoHDeleted = () => ({ 
    type: types.remitoHDeleted
 });

 const remitoHLoaded = (remito) => ({
    type: types.remitoHLoaded,
    payload: remito
});

const remitoHLoadedOne = (remito) => ({
    type: types.remitoHLoadedOne,
    payload: remito
});


export const remitoHStartLoading = () => {
    return async (dispatch) =>{
        try {
            const resp = await fetchConToken( 'remitoHilanderia/remitos' );
            const body = await resp.json();
            console.log(body);

            const remitos = body.remitosHilanderia;
            console.log(remitos);
            dispatch (remitoHLoaded(remitos))

        }catch (error){
            console.log(error)
        }
    }
}

export const remitoHStartDelete = () => {
    return async ( dispatch, getState ) => {

        const { remitoHilanderia} = getState().remitosH.activeRemito;
        try {
            const resp = await fetchConToken(`remitoHilanderia/delete/${ remitoHilanderia }`, {}, 'DELETE' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( remitoHDeleted() );
                Swal.fire(`Remito ${remitoHilanderia} Eliminado`, body.msg, 'success');
                setInterval(function(){ window.location.reload(); }, 2000);
                
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error)
        }

    }
}

export const remitoHStartAddNew = ( remito ) => {
    return async( dispatch, getState ) => {

        try {
            const resp = await fetchConToken('remitoHilanderia/new', remito, 'POST');
            const body = await resp.json();
            
            if ( body.ok ) {
                dispatch( remitoHAddNew( remito) );
                Swal.fire(`Remito creado con exito!`, '', 'success');
                //setInterval(function(){ window.location.reload(); }, 1000);
                dispatch( remitoHStartLoading());
            }
            else {
            Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const remitoHStartUpdate = ( remito ) => {

    return async(dispatch) => {

        try {
            const resp = await fetchConToken(`remitoHilanderia/modify/${ remito.remitoHilanderia }`, remito, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( remitoHUpdated( remito ) );
                Swal.fire(`Remito modificado con exito!`, '', 'success');
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error)
        }
    }
}

export const remitoHGetOne = ( id ) => {

    return async (dispatch) =>{
        try {
            const resp = await fetchConToken( `remitoHilanderia/remitoUnico/${ id }`);
            const body = await resp.json();
            const remito = body.remitosHilanderia;
            console.log(remito);
            dispatch (remitoHLoadedOne(remito));

        }catch (error){
            console.log(error)
        }
    }
}
