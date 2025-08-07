import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetPersonByIdQuery } from '@/services/peopleApi';
import { clearCurrentPerson } from '@/store/slices/peopleSlice';
import { Container } from '@mui/material';
import InformationSheet from '@/components/InformationSheet/InformationSheet';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import NotFound from '@/pages/NotFound/NotFound';

/**
 * Details Page - For more informations of the active personn (by ID) - Access to this page with button "view" in the Table
 */
const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: person, isLoading, error } = useGetPersonByIdQuery(Number(id), {
    skip: !id,
  });

  useEffect(() => {
    return () => {
      dispatch(clearCurrentPerson());
    };
  }, [dispatch]);

  if (isLoading) return <LoaderSpinner />;
  if (error) return <NotFound />;

  return (
    <Container
      component='main'
      className='Main-Details'
      sx={{
        position: 'relative',
        marginTop: '3rem',
        paddingBottom: '2rem',
      }}
    >
      <InformationSheet person={person} />
    </Container>
  );
};

export default Details;
