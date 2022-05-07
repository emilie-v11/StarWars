import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <main className="Main-Error404 position-relative">
            <div className="Image-404 position-absolute top-50 start-50 translate-middle">
                <div className="Content-404 position-absolute top-50 start-50 translate-middle">
                    <span className="Number-404">404</span>
                    <p className="Text-404">Oups ! Repartons discrètement ...</p>

                    <NavLink className="Back-Home" to="/">
                        Retourner sur la page d'accueil
                    </NavLink>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
