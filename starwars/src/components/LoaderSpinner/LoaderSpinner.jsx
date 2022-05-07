import React from 'react';
import './LoaderSpinner.css';

/**
 * It's show when data aren't ready to display
 * @returns {ReactElement} Loader component when data aren't ready to display
 */
const LoaderSpinner = () => {
    return (
        <div className="Loader-Overlay">
            <p>Chargement ...</p>
            <svg className="spinner" viewBox="0 0 66 66" datareactid=".0.3.0.0.0.0.0">
                <circle
                    className="path"
                    fill="none"
                    strokeWidth="6"
                    strokeLinecap="round"
                    cx="33"
                    cy="33"
                    r="30"
                    datareactid=".0.3.0.0.0.0.0.0"
                ></circle>
            </svg>
        </div>
    );
};

export default LoaderSpinner;
