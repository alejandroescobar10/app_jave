import React from 'react';
import { FaComputer } from "react-icons/fa6";
import '../../Styles/StylesAdmin/FormCrearEquipo.css';

const CrearEquipoForm = ({ onBackClick }) => {
    const handleCreateUserClick = () => {
        if (typeof onBackClick === 'function') {
            onBackClick();
        }
    };
    
    // Contenedor Principal 
    return (
        <div className='CrearEquipo-wrapper'>
            <form action="">
                {/* Titulo (Registro) */}
                <div className="title">
                    <h1>Register</h1>
                </div>

                {/* Boton (Numero de Serie) */}
                <div className='input-box'>
                    <input type="text"placeholder='Numero de Serie' required />
                    <FaComputer  className='icon' />
                </div>

                {/* Boton (Marca) */}
                <div className='input-box'>
                    <input type="text"placeholder='Marca' required />
                    <FaComputer  className='icon' />
                </div>

                {/* Boton (Modelo) */}
                <div className="input-box">
                    <input type="text" placeholder='Modelo' required />
                    <FaComputer  className='icon' />
                </div>

                {/* Boton (Especificaciones Tecnicas) */}
                <div className="input-box">
                    <input type="text" placeholder='Especificaciones Tecnicas' required />
                    <FaComputer  className='icon' />
                </div>

                {/* Botón (Para volver atrás) */}
                <div className="top-right-button">
                <button type="button" onClick={handleCreateUserClick}>Volver</button>
                </div>

                {/* Botón (REGISTRO DE EQUIPO) */}
                <div className='button'>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default CrearEquipoForm;
