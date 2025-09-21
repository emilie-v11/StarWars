import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store/hooks';
import { setPage } from '@/store/slices/peopleSlice';
import { useGetAllPeopleQuery } from '@/services/peopleApi';
import { filterList } from '@/utils/helpers';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableComponent from '@/components/Table/TableComponent';
import PaginationRounded from '@/components/Pagination/Pagination';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import { Navigate } from 'react-router-dom';
import { ChangeEvent, useMemo } from 'react';

/**
 * Index Page - Homepage - Contain the Table and Pagination
 */

const Index = () => {
  const dispatch = useDispatch();
  const { data: people = [], isLoading, error } = useGetAllPeopleQuery();
  const page = useAppSelector((state) => state.people.page);

  const fieldsForTable = useMemo(() => {
    return people?.map((person) =>
      filterList(person, {
        only: ['id', 'name', 'height', 'gender'],
        valueMap: { height: (value) => `${value} cm` },
      })
    );
  }, [people]);

  const columns = Object.keys(fieldsForTable[0] || {}).concat('actions');

  // Pagination logic
  const pageSize = 10; // Number of people per page
  const totalPages = Math.ceil(fieldsForTable.length / pageSize);
  const start = (page - 1) * pageSize;
  const pagedPeople = fieldsForTable.slice(start, start + pageSize);

  const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  if (isLoading) return <LoaderSpinner />;
  if (error) {
    return <Navigate to='/404' replace />;
  }

  return (
    <Box>
      <TableComponent people={pagedPeople} columns={columns} />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Typography variant='h2' className='visually-hidden'>
          General table of Starwars characters
        </Typography>
        <PaginationRounded
          page={page}
          handleChange={handleChange}
          totalPages={totalPages}
        />
      </Box>
    </Box>
  );
};

export default Index;
