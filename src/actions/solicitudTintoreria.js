import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2';

/** REMITOS TINTORERIA */

export const solTAddNew = (solicitud) => ({
    type: types.solTAddNew,
    payload: solicitud
});

export const solTSetActive = (solicitud) => ({
    type: types.solTSetActive,
    payload: solicitud
});

export const solTClearActiveSol = () => ({ type: types.solTClearActiveSol });

export const solTUpdated = ( solicitud ) => ({
    type: types.solTUpdated,
    payload: solicitud
});

export const solTDeleted = () => ({ 
    type: types.solTDeleted
 });

 const solTLoaded = (solicitud) => ({
    type: types.solTLoaded,
    payload: solicitud
});

const remitoTLoadedOne = (solicitud) => ({
    type: types.solTLoadedOne,
    payload: solicitud
});


