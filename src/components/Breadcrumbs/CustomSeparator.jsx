import PropTypes from 'prop-types';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Typography } from '@mui/material';

/**
 * A breadcrumb trail Component - Nav in Header
 * @property {object} currentPerson - All Data object of the current person in details page
 */

export default function CustomSeparator({ currentPerson }) {
    // Add '...' for the homepage, when currentPerson is empty
    const isEmpty = Object.keys(currentPerson).length === 0;

    return (
        <Box sx={ { position: 'relative'} }>
            <Stack spacing={ 2 }>
                <Breadcrumbs
                    separator={ <NavigateNextIcon fontSize="small" /> }
                    aria-label="breadcrumb"
                >
                    <Link underline="hover" key="1" color="inherit" href="/">
                        Home
                    </Link>,
                    <Link underline="hover" key="2" color="inherit" href="#">
                        { !isEmpty ? <span>{ currentPerson.name }</span> : <span>...</span> }
                    </Link>
                </Breadcrumbs>
            </Stack>
        </Box>
    );
}

CustomSeparator.propTypes = {
    currentPerson: PropTypes.object,
};
