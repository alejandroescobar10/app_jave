import React, { useState } from 'react';
import './StylesAdmin/FormAdmin.css';
import './StylesAdmin/FormActualizarUsuario.css';
import UpdateUserForm from './FormActualizarUsuario';

const FormAdmin = () => {
    // Funcion para controlar la visualización del formulario (Actualizar Usuario)
    const [showUserUpdateForm, setShowUserUpdateForm] = useState(false);

    // Funcion para mostrar el formulario (Actualizar Usuario) cuando se hace clic en "Actualizar Usuario"
    const handleUpdateUserClick = () => {
        setShowUserUpdateForm(true);
    };

    // Funcion para ocultar el formulario Crear Usuario cuando se hace clic en "Volver" desde ese formulario
    const handleBackToAdminFromUpdateUser = () => {
        setShowUserUpdateForm(false);
    };
    return (
        <div className='Admin-wrapper'>
            {showUserUpdateForm ? (
                // Muestra el formulario Crear Usuario si showUserUpdateForm es true
                <UpdateUserForm onBackClick={handleBackToAdminFromUpdateUser} />
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
                            <button type="submit">Equipment Registration</button>
                        </div>

                        {/* Boton Busquedad de Equipos */}
                        <div className='button'>
                            <button type="submit">Search of equipment</button>
                        </div>

                        {/* Boton Solicitud de Prestamos */}
                        <div className='button'>
                            <button type="submit">Solicitude of loan</button>
                        </div>

                        {/* Boton Fecha de Retorno */}
                        <div className='button'>
                            <button type="submit">Date of return</button>
                        </div>

                        {/* Boton Devolucion de Equipos */}
                        <div className='button'>
                            <button type="submit">Return of equipment</button>
                        </div>

                        {/* Boton Renovacion */}
                        <div className='button'>
                            <button type="submit">Renewal</button>
                        </div>

                        {/* Boton Multas por Retraso */}
                        <div className='button'>
                            <button type="submit">Fines by delay</button>
                        </div>

                        {/* Boton Reservaciones */}
                        <div className='button'>
                            <button type="submit">Bookings</button>
                        </div>

                        {/*  Boton Lista de Espera */}
                        <div className='button'>
                            <button type="submit">Waiting list</button>
                        </div>

                        {/*  Boton Estado del Equipo */}
                        <div className='button'>
                            <button type="submit">State of equipment</button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};
export default FormAdmin;
