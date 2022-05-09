import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PaginationRounded from '../../components/Pagination/Pagination';
import TableComponent from '../../components/Table/TableComponent';
import { getPeople } from '../../redux/actions/peopleAction';

/**
 * Index Page - Homepage - Contain the Table and Pagination
 */

const Index = () => {
    const dispatch = useDispatch();

    const people = useSelector(state => state.people.characters);
    const currentPage = useSelector(state => state.people.currentPage);
    const count = useSelector(state => state.people.count);

    const [page, setPage] = useState(currentPage);

    useEffect(() => {
        dispatch(getPeople(`?page=${page}`));
    }, [dispatch, page]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const totalPages = Math.ceil(count / 10);
    console.log(totalPages);

    return (
        <main className="Main-Homepage container p-1 pt-4 p-sm-3 mt-5">
            <TableComponent people={people} />

            <div className="d-flex justify-content-end text-light pt-2">
                <PaginationRounded
                    page={page}
                    handleChange={handleChange}
                    totalPages={totalPages}
                />
            </div>
        </main>
    );
};

export default Index;
