import { TextField, TextFieldProps } from '@mui/material';

interface InputEmailProps {
  placeHolder?: string;
}

export default function InputEmail(props: TextFieldProps & InputEmailProps) {
  const {
    id = 'email',
    required = true,
    fullWidth = true,
    autoFocus = true,
    variant = 'outlined',
    type = 'email',
    placeHolder = 'your@email.com',
    autoComplete = 'email',
    value = '',
    onChange,
    disabled = false,
    color = undefined,
    error,
    helperText,
    sx = {
      '& .MuiFormHelperText-root': {
        height: '0.5rem', // Ajusta a altura do helperText
      },
    },
  } = props;

  return (
    <TextField
      id={id}
      required={required}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      variant={variant}
      type={type}
      placeholder={placeHolder}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      disabled={disabled}
      color={color}
      error={error}
      helperText={helperText}
      sx={sx}
    />
  );
}
