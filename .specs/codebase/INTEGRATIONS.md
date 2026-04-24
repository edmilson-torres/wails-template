# External Integrations

## System Integration

### Windows WebView2

**Service:** Microsoft WebView2 Runtime
**Purpose:** Native web view for desktop UI rendering
**Implementation:** Auto-installed via Wails on Windows; no direct code interaction
**Configuration:** Wails manages automatically; requires Edge WebView2 runtime
**Authentication:** N/A

## Go Packages

### gopsutil

**Service:** github.com/shirou/gopsutil
**Purpose:** System and process utilities for reading OS info
**Implementation:** Used in `app.go:GetSystemInfo()` for memory info
**Configuration:** Imported from `github.com/shirou/gopsutil/mem`

### golang.org/x/text

**Service:** golang.org/x/text (standard library extension)
**Purpose:** Text manipulation (Unicode, casing)
**Implementation:** Used in `app.go` for title-casing OS name
**Configuration:** Imported from `golang.org/x/text/cases` and `language`

## Frontend Dependencies

### Radix UI Primitives

**Service:** @radix-ui/react-*
**Purpose:** Accessible UI primitives
**Implementation:** Components in `frontend/src/components/ui/`
- `@radix-ui/react-checkbox`
- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-label`
- `@radix-ui/react-slot`

### Icons

**Service:** lucide-react
**Purpose:** Icon library
**Implementation:** Used in React components for UI icons

### Styling

**Service:** Tailwind CSS
**Purpose:** Utility-first CSS framework
**Implementation:** `frontend/src/index.css` with `@tailwindcss/vite` plugin

## API Integrations

**None present** - This is a standalone desktop template with no external API calls.

## Webhooks

**None present** - No webhook handlers configured.

## Background Jobs

**Queue system:** None
**Location:** N/A
**Jobs:** None

## External Services

**No external services configured** - The app runs standalone with:
- Local system info (via gopsutil)
- No database
- No remote API
- No authentication