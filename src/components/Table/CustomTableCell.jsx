import PropTypes from "prop-types";
import { TableCell } from "@mui/material";

const CustomTableCell = ({
    children,
    align = 'left',
    size = 'medium',
    textTransform = 'none',
    hide = false,
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
                textTransform: textTransform,
                display: hide ? 'none' : 'table-cell',
            } }
        >
            { children }
        </TableCell>
    );
}
CustomTableCell.propTypes = {
    children: PropTypes.node.isRequired,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    textTransform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase']),
    hide: PropTypes.bool,
};

export default CustomTableCell;
