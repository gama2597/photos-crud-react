// src/components/PhotoItem.js
import React, { useState } from 'react';
import Button from './Layout/Button/Button';

function PhotoItem({ photo, onEdit, onDelete }) {
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

    // Función para abrir el modal de confirmación
    function handleDeleteClick() {
        setShowModal(true);
    }

    // Función para confirmar la eliminación
    function confirmDelete() {
        onDelete(photo.id); // Llamar a la función onDelete con el ID de la foto
        setShowModal(false); // Ocultar el modal
    }

    // Función para cancelar la eliminación
    function cancelDelete() {
        setShowModal(false); // Ocultar el modal
    }

    return (
        <tr key={photo.id}>
            <td>{photo.id}</td>
            <td>{photo.title}</td>
            <td>
                <a href={photo.url} target="_blank" rel="noopener noreferrer">
                    {photo.url}
                </a>
            </td>
            <td>
                {photo.thumbnailUrl}
            </td>
            <td>
                <div className="actions">
                    <Button onClick={() => onEdit(photo)} className="btn-warning">
                        Editar
                    </Button>
                    <Button onClick={handleDeleteClick} className="btn-danger">
                        Eliminar
                    </Button>
                </div>
            </td>

            {/* Modal de confirmación */}
            <div
                className={`modal fade ${showModal ? 'show' : ''}`}
                style={{ display: showModal ? 'block' : 'none' }}
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirmar Eliminación</h5>
                            <button
                                type="button"
                                className="close"
                                onClick={cancelDelete}
                            >
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ¿Estás seguro de que deseas eliminar esta foto?
                        </div>
                        <div className="modal-footer">
                            <Button onClick={cancelDelete} className="btn-secondary">
                                Cancelar
                            </Button>
                            <Button onClick={confirmDelete} className="btn-danger">
                                Eliminar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fondo oscuro del modal */}
            {showModal && (
                <div
                    className="modal-backdrop fade show"
                    style={{ display: 'block' }}
                ></div>
            )}
        </tr>
    );
}

export default PhotoItem;