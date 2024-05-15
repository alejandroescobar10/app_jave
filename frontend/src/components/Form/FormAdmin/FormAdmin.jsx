import React, { useState } from 'react';
// IMPORTACIONES DE LOS FORMULARIOS CSS //
import '../../Styles/StylesAdmin/FormAdmin.css';
import '../../Styles/StylesAdmin/FormActualizarUsuario.css';
import '../../Styles/StylesAdmin/FormRegistroEquipo.css';
import '../../Styles/StylesAdmin/FormBusquedaEquipo.css';
// IMPORTACIONES DE LOS COMPONENTES DE LOS FORMULARIOS //
import UpdateUserForm from './FormActualizarUsuario';
import RegistroEquipoForm from './FormRegistroEquipo';
import BusquedaEquipo from './FormBusquedaEquipo';

const FormAdmin = () => {
    const [showUserUpdateForm, setShowUserUpdateForm] = useState(false);
    const [showEquipmentRegistrationForm, setShowEquipmentRegistrationForm] = useState(false);
    const [showEquipmentSearchForm, setShowEquipmentSearchForm] = useState(false);

    const handleUpdateUserClick = () => {
        setShowUserUpdateForm(true);
        setShowEquipmentRegistrationForm(false);
        setShowEquipmentSearchForm(false);
    };

    const handleBackToAdminFromUpdateUser = () => {
        setShowUserUpdateForm(false);
    };

    const handleEquipmentRegistrationClick = () => {
        setShowEquipmentRegistrationForm(true);
        setShowUserUpdateForm(false);
        setShowEquipmentSearchForm(false);
    };

    const handleBackToAdminFromEquipmentRegistration = () => {
        setShowEquipmentRegistrationForm(false);
    };

    const handleEquipmentSearchClick = () => {
        setShowEquipmentSearchForm(true);
        setShowUserUpdateForm(false);
        setShowEquipmentRegistrationForm(false);
    };

    const handleBackToAdminFromEquipmentSearch = () => {
        setShowEquipmentSearchForm(false);
    };

    return (
        <div className='Admin-wrapper'>
            {showUserUpdateForm ? (
                <UpdateUserForm onBackClick={handleBackToAdminFromUpdateUser} />
            ) : showEquipmentRegistrationForm ? (
                <RegistroEquipoForm onBackClick={handleBackToAdminFromEquipmentRegistration} />
            ) : showEquipmentSearchForm ? (
                <BusquedaEquipo onBackClick={handleBackToAdminFromEquipmentSearch} />
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
                            <button onClick={handleEquipmentSearchClick}>Search of equipment</button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default FormAdmin;
