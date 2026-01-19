import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss'
import App from './App'
import {Provider} from 'react-redux'
import {store} from './store'
import {ThemeProvider} from './context/ThemeContext'
import {LanguageProvider} from './context/LanguageContext'


const rootElement = document.getElementById('root') as HTMLElement

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider>
            <LanguageProvider>
                <Provider store={store}>
                    <App/>
                </Provider>
            </LanguageProvider>
        </ThemeProvider>
    </StrictMode>
)
