import PropTypes from 'prop-types';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

/**
 * A breadcrumb trail Component - Nav in Header
 * @property {string} personName - Name of the current person in details page
 * @property {object} currentPerson - All Data object of the current person in details page
 */

export default function CustomSeparator({ personName, currentPerson }) {
    // Add '...' for the homepage, when personn is empty
    const isEmpty = Object.keys(currentPerson).length === 0;

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href={'/'}>
            Home
        </Link>,
        <Link underline="hover" key="2" color="inherit" href="#">
            {!isEmpty && <span>{personName}</span>}
            <span className="visually-hidden">Next</span>
        </Link>,
    ];

    return (
        <div className="position-relative">
            <Stack spacing={2}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
            {isEmpty && (
                <span className="position-absolute top-50 start-0 translate-middle-y ms-5 ps-4">
                    ...
                </span>
            )}
        </div>
    );
}

CustomSeparator.propTypes = {
    personName: PropTypes.string,
    currentPerson: PropTypes.object,
};
