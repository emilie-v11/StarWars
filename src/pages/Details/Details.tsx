import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { useGetPersonByIdQuery } from '@/services/peopleApi';
import { clearCurrentPerson } from '@/store/slices/peopleSlice';
import { Field, objectToFields } from '@/utils/helpers';
import { Box } from '@mui/material';
import InformationSheet from '@/components/InformationSheet/InformationSheet';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';

/**
 * Details Page - For more informations of the active personn (by ID) - Access to this page with button "view" in the Table
 */

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: person, isLoading, error } = useGetPersonByIdQuery(Number(id), {
    skip: !id,
  });

  const fieldsWithoutId: Field[] = useMemo(
    () => (person ? objectToFields(person, { exclude: ['id'] }) : []),
    [person]
  );

  const currentPersonName = person?.name;

  useEffect(() => {
    return () => {
      dispatch(clearCurrentPerson());
    };
  }, [dispatch]);

  if (isLoading) return <LoaderSpinner />;

  if (error) {
    return <Navigate to='/404' replace />;
  }

  return (
    <Box component='section'>
      <h2 className='visually-hidden'>
        Information sheet of { currentPersonName }
      </h2>
      <InformationSheet person={ fieldsWithoutId } />
    </Box>
  );
};

export default Details;
