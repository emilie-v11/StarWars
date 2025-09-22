import { Box } from "@mui/material";

const NoCharacterFound = ({ message }: { message: string }) => {
  return (
    <Box
      component='h3'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      {message}
    </Box>
  )
}

export default NoCharacterFound;