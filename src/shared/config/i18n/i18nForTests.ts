import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { Language, resources } from './i18n';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: Language.EN,
    fallbackLng: Language.EN,
    debug: false,

    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
