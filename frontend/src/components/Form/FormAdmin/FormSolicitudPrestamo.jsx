import React, { useState } from 'react';
import '../../Styles/StylesAdmin/FormSolicitudPrestamo.css'; 

const SolicitudPrestamoAdmin = ({ onBackClick }) => {
    // Estados para los datos del préstamo
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [equipoPrestamo, setEquipoPrestamo] = useState('');
    const [fechaPrestamo, setFechaPrestamo] = useState('');
    const [motivoPrestamo, setMotivoPrestamo] = useState('');
    const [estadoPrestamo, setEstadoPrestamo] = useState('Pendiente');

    // Función para manejar el envío de la solicitud
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar la solicitud de préstamo
        console.log('Solicitud de préstamo enviada:', { nombreUsuario, equipoPrestamo, fechaPrestamo, motivoPrestamo, estadoPrestamo });
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
                    <label htmlFor="nombreUsuario">Nombre de Usuario:</label>
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
                <div className="form-group">
                    <label htmlFor="estadoPrestamo">Estado del préstamo:</label>
                    <select
                        id="estadoPrestamo"
                        value={estadoPrestamo}
                        onChange={(e) => setEstadoPrestamo(e.target.value)}
                    >
                        <option value="Pendiente">Pendiente</option>
                        <option value="Aprobado">Aprobado</option>
                        <option value="Rechazado">Rechazado</option>
                    </select>
                </div>
                <div className="button-group">
                    <button type="submit">Enviar Solicitud</button>
                    <button type="button" onClick={handleBackClick}>Volver</button>
                </div>
            </form>
        </div>
    );
};

export default SolicitudPrestamoAdmin;
