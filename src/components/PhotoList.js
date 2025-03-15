// src/components/PhotoList.js
import React from 'react';
import PhotoItem from './PhotoItem';

function PhotoList({ photos, onEdit, onDelete }) {
    return (
        <div className="table-responsive" class="mt-4">
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>URL</th>
                        <th>Thumbnail</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {photos.map((photo) => (
                        <PhotoItem
                            key={photo.id}
                            photo={photo}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PhotoList;