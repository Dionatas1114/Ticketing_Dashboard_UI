import * as MUI from '@mui/material';
import { Visibility, VisibilityOff, LockRounded } from '@mui/icons-material';

import { passwordStrength } from '../../../validations/patterns';

interface InputPasswordProps {
  showPassword: boolean;
  onClick: MUI.IconButtonProps['onClick'];
  value: string;
}

const strengthLabels: Record<number, { label: string; color: string }> = {
  1: { label: 'Very weak', color: MUI.colors.red[500] },
  2: { label: 'Weak', color: MUI.colors.orange[500] },
  3: { label: 'Fair', color: MUI.colors.yellow[500] },
  4: { label: 'Strong', color: MUI.colors.green[500] },
  5: { label: 'Very strong', color: MUI.colors.blue[500] },
};

const getStrengthLabel = (strength: number) => strengthLabels[strength] || strengthLabels[1];

const InputPassword = ({
  onClick,
  value,
  showPassword,
  error,
  ...props
}: InputPasswordProps & MUI.TextFieldProps) => {
  const strength = passwordStrength(value);
  const { label, color } = getStrengthLabel(strength);
  const showLineProgress = !error || strength > 1;

  return (
    <div>
      <MUI.TextField
        id="password"
        autoComplete="current-password"
        error={error}
        fullWidth
        autoFocus
        inputProps={{
          maxLength: 10, // Limita o input ao máx de 10 caracteres
        }}
        slotProps={{
          input: {
            startAdornment: (
              <MUI.InputAdornment position="start">
                <LockRounded fontSize="small" />
              </MUI.InputAdornment>
            ),
            endAdornment: (
              <MUI.InputAdornment position="end" sx={{ color: 'hsla(210, 0%, 0%, 0.0)' }}>
                <MUI.IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  size="small"
                  onClick={onClick}
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
        sx={{ mb: showLineProgress ? '0.5rem' : '1rem' }}
        {...props}
      />
      {showLineProgress && (
        <>
          <MUI.LinearProgress
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
          <MUI.Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}
          >
            <MUI.Typography variant="body2" sx={{ color }}>
              {'6-10 chars, A-z, 0-9, @!#*'}
            </MUI.Typography>
            <MUI.Typography variant="body2" sx={{ color }}>
              {label}
            </MUI.Typography>
          </MUI.Box>
        </>
      )}
    </div>
  );
};

export default InputPassword;
