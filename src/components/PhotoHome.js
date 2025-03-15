// src/components/PhotoHome.js
import React, { useState, useEffect } from 'react';
import { getPhotos, addPhoto, updatePhoto, deletePhoto } from '../services/photoService';
import Header from './Layout/Header/Header';
import PhotoForm from './PhotoForm';
import PhotoList from './PhotoList';

function PhotoHome() {
    const [photos, setPhotos] = useState([]);
    const [editingPhoto, setEditingPhoto] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

    // Cargar fotos al montar el componente
    useEffect(() => {
        async function fetchPhotos() {
            try {
                const data = await getPhotos();
                setPhotos(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching photos:', error);
                setIsLoading(false);
            }
        }
        fetchPhotos();
    }, []);

    // Manejar el envío del formulario
    async function handleFormSubmit(photo) {
        if (editingPhoto) {
            try {
                const updatedPhoto = await updatePhoto(editingPhoto.id, photo);
                setPhotos(photos.map((p) => (p.id === editingPhoto.id ? updatedPhoto : p)));
                setEditingPhoto(null);
                setShowModal(false); // Cerrar el modal después de actualizar
            } catch (error) {
                console.error('Error updating photo:', error);
            }
        } else {
            try {
                const newPhoto = await addPhoto(photo);
                setPhotos([...photos, newPhoto]);
                setShowModal(false); // Cerrar el modal después de agregar
            } catch (error) {
                console.error('Error adding photo:', error);
            }
        }
    }

    // Manejar la eliminación de una foto
    async function handleDelete(id) {
        try {
            await deletePhoto(id);
            setPhotos(photos.filter((photo) => photo.id !== id));
        } catch (error) {
            console.error('Error deleting photo:', error);
        }
    }

    // Mostrar el modal para agregar una foto
    function handleAddClick() {
        setEditingPhoto(null);
        setShowModal(true);
    }

    // Mostrar el modal para editar una foto
    function handleEdit(photo) {
        setEditingPhoto(photo);
        setShowModal(true);
    }

    // Cerrar el modal
    function handleCancelForm() {
        setEditingPhoto(null);
        setShowModal(false);
    }

    if (isLoading) {
        return <div className="text-center">Cargando fotos...</div>;
    }

    return (
        <div className="photo-home">
            <Header onAddClick={handleAddClick} />
            <PhotoList photos={photos} onEdit={handleEdit} onDelete={handleDelete} />

            {/* Modal para el formulario */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <PhotoForm
                            onSubmit={handleFormSubmit}
                            initialData={editingPhoto}
                            onCancel={handleCancelForm}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default PhotoHome;