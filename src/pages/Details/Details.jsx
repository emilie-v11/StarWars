import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetPersonByIdQuery } from '@/services/peopleApi';
import { clearCurrentPerson } from '@/store/slices/peopleSlice';
import { objectToFields } from '@/utils/helpers';
import { Box } from '@mui/material';
import InformationSheet from '@/components/InformationSheet/InformationSheet';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';

/**
 * Details Page - For more informations of the active personn (by ID) - Access to this page with button "view" in the Table
 */
const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: person, isLoading } = useGetPersonByIdQuery(Number(id), {
    skip: !id,
  });

  const fieldsWithoutId = person && objectToFields(person, { exclude: ['id'] });
  const currentPersonName = person?.name;

  useEffect(() => {
    return () => {
      dispatch(clearCurrentPerson());
    };
  }, [dispatch]);

  if (isLoading) return <LoaderSpinner />;

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
