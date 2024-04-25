import React from 'react';
import './StylesLogin/FormRestablecer.css';
import { FaLock, FaUser} from "react-icons/fa";

const RestablecerFrom = ({ onBackClick }) => {
    const handleBackClick = () => {
        if (typeof onBackClick === 'function') {
            onBackClick();
        }
    };

    // Contenedor Principal 
    return (
        <div className='RestablecerContraseña-wrapper'>
            <form action="">
                {/* Titulo (Restablecer Contraseña) */}
                <div className="title">
                    <h1>Restablecer Contraseña</h1>
                </div>

                {/* Boton para (Numero de usuario) */}
                <div className="input-box">
                    <input type="text" placeholder='Nombre de usuario' required />
                    <FaUser className='icon' />
                </div>

                {/* Boton para (Contraseña Nueva) */}
                <div className="input-box">
                    <input type="password" placeholder='Contraseña nueva' required />
                    <FaLock className='icon' />
                </div>

                {/* Boton para volver al login (Iniciar Sesion) */}
                <div className="top-right-button">
                    <button type="button" onClick={handleBackClick}>Iniciar Sesion</button>
                </div>

                {/* Boton para (Restablecer) */}
                <button type="submit">Restablecer</button>
            </form>
        </div>
    );
};

export default RestablecerFrom;
