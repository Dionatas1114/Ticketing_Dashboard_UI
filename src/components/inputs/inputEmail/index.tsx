import { TextField, TextFieldProps } from '@mui/material';

const InputEmail = (props: TextFieldProps) => (
  <TextField
    id="email"
    type="email"
    autoComplete="email"
    sx={{
      '& .MuiFormHelperText-root': {
        height: '0.5rem', // Ajusta a altura do helperText
      },
    }}
    required
    fullWidth
    autoFocus
    {...props}
  />
);

export default InputEmail;
