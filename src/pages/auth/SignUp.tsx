import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import * as MUI from '@mui/material';

import AppTheme from '../../assets/themes/AppTheme';
import { ColorModeSelectDropdown } from '../../assets/themes/ColorModeSelect';

import Card from '../../components/Card';
import StackContainer from '../../components/StackContainer';
import RouterLink from '../../components/Link';
import InputUserName from '../../components/Inputs/inputUserName';
import InputEmail from '../../components/Inputs/inputEmail';
import InputPassword from '../../components/Inputs/inputPassword';
import SubmitBox from '../../components/Box/SubmitBox';
import SubmitButton from '../../components/Button/SubmitButton';
// import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';

import { signUpSchema as validationSchema } from '../../validations/schemas/UserSchema';

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

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const { handleSubmit, resetForm, handleChange, values, isSubmitting, touched, errors } =
    useFormik<SignUpType>({
      initialValues,
      validationSchema,
      onSubmit: (values, { setSubmitting }) => {
        setTimeout(async () => {
          setSubmitting(false);
          console.log('useFormik values: ', values);
          // await HandleSignUp(values);
          resetForm();
          navigateTo('/dash');
        }, 500);
      },
    });

  return (
    <AppTheme {...props}>
      <MUI.CssBaseline enableColorScheme />
      <ColorModeSelectDropdown sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <StackContainer direction="column" justifyContent="space-between">
        <Card>
          {/* <SitemarkIcon /> */}
          <MUI.Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign up
          </MUI.Typography>
          <SubmitBox handleSubmit={handleSubmit}>
            <MUI.FormControl>
              <MUI.FormLabel htmlFor="name">Full name</MUI.FormLabel>
              <InputUserName
                value={values.name.trim()}
                onChange={handleChange}
                color={touched.name && Boolean(errors.name) ? 'error' : 'primary'}
                error={touched.name && Boolean(errors.name)}
                helperText={(touched.name && errors.name) || ' '}
                // TODO: add name mask
              />
            </MUI.FormControl>
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
              control={<MUI.Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive updates via email."
            />
            <SubmitButton isSubmitting={isSubmitting}>Sign up</SubmitButton>
          </SubmitBox>
          <MUI.Divider>
            <MUI.Typography sx={{ color: 'text.secondary' }}>or</MUI.Typography>
          </MUI.Divider>
          <MUI.Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <MUI.Button
              disabled
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign up with Google')}
              // startIcon={<GoogleIcon />}
            >
              Sign up with Google
            </MUI.Button>
            <MUI.Button
              disabled
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign up with Facebook')}
              // startIcon={<FacebookIcon />}
            >
              Sign up with Facebook
            </MUI.Button>
            <MUI.Typography sx={{ textAlign: 'center' }}>
              Already have an account? <RouterLink to="/">Sign in</RouterLink>
            </MUI.Typography>
          </MUI.Box>
        </Card>
      </StackContainer>
    </AppTheme>
  );
}
