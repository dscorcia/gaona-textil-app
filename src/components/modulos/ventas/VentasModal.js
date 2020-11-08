import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { uiCloseModal } from '../../../actions/ui';
import { ventaClearActiveVenta, ventaStartUpdate, ventaStartAddNew } from '../../../actions/ventas';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      height                : 'auto',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root');

  const initVenta = {
    remitoVenta: '',
    fecha: new Date().getTime(),
    cliente: '',
    articulos: [],
    subtotalArt: 0,
    total: 0
}

export const VentasModal = () => {

    const { modalOpen } = useSelector( state => state.ui );
    const { activeVenta } = useSelector( state => state.ventas );
    const dispatch = useDispatch();

    const [formValues, setFormValues] = useState( initVenta );

    const { remitoVenta, fecha, cliente, articulos, subtotalArt, total } = formValues;

    useEffect(() => {
        if ( activeVenta ) {
            setFormValues( activeVenta );
        } else {
            setFormValues( initVenta );
        }
    }, [activeVenta, setFormValues])


    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const closeModal = () => {
        dispatch( uiCloseModal() );
        dispatch( ventaClearActiveVenta() );
        setFormValues( initVenta );
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

       if ( activeVenta ) {
            dispatch( ventaStartUpdate( formValues ) );
        } 
        else {
            dispatch( ventaStartAddNew(formValues) );
        }
        closeModal();
    }

    return (
        <Modal
        isOpen={ modalOpen }
        onRequestClose={ closeModal }
        style={ customStyles }
        closeTimeoutMS={ 200 }
        className="modal"
        overlayClassName="modal-fondo"
        >
          <h1> Nueva Venta </h1>
            <hr />
            <form className="container" 
                onSubmit={ handleSubmitForm }>
               

               <div className="form-group">
                    <label>Remito Venta</label>
                    <input 
                        className="form-control"
                        placeholder="Remito"
                        name="remitoVenta"
                        autoComplete="off"
                        value={ remitoVenta || ""}
                        onChange={ handleInputChange }
                    />
                </div>
                
                <div className="form-group">
                    <label>Fecha</label>
                    <input 
                        className="form-control" 
                        placeholder="Fecha"
                        autoComplete="off"
                        name="fecha"
                        value={ fecha || "" }
                        onChange={ handleInputChange } />
                </div>
                <div className="form-group">
                    <label>Cliente</label>
                    <input 
                        className="form-control" 
                        placeholder="Cliente"
                        autoComplete="off"
                        name="cliente"
                        value={ cliente || ""}
                        onChange={ handleInputChange } />
                </div>
                <div className="form-group">
                    <label>Articulos</label>
                    <input 
                        className="form-control" 
                        placeholder="Articulos"
                        autoComplete="off"
                        name="articulos"
                        value={ articulos || ""}
                        onChange={ handleInputChange } />
                </div>

                <div className="form-group">
                    <label>Subtotal</label>
                    <input 
                        className="form-control" 
                        placeholder="Subtotal"
                        autoComplete="off"
                        name="subtotalArt"
                        value={ subtotalArt || ""}
                        onChange={ handleInputChange } />
                </div>

                <div className="form-group">
                    <label>Total</label>
                    <input 
                        className="form-control" 
                        placeholder="Total"
                        autoComplete="off"
                        name="total"
                        value={ total || ""}
                        onChange={ handleInputChange } />
                </div>
            
            <button
            type="submit"
            className="btn btn-info btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

            </form> 
      
      </Modal>

      
    )


}

