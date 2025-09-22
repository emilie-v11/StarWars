import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from '@/components/Header/Header';

/**
 * The main layout of the App containing the header and main content area
 * */
const MainLayout = () => {
    return (
        <Container sx={{ minHeight: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header title="Starwars characters" colorTitle="#FFC106" />
            <Container
                component='main'
                sx={{
                    position: 'relative',
                    paddingBottom: '2rem',
                }}
            >
                <Outlet />
            </Container>
        </Container>
    )
}

export default MainLayout;