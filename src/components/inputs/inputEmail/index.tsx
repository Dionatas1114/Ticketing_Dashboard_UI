import { TextField, TextFieldProps } from '@mui/material';

const InputEmail = ({ value, onChange, error, color, helperText, children }: TextFieldProps) => (
  <TextField
    id="email"
    required
    fullWidth
    autoFocus
    type="email"
    autoComplete="email"
    placeholder="your@email.com"
    value={value}
    onChange={onChange}
    color={color}
    error={error}
    helperText={helperText}
    sx={{
      '& .MuiFormHelperText-root': {
        height: '0.5rem', // Ajusta a altura do helperText
      },
    }}
  >
    {children}
  </TextField>
);

export default InputEmail;
