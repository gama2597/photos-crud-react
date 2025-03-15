// src/components/Header.js
import React from 'react';
import Button from '../Button/Button';

function Header({ onAddClick }) {
    return (
        <header className="header">
            <h1 className="header-title">Galeria de Fotos</h1>
            <Button onClick={onAddClick} className="btn-primary">
                Agregar Foto
            </Button>
        </header>
    );
}

export default Header;