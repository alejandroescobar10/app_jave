import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import '../../Styles/StylesAdmin/FormCrearUsuario.css';

const CrearUsuarioForm = ({ onBackClick }) => {
    const handleCreateUserClick = () => {
        if (typeof onBackClick === 'function') {
            onBackClick();
        }
    };
    
    // Contenedor Principal 
    return (
        <div className='CrearUsuario-wrapper'>
            <form action="">
                {/* Titulo (Registro) */}
                <div className="title">
                    <h1>Register</h1>
                </div>

                {/* Boton (ID Usario) */}
                <div className='input-box'>
                    <input type="text"placeholder='Identificacion Usuario' required />
                    <FaUser className='icon' />
                </div>

                {/* Boton (ID) */}
                <div className='input-box'>
                    <input type="text"placeholder='Identificacion' required />
                    <FaUser className='icon' />
                </div>

                {/* Boton (Nombre) */}
                <div className="input-box">
                    <input type="text" placeholder='Nombre' required />
                    <FaUser className='icon' />
                </div>

                {/* Boton (Apellido) */}
                <div className="input-box">
                    <input type="text" placeholder='Apellido' required />
                    <FaUser className='icon' />
                </div>

                {/* Boton (Numero de celular) */}
                <div className="input-box">
                    <input type="text" placeholder='Numero de celular' required />
                    <MdOutlinePhoneIphone className='icon' />
                </div>

                {/* Boton (Correo electronico) */}
                <div className='input-box'>
                    <input type='text' placeholder='Correo electronico' required />
                    <MdEmail className='icon' />
                </div>

                {/* Boton (Contraseña nueva) */}
                <div className="input-box">
                    <input type="password" placeholder='Contraseña' required />
                    <FaLock className='icon' />
                </div>

                {/* Botón (Para volver atrás) */}
                <div className="top-right-button">
                <button type="button" onClick={handleCreateUserClick}>Volver</button>
                </div>

                {/* Botón (Crear Usuario) */}
                <div className='button'>
                    <button type="submit">Create User</button>
                </div>
            </form>
        </div>
    );
};

export default CrearUsuarioForm;
