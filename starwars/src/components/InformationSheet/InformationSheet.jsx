import React from 'react';
import PropTypes from 'prop-types';
import InformationItem from './InformationItem';

/**
 * InformationSheet Component who contain the data information details for one person by ID
 * @property {object} currentPerson -Object of the current person in details page
 */

const InformationSheet = ({ currentPerson }) => {
    return (
        <>
            <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-dark rounded-3 opacity-75 z-index-1"></div>
            
            <ul className="fs-5 text-capitalize position-relative z-index-3 opacity-100">
                <InformationItem categorie="Name" info={currentPerson.name} />
                <InformationItem categorie="Gender" info={currentPerson.gender} />
                <InformationItem categorie="Height" info={currentPerson.height} />
                <InformationItem categorie="Mass" info={currentPerson.mass} />
                <InformationItem categorie="Hair Color" info={currentPerson.hair_color} />
                <InformationItem categorie="Skin Color" info={currentPerson.skin_color} />
                <InformationItem categorie="Eye Color" info={currentPerson.eye_color} />
                <InformationItem categorie="Birth Year" info={currentPerson.birth_year} />
                <InformationItem categorie="Homeworld" info={currentPerson.homeworld} />
                <InformationItem categorie="Films" info={currentPerson.films} />
                <InformationItem categorie="Vehicles" info={currentPerson.vehicles} />
            </ul>
        </>
    );
};

InformationSheet.propTypes = {
    currentPerson: PropTypes.object.isRequired,
};

export default InformationSheet;
