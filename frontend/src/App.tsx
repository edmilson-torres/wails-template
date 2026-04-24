import { Header } from './components/header'
import { ThemeProvider } from './components/theme-provider'
import { Home } from './pages/Home'

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex flex-col w-full items-center">
                <Header />
                <Home />
            </div>
        </ThemeProvider>
    )
}

export default App
