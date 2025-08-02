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
import InputUserName from '../../components/inputs/inputUserName';
import InputEmail from '../../components/inputs/inputEmail';
import InputPassword from '../../components/inputs/inputPassword';
import SubmitBox from '../../components/box/submitBox';
import SubmitButton from '../../components/button/submitButton';
// import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';

import { signUpSchema as validationSchema } from '../../validations/schemas/UserSchema';
import useAuth from '../../hooks/useAuth';

import { SignInType } from './SignIn';

export type SignUpType = SignInType & {
  name: string;
};

const initialValues: SignUpType = {
  email: '',
  password: '',
  name: '',
};

export default function SignUp(props: { disableCustomTheme?: boolean }) {
  const navigateTo = useNavigate();
  const { handleSignUp } = useAuth();

  const { handleSubmit, resetForm, handleChange, values, isSubmitting, touched, errors } =
    useFormik<SignUpType>({
      initialValues,
      validationSchema,
      onSubmit: ({ name, ...rest }, { setSubmitting }) => {
        const values = { name: name.trim(), ...rest }; // remove espacos no inicio e no final do nome
        setTimeout(async () => {
          setSubmitting(false);
          console.log('useFormik values: ', values);
          await handleSignUp(values);
          resetForm();
          navigateTo('/');
        }, 500);
      },
    });

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelectDropdown sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <StackContainer direction="column" justifyContent="space-between">
        <Card>
          {/* <SitemarkIcon /> */}
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            {i18n.t('signup.title')}
          </Typography>
          <SubmitBox handleSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="name">{i18n.t('signup.form.userName.title')}</FormLabel>
              <InputUserName
                value={values.name}
                onChange={handleChange}
                color={touched.name && Boolean(errors.name) ? 'error' : 'primary'}
                error={touched.name && Boolean(errors.name)}
                helperText={(touched.name && errors.name) || ' '}
                placeholder={i18n.t('signup.form.userName.placeholder')}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email"> {i18n.t('signup.form.email.title')}</FormLabel>
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
              <FormLabel htmlFor="password">{i18n.t('signup.form.password')}</FormLabel>
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
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label={i18n.t('signup.form.allowExtraEmails')}
            />
            <SubmitButton isSubmitting={isSubmitting}>
              {i18n.t('signup.buttons.submit')}
            </SubmitButton>
          </SubmitBox>
          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>{i18n.t('signup.form.or')}</Typography>
          </Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              disabled
              fullWidth
              variant="outlined"
              onClick={() => alert(i18n.t('signup.form.google'))}
              // startIcon={<GoogleIcon />}
            >
              {i18n.t('signup.form.google')}
            </Button>
            <Button
              disabled
              fullWidth
              variant="outlined"
              onClick={() => alert(i18n.t('signup.form.facebook'))}
              // startIcon={<FacebookIcon />}
            >
              {i18n.t('signup.form.facebook')}
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              {i18n.t('signup.form.alreadyHaveAccount')}{' '}
              <RouterLink to="/">{i18n.t('signup.buttons.loginLink')}</RouterLink>
            </Typography>
          </Box>
        </Card>
      </StackContainer>
    </AppTheme>
  );
}
