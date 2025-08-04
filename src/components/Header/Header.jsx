import PropTypes from 'prop-types';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import CustomSeparator from '../Breadcrumbs/CustomSeparator';
import { useSelector } from 'react-redux';
import { useGetAllPeopleQuery } from '../../services/peopleApi';

/**
 * Header Component with title, and breadcrumb trail
 * @property {string} title - Title of the Website
 * @property {string} colorTitle - Color for the title
 */

const Header = ({ title, colorTitle }) => {
    const { isLoading } = useGetAllPeopleQuery();
    const currentPerson = useSelector(state => state.people.currentPerson || {});

    if (isLoading) return <LoaderSpinner />;

    return (
        <header className="container mt-5">
            <h1 className="text-md-start mb-4" style={ { color: colorTitle } }>
                { title }
            </h1>
            <CustomSeparator currentPerson={ currentPerson } />
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    colorTitle: PropTypes.string,
};

export default Header;
