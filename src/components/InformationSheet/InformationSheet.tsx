import Box from '@mui/material/Box';
import List from '@mui/material/List';

import InformationItem from './InformationItem';
import { Field } from '@/utils/helpers';

/**
 * InformationSheet Component who contain the data information details for one person by ID
 * @property {object} person -Object of the current person in details page
 */

interface InformationSheetProps {
    /** Tableau de champs {label, value} à afficher */
    person?: Field[], //Array<{ label: string; value: string }>;
}

const InformationSheet = ({ person = [] }: InformationSheetProps) => {
    return (
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
                { person?.map((item) => (
                    <InformationItem
                        key={ item.label }
                        label={ String(item.label) }
                        value={ String(item.value) }
                    />
                )) }
            </List>
        </Box>
    );
};

export default InformationSheet;
