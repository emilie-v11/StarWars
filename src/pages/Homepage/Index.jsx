import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import PaginationRounded from '@/components/Pagination/Pagination';
import TableComponent from '@/components/Table/TableComponent';
import { getPeople } from '@/redux/actions/peopleAction';

/**
 * Index Page - Homepage - Contain the Table and Pagination
 */

const Index = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.people.isLoading);
    const people = useSelector(state => state.people.characters);
    // const totalRecords = useSelector(state => state.people.totalRecords);
    const totalPages = useSelector(state => state.people.totalPages);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getPeople(page));
    }, [dispatch, page]);
    
    const characters = [...people];

    const handleChange = (event, value) => {
        dispatch(getPeople(value));
        setPage(value);
    };
    
    if (isLoading || totalPages === isNaN) {
        return <LoaderSpinner />;
    }

    return (
        <main className="Main-Homepage container p-1 pt-4 p-sm-3 mt-5">
            <TableComponent people={ characters } />

            <section className="d-flex justify-content-end text-light pt-2">
                <h2 className="visually-hidden">General table of Starwars characters</h2>
                <PaginationRounded
                    page={ page }
                    handleChange={ handleChange }
                    totalPages={ totalPages }
                />
            </section>
        </main>
    );
};

export default Index;
