import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';

/**
 * InformationItem Component contain the data information to one info details for one person by ID
 * @property {String} categorie - Information categorie
 * @property {String} info - information
 */
// TODO: fix alignment of the text in the ListItemText
const InformationItem = ({ categorie, info }) => {
    return (
        <ListItem key={ categorie } sx={ { minWidth: '100%', alignItems: 'flex-start' } }>
            <ListItemText>
                <span style={ { fontWeight: 700, paddingRight: '1rem', color: '#FFC106' } }>
                    { `${categorie} : ` }
                </span>
                { info }
            </ListItemText>
        </ListItem>
    );
};

InformationItem.propTypes = {
    categorie: PropTypes.string,
    info: PropTypes.string,
};

export default InformationItem;
