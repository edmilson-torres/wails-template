import { Header } from './components/header'
import { ThemeProvider } from './components/theme-provider'

import { Example } from './pages/Example'

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex flex-col w-full items-center">
                <Header />
                <Example />
            </div>
        </ThemeProvider>
    )
}

export default App
