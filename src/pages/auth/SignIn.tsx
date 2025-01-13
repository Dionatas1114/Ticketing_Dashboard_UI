import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import * as MUI from '@mui/material';

import { i18n } from '../../translate/i18n';

import AppTheme from '../../assets/themes/AppTheme';
import { ColorModeSelectDropdown } from '../../assets/themes/ColorModeSelect';

import Card from '../../components/Card';
import StackContainer from '../../components/StackContainer';
import RouterLink from '../../components/Link';
import InputEmail from '../../components/Inputs/inputEmail';
import InputPassword from '../../components/Inputs/inputPassword';
import SubmitBox from '../../components/Box/SubmitBox';
import SubmitButton from '../../components/Button/SubmitButton';

import { loginSchema as validationSchema } from '../../validations/schemas/UserSchema';
// import ForgotPassword from './ForgotPassword';
// import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';

export type SignInType = {
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
        <ColorModeSelectDropdown sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        <Card>
          {/* <SitemarkIcon /> */}
          <MUI.Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            {i18n.t('signin.title')}
          </MUI.Typography>
          <SubmitBox handleSubmit={handleSubmit}>
            <MUI.FormControl>
              <MUI.FormLabel htmlFor="email">{i18n.t('signin.form.email.title')}</MUI.FormLabel>
              <InputEmail
                value={values.email.trim()}
                onChange={handleChange}
                color={touched.email && Boolean(errors.email) ? 'error' : 'primary'}
                error={touched.email && Boolean(errors.email)}
                helperText={(touched.email && errors.email) || ' '}
                placeholder={
                  touched.email && Boolean(errors.email)
                    ? ''
                    : i18n.t('signin.form.email.placeholder')
                }
              />
            </MUI.FormControl>
            <MUI.FormControl>
              <MUI.FormLabel htmlFor="password">{i18n.t('signin.form.password')}</MUI.FormLabel>
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
              />
            </MUI.FormControl>
            <MUI.FormControlLabel
              control={<MUI.Checkbox value="remember" color="primary" />}
              label={i18n.t('signin.form.rememberMe')}
            />
            {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
            <SubmitButton isSubmitting={isSubmitting}>
              {i18n.t('signin.buttons.submit')}
            </SubmitButton>
            <RouterLink to="/forgot-password">{i18n.t('signin.buttons.forgotPassword')}</RouterLink>
          </SubmitBox>
          <MUI.Divider>{i18n.t('signin.form.or')}</MUI.Divider>
          <MUI.Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <MUI.Button
              disabled
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Google')}
              // startIcon={<GoogleIcon />}
            >
              {i18n.t('signin.form.google')}
            </MUI.Button>
            <MUI.Button
              disabled
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Facebook')}
              // startIcon={<FacebookIcon />}
            >
              {i18n.t('signin.form.facebook')}
            </MUI.Button>
            <MUI.Typography sx={{ textAlign: 'center' }}>
              {i18n.t('signin.form.noAccount')}{' '}
              <RouterLink to="/signup">{i18n.t('signin.buttons.registerLink')}</RouterLink>
            </MUI.Typography>
          </MUI.Box>
        </Card>
      </StackContainer>
    </AppTheme>
  );
}
