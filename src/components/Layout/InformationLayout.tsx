import { ReactNode } from "react";
import { Box } from "@mui/material";
// import BackButton from "../Buttons/BackButton";

const InformationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(33, 37, 41, 0.75)',
        borderRadius: '5px',
        zIndex: -1,
        width: '100%',
        height: '100%',
        padding: '1.5rem',
      }}
    >
      {children}
    </Box>
  )
}

export default InformationLayout;