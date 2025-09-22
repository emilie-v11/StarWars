import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetPersonByIdQuery } from '@/services/peopleApi';
import { clearCurrentPerson } from '@/store/slices/peopleSlice';
import { Field, objectToFields } from '@/utils/helpers';
import { Box } from '@mui/material';
import InformationSheet from '@/components/InformationSheet/InformationSheet';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import NoCharacterFound from '@/components/InformationSheet/NoCharacterFound';
import BackButton from '@/components/Buttons/BackButton';
import InformationContainer from '@/components/Layout/InformationLayout';

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

  return (
    <Box component='section'>
      <h2 className='visually-hidden'>
        Information sheet of {currentPersonName}
      </h2>
      <BackButton text='Go back' />
      <InformationContainer>
        {error || !person ? (
          <NoCharacterFound message='Character not found.' />
        ) : (
          <InformationSheet person={fieldsWithoutId} />
        )}
      </InformationContainer>
    </Box>
  );
};

export default Details;
