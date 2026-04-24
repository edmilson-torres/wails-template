# Project Structure

**Root:** `C:\workspace\outros\desktop\wails-template`

## Directory Tree

```
wails-template/
├── .specs/                    # Generated spec docs
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # shadcn/ui primitives
│   │   │   ├── header.tsx
│   │   │   ├── theme-provider.tsx
│   │   │   ├── mode-toggle.tsx
│   │   │   └── *-demo.tsx    # Demo components
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── contexts/
│   │   │   └── theme-context.tsx
│   │   ├── hooks/
│   │   │   └── useTheme.tsx
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   └── index.css
│   ├── wailsjs/              # Generated Wails bindings
│   │   ├── go/main/App.js
│   │   └── runtime/
│   ├── package.json
│   ├── vite.config.ts
│   └── dist/                # Built assets
├── app.go                   # Go app logic
├── main.go                  # Go entry point
├── go.mod / go.sum         # Go dependencies
├── wails.json              # Wails config
└── build/                  # Build output
```

## Module Organization

### Go Backend

**Purpose:** Desktop app logic and system integration
**Location:** Root (`app.go`, `main.go`)
**Key files:**
- `app.go` - App struct and methods exposed to frontend
- `main.go` - Wails app initialization, embedded assets
- `go.mod` - Go dependencies
- `wails.json` - Wails configuration

### Frontend

**Purpose:** User interface (React SPA)
**Location:** `frontend/`
**Key files:**
- `src/App.tsx` - Root component
- `src/main.tsx` - React entry point
- `package.json` - Frontend dependencies
- `vite.config.ts` - Vite configuration
- `wailsjs/` - Auto-generated Go bindings

### Components

**Purpose:** UI building blocks
**Location:** `frontend/src/components/`
**Key files:**
- `ui/` - Reusable shadcn/ui components (button, card, checkbox, input, label, etc.)
- `header.tsx` - Application header
- `theme-provider.tsx` - Theme context provider
- `mode-toggle.tsx` - Theme switcher

### Pages

**Purpose:** Page-level components
**Location:** `frontend/src/pages/`
**Key files:**
- `Home.tsx` - Main home page

### Contexts

**Purpose:** React context providers
**Location:** `frontend/src/contexts/`
**Key files:**
- `theme-context.tsx` - Theme state and mutations

### Hooks

**Purpose:** Custom React hooks
**Location:** `frontend/src/hooks/`
**Key files:**
- `useTheme.ts` - Theme hook (referenced but not verified)

### Utilities

**Purpose:** Helper functions
**Location:** `frontend/src/lib/`
**Key files:**
- `utils.ts` - ClassName composition (`cn()`)

## Where Things Live

**Go Backend - Exposed Methods:**
- Business Logic: `app.go` (App struct methods)
- Configuration: `main.go`, `wails.json`

**Frontend - UI:**
- Components: `frontend/src/components/`
- Pages: `frontend/src/pages/`
- State: `frontend/src/contexts/`
- Styles: Tailwind via `index.css` + `@tailwindcss/vite`

**Build:**
- Frontend build: `frontend/dist/` (embedded via `//go:embed`)
- App build: `build/` (Windows .exe)

## Special Directories

**`frontend/wailsjs/`:**
- Purpose: Auto-generated Wails JS bindings
- Note: Regenerated on `wails dev`/`wails build`

**`frontend/dist/`:**
- Purpose: Built frontend assets
- Note: Embedded in Go binary via `//go:embed all:frontend/dist`

**`.specs/`:**
- Purpose: Specification and documentation
- Note: Added by this mapping