import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';

const TableComponent = ({ people }) => {
    return (
        <Table className="text-center text-sm-start" striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th className="p-1 py-3 p-sm-3">Name</th>
                    <th className="p-1 py-3 p-sm-3">Height</th>
                    <th className="p-1 py-3 p-sm-3">Gender</th>
                    <th className="p-1 py-3 p-sm-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                {people.map((character, index) => (
                    <tr key={index}>
                        <td className="p-1 py-3 p-sm-3">{character.name}</td>
                        <td className="p-1 py-3 p-sm-3">{character.height} cm</td>
                        <td className="p-1 py-3 p-sm-3 text-capitalize">{character.gender}</td>
                        <td className="p-1 py-3 p-sm-3 position-relative">
                            <Button
                                className="position-absolute top-50 start-50 translate-middle py-1 px-lg-4"
                                variant="warning"
                            >
                                View
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

TableComponent.propTypes = {
    people: PropTypes.array,
};

export default TableComponent;
