// Header.jsx
import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <img src="https://alicorp-prod-medias.s3.amazonaws.com/static-img/files/2020-06/recetas/receta-de-alfajores-clasicos/enfriar.svg" height="75" alt="Logo" className="header-logo" />
            <h1 className="header-title">Alfacorp</h1>
        </header>
    );
}

export default Header;
