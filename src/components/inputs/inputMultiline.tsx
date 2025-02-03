import { TextField, TextFieldProps } from '@mui/material';

const InputMultiline = ({ name, ...props }: TextFieldProps) => (
  <TextField
    id={name}
    name={name}
    type={name}
    multiline
    rows={3}
    sx={{
      '& .MuiInputBase-root': {
        height: '5rem',
      },
      '& .MuiFormHelperText-root': {
        height: '0.5rem', // Ajusta a altura do helperText
      },
      mb: 1,
    }}
    {...props}
  />
);

export default InputMultiline;
