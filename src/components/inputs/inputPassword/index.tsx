import * as MUI from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface InputPasswordProps {
  showPassword: boolean;
  onClick: MUI.IconButtonProps['onClick'];
}

const InputPassword = (props: InputPasswordProps & MUI.TextFieldProps) => (
  <MUI.TextField
    id="password"
    autoComplete="current-password"
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
              edge="end"
              size="small"
              sx={{
                // border: 'none', // Remove a borda do IconButton
                marginRight: '-0.7rem', // Garante ícone bem posicionado
              }}
            >
              {props.showPassword ? <VisibilityOff /> : <Visibility />}
            </MUI.IconButton>
          </MUI.InputAdornment>
        ),
      },
    }}
    required
    fullWidth
    autoFocus
    {...props}
  />
);

export default InputPassword;
