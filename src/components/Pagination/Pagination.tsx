import { ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css';

/**
 * Pagination Component for the Table Component
 * @property {number} page - Number of the active page and matching with the number of the page in URL
 * @property {function} handleChange - function for handler the change of page
 * @property {number} totalPages - Total of the pages (10 people per page)
 */

interface PaginationControlledProps {
    page: number;
    handleChange: (_event: ChangeEvent<unknown>, _value: number) => void;
    totalPages: number;
}

const PaginationControlled = ({ page, handleChange, totalPages }: PaginationControlledProps) => {
    return (
        <Stack spacing={2}>
            <Pagination
                id="pagination"
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

export default PaginationControlled;
