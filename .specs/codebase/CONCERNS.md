# Concerns

## High Priority

### No Test Coverage

**Severity:** High
**Type:** Testing gap
**Evidence:** No test files in repository; `go.mod` has no test dependency; `frontend/package.json` has no testing library (vitest, testing-library)
**Impact:** No automated verification of code correctness; regression-prone
**Fix:** Add Go tests with `testing` package + `testify`, add React tests with Vitest + React Testing Library

### No Error Boundaries in React

**Severity:** Medium
**Type:** Resilience
**Evidence:** No `ErrorBoundary` component in `frontend/src/components/`
**Impact:** Unhandled errors could crash entire UI
**Fix:** Add React ErrorBoundary component wrapping app

## Medium Priority

### Hardcoded Theme Default

**Severity:** Medium
**Type:** Configuration
**Evidence:** `App.tsx` line 7: `defaultTheme="dark"`
**Impact:** Cannot change default without code change
**Fix:** Load from config or environment variable

### Window Size in Code

**Severity:** Low
**Type:** Configuration
**Evidence:** `main.go` lines 21-23: Width/Height hardcoded
**Impact:** No runtime flexibility for window size
**Fix:** Load from config or persist user preference

### No Build Version in UI

**Severity:** Low
**Type:** Observability
**Evidence:** No version display in UI; `wails.json` has version `0.0.1` but not displayed
**Impact:** User cannot verify which version they're running
**Fix:** Expose version via Wails binding and display in UI

## Low Priority / Informational

### WebView2 Dependency (Windows only)

**Type:** Platform constraint
**Detail:** Requires Microsoft Edge WebView2 runtime on Windows (usually pre-installed)
**Mitigation:** Wails handles automatically; minimal concern for modern Windows

### Embedded Assets Size

**Type:** Build performance
**Detail:** `//go:embed all:frontend/dist` embeds entire frontend build
**Mitigation:** Typical for Wails; not a concern unless very large assets

### Git Hooks Not Initialized

**Type:** Developer experience
**Evidence:** `package.json` has `prepare` script for Husky but no `.husky/` directory present
**Detail:** Running `pnpm install` triggers prepare script; hooks may fail if git not properly initialized
**Fix:** Run `npx husky install` after setup or remove husky from dependencies

## Security

### No Security Concerns Identified

- No sensitive data handling
- No external API with secrets
- No authentication required
- No user input that could be exploited (demo only)

## Performance

### No Performance Concerns Identified

- Lightweight demo application
- No heavy computation
- No large data processing