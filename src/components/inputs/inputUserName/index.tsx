import { TextField, TextFieldProps } from '@mui/material';

const InputUserName = ({ value, onChange, error, color, helperText, children }: TextFieldProps) => (
  <TextField
    id="user name"
    name="name"
    autoComplete="name"
    placeholder="Your name"
    value={value}
    onChange={onChange}
    error={error}
    color={color}
    helperText={helperText}
    fullWidth
    required
    sx={{
      '& .MuiFormHelperText-root': {
        height: '0.5rem', // Ajusta a altura do helperText
      },
    }}
  >
    {children}
  </TextField>
);

export default InputUserName;
