import React, { useState } from 'react';
import '../../Styles/StylesAdmin/FormBusquedaEquipo.css'; 

const BusquedaEquipo = ({ onBackClick }) => {
    // Estados para los criterios de búsqueda
    const [nombreEquipo, setNombreEquipo] = useState('');
    const [modeloEquipo, setTipoEquipo] = useState('');
    const [marcaEquipo, setMarcaEquipo] = useState('');

    // Función para manejar la búsqueda
    const handleSearch = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para buscar equipos con los criterios ingresados
        console.log('Búsqueda realizada:', { nombreEquipo, modeloEquipo, marcaEquipo });
        // Por ahora, solo mostramos los criterios de búsqueda en la consola
    };

    const handleBackClick = () => {
        if (typeof onBackClick === 'function') {
            onBackClick();
        }
    };

    return (
        <div className="BusquedaEquipo-wrapper">
            <h1>Search Equipment</h1>
            <form onSubmit={handleSearch}>
                <div className="form-group">
                    <label htmlFor="nombreEquipo">Numero de Serie:</label>
                    <input
                        type="text"
                        id="nombreEquipo"
                        value={nombreEquipo}
                        onChange={(e) => setNombreEquipo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="modeloEquipo">Modelo:</label>
                    <input
                        type="text"
                        id="modeloEquipo"
                        value={modeloEquipo}
                        onChange={(e) => setTipoEquipo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="marcaEquipo">Marca:</label>
                    <input
                        type="text"
                        id="marcaEquipo"
                        value={marcaEquipo}
                        onChange={(e) => setMarcaEquipo(e.target.value)}
                    />
                </div>
                <button type="submit">Search</button>
            </form>
            <button onClick={handleBackClick}>Come Back</button> {/* Botón para volver a la vista del administrador */}
        </div>
    );
};

export default BusquedaEquipo;
