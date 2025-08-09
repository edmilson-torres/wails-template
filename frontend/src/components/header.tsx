import { ModeToggle } from './mode-toggle'

export function Header() {
    return (
        <div className="sticky top-0 z-index-100 shadow-md w-full backdrop-blur-sm p-5">
            <div className="flex justify-between items-center max-w-screen-md mx-auto">
                <h1 className="text-3xl font-bold">Wails Template</h1>
                <ModeToggle />
            </div>
        </div>
    )
}
