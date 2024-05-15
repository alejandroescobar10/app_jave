import React, { useState } from 'react';
// IMPORTACIONES DE LOS FORMULARIOS CSS //
import SolicitudPrestamo from './FormSolicitudPrestamo';
// IMPORTACIONES DE LOS COMPONENTES DE LOS FORMULARIOS //
import '../../Styles/StylesUsuario/FormUsuario.css';

const FormUsuario = () => {
    const [showLoanForm, setShowLoanForm] = useState(false);

    const handleLoanRequestClick = () => {
        setShowLoanForm(true);
    };

    const handleBackToUserFromLoanRequest = () => {
        setShowLoanForm(false);
    };

    return (
        <div className='Usuario-wrapper'>
            {showLoanForm ? (
                <SolicitudPrestamo onBackClick={handleBackToUserFromLoanRequest} />
            ) : (
                <form action=''>
                    {/* Titulo (Panel de Usuario) */}
                    <div className='title'>
                        <h1>Bienvenidos</h1>
                    </div>
                    {/* Funciones para los Botones */}
                    <div className='container-button'>
                        {/* Boton Solicitud de Prestamos */}
                        <div className='button'>
                            <button onClick={handleLoanRequestClick}>Loan Request</button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default FormUsuario;
