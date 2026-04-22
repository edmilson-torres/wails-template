# AGENTS.md

## Commands

| Action | Command |
|--------|---------|
| Dev mode | `wails dev` |
| Build | `wails build` |
| Frontend dev | `pnpm dev` (frontend/) |
| Frontend build | `pnpm build` (frontend/) |

## Key Files

- Go entrypoint: `app.go`
- Frontend entrypoint: `frontend/src/main.tsx`
- Wails generates bindings: `frontend/wailsjs/runtime/`
- Config: `wails.json`