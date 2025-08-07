import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useGetAllPeopleQuery } from '@/services/peopleApi';
import { Container, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import CustomSeparator from '@/components/Breadcrumbs/CustomSeparator';


/**
 * Header Component with title, and breadcrumb trail
 * @property {string} title - Title of the Website
 * @property {string} colorTitle - Color for the title
 */

const Header = ({ title, colorTitle }) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const { isLoading } = useGetAllPeopleQuery();
    const currentPerson = useSelector(
        (state) => state.people.currentPerson || {}
    );

    if (isLoading) return <LoaderSpinner />;
    return (
        <Container component='header' sx={ { paddingTop: '3rem' } }>
            <Typography
                variant='h1'
                sx={ { textAlign: 'center', marginBottom: '1.5rem', fontSize: isMobile ? '2.5rem' : '4.5rem', fontWeight: 700 } }
                style={ { color: colorTitle } }
            >
                { title }
            </Typography>
            <CustomSeparator currentPerson={ currentPerson } />
        </Container>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    colorTitle: PropTypes.string,
};

export default Header;
