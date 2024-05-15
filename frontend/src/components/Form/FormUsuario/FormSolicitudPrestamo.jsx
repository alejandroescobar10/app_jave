import React, { useState } from 'react';
import '../../Styles/StylesUsuario/FormSolicitudPrestamo.css'; 

const SolicitudPrestamo = ({ onBackClick }) => {
    // Estados para los datos del préstamo
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [equipoPrestamo, setEquipoPrestamo] = useState('');
    const [fechaPrestamo, setFechaPrestamo] = useState('');
    const [motivoPrestamo, setMotivoPrestamo] = useState('');

    // Función para manejar el envío de la solicitud
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar la solicitud de préstamo
        console.log('Solicitud de préstamo enviada:', { nombreUsuario, equipoPrestamo, fechaPrestamo, motivoPrestamo });
        // Por ahora, solo mostramos los datos de la solicitud en la consola
    };

    // Función para manejar el botón de volver
    const handleBackClick = () => {
        if (typeof onBackClick === 'function') {
            onBackClick();
        }
    };

    return (
        <div className="SolicitudPrestamo-wrapper">
            <h1>Gestión de Préstamos</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombreUsuario">ID Usuario:</label>
                    <input
                        type="text"
                        id="nombreUsuario"
                        value={nombreUsuario}
                        onChange={(e) => setNombreUsuario(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="equipoPrestamo">Equipo a solicitar:</label>
                    <input
                        type="text"
                        id="equipoPrestamo"
                        value={equipoPrestamo}
                        onChange={(e) => setEquipoPrestamo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fechaPrestamo">Fecha de préstamo:</label>
                    <input
                        type="date"
                        id="fechaPrestamo"
                        value={fechaPrestamo}
                        onChange={(e) => setFechaPrestamo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="motivoPrestamo">Motivo del préstamo:</label>
                    <textarea
                        id="motivoPrestamo"
                        value={motivoPrestamo}
                        onChange={(e) => setMotivoPrestamo(e.target.value)}
                    />
                </div>
                <div className="button-group">
                    <button type="submit">Enviar Solicitud</button>
                    <button type="button" onClick={handleBackClick}>Volver</button>
                </div>
            </form>
        </div>
    );
};

export default SolicitudPrestamo;
