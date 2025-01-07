import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, 
        },
        resources: {
            en: { translation: require('./locales/en.json') },
            es: { translation: require('./locales/es.json') },
            de: { translation: require('./locales/de.json') },
        }
    });

export default i18n;