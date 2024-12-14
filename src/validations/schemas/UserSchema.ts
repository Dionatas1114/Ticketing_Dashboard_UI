import * as Yup from 'yup';
import rules from '../rules';
import { i18n } from '../../translate/i18n';
import { regexPatterns } from '../patterns';

const name = {
  name: Yup.string()
    .trim()
    .min(rules.userNameMinLength, i18n.t('form.validations.userName.error'))
    .max(rules.userNameMaxLength, i18n.t('form.validations.userName.error'))
    .required(i18n.t('form.validations.userName.required')),
};

const email = {
  email: Yup.string()
    .email(i18n.t('form.validations.email.isValid'))
    .matches(regexPatterns('email'), i18n.t('form.validations.email.isValid'))
    .required(i18n.t('form.validations.email.required')),
};

const password = {
  password: Yup.string()
    .min(rules.passwMinLength, i18n.t('form.validations.password.error'))
    .max(rules.passwMaxLength, i18n.t('form.validations.password.error'))
    .required(i18n.t('form.validations.password.required')),
};

const signUpSchema = Yup.object().shape({
  ...name,
  ...password,
  ...email,
});

const loginSchema = Yup.object().shape({ ...email, ...password });
const forgotPasswordSchema = Yup.object().shape({ ...email });
const changePasswordSchema = Yup.object().shape({
  ...email,
  oldPassword: password.password,
  newPassword: password.password.notOneOf(
    [Yup.ref('oldPassword'), null],
    i18n.t('form.validations.password.samePassword')
  ),
});

export { loginSchema, signUpSchema, forgotPasswordSchema, changePasswordSchema };
