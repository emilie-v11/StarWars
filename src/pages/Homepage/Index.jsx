import { useDispatch, useSelector } from 'react-redux';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import PaginationRounded from '@/components/Pagination/Pagination';
import TableComponent from '@/components/Table/TableComponent';
import { setPage } from '@/store/slices/peopleSlice';
import { useGetAllPeopleQuery } from '@/services/peopleApi';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


/**
 * Index Page - Homepage - Contain the Table and Pagination
 */

const Index = () => {
    const dispatch = useDispatch();
    const { data: people = [], isLoading, error } = useGetAllPeopleQuery();
    const page = useSelector(state => state.people.page);

    const pageSize = 10; // Number of people per page
    const totalPages = Math.ceil(people.length / pageSize);
    const start = (page - 1) * pageSize;
    const pagedPeople = people.slice(start, start + pageSize);

    if (isLoading) return <LoaderSpinner />;
    if (error) return <div>Error: { error.message }</div>;

    return (
        <Container component="main" sx={ { marginTop: '2rem', paddingBottom: '2rem' } }>
            <TableComponent people={ pagedPeople } />
            <Box sx={ { display: 'flex', justifyContent: 'flex-end' } }>
                <Typography variant='h2' className="visually-hidden">
                    General table of Starwars characters
                </Typography>
                <PaginationRounded
                    page={ page }
                    handleChange={ (_, v) => dispatch(setPage(v)) }
                    totalPages={ totalPages }
                />
            </Box>
        </Container>
    );
};

export default Index;
