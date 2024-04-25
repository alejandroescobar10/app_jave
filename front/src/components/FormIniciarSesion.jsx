import React, { useState } from 'react';
import './StylesLogin/FormIniciarSesion.css';
import './StylesLogin/FormRestablecer.css';
import { FaUser, FaLock } from "react-icons/fa";
import RestablecerFrom from './FormRestablecer';

const LoginForm = () => {
    // Funcion para controlar la visualización del formulario de restablecer contraseña
    const [showResetPasswordForm, setShowResetPasswordForm] = useState(false); 

    // Funcion para mostrar el formulario de restablecer contraseña cuando se hace clic en "¿Has olvidado tu contraseña?"
    const handleForgotPasswordClick = () => {
        setShowResetPasswordForm(true); 
    };

    // Funcion para ocultar el formulario de restablecer contraseña cuando se hace clic en "Volver" desde ese formulario
    const handleBackToLoginFromReset = () => {
        setShowResetPasswordForm(false); 
    };

    return (
        <div className='Login-wrapper'>
            {showResetPasswordForm ? (
                // Muestra el formulario de restablecimiento de contraseña si showResetPasswordForm es true
                <RestablecerFrom onBackClick={handleBackToLoginFromReset} /> 
            ) : (
                <form action="">
                    {/* Titulo (Pontifica Universidad JAVERIANA) */}
                    <div className='title'>
                        <h1>Pontificia Universidad JAVERIANA</h1>
                    </div>
                    
                    {/* Boton para (Numero de usuario) */}
                    <div className="input-box">
                        <input type="text" placeholder='Nombre de usuario' required />
                        <FaUser className='icon' />
                    </div>

                    {/* Boton para (Contraseña) */}
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    {/* Agrega un enlace para restablecer la contraseña */}
                    <div className="remember-forgot">
                        <a href="#" onClick={handleForgotPasswordClick}>¿Forgot password?</a> 
                    </div>

                    {/* Boton para (Acceder) */}
                    <button type="submit">Acceder</button>
                </form>
            )}
        </div>
    );
};

export default LoginForm;
