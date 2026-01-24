import {createContext, ReactNode, useContext, useState} from 'react'

export type Language = 'en' | 'de' | 'ru'

type LanguageContextValue = {
    language: Language
    setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export const LanguageProvider = ({children}: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en')

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguageContext = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguageContext must be used within LanguageProvider')
    }
    return context
}
