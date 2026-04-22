import { useTheme } from '@/hooks/useTheme'
import { ModeToggle } from './mode-toggle'
import { Badge } from './ui/badge'

export function Header() {
    const { theme } = useTheme()

    return (
        <div className="sticky top-0 z-index-100 shadow-md w-full backdrop-blur-sm p-5">
            <div className="flex items-center max-w-3xl mx-auto gap-4">
                <h1 className="text-3xl font-bold grow">Wails Template</h1>
                <Badge>{theme.charAt(0).toUpperCase() + theme.slice(1)}</Badge>
                <ModeToggle />
            </div>
        </div>
    )
}
