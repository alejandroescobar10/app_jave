import React, { useState } from 'react';
// IMPORTACIONES DE LOS FORMULARIOS CSS //
import '../../Styles/StylesAdmin/FormAdmin.css';
import '../../Styles/StylesAdmin/FormActualizarUsuario.css';
import '../../Styles/StylesAdmin/FormRegistroEquipo.css';
import '../../Styles/StylesAdmin/FormBusquedaEquipo.css';
import '../../Styles/StylesAdmin/FormSolicitudPrestamo.css'; 
// IMPORTACIONES DE LOS COMPONENTES DE LOS FORMULARIOS //
import UpdateUserForm from './FormActualizarUsuario';
import RegistroEquipoForm from './FormRegistroEquipo';
import BusquedaEquipo from './FormBusquedaEquipo';
import SolicitudPrestamo from './FormSolicitudPrestamo'; 

const FormAdmin = () => {
    const [showUserUpdateForm, setShowUserUpdateForm] = useState(false);
    const [showEquipmentRegistrationForm, setShowEquipmentRegistrationForm] = useState(false);
    const [showEquipmentSearchForm, setShowEquipmentSearchForm] = useState(false);
    const [showLoanRequestForm, setShowLoanRequestForm] = useState(false); // Estado para mostrar la vista de solicitud de préstamos

    const handleUpdateUserClick = () => {
        setShowUserUpdateForm(true);
        setShowEquipmentRegistrationForm(false);
        setShowEquipmentSearchForm(false);
        setShowLoanRequestForm(false); // Ocultar la vista de solicitud de préstamos al cambiar a otra vista
    };

    const handleBackToAdminFromUpdateUser = () => {
        setShowUserUpdateForm(false);
    };

    const handleEquipmentRegistrationClick = () => {
        setShowEquipmentRegistrationForm(true);
        setShowUserUpdateForm(false);
        setShowEquipmentSearchForm(false);
        setShowLoanRequestForm(false); // Ocultar la vista de solicitud de préstamos al cambiar a otra vista
    };

    const handleBackToAdminFromEquipmentRegistration = () => {
        setShowEquipmentRegistrationForm(false);
    };

    const handleEquipmentSearchClick = () => {
        setShowEquipmentSearchForm(true);
        setShowUserUpdateForm(false);
        setShowEquipmentRegistrationForm(false);
        setShowLoanRequestForm(false); // Ocultar la vista de solicitud de préstamos al cambiar a otra vista
    };

    const handleBackToAdminFromEquipmentSearch = () => {
        setShowEquipmentSearchForm(false);
    };

    const handleLoanRequestClick = () => {
        setShowLoanRequestForm(true);
        setShowUserUpdateForm(false);
        setShowEquipmentRegistrationForm(false);
        setShowEquipmentSearchForm(false);
    };

    const handleBackToAdminFromLoanRequest = () => {
        setShowLoanRequestForm(false);
    };

    return (
        <div className='Admin-wrapper'>
            {showUserUpdateForm ? (
                <UpdateUserForm onBackClick={handleBackToAdminFromUpdateUser} />
            ) : showEquipmentRegistrationForm ? (
                <RegistroEquipoForm onBackClick={handleBackToAdminFromEquipmentRegistration} />
            ) : showEquipmentSearchForm ? (
                <BusquedaEquipo onBackClick={handleBackToAdminFromEquipmentSearch} />
            ) : showLoanRequestForm ? (
                <SolicitudPrestamo onBackClick={handleBackToAdminFromLoanRequest} />
            ) : (
                <form action=''>

                    {/* Titulo (Panel de Administrador) */}
                    <div className='title'>
                        <h1>Administrator Panel</h1>
                    </div>

                    {/* Funciones para los Botones */}
                    <div className='container-button'>
                        {/* Boton Actualizar Usuarios */}
                        <div className='button'>
                            <button onClick={handleUpdateUserClick}>Update User</button>
                        </div>

                        {/* Boton Registro de Equipos */}
                        <div className='button'>
                            <button onClick={handleEquipmentRegistrationClick}>Equipment Registration</button>
                        </div>

                        {/* Boton Busquedad de Equipos */}
                        <div className='button'>
                            <button onClick={handleEquipmentSearchClick}>Search Equipment</button>
                        </div>

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
export default FormAdmin;
