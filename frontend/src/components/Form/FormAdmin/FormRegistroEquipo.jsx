import React, { useState } from 'react';
import '../../Styles/StylesAdmin/FormRegistroEquipo.css';
import '../../Styles/StylesAdmin/FormCrearEquipo.css';
import CrearEquipoForm from './FormCrearEquipo'; 

const RegistroEquipoForm = ({ onBackClick }) => {
    const [showEquipmentCreateForm, setShowEquipmentCreateForm] = useState(false);

    const handleCreateEquipmentClick = () => {
        setShowEquipmentCreateForm(true);
    };

    const handleBackToUpdateFromCreateEquipment = () => {
        setShowEquipmentCreateForm(false);
    };

    const handleBackClick = () => {
        if (typeof onBackClick === 'function') {
            onBackClick();
        }
    };

    return (
        <div className='RegistroEquipo-wrapper'>
            {showEquipmentCreateForm ? (
                <CrearEquipoForm onBackClick={handleBackToUpdateFromCreateEquipment} />
            ) : (
                <form action="">
                    <div className='title'>
                        <h1>Equipment Registration</h1>
                    </div>

                    <div className='container-button'>
                        <div className='button'>
                            <button onClick={handleCreateEquipmentClick}>Create Equipment</button>
                        </div>

                        <div className='button'>
                            <button>Delete Equipment</button>
                        </div>

                        <div className='button'>
                            <button>Edit Equipment</button>
                        </div>

                        <div className='button'>
                            <button type="button" onClick={handleBackClick}>Come Back</button>
                        </div>
                    </div>

                    <div className='container-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Numero de Serie</th>
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th>Especificaciones Tecnicas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>123456789</td>
                                    <td>Sony</td>
                                    <td>Vaio</td>
                                    <td>Procesador Intel® Core™ i5-1235U (frecuencia base de 1,30 GHz, hasta 4,40 GHz con tecnología Intel® Turbo Boost, 12 MB de caché, 10 núcleos)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            )}
        </div>
    );
};

export default RegistroEquipoForm;
