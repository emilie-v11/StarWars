import { TableCell } from "@mui/material";

interface CustomTableCellProps {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    size?: 'small' | 'medium';
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    hide?: boolean;
}

const CustomTableCell = ({
    children,
    align = 'left',
    size = 'medium',
    textTransform = 'none',
    hide = false,
}: CustomTableCellProps) => {
    return (
        <TableCell
            align={ align }
            size={ size }
            sx={ {
                color: '#fff',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#4d5154',
                textTransform: textTransform,
                display: hide ? 'none' : 'table-cell',
            } }
        >
            { children }
        </TableCell>
    );
}
export default CustomTableCell;
