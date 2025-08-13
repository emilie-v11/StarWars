import { memo } from 'react';
import { Paper, TableContainer, Table, TableHead, TableRow, TableBody } from '@mui/material';
import CustomTableCell from '@/components/Table/CustomTableCell';
import ActionButton from '@/components/Table/ActionButton';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Table Component who contain the data for some information and show 10 people per 10
 * @property {array} people - Name of the current person in details page
 */

interface TableComponentProps {
    people: Array<{ [key: string]: any }>;
    columns: string[];
}

const TableComponent = ({ people, columns }: TableComponentProps) => {
    const isMobile = useMediaQuery('(max-width:600px)');

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
                    },
                } }
            >
                <TableHead>
                    <TableRow
                        sx={ {
                            backgroundColor: '#212529',
                        } }
                    >
                        { columns.map((label) => (
                            <CustomTableCell key={ label } align={ label === 'actions' ? 'center' : 'left' } textTransform='capitalize' hide={ isMobile && (label === 'height' || label === 'gender') || label === 'id' }>
                                { label }
                            </CustomTableCell>
                        )) }
                    </TableRow>
                </TableHead>

                <TableBody>
                    { people.map((person) => (
                        <TableRow
                            key={ person.name }
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
                            { Object.entries(person).map(([key, value]) => (
                                <CustomTableCell
                                    key={ key }
                                    hide={
                                        (isMobile && (key === 'height' || key === 'gender')) ||
                                        key === 'id'
                                    }
                                    textTransform={ key === 'gender' ? 'capitalize' : 'none' }
                                >
                                    { value }
                                </CustomTableCell>
                            )) }
                            <CustomTableCell size='small' align='center'>
                                <ActionButton
                                    url={ `people/${person.id}` }
                                    label='View'
                                    color={ '#000' }
                                    bgColor={ '#ffc107' }
                                />
                            </CustomTableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default memo(TableComponent);
