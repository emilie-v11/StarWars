import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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

    if (isLoading) {
        return <LoaderSpinner />;
    }

    return (
        <main className="Main-Details container mt-5 position-relative text-white py-2">
            <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-dark rounded-3 opacity-75 z-index-1"></div>
            <ul className="fs-5 text-capitalize position-relative z-index-3 opacity-100">
                <li className="p-2 ps-0">
                    <span className="fw-bold pe-2">Name :</span>
                    {currentPerson.name}
                </li>
                <li className="p-2 ps-0">
                    <span className="fw-bold pe-2">Gender :</span>
                    {currentPerson.gender}
                </li>
                <li className="p-2 ps-0">
                    <span className="fw-bold pe-2">Height :</span>
                    {currentPerson.height}
                </li>
                <li className="p-2 ps-0">
                    <span className="fw-bold pe-2">Mass :</span>
                    {currentPerson.mass}
                </li>
                <li className="p-2 ps-0">
                    <span className="fw-bold pe-2">Hair color :</span>
                    {currentPerson.hair_color}
                </li>
                <li className="p-2 ps-0">
                    <span className="fw-bold pe-2">Skin color :</span>
                    {currentPerson.skin_color}
                </li>
                <li className="p-2 ps-0">
                    <span className="fw-bold pe-2">Eye color :</span>
                    {currentPerson.eye_color}
                </li>
                <li className="p-2 ps-0">
                    <span className="fw-bold pe-2">Birth year :</span>
                    {currentPerson.birth_year}
                </li>
                <li className="p-2 ps-0">
                    <span className="fw-bold pe-2">Homeworld :</span>
                    {/* {currentPersonPlanet.name} */}
                    {currentPerson.homeworld}
                </li>
                <li className="p-2 ps-0">
                    <span className="fw-bold pe-2">Films :</span>
                    {currentPerson.films}
                </li>

                <li className="p-2 ps-0">
                    <span className="fw-bold pe-2">Vehicles : </span>
                    {currentPerson.vehicles}
                </li>
            </ul>
        </main>
    );
};

export default Details;
