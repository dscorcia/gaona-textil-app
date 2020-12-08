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
      maxWidth             : '760px',                
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
 
    const [formValues, setFormValues] = useState( initVenta );
    const { remitoVenta, fecha, articulos, cliente, total } = formValues;
   // const [ articulos, setArticulos ] = useState( [] );

    const [formValuesArt, setFormValuesArt] = useState( initArticulo );
    const { idArticulo, descripcion, color, cantidad, precioKg, subtotalArt} = formValuesArt;

    //const articulosAux = [];
    const [articulosAux, setArticulosAux] = useState([]);

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

    const handleInputChangeArt = ({ target }) => {
        setFormValuesArt({
            ...formValuesArt,
            [target.name]: target.value
        });
    }

    const onAddArticulo = (e) => {
        e.preventDefault();
        //dispatch( uiOpenModalArt() );
        const item = {
            idArticulo,
            descripcion,
            color,
            cantidad,
            precioKg,
            subtotalArt,
        }
    
        setArticulosAux( items =>[ ...items, item ]);
        setFormValuesArt(initArticulo);
        
    }

    const closeModal = () => {
        dispatch( uiCloseModal() );
        dispatch( ventaClearActiveVenta() );
        setFormValues( initVenta );
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(articulosAux);
        articulosAux.map( art => {

           // articulos.push(art);
            //setArticulos(...articulos, art);

            setFormValues({
                ...formValues,
                articulos: articulos.push(art)
            });
            
        });

        
        
        console.log(articulos);

        console.log(formValues);

       if ( activeVenta ) {
            dispatch( ventaStartUpdate( formValues ) );
        } 
        else {
            dispatch( ventaStartAddNew(formValues) );
        }
        closeModal();
    }


    return (
        <div>
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
            
                    { articulosAux.length ? (
                        articulosAux.map( (art) => {
                        return( <li key={ art.idArticulo }> 
                                        ID Articulo: { art.idArticulo } - 
                                        Descripcion: { art.descripcion } - 
                                        Color: { art.color } -
                                        Cantidad: { art.cantidad } -
                                        Precio KG: { art.precioKg } - 
                                        Subtotal: { art.subtotalArt }  </li> )
                            
                        }) 
                    ): (
                        <span> Aun no se cargaron articulos </span> )
                    }

                  
                </div>

                
                <div>
                    <div className="form-row mb-2">
                        <div className="col">
                            <input 
                                className="form-control" 
                                placeholder="ID Articulo"
                                autoComplete="off"
                                name="idArticulo"
                                value={ idArticulo || ""}
                                onChange={ handleInputChangeArt }/>
                        </div>
                        <div className="col">
                            <input 
                                className="form-control" 
                                placeholder="Descripcion"
                                autoComplete="off"
                                name="descripcion"
                                value={ descripcion || ""}
                                onChange={ handleInputChangeArt }/>
                        </div>
                        <div className="col">
                            <input
                                className="form-control" 
                                placeholder="Color"
                                autoComplete="off"
                                name="color"
                                value={ color || ""}
                                onChange={ handleInputChangeArt }/>
                        </div>
                    </div>
                    <div className="form-row mb-2">
                        <div className="col">
                            <input
                                className="form-control" 
                                placeholder="Cantidad"
                                autoComplete="off"
                                name="cantidad"
                                value={ cantidad || ""}
                                onChange={ handleInputChangeArt }/>
                        </div>
                        <div className="col">
                            <input
                                className="form-control" 
                                placeholder="Precio KG"
                                autoComplete="off"
                                name="precioKg"
                                value={ precioKg || ""}
                                onChange={ handleInputChangeArt }/>
                        </div>
                        <div className="col">
                            <input
                                className="form-control" 
                                placeholder="Subtotal"
                                autoComplete="off"
                                name="subtotalArt"
                                value={ subtotalArt || ""}
                                onChange={ handleInputChangeArt }/>
                        </div>
                        <div className="col">
                            <button className="btn btn-success" onClick={ onAddArticulo }>
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
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
     
    </div>

    
      
    )


}

