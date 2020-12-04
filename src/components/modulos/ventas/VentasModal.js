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
    total: 0
}

const initArticulo = {
    idArticulo: '',
    descripcion: '',
    color: '',
    cantidad: 0,
    precioKg: 0,
    subtotalArt: 0,
}

export const VentasModal = () => {

    const { modalOpen } = useSelector( state => state.ui );
    const { activeVenta } = useSelector( state => state.ventas );
    const dispatch = useDispatch();

    const [formValuesVenta, setFormValuesVenta] = useState( initVenta );
    const { remitoVenta, fecha, cliente, articulos, total } = formValuesVenta;

    const [formValuesArt, setFormValuesArt] = useState( initArticulo );
    const { idArticulo, descripcion, color, cantidad, precioKg, subtotalArt } = formValuesArt;

    useEffect(() => {
        if ( activeVenta ) {
            setFormValuesVenta( activeVenta );
        } else {
            setFormValuesVenta( initVenta );
        }
    }, [activeVenta, setFormValuesVenta])


    const handleInputChange = ({ target }) => {
        setFormValuesVenta({
            ...formValuesVenta,
            [target.name]: target.value
        });
    }

    const handleInputChangeArt = ({ target }) => {
        setFormValuesArt({
            ...formValuesArt,
            [target.name]: target.value
        });
    }

    const closeModal = () => {
        dispatch( uiCloseModal() );
        dispatch( ventaClearActiveVenta() );
        setFormValuesVenta( initVenta );
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

       if ( activeVenta ) {
            dispatch( ventaStartUpdate( formValuesVenta ) );
        } 
        else {
            dispatch( ventaStartAddNew(formValuesVenta) );
        }
        closeModal();
    }

    const handleSubmitFormArt = (e) => {
        e.preventDefault();

       console.log("entro!");
        closeModal();
    }


     const renderModalArt = () => {
         return(
            <Modal
            isOpen={ modalOpen }
            onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
            >
                <h1> Articulos </h1>
                <hr />
                <form className="container" 
                      onSubmit={ handleSubmitFormArt }>
                    
                    <div className="form-group">
                        <label> Id Articulo </label>
                        <input 
                            className="form-control"
                            placeholder="ID Articulo"
                            name="idArticulo"
                            autoComplete="off"
                            value={ idArticulo || ""}
                            onChange={ handleInputChangeArt }
                        />
                    </div>

                    <div className="form-group">
                        <label> Descripcion </label>
                        <input 
                            className="form-control"
                            placeholder="Descripcion"
                            name="descripcion"
                            autoComplete="off"
                            value={ descripcion || ""}
                            onChange={ handleInputChangeArt }
                        />
                    </div>

                    <div className="form-group">
                        <label> Color </label>
                        <input 
                            className="form-control"
                            placeholder="Color"
                            name="color"
                            autoComplete="off"
                            value={ color || ""}
                            onChange={ handleInputChangeArt }
                        />
                    </div>

                    <div className="form-group">
                        <label> Cantidad </label>
                        <input 
                            className="form-control"
                            placeholder="Cantidad"
                            name="cantidad"
                            autoComplete="off"
                            value={ cantidad || ""}
                            onChange={ handleInputChangeArt }
                        />
                    </div>

                    <div className="form-group">
                        <label> Precio KG </label>
                        <input 
                            className="form-control"
                            placeholder="Precio KG"
                            name="preciokg"
                            autoComplete="off"
                            value={ precioKg || ""}
                            onChange={ handleInputChangeArt }
                        />
                    </div>

                    <div className="form-group">
                        <label> Subtotal Articulo </label>
                        <input 
                            className="form-control"
                            placeholder="SubtotalArt"
                            name="subtotalart"
                            autoComplete="off"
                            value={ subtotalArt || ""}
                            onChange={ handleInputChangeArt }
                        />
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
                    <br></br>
                    <button className="btn btn-success" onClick={ ()=> renderModalArt()} >
                        <i className="fas fa-plus mr-2"></i>
                        Agregar Articulo
                    </button>
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

