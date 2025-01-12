import { Typography, TypographyProps } from '@mui/material';

const Title = ({ variant = 'h6', component = 'h2', ...props }: TypographyProps) => (
  <Typography
    component={component}
    variant={variant}
    sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}
    {...props}
  />
);

export default Title;
