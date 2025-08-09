import { Button } from '@/components/ui/button'
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex flex-col items-center justify-center min-h-screen p-10 gap-5">
                <h1 className="text-3xl font-bold">Wails Template</h1>
                <p>
                    Vite, React, Typescript, Tailwind CSS, Shadcn, ESlint and
                    Prettier
                </p>
                <Button>Click me</Button>
                <ModeToggle />
            </div>
        </ThemeProvider>
    )
}

export default App
