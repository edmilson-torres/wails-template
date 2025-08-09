import { createContext } from 'react'

export const themes = [
    'system',
    'light',
    'dark',
    'dark-violet',
    'dark-yellow',
    'dark-blue',
    'dark-green',
    'dark-orange',
] as const

export type Theme = (typeof themes)[number]

export type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export const ThemeProviderContext = createContext<ThemeProviderState>({
    theme: 'system',
    setTheme: () => null,
})
