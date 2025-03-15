// src/components/PhotoForm.js
import React, { useState, useEffect } from 'react';

function PhotoForm({ onSubmit, initialData, onCancel }) {
    const [formData, setFormData] = useState({
        title: '',
        url: '',
        thumbnailUrl: '',
    });

    // Sincronizar el estado del formulario con initialData
    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({ title: '', url: '', thumbnailUrl: '' });
        }
    }, [initialData]);

    // Manejar cambios en los campos del formulario
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // Manejar el envío del formulario
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <div className="modal-form">
            <div className="modal-header">
                <h5 className="modal-title">
                    {initialData ? 'Editar Foto' : 'Agregar Nueva Foto'}
                </h5>
                <button type="button" className="close" onClick={onCancel}>
                    <span>&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Título</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese el título"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">URL de la imagen</label>
                        <input
                            type="url"
                            id="url"
                            name="url"
                            value={formData.url}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese la URL de la imagen"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="thumbnail">Thumbnail de la imagen</label>
                        <input
                            type="text"
                            id="thumbnail"
                            name="thumbnailUrl"
                            value={formData.thumbnailUrl}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese el thumbnail de la imagen"
                            required
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn btn-primary">
                            {initialData ? 'Actualizar' : 'Agregar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PhotoForm;