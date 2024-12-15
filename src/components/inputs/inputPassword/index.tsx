import * as MUI from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface InputPasswordProps {
  showPassword: boolean; // Controle de exibição de senha (true/false)
  onClick: MUI.IconButtonProps['onClick'];
}

const InputPassword = (props: InputPasswordProps & MUI.TextFieldProps) => {
  const {
    children,
    showPassword,
    placeholder,
    value,
    type,
    onChange,
    disabled,
    error,
    color,
    helperText,
    onClick,
  } = props;

  return (
    <MUI.TextField
      id="password"
      required
      fullWidth
      autoFocus
      placeholder={placeholder}
      autoComplete="current-password"
      value={value}
      type={type}
      onChange={onChange}
      disabled={disabled}
      error={error}
      color={color}
      helperText={helperText}
      sx={{
        '& .MuiFormHelperText-root': {
          height: '0.5rem', // Ajusta a altura do helperText
        },
      }}
      slotProps={{
        input: {
          endAdornment: (
            <MUI.InputAdornment position="end" sx={{ color: 'hsla(210, 0%, 0%, 0.0)' }}>
              <MUI.IconButton
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
              </MUI.IconButton>
            </MUI.InputAdornment>
          ),
        },
      }}
    >
      {children}
    </MUI.TextField>
  );
};

export default InputPassword;
