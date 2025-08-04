import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetPersonByIdQuery } from '@/services/peopleApi';
import { clearCurrentPerson } from '@/store/slices/peopleSlice';
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
    <main className="Main-Details container mt-5 position-relative text-white py-2">
      <section>
        <h2 className="visually-hidden"> Information sheet of { person.name }</h2>

        <InformationSheet person={ person } />
      </section>
    </main>
  );
};

export default Details;
