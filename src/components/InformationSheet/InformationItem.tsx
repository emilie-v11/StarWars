
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

/**
 * InformationItem Component contain the data information to one info details for one person by ID
 * @property {String} label - Information label
 * @property {String} value - information
 */

interface InformationItemProps {
    label: string;
    value: string;
}

const InformationItem = ({ label, value }: InformationItemProps) => {
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

export default InformationItem;
