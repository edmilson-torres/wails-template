# Tech Stack

**Analyzed:** 2026-04-24

## Core

- **Desktop Framework:** Wails v2.10.2
- **Language:** Go 1.23
- **Runtime:** Native (platform-specific via WebView2 on Windows)
- **Package Manager:** pnpm (frontend), Go modules (backend)

## Frontend

- **UI Framework:** React 19.2.5
- **Build Tool:** Vite 7.3.2
- **Styling:** Tailwind CSS 4.2.4 with `@tailwindcss/vite` plugin
- **State Management:** React Context (ThemeProvider)
- **Form Handling:** Not present (stateless demo)

### UI Libraries

- **Primitives:** Radix UI (`@radix-ui/react-checkbox`, `dropdown-menu`, `label`, `slot`)
- **Variants:** class-variance-authority 0.7.1
- **Icons:** lucide-react 0.536.0
- **Utilities:** clsx, tailwind-merge

### Dev Tools

- **Linting:** ESLint 9.39.4
- **Formatting:** Prettier 3.6.2
- **Git Hooks:** Husky 9.1.7 + lint-staged

## Backend

- **API Style:** Wails bindings (Go methods exposed to JS via auto-generated bridge)
- **System Info:** gopsutil v3.21.11
- **Text Processing:** golang.org/x/text v0.22.0
- **No database present**

## External Services

- **WebView2:** Windows WebView2 runtime (required on Windows)

## Testing

- **Unit/Integration:** Not configured in this template
- **E2E:** Not configured

## Development Tools

- **IDE:** Expected VS Code or similar with Go/TypeScript support
- **CLI:** Wails CLI for dev/build commands