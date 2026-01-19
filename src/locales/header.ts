import type { Language } from '../context/LanguageContext'

type HeaderLocale = {
    nav: {
        home: string
        menu: string
        login: string
        order: string
    }
}

export const headerTranslations: Record<Language, HeaderLocale> = {
    en: {
        nav: {
            home: 'Home',
            menu: 'Menu',
            login: 'Login',
            order: 'Order',
        },
    },

    de: {
        nav: {
            home: 'Startseite',
            menu: 'Menü',
            login: 'Anmelden',
            order: 'Bestellung',
        },
    },

    ru: {
        nav: {
            home: 'Главная',
            menu: 'Меню',
            login: 'Вход',
            order: 'Заказ',
        },
    },
}
