import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetPersonByIdQuery } from '@/services/peopleApi';
import { clearCurrentPerson } from '@/store/slices/peopleSlice';
import InformationSheet from '@/components/InformationSheet/InformationSheet';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import { Box } from '@mui/material';

/**
 * Details Page - For more informations of the active personn (by ID) - Access to this page with button "view" in the Table
 */
const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: person, isLoading } = useGetPersonByIdQuery(Number(id), {
    skip: !id,
  });

  useEffect(() => {
    return () => {
      dispatch(clearCurrentPerson());
    };
  }, [dispatch]);

  if (isLoading) return <LoaderSpinner />;

  return (
    <Box>
      <InformationSheet person={ person } />
    </Box>
  );
};

export default Details;
