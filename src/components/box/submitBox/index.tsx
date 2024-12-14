import * as React from 'react';
import { Box } from '@mui/material';

interface SubmitBoxProps {
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  children: React.ReactNode;
}

const SubmitBox = ({ handleSubmit, children }: SubmitBoxProps) => (
  <Box
    id="submit box"
    component="form"
    onSubmit={handleSubmit}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: 2,
    }}
  >
    {children}
  </Box>
);

export default SubmitBox;
