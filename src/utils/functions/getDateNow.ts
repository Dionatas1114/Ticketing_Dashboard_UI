import { i18n } from '../../translate/i18n';

const currentLanguage = i18n.language as 'pt' | 'en' | 'es';

export const getDateNow = () => {
  const allData = {
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

  const days = allData[currentLanguage].days;
  const months = allData[currentLanguage].months;

  const dateNow = new Date();

  const hours = dateNow.getHours();
  const day = days[dateNow.getDay()];
  const date = dateNow.getDate();
  const month = months[dateNow.getMonth()];

  return { dateNow: `${day} ${date} ${month}`, hours };
};
