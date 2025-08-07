import PropTypes from 'prop-types';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import CustomSeparator from '../Breadcrumbs/CustomSeparator';
import { useSelector } from 'react-redux';
import { useGetAllPeopleQuery } from '../../services/peopleApi';
import { Container, Typography } from '@mui/material';

/**
 * Header Component with title, and breadcrumb trail
 * @property {string} title - Title of the Website
 * @property {string} colorTitle - Color for the title
 */

const Header = ({ title, colorTitle }) => {
    const { isLoading } = useGetAllPeopleQuery();
    const currentPerson = useSelector(
        (state) => state.people.currentPerson || {}
    );

    if (isLoading) return <LoaderSpinner />;
    return (
        <Container component='header' sx={{ paddingTop: '3rem' }}>
            <Typography
                variant='h1'
                sx={{ textAlign: 'start', marginBottom: '1.5rem', fontSize: '4.5rem', fontWeight: 700 }}
                style={{ color: colorTitle }}
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
