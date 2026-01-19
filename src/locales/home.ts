import type {Language} from '../context/LanguageContext'

type HomeLocale = {
    title: {
        before: string
        highlight: string
        after: string
    }
    text: string
    button: string
    reviews: {
        score: string
        text: string
    }
}

export const homeTranslations: Record<Language, HomeLocale> = {
    en: {
        title: {
            before: 'Beautiful food & takeaway, ',
            highlight: 'delivered ',
            after: 'to your door.',
        },
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Place an Order',
        reviews: {
            score: '4.8 out of 5 ',
            text: 'based on 2000+ reviews',
        },
    },

    de: {
        title: {
            before: 'Wunderschönes Essen, ',
            highlight: 'direkt geliefert ',
            after: 'zu Ihnen nach Hause.',
        },
        text: 'Lorem Ipsum ist ein Blindtext der Druck- und Satzindustrie.',
        button: 'Bestellen',
        reviews: {
            score: '4,8 von 5 ',
            text: 'basierend auf über 2000 Bewertungen',
        },
    },

    ru: {
        title: {
            before: 'Вкусная еда и ',
            highlight: 'доставка ',
            after: 'прямо к вашей двери.',
        },
        text: 'Lorem Ipsum — это просто фиктивный текст полиграфической и наборной индустрии.',
        button: 'Сделать заказ',
        reviews: {
            score: '4,8 из 5 ',
            text: 'на основе более чем 2000 отзывов',
        },
    },
}
