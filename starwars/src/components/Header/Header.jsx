import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CustomSeparator from '../Breadcrumbs/CustomSeparator';

const Header = ({ title, colorTitle }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.people.isLoading);
    const currentPerson = useSelector(state => state.people.person);
    console.log(currentPerson);

    const [personName, setPersonName] = useState(null);
    console.log(personName);

    useEffect(() => {
        if ({ currentPerson } !== undefined && !isLoading) {
            const currentPersonName = currentPerson.name;
            return setPersonName(currentPersonName);
        }
        return () => {
            setPersonName(null);
        };
    }, [dispatch, currentPerson, isLoading]);

    return (
        <header className="container mt-5">
            <h1 className="text-md-start mb-4" style={{ color: colorTitle }}>
                {title}
            </h1>
            <CustomSeparator personName={personName} currentPerson={currentPerson} />
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    colorTitle: PropTypes.string,
};

export default Header;
