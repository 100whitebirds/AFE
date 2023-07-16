import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import enLocale from '../../../../public/locales/en/translation.json';
import ruLocale from '../../../../public/locales/ru/translation.json';

export enum Language {
  EN = 'en',
  RU = 'ru',
}

export const resources = {
  [Language.EN]: {
    translation: enLocale,
  },
  [Language.RU]: {
    translation: ruLocale,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: Language.EN,
    fallbackLng: Language.EN,
    debug: __IS_DEV__,

    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
