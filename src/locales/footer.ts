import type { Language } from '../context/LanguageContext'

export const footerTranslations: Record<
    Language,
    {
        about: {
            line1: string
            line2: string
        }
        company: {
            title: string
            home: string
            order: string
            faq: string
            contact: string
        }
        template: {
            title: string
            styleGuide: string
            changelog: string
            licence: string
            university: string
        }
        flowbase: {
            title: string
            more: string
        }
        bottom: {
            builtBy: string
            poweredBy: string
        }
    }
> = {
    en: {
        about: {
            line1: 'Takeaway & Delivery template',
            line2: 'for small - medium businesses.',
        },
        company: {
            title: 'Company',
            home: 'Home',
            order: 'Order',
            faq: 'FAQ',
            contact: 'Contact',
        },
        template: {
            title: 'Template',
            styleGuide: 'Style Guide',
            changelog: 'Changelog',
            licence: 'Licence',
            university: 'Webflow University',
        },
        flowbase: {
            title: 'Flowbase',
            more: 'More Cloneables',
        },
        bottom: {
            builtBy: 'Built by',
            poweredBy: 'Powered by',
        },
    },

    de: {
        about: {
            line1: 'Takeaway- & Liefer-Vorlage',
            line2: 'für kleine und mittlere Unternehmen.',
        },
        company: {
            title: 'Unternehmen',
            home: 'Startseite',
            order: 'Bestellung',
            faq: 'FAQ',
            contact: 'Kontakt',
        },
        template: {
            title: 'Vorlage',
            styleGuide: 'Styleguide',
            changelog: 'Änderungen',
            licence: 'Lizenz',
            university: 'Webflow Universität',
        },
        flowbase: {
            title: 'Flowbase',
            more: 'Weitere Vorlagen',
        },
        bottom: {
            builtBy: 'Erstellt von',
            poweredBy: 'Unterstützt von',
        },
    },

    ru: {
        about: {
            line1: 'Шаблон доставки и еды на вынос',
            line2: 'для малого и среднего бизнеса.',
        },
        company: {
            title: 'Компания',
            home: 'Главная',
            order: 'Заказ',
            faq: 'Вопросы',
            contact: 'Контакты',
        },
        template: {
            title: 'Шаблон',
            styleGuide: 'Гайд по стилю',
            changelog: 'История изменений',
            licence: 'Лицензия',
            university: 'Университет Webflow',
        },
        flowbase: {
            title: 'Flowbase',
            more: 'Другие шаблоны',
        },
        bottom: {
            builtBy: 'Создано',
            poweredBy: 'Работает на',
        },
    },
}
