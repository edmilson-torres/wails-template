import { Header } from './components/header'
import { ThemeProvider } from './components/theme-provider'
import { Example } from './pages/Example'

import { FileExplorer } from './pages/FileExplorer'

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex flex-col w-full items-center">
                <Header />
                <FileExplorer />
                <Example />
            </div>
        </ThemeProvider>
    )
}

export default App
