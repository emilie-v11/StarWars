import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import InformationItem from './InformationItem';

/**
 * InformationSheet Component who contain the data information details for one person by ID
 * @property {object} person -Object of the current person in details page
 */

const InformationSheet = ({ person }) => {
    return (
        <Box component='section'>
            <h2 className='visually-hidden'>Information sheet of { person.name }</h2>
            <Box
                sx={ {
                    backgroundColor: 'rgba(33, 37, 41, 0.75)',
                    borderRadius: '5px',
                    zIndex: -1,
                    width: '100%',
                    height: '100%',
                    padding: '1.5rem',
                } }
            >

                <List sx={ { position: 'relative', zIndex: 3, opacity: 1 } }>
                    <InformationItem categorie='Name' info={ person.name } />
                    <InformationItem categorie='Gender' info={ person.gender } />
                    <InformationItem categorie='Height' info={ person.height } />
                    <InformationItem categorie='Mass' info={ person.mass } />
                    <InformationItem categorie='Hair Color' info={ person.hair_color } />
                    <InformationItem categorie='Skin Color' info={ person.skin_color } />
                    <InformationItem categorie='Eye Color' info={ person.eye_color } />
                    <InformationItem categorie='Birth Year' info={ person.birth_year } />
                    <InformationItem categorie='Homeworld' info={ person.homeworld } />
                    <InformationItem categorie='Films' info={ person.films } />
                    <InformationItem categorie='Vehicles' info={ person.vehicles } />
                </List>
            </Box>
        </Box>
    );
};

InformationSheet.propTypes = {
    person: PropTypes.object.isRequired,
};

export default InformationSheet;
