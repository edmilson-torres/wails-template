# AGENTS.md

## Commands

| Action         | Command                  |
| -------------- | ------------------------ |
| Dev mode       | `wails dev`              |
| Build          | `wails build`            |
| Frontend dev   | `pnpm dev` (frontend/)   |
| Frontend build | `pnpm build` (frontend/) |

## Key Files

- Go entrypoint: `app.go`
- Frontend entrypoint: `frontend/src/main.tsx`
- Wails generates bindings: `frontend/wailsjs/runtime/`
- Config: `wails.json`

## System Patterns

### System architecture

The application follows a standard Wails architecture, which consists of two main parts:

1.  **Go Backend**: A Go application that handles the core logic. This includes making HTTP requests to external APIs for address lookups and exposing methods to the frontend.
2.  **React Frontend**: A single-page application (SPA) built with React and TypeScript that provides the user interface. It communicates with the Go backend through a JavaScript bridge provided by Wails.

### Key technical decisions

- **Wails**: Chosen for its ability to create cross-platform desktop applications using Go and web technologies. It's a lightweight alternative to Electron.
- **Go**: Selected for the backend due to its performance, simplicity, and strong standard library for handling tasks like HTTP requests.
- **React**: Used for the frontend to create a modern, component-based, and interactive user interface.
- **TypeScript**: Added to the frontend for static typing, improving code quality and maintainability.
- **shadcn/ui**: The component library chosen for its accessible and composable components, allowing for rapid UI development.

## Tech Context

### Technologies used

- **Backend**: Go
- **Frontend**: React, TypeScript, Vite
- **Framework**: Wails
- **UI Components**: shadcn/ui, Radix UI
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm

### Dependencies

#### Backend (Go)

- `wailsapp/wails`: The core framework.
- (Other Go dependencies can be found in `go.mod`)

#### Frontend (React)

- `react`, `react-dom`: Core React libraries.
- `vite`: Build tool for the frontend.
- `tailwindcss`: For utility-first CSS.
- `@radix-ui/react-*`: Primitives for building high-quality, accessible design systems and web apps.
- (Other frontend dependencies can be found in `frontend/package.json`)
