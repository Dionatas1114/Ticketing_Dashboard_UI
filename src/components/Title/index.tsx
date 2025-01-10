import { Typography, TypographyProps } from '@mui/material';

export default function Title({ children, ...props }: TypographyProps) {
  return (
    <Typography
      component="h2"
      variant="h6"
      sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}
      {...props}
    >
      {children}
    </Typography>
  );
}
