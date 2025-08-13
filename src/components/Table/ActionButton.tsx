import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { darken } from '@mui/material';

interface ActionButtonProps {
  url: string;
  label: string;
  color: string;
  bgColor: string;
  borderColor?: string;
}

const ActionButton = ({ url, label, color, bgColor, borderColor = '#4d5154' }: ActionButtonProps) => {
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
