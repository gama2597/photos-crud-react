// src/components/Button.js
import React from 'react';
import './Button.css';

function Button({ children, onClick, className }) {
    return (
        <button onClick={onClick} className={`btn ${className}`}>
            {children}
        </button>
    );
}

export default Button;