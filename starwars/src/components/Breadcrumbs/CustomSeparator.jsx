import PropTypes from 'prop-types';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function CustomSeparator({ personName, currentPerson }) {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href={'/'}>
            Home
        </Link>,
        <Link underline="hover" key="2" color="inherit" href="#">
            {{ currentPerson } !== 0 && <span>{personName}</span>}
        </Link>,
    ];

    return (
        <Stack spacing={2}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    );
}

CustomSeparator.propTypes = {
    personName: PropTypes.string,
    currentPerson: PropTypes.object,
};
