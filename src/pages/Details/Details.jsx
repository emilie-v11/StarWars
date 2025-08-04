import { useParams } from 'react-router-dom';
import InformationSheet from '@/components/InformationSheet/InformationSheet';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import { useGetPersonByIdQuery } from '../../services/peopleApi';
// import { useSelector } from 'react-redux';

/**
 * Details Page - For more informations of the active personn (by ID) - Access to this page with button "view" in the Table
 */
const Details = () => {
    const { id } = useParams();
    const { data: person, isLoading, error } = useGetPersonByIdQuery(Number(id), {
        skip: !id,
    });

    if (isLoading) return <LoaderSpinner />;
    if (error) return <div>Error: { error.message }</div>;

    return (
        <main className="Main-Details container mt-5 position-relative text-white py-2">
            <section>
                <h2 className="visually-hidden"> Information sheet of {person.name}</h2>

                <InformationSheet person={person} />
            </section>
        </main>
    );
};

export default Details;
