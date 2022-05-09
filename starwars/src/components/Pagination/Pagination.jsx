import PropTypes from 'prop-types';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css';

export default function PaginationControlled({ page, handleChange, totalPages }) {
    return (
        <Stack spacing={2}>
            <Pagination
                className="bg-dark "
                count={totalPages}
                variant="text"
                shape="rounded"
                showFirstButton
                showLastButton
                page={page}
                onChange={handleChange}
                size={'large'}
                color="standard"
            />
        </Stack>
    );
}

PaginationControlled.propTypes = {
    page: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
};
