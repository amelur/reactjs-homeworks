import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss'
import App from './App'
import {Provider} from 'react-redux'
import {store} from './store'
import {ThemeProvider} from './context/ThemeContext'


const rootElement = document.getElementById('root') as HTMLElement

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </StrictMode>
)
