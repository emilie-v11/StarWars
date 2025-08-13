import { JSX } from 'react';
import './LoaderSpinner.css';

/**
 * It's show when data aren't ready to display
 * @returns {JSX.Element} Loader component when data aren't ready to display
 */
const LoaderSpinner = (): JSX.Element => {
    return (
        <div className="Loader-Overlay">
            <p>Loading ...</p>
            <svg className="spinner" viewBox="0 0 66 66">
                <circle
                    className="path"
                    fill="none"
                    strokeWidth="6"
                    strokeLinecap="round"
                    cx="33"
                    cy="33"
                    r="30"
                ></circle>
            </svg>
        </div>
    );
};

export default LoaderSpinner;
