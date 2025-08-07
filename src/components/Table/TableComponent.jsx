import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    Button,
} from '@mui/material';

/**
 * Table Component who contain the data for some information and show 10 people per 10
 * @property {array} people - Name of the current person in details page
 */

const CustomTableCell = ({
    children,
    align = 'center',
    size = 'medium',
    textTransform = 'none',
}) => {
    return (
        <TableCell
            align={ align }
            size={ size }
            sx={ {
                color: '#fff',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#4d5154',
                textTransform: { textTransform },
            } }
        >
            { children }
        </TableCell>
    );
};

const TableComponent = ({ people }) => {
    return (
        <TableContainer
            component={ Paper }
            elevation={ 0 }
            sx={ {
                backgroundColor: 'transparent',
                marginY: '2rem',
            } }
        >
            <Table
                aria-label='Star Wars characters'
                sx={ {
                    backgroundColor: '#212529',
                    color: '#fff',
                    boxShadow: 'none',
                    '& .MuiTableCell-root': {
                        maxHeight: '57px',
                        fontSize: '16px',
                        fontFamily: 'Orbitron, "Helvetica Neue", sans-serif',
                    },
                } }
            >
                <TableHead>
                    <TableRow
                        sx={ {
                            backgroundColor: '#212529'
                        } }
                    >
                        { ['name', 'height', 'gender', 'actions'].map((label) => (
                            <TableCell
                                align={ label === 'name' ? 'left' : 'center' }
                                key={ label }
                                sx={ {
                                    color: '#fff',
                                    borderWidth: 1,
                                    borderStyle: 'solid',
                                    borderColor: '#4d5154',
                                    textTransform: 'capitalize',
                                } }
                            >
                                { label }
                            </TableCell>
                        )) }
                    </TableRow>
                </TableHead>

                <TableBody>
                    { people.map((character) => (
                        <TableRow
                            key={ character.id }
                            hover
                            sx={ {
                                '&:nth-of-type(odd)': {
                                    backgroundColor: '#2c3034', // #2c2c2c
                                },
                                '&:nth-of-type(even)': {
                                    backgroundColor: '#212529',
                                },
                                '&:hover': {
                                    backgroundColor: '#343a40',
                                },
                            } }
                        >
                            <CustomTableCell align='left'>{ character.name }</CustomTableCell>
                            <CustomTableCell>{ character.height } cm</CustomTableCell>
                            <CustomTableCell textTransform='capitalize'>{ character.gender }</CustomTableCell>
                            <CustomTableCell size='small'>
                                <NavLink
                                    to={ `people/${character.id}` }
                                    style={ { textDecoration: 'none' } }
                                >
                                    <Button
                                        variant='contained'
                                        size='small'
                                        sx={ {
                                            textAlign: 'center',
                                            borderWidth: 1,
                                            borderStyle: 'solid',
                                            borderColor: '#4d5154',
                                            backgroundColor: '#ffc107',
                                            color: '#000',
                                            '&:hover': { backgroundColor: '#e0a800' },
                                        } }
                                    >
                                        View
                                    </Button>
                                </NavLink>
                            </CustomTableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

TableComponent.propTypes = {
    people: PropTypes.array,
};

export default memo(TableComponent);
