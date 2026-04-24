# Code Conventions

## Naming Conventions

### Files

**Go:**
- Lowercase with underscores: `app.go`, `main.go`, `go.mod`
- One word: simple lowercase

**TypeScript/React:**
- PascalCase for components: `App.tsx`, `Home.tsx`, `ThemeProvider.tsx`
- Lowercase for utilities: `utils.ts`, `useTheme.ts`

**Examples:**
- `app.go` - Main app logic
- `main.go` - Entry point
- `App.tsx` - Root React component
- `theme-context.tsx` - Theme context

### Functions/Methods

**Go:**
- PascalCase exported: `NewApp()`, `Greet()`, `GetSystemInfo()`
- MixedCase for unexported not observed yet

**TypeScript:**
- camelCase: `cn()`, `setTheme()`, `App()`
- PascalCase for React components

**Examples:**
- Go: `startup()`, `Greet()`, `GetSystemInfo()`
- React: `cn()`, `createContext()`, `App()`

### Variables

**Go:**
- camelCase: `app`, `ctx`, `assets`
- PascalCase for exported: `FileInfo`

**TypeScript:**
- camelCase: `defaultTheme`, `storageKey`
- PascalCase for types: `Theme`, `ThemeProviderState`

**Examples:**
- `ctx` (context), `assets` (embedded FS)
- `theme`, `setTheme`, `inputs`

### Constants

**Go:**
- PascalCase exported: Not observed in current code

**TypeScript:**
- PascalCase (enums/const objects): `themes`, `Theme`

**Examples:**
- `themes` array in `theme-context.tsx`

## Code Organization

### Imports

**Go** (`app.go` lines 1-11):
```go
package main

import (
    "context"
    "fmt"
    "runtime"

    "github.com/shirou/gopsutil/mem"
    "golang.org/x/text/cases"
    "golang.org/x/text/language"
)
```
Order: stdlib → external

**TypeScript** (`utils.ts`):
```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
```
Order: external packages

### File Structure

**Go:**
- Package declaration first
- Type definitions
- Constructor/receiver functions
- Exported methods

**React/TypeScript:**
- Imports first
- Types/interfaces
- Component function
- Exports at bottom

## Type Safety

**Approach:** TypeScript with explicit type annotations

**Go:**
- Strong typing via structs: `FileInfo` struct with fields
- Error returns: `(string, error)` pattern

**TypeScript:**
- Explicit types: `type ClassValue`, `Theme`, `ThemeProviderState`
- React types from `@types/react`

**Examples:**
- Go: `func (a *App) Greet(name string) string`
- TS: `export function cn(...inputs: ClassValue[])`

## Error Handling

**Go:**
- Return error tuple: `func (...) (string, error)`
- Wrap errors: `fmt.Errorf("failed to get memory info: %w", err)`

**TypeScript:**
- Not heavily used in template (simple demo)

## Comments

**Style:** Minimal - only when needed for clarity

**Example:**
```go
// App struct
type App struct {
    ctx context.Context
}
```

No block comments or documentation comments in current code.