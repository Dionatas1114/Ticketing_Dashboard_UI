import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface InputPasswordProps {
  placeHolder?: string;
  showPassword?: boolean;
  onClick?: () => void;
}

export default function InputPassword(props: TextFieldProps & InputPasswordProps) {
  const {
    id = 'password',
    variant = 'outlined',
    autoComplete = 'current-password',
    required,
    fullWidth,
    autoFocus,
    type,
    placeHolder = '••••••',
    showPassword,
    value,
    onChange,
    disabled,
    color,
    error,
    helperText,
    onClick,
    sx = {
      '& .MuiFormHelperText-root': {
        height: '0.5rem', // Ajusta a altura do helperText
      },
    },
    slotProps = {
      input: {
        endAdornment: (
          <InputAdornment position="end" sx={{ color: 'hsla(210, 0%, 0%, 0.0)' }}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
              edge="end"
              size="small"
              sx={{
                // border: 'none', // Remove a borda do IconButton
                marginRight: '-0.7rem', // Garante ícone bem posicionado
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
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
      slotProps={slotProps}
    />
  );
}
