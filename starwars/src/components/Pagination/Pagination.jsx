import PropTypes from 'prop-types';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css';

/**
 * Pagination Component for the Table Component
 * @property {number} page - Number of the active page and matching with the number of the page in URL
 * @property {function} handleChange - function for handler the change of page
 * @property {number} totalPages - Total of the pages (10 people per page)
 */

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
                color="primary"
            />
        </Stack>
    );
}

PaginationControlled.propTypes = {
    page: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
};
