import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Typography,
} from '@mui/material';

import { i18n } from '../../translate/i18n';

import AppTheme from '../../assets/themes/AppTheme';
import { ColorModeSelectDropdown } from '../../assets/themes/ColorModeSelect';

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
      <CssBaseline enableColorScheme />
      <StackContainer>
        <ColorModeSelectDropdown sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        <Card>
          {/* <SitemarkIcon /> */}
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            {i18n.t('signin.title')}
          </Typography>
          <SubmitBox handleSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="email">{i18n.t('signin.form.email.title')}</FormLabel>
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
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">{i18n.t('signin.form.password')}</FormLabel>
              <InputPassword
                value={values.password.trim()}
                onChange={handleChange}
                placeholder={touched.password && Boolean(errors.password) ? '' : '••••••'}
                color={touched.password && Boolean(errors.password) ? 'error' : 'primary'}
                error={touched.password && Boolean(errors.password)}
                helperText={(touched.password && errors.password) || ' '}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={i18n.t('signin.form.rememberMe')}
            />
            {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
            <SubmitButton isSubmitting={isSubmitting}>
              {i18n.t('signin.buttons.submit')}
            </SubmitButton>
            <RouterLink to="/forgot-password">{i18n.t('signin.buttons.forgotPassword')}</RouterLink>
          </SubmitBox>
          <Divider>{i18n.t('signin.form.or')}</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              disabled
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Google')}
              // startIcon={<GoogleIcon />}
            >
              {i18n.t('signin.form.google')}
            </Button>
            <Button
              disabled
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Facebook')}
              // startIcon={<FacebookIcon />}
            >
              {i18n.t('signin.form.facebook')}
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              {i18n.t('signin.form.noAccount')}{' '}
              <RouterLink to="/signup">{i18n.t('signin.buttons.registerLink')}</RouterLink>
            </Typography>
          </Box>
        </Card>
      </StackContainer>
    </AppTheme>
  );
}
