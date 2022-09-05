import i18n from 'i18next';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

i18n
	.use(detector)
	.use(backend)
	.use(initReactI18next)
	.init({
		backend: {
			loadPath: '/locales/{{lng}}.json',
		},
		fallbackLng: 'en-GB',
		debug: true,
		interpolation: {
			escapeValue: false,
		},
	});
