import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from '@/components/Header/Header';

/**
 * The layout containing the header and main content area
 *
 * @return {JSX Element}
 */
const Layout = () => {
    return (
        <Container sx={{ minHeight: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header title="Starwars characters" colorTitle="#FFC106" />
            <Container
                component='main'
                sx={{
                    position: 'relative',
                    marginTop: '2rem',
                    paddingBottom: '2rem',
                }}
            >
                <Outlet />
            </Container>
        </Container>
    )
}

export default Layout;