
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';

/**
 * InformationItem Component contain the data information to one info details for one person by ID
 * @property {String} label - Information label
 * @property {String} value - information
 */
// TODO: fix alignment of the text in the ListItemText
const InformationItem = ({ label, value }) => {
    return (
        <ListItem key={ label } sx={ { minWidth: '100%', alignItems: 'flex-start' } }>
            <ListItemText sx={ { textTransform: 'capitalize' } }>
                <span style={ { fontWeight: 700, paddingRight: '1rem', color: '#FFC106' } }>
                    { `${label} : ` }
                </span>
                { value }
            </ListItemText>
        </ListItem>
    );
};

InformationItem.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
};

export default InformationItem;
