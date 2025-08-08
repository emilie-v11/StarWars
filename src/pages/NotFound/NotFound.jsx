import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';
import './NotFound.css';

/**
 * NotFound Page - 404 Page, for wrong URL
 */
const NotFound = () => {
    return (
        <Container className="Main-Error404">
            <div className="Image-404">
                <div className="Content-404">
                    <p className="Number-404">404</p>
                    <p className="Text-404">Oops! Let's go back quietly ...</p>
                    <NavLink className="Back-Home" to="/">
                        Back to the home page
                    </NavLink>
                </div>
            </div>
        </Container>
    );
};

export default NotFound;
