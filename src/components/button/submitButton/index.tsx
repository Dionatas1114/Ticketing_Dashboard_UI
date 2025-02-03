import * as React from 'react';
import { Button, ButtonOwnProps } from '@mui/material';

type SubmitButtonProps = {
  isSubmitting: boolean;
} & ChildrenProps &
  ButtonOwnProps;

const SubmitButton = ({ isSubmitting, ...props }: SubmitButtonProps) => (
  <Button id="submit button" type="submit" disabled={isSubmitting} variant="contained" {...props} />
);

export default SubmitButton;
