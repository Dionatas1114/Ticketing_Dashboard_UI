import { i18n } from '../../translate/i18n';

export const getDateNow = () => {
  const localeData = {
    en: {
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    pt: {
      days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    },
    es: {
      days: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    },
  };

  // Idiomas permitidos
  const allowedLanguages = ['pt', 'en', 'es'] as const;

  const currentLanguage = i18n.language as (typeof allowedLanguages)[number];
  // Obtém o idioma atual ou define como 'pt' se for inválido
  const language = allowedLanguages.includes(currentLanguage) ? currentLanguage : 'pt';

  // Dados locais com fallback para 'pt'
  const { days, months } = localeData[language] || localeData['pt'];

  const now = new Date();
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const hours = now.getHours();

  return { dateNow: `${day} ${date} ${month}`, hours };
};
