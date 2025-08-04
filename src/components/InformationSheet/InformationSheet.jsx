import PropTypes from 'prop-types';
import InformationItem from './InformationItem';

/**
 * InformationSheet Component who contain the data information details for one person by ID
 * @property {object} person -Object of the current person in details page
 */

const InformationSheet = ({ person }) => {
    return (
        <>
            <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-dark rounded-3 opacity-75 z-index-1"></div>

            <ul className="fs-5 text-capitalize position-relative z-index-3 opacity-100">
                <InformationItem categorie="Name" info={ person.name } />
                <InformationItem categorie="Gender" info={ person.gender } />
                <InformationItem categorie="Height" info={ person.height } />
                <InformationItem categorie="Mass" info={ person.mass } />
                <InformationItem categorie="Hair Color" info={ person.hair_color } />
                <InformationItem categorie="Skin Color" info={ person.skin_color } />
                <InformationItem categorie="Eye Color" info={ person.eye_color } />
                <InformationItem categorie="Birth Year" info={ person.birth_year } />
                <InformationItem categorie="Homeworld" info={ person.homeworld } />
                <InformationItem categorie="Films" info={ person.films } />
                <InformationItem categorie="Vehicles" info={ person.vehicles } />
            </ul>
        </>
    );
};

InformationSheet.propTypes = {
    person: PropTypes.object.isRequired,
};

export default InformationSheet;
