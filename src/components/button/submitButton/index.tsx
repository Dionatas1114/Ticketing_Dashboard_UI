import * as React from 'react';
import { Button } from '@mui/material';

interface SubmitButtonProps {
  isSubmitting: boolean;
  children: React.ReactNode;
}

const SubmitButton = ({ children, isSubmitting }: SubmitButtonProps) => (
  <Button id="submit button" fullWidth type="submit" variant="contained" disabled={isSubmitting}>
    {children}
  </Button>
);

export default SubmitButton;
