import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import InformationSheet from '../../components/InformationSheet/InformationSheet';
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner';
import { getPersonById } from '../../redux/actions/peopleAction';

/**
 * Details Page - For more informations of the active personn (by ID) - Access to this page with button "view" in the Table
 */
const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.people.isLoading);
    const currentPerson = useSelector(state => state.people.person);

    useEffect(() => {
        dispatch(getPersonById(`${id}`));
    }, [dispatch, id]);

    if (isLoading || Object.entries(currentPerson).length === 0) {
        return <LoaderSpinner />;
    }

    return (
        <main className="Main-Details container mt-5 position-relative text-white py-2">
            <section>
                <h2 className="visually-hidden"> Information sheet of {currentPerson.name}</h2>

                <InformationSheet currentPerson={currentPerson} />
            </section>
        </main>
    );
};

export default Details;
