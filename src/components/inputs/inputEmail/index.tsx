import { TextField, TextFieldProps } from '@mui/material';

const InputEmail = (props: TextFieldProps) => (
  <TextField
    id="email"
    type="email"
    autoComplete="email"
    fullWidth
    autoFocus
    sx={{
      '& .MuiFormHelperText-root': {
        height: '0.5rem', // Ajusta a altura do helperText
      },
    }}
    {...props}
  />
);

export default InputEmail;
