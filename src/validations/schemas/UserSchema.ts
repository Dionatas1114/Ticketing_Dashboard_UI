import * as Yup from 'yup';

import rules from '../rules';
import { i18n } from '../../translate/i18n';
import { regexPatterns } from '../patterns';
import { passwordStrength } from '../../validations/patterns';

const name = {
  name: Yup.string()
    .required(i18n.t('form.validations.userName.required'))
    .min(rules.userNameMinLength, i18n.t('form.validations.userName.minLength'))
    .max(rules.userNameMaxLength, i18n.t('form.validations.userName.maxLength'))
    .matches(regexPatterns('userName'), i18n.t('form.validations.userName.isValid')),
};

const email = {
  email: Yup.string()
    .required(i18n.t('form.validations.email.required'))
    .email(i18n.t('form.validations.email.isValid')) // não confio muito nessa validação kkk
    .matches(regexPatterns('email'), i18n.t('form.validations.email.isValid')),
};

const password = {
  password: Yup.string()
    .required(i18n.t('form.validations.password.required'))
    .min(rules.passwMinLength, i18n.t('form.validations.password.minLength'))
    .max(rules.passwMaxLength, i18n.t('form.validations.password.maxLength'))
    .test(
      'password-strength', // Nome do teste
      i18n.t('form.validations.password.isValid'), // Mensagem de erro para força da senha
      (value) => passwordStrength(value) >= 5 // Define o nível mínimo de força da senha (pontuação de 5 critérios)
    ),
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
