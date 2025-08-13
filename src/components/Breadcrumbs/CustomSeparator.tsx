import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Box from '@mui/material/Box';
import { Person } from '@/types/person';
import { isEmpty } from '@/utils/helpers';

/**
 * A breadcrumb trail Component - Nav in Header
 * @property {object} currentPerson - All Data object of the current person in details page
 */

interface CustomSeparatorProps {
    currentPerson: Person | null;
}

const CustomSeparator = ({ currentPerson }: CustomSeparatorProps) => {
    return (
        <Box sx={{ position: 'relative' }}>
            <Stack spacing={2}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    <Link underline="hover" key="1" color="inherit" href="/">
                        Home
                    </Link>,
                    <span>
                        {currentPerson && !isEmpty(currentPerson) ? currentPerson.name : '...'}
                    </span>
                </Breadcrumbs>
            </Stack>
        </Box>
    );
}

export default CustomSeparator;
