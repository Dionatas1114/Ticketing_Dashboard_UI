import { TextField, TextFieldProps } from '@mui/material';

const InputUserName = (props: TextFieldProps) => (
  <TextField
    id="user name"
    name="name"
    autoComplete="name"
    sx={{
      '& .MuiFormHelperText-root': {
        height: '0.5rem', // Ajusta a altura do helperText
      },
    }}
    fullWidth
    required
    {...props}
  />
);

export default InputUserName;
