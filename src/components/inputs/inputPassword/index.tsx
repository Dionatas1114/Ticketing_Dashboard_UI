import { Visibility, VisibilityOff, LockRounded } from '@mui/icons-material';

import {
  TextField,
  TextFieldProps,
  colors,
  InputAdornment,
  IconButton,
  LinearProgress,
  Typography,
  Box,
} from '@mui/material';

import { passwordStrength } from '../../../validations/patterns';
import usePasswordVisibility from '../../../hooks/usePasswordVisibility';
import rules from '../../../validations/rules';

type InputPasswordProps = {
  value: string;
} & TextFieldProps;

const strengthLabels: Record<number, { label: string; color: string }> = {
  1: { label: 'Very weak', color: colors.red[500] },
  2: { label: 'Weak', color: colors.orange[500] },
  3: { label: 'Fair', color: colors.yellow[500] },
  4: { label: 'Strong', color: colors.green[500] },
  5: { label: 'Very strong', color: colors.blue[500] },
};

const getStrengthLabel = (strength: number) => strengthLabels[strength] || strengthLabels[1];

const InputPassword = ({ value, error, ...props }: InputPasswordProps) => {
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();

  const strength = passwordStrength(value);
  const { label, color } = getStrengthLabel(strength);
  const showLineProgress = !error || strength > 1;

  return (
    <div>
      <TextField
        id="password"
        autoComplete="current-password"
        fullWidth
        autoFocus
        error={error}
        // showPassword={showPassword}
        type={showPassword ? 'text' : 'password'}
        inputProps={{
          maxLength: rules.passwMaxLength, // Limita o input ao máx de 10 caracteres
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <LockRounded fontSize="small" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ color: 'hsla(210, 0%, 0%, 0.0)' }}>
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  size="small"
                  onClick={togglePasswordVisibility}
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
        }}
        sx={{ mb: showLineProgress ? '0.5rem' : '1rem' }}
        {...props}
      />
      {showLineProgress && (
        <>
          <LinearProgress
            variant="determinate"
            value={(strength / 5) * 100}
            sx={{
              // mt: 1,
              height: 10,
              borderRadius: 5,
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: color,
              },
            }}
          />
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}
          >
            <Typography variant="body2" sx={{ color }}>
              {`${rules.passwMinLength}-${rules.passwMaxLength} chars, A-z, 0-9, @!#*`}
            </Typography>
            <Typography variant="body2" sx={{ color }}>
              {label}
            </Typography>
          </Box>
        </>
      )}
    </div>
  );
};

export default InputPassword;
