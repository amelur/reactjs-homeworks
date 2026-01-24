import type { Language } from '../context/LanguageContext'

export const controlsTranslations: Record<
    Language,
    {
        theme: {
            light: string
            dark: string
            label: string
        }
        language: {
            label: string
        }
    }
> = {
    en: {
        theme: {
            label: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        language: {
            label: 'Language',
        },
    },

    de: {
        theme: {
            label: 'Thema',
            light: 'Hell',
            dark: 'Dunkel',
        },
        language: {
            label: 'Sprache',
        },
    },

    ru: {
        theme: {
            label: 'Тема',
            light: 'Светлая',
            dark: 'Тёмная',
        },
        language: {
            label: 'Язык',
        },
    },
}
