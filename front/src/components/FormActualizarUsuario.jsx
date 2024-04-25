import React, { useState } from 'react';
import './StylesAdmin/FormActualizarUsuario.css';
import './StylesAdmin/FormCrearUsuario.css';
import CrearUsuarioForm from './FormCrearUsuario'

const UpdateUserForm = ({ onBackClick }) => {
    // Funcion para controlar la visualización del formulario de Crear Usuario
    const [showUserCreateForm, setShowUserCreateForm] = useState(false);

    // Funcion para mostrar el formulario Crear Usuario cuando se hace clic en "Crear Usuario"
    const handleCreateUserClick = () => {
        setShowUserCreateForm(true);
    };

    // Funcion para ocultar el formulario Crear Usuario cuando se hace clic en "Volver" desde ese formulario
    const handleBackToUpdateFromCreateUser = () => {
        setShowUserCreateForm(false);
    };

    const handleBackClick = () => {
        if (typeof onBackClick === 'function') {
            onBackClick();
        }
    };
    return (
        <div className='ActualizarUsuario-wrapper'>
            {showUserCreateForm ? (
                // Muestra el formulario Crear Usuario si showUserCreateForm es true
                <CrearUsuarioForm onBackClick={handleBackToUpdateFromCreateUser} />
            ) : (
                <form action="">

                    {/* Titulo (Actualizar Usuario) */}
                    <div className='title'>
                        <h1>Update user</h1>
                    </div>

                    {/* Funciones para los Botones */}
                    <div className='container-button'>

                        {/* Botón para Crear Usuario */}
                        <div className='button'>
                            <button onClick={handleCreateUserClick}>Create User</button>
                        </div>

                        {/* Boton para Borrar Usuario */}
                        <div className='button'>
                            <button>Delete user</button>
                        </div>

                        {/* Boton para Editar Usuario */}
                        <div className='button'>
                            <button>Edit user</button>
                        </div>

                        {/* Boton para regresar al Panel del Administrador */}
                        <div className='button'>
                            <button type="button" onClick={handleBackClick}>Come Back</button>
                        </div>
                    </div>

                    {/* Tabla */}
                    <div className='container-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID User</th>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Correo</th>
                                    <th>Celular</th>
                                    <th>Contraseña</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>000406425</td>
                                    <td>1109920443</td>
                                    <td>Fabian Andres</td>
                                    <td>Chagueza Gonzalez</td>
                                    <td>Fabian@ejemplo.com</td>
                                    <td>3103790644</td>
                                    <td>123456</td>
                                </tr>
                                <tr>
                                    <td>000406425</td>
                                    <td>1109920443</td>
                                    <td>Fabian Andres</td>
                                    <td>Chagueza Gonzalez</td>
                                    <td>Fabian@ejemplo.com</td>
                                    <td>3103790644</td>
                                    <td>123456</td>
                                </tr>
                                <tr>
                                    <td>000406425</td>
                                    <td>1109920443</td>
                                    <td>Fabian Andres</td>
                                    <td>Chagueza Gonzalez</td>
                                    <td>Fabian@ejemplo.com</td>
                                    <td>3103790644</td>
                                    <td>123456</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            )}
        </div>
    );
};

export default UpdateUserForm;
