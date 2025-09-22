import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { ReactNode } from 'react';
import { darken } from '@mui/material';

interface BackButtonProps {
    text: string;
    color?: string;
    bgColor?: string;
    icon?: ReactNode;
}

const BackButton = ({
    text,
    color = '#000',
    bgColor = 'rgba(255, 193, 6, 1)',
    icon = <ArrowBackIcon color='inherit' />,
}: BackButtonProps) => {
    const navigate = useNavigate();

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };

    return (
        <Button
            variant='contained'
            color='primary'
            onClick={handleBack}
            startIcon={icon}
            sx={{
                display: 'flex',
                alignSelf: 'flex-end',
                my: 2,
                color: color,
                backgroundColor: bgColor,
                '&:hover': { backgroundColor: darken(bgColor, 0.3) },
                textTransform: 'none',
                '& span.MuiButton-startIcon svg': { fill: color },
                '&:focus-visible': {
                    outline: '2px solid #ffc106',
                    outlineOffset: '2px',
                }
            }}
        >
            {text}
        </Button>
    );
};

export default BackButton;