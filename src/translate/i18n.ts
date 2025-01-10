import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { messages as portugueseMessages } from './messages/frontend/pt';
import { messages as englishMessages } from './messages/frontend/en';
import { messages as spanishMessages } from './messages/frontend/es';

const messages = {
  ...portugueseMessages,
  ...englishMessages,
  ...spanishMessages,
};

i18n.use(LanguageDetector).init({
  debug: false,
  defaultNS: 'translations',
  fallbackLng: 'en',
  ns: ['translations'],
  resources: messages,
});

export { i18n };
