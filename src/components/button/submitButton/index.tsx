import * as React from 'react';
import { Button } from '@mui/material';

type SubmitButtonProps = {
  isSubmitting: boolean;
} & ChildrenProps;

const SubmitButton = ({ children, isSubmitting }: SubmitButtonProps) => (
  <Button id="submit button" fullWidth type="submit" variant="contained" disabled={isSubmitting}>
    {children}
  </Button>
);

export default SubmitButton;
