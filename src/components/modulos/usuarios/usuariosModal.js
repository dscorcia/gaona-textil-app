import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root');

export const usuariosModal = () => {

    const [formValues, setFormValues] = useState( initEvent );

    const { usuario, nombre, apellido, dni, contraseña, perfil } = formValues;

    const [ usuarioValid, setUsuarioValid ] = useState(true);

    const [ passValid, setPassValid ] = useState(true);

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const closeModal = () => {
        // TODO: cerrar el modal
        dispatch( uiCloseModal() );
        dispatch( eventClearActiveEvent() );
        setFormValues( initEvent );
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if ( usuario.trim().length < 2 ) {
            return setUsuarioValid(false);
        }
        if ( usuario.trim().length < 6 ) {
            return setPassValid(false);
        }
        setUsuarioValid(true);
        setPassValid(true);
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
          <h1> Nuevo usuario </h1>
            <hr />
            <form className="container" 
                onSubmit={ handleSubmitForm }>
                <div className="form-group">
                    <label>Usuario</label>
                    <input 
                        className={ `form-control ${ !usuarioValid && 'is-invalid' } `}
                        placeholder="Usuario"
                        value={ usuario }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                        className="form-control" 
                        placeholder="Nombre"
                        value={ nombre }
                        onChange={ handleInputChange } />
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input 
                        className="form-control" 
                        placeholder="Apellido"
                        value={ apellido }
                        onChange={ handleInputChange } />
                </div>
                <div className="form-group">
                    <label>DNI</label>
                    <input 
                        className="form-control" 
                        placeholder="DNI"
                        value={ dni }
                        onChange={ handleInputChange } />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input 
                        className={ `form-control ${ !passValid && 'is-invalid' } `}
                        placeholder="Contraseña"
                        value={ contraseña }
                        onChange={ handleInputChange } />
                </div>
                <div className="form-group">
                    <label>Perfil</label>
                    <input 
                        className="form-control" 
                        placeholder="Perfil"
                        value={ perfil }
                        onChange={ handleInputChange } />
                </div>
            
            <button
            type="submit"
            className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

            </form> 
      
      </Modal>

      
    )
}
