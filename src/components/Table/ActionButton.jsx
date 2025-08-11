import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { darken } from '@mui/material';

const ActionButton = ({ url, label, color, bgColor, borderColor = '#4d5154' }) => {
  return (
    <NavLink
      to={ url }
      style={ { textDecoration: 'none' } }
    >
      <Button
        variant='contained'
        size='small'
        sx={ {
          textAlign: 'center',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: borderColor,
          color: color,
          backgroundColor: bgColor,
          '&:hover': {
            backgroundColor: darken(bgColor, 0.3),
          },
        } }
      >
        { label }
      </Button>
    </NavLink>
  );
};

export default ActionButton;
