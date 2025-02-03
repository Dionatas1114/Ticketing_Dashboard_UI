import * as React from 'react';
import { Box } from '@mui/material';

type SubmitBoxProps = {
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  gap?: number;
} & ChildrenProps;

const SubmitBox = ({ handleSubmit, gap = 2, ...props }: SubmitBoxProps) => (
  <Box
    id="submit box"
    component="form"
    onSubmit={handleSubmit}
    gap={gap}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }}
    {...props}
  />
);

export default SubmitBox;
