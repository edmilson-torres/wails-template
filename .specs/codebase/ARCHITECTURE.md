# Architecture

**Pattern:** Monolithic desktop application with Go backend + embedded React frontend

## High-Level Structure

```
┌─────────────────────────────────────────┐
│           Wails Desktop App             │
├─────────────────────────────────────────┤
│  Go Backend          Embedded Assets  │
│  ┌──────────┐       ┌─────────────┐     │
│  │  App     │       │  React SPA  │     │
│  │ (app.go) │ ←───→ │ (frontend/) │     │
│  └──────────┘  JS   └─────────────┘     │
│    Bindings        Wails bridge         │
└─────────────────────────────────────────┘
```

## Identified Patterns

### Wails Lifecycle Pattern

**Location:** `app.go`, `main.go`
**Purpose:** Initialize app with Go backend exposing methods to frontend
**Implementation:**
- `App` struct holds context from startup
- Methods on `App` are exposed via `Bind` in `main.go`
- Frontend calls Go methods via auto-generated JS in `frontend/wailsjs/go/main/App.js`

**Example:**
```go
// app.go:19-22 - App struct with context
type App struct {
    ctx context.Context
}

// app.go:29-33 - Startup hook saves context
func (a *App) startup(ctx context.Context) {
    a.ctx = ctx
}

// main.go:29-31 - Bind exposes App methods to frontend
Bind: []interface{}{
    app,
},
```

### Frontend Component Pattern

**Location:** `frontend/src/components/`, `frontend/src/pages/`
**Purpose:** Component-based UI with React
**Implementation:**
- `components/ui/` - Reusable shadcn/ui-style primitives
- `pages/Home.tsx` - Main page content
- `Header` - Application header
- Theme context wraps entire app

### Theme System Pattern

**Location:** `frontend/src/contexts/theme-context.tsx`, `frontend/src/components/theme-provider.tsx`
**Purpose:** Dark/light mode with multiple color themes
**Implementation:**
- `ThemeProvider` wraps app with React Context
- Supports 8 themes: system, light, dark, dark-violet, dark-yellow, dark-blue, dark-green, dark-orange
- Persists to localStorage via `storageKey` prop

## Data Flow

### Go → Frontend

1. Go method defined in `app.go` (e.g., `GetSystemInfo()`)
2. Wails generates JS binding in `frontend/wailsjs/go/main/App.js`
3. Frontend imports and calls: `import { GetSystemInfo } from '../../wailsjs/go/main/App'`
4. Result returned to React component

### Theme Flow

1. `ThemeProvider` in `App.tsx` wraps application
2. `setTheme()` called from UI control
3. CSS variables updated via Tailwind theme classes
4. Persisted to localStorage

## Code Organization

**Approach:** Feature-based with clear separation of concerns

**Structure:**
- `app.go` - Backend logic (Go methods exposed to frontend)
- `main.go` - Wails initialization
- `frontend/src/components/ui/` - Reusable UI primitives
- `frontend/src/components/` - Application components (Header, ThemeProvider)
- `frontend/src/pages/` - Page-level components
- `frontend/src/contexts/` - React contexts
- `frontend/src/hooks/` - Custom hooks
- `frontend/src/lib/` - Utilities

**Module boundaries:**
- Go side: Single `main` package with app logic
- Frontend: Single-page React app with nested feature directories