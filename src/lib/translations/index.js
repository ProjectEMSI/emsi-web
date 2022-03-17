import i18n from "sveltekit-i18n";
import lang from "./lang.json"

/** @type {import('sveltekit-i18n').Config} */
const config = ({
    fallbackLocale: 'cs',
    translations: {
        en: { lang },
        cs: { lang },
    },
    loaders: [
        {
            locale: 'en',
            key: 'common',
            loader: async () => (
                await import('./en/common.json')
            ).default
        },
        {
            locale: 'en',
            key: 'home',
            routes: ['/'],
            loader: async () => (
                await import('./en/home.json')
            ).default
        },
        {
            locale: 'cs',
            key: 'common',
            loader: async () => (
                await import('./cs/common.json')
            ).default
        },
        {
            locale: 'cs',
            key: 'home',
            routes: ['/'],
            loader: async () => (
                await import('./cs/home.json')
            ).default
        }
    ]
})

export const { t, loading, locales, locale, translations, loadTranslations, addTranslations, getTranslationProps } = new i18n(config);
