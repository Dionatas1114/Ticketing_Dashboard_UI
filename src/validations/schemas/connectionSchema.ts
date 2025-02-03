import * as Yup from 'yup';

import rules from '../rules';
import { i18n } from '../../translate/i18n';
import { regexPatterns } from '../patterns';

const name = {
  name: Yup.string()
    .required(i18n.t('form.validations.userName.required'))
    .min(rules.userNameMinLength, i18n.t('form.validations.userName.minLength'))
    .max(rules.userNameMaxLength, i18n.t('form.validations.userName.maxLength'))
    .matches(regexPatterns('userName'), i18n.t('form.validations.userName.isValid')),
};

const connectionSchema = Yup.object().shape({
  ...name,
});

export { connectionSchema };
