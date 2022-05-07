import React from 'react';
// import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TableComponent from '../../components/Table/TableComponent';

const Index = () => {
    const isLoading = useSelector(state => state.people.isLoading);
    const currentPage = useSelector(state => state.people.currentPage);
    const people = useSelector(state => state.people.characters);
    console.log(isLoading);
    console.log(currentPage);
    console.log(people);

    return (
        <main className="Main-Homepage container p-1 pt-5 p-sm-3">
            <TableComponent people={people} />
        </main>
    );
};

export default Index;
