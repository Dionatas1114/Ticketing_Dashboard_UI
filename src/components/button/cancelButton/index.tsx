import { Button, ButtonProps } from '@mui/material';

type CancelButtonProps = {
  toggleOpen: () => void;
} & ButtonProps;

const CancelButton = ({ toggleOpen, sx = { mt: 1 }, ...props }: CancelButtonProps) => (
  <Button
    id="cancel button"
    color="secondary"
    onClick={toggleOpen}
    variant="outlined"
    sx={sx}
    {...props}
  />
);

export default CancelButton;
