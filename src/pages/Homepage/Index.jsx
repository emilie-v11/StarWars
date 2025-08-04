import { useDispatch, useSelector } from 'react-redux';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import PaginationRounded from '@/components/Pagination/Pagination';
import TableComponent from '@/components/Table/TableComponent';
import { setPage } from '@/store/slices/peopleSlice';
import { useGetAllPeopleQuery } from '../../services/peopleApi';

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
        <main className="Main-Homepage container p-1 pt-4 p-sm-3 mt-5">
            <TableComponent people={ pagedPeople } />

            <section className="d-flex justify-content-end text-light pt-2">
                <h2 className="visually-hidden">General table of Starwars characters</h2>
                <PaginationRounded
                    page={ page }
                    handleChange={ (_, v) => dispatch(setPage(v)) }
                    totalPages={ totalPages }
                />
            </section>
        </main>
    );
};

export default Index;
