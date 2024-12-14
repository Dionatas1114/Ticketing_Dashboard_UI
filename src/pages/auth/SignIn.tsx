import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as MUI from '@mui/material';

import AppTheme from '../../assets/themes/AppTheme';
import ColorModeSelect from '../../assets/themes/ColorModeSelect';

import Card from '../../components/card';
import StackContainer from '../../components/stackContainer';
import RouterLink from '../../components/link';
import InputEmail from '../../components/inputs/inputEmail';
import InputPassword from '../../components/inputs/inputPassword';
import SubmitBox from '../../components/box/submitBox';
import SubmitButton from '../../components/button/submitButton';

import { loginSchema as validationSchema } from '../../validations/schemas/UserSchema';
// import ForgotPassword from './ForgotPassword';
// import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';

type SignInType = {
  email: string;
  password: string;
};

const initialValues: SignInType = {
  email: '',
  password: '',
};

export default function SignIn(props: { disableCustomTheme?: boolean }) {
  const navigateTo = useNavigate();

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const { handleSubmit, resetForm, handleChange, values, isSubmitting, touched, errors } =
    useFormik<SignInType>({
      initialValues,
      validationSchema,
      onSubmit: (values, { setSubmitting }) => {
        setTimeout(async () => {
          setSubmitting(false);
          console.log('useFormik values: ', values);
          // await HandleLogin(values);
          resetForm();
          navigateTo('/dash');
        }, 500);
      },
    });

  return (
    <AppTheme {...props}>
      <MUI.CssBaseline enableColorScheme />
      <StackContainer>
        <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        <Card variant="outlined">
          {/* <SitemarkIcon /> */}
          <MUI.Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign in
          </MUI.Typography>
          <SubmitBox handleSubmit={handleSubmit}>
            <MUI.FormControl>
              <MUI.FormLabel htmlFor="email">Email</MUI.FormLabel>
              <InputEmail
                value={values.email.trim()}
                onChange={handleChange}
                color={touched.email && Boolean(errors.email) ? 'error' : 'primary'}
                error={touched.email && Boolean(errors.email)}
                helperText={(touched.email && errors.email) || ' '}
              />
            </MUI.FormControl>
            <MUI.FormControl>
              <MUI.FormLabel htmlFor="password">Password</MUI.FormLabel>
              <InputPassword
                value={values.password.trim()}
                onChange={handleChange}
                onClick={handleClickShowPassword}
                showPassword={showPassword}
                type={showPassword ? 'text' : 'password'}
                placeholder={touched.password && Boolean(errors.password) ? '' : '••••••'}
                color={touched.password && Boolean(errors.password) ? 'error' : 'primary'}
                error={touched.password && Boolean(errors.password)}
                helperText={(touched.password && errors.password) || ' '}
                // TODO: add password strength meter
                // TODO: add password mask
              />
            </MUI.FormControl>
            <MUI.FormControlLabel
              control={<MUI.Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
            <SubmitButton isSubmitting={isSubmitting}>Sign in</SubmitButton>
            <RouterLink to="/auth/forgot-password">Forgot your password?</RouterLink>
          </SubmitBox>
          <MUI.Divider>or</MUI.Divider>
          <MUI.Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <MUI.Button
              disabled
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Google')}
              // startIcon={<GoogleIcon />}
            >
              Sign in with Google
            </MUI.Button>
            <MUI.Button
              disabled
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Facebook')}
              // startIcon={<FacebookIcon />}
            >
              Sign in with Facebook
            </MUI.Button>
            <MUI.Typography sx={{ textAlign: 'center' }}>
              Don&apos;t have an account? <RouterLink to="/auth/sign-up">Sign up</RouterLink>
            </MUI.Typography>
          </MUI.Box>
        </Card>
      </StackContainer>
    </AppTheme>
  );
}
