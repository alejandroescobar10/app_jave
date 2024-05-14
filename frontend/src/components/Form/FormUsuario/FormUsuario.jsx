import React from 'react';
// IMPORTACIONES DE LOS FORMULARIOS CSS //
import '../../Styles/StylesUsuario/FormUsuario.css';
import '../../Styles/StylesAdmin/FormSolicitudPrestamo.css';
// IMPORTACIONES DE LOS COMPONENTES DE LOS FORMULARIOS //


const FormUsuario = () => {
    
    return (
        <div className='Usuario-wrapper'>
                <form action=''>

                    {/* Titulo (Panel de Administrador) */}
                    <div className='title'>
                        <h1>BIENVEINIDOS</h1>
                    </div>

                    {/* Funciones para los Botones */}
                    <div className='container-button'>

                        {/* Boton Solicitud de Prestamos */}
                        <div className='button'>
                            <button>Loan Request</button>
                        </div>
                    </div>
                </form>
        </div>
    );
};
export default FormUsuario;
