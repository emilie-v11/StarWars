import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, colorTitle }) => {
    return (
        <header className="container mt-4">
            <h1 className="text-center text-md-start" style={{ color: colorTitle }}>
                {title}
            </h1>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    colorTitle: PropTypes.string,
};

export default Header;
