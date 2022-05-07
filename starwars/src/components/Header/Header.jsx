import React from 'react';

const Header = ({ title, colorTitle }) => {
    return (
        <header className="container mt-4">
            <h1 style={{color: colorTitle}}>{title}</h1>
        </header>
    );
};

export default Header;
