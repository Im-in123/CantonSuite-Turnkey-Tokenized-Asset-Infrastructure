# CantonSuite+ UI

A React + TypeScript financial terminal for interacting with the Canton Network. Role-based dashboards for Issuers, Buyers, Compliance Officers, and Regulators to manage Tokenized Real-World Assets (RWA), DeFi Lending, and Compliance workflows.

Built with Vite and the DAML React SDK. Uses DAML streaming queries for real-time ledger sync.

## Tech Stack
- Framework: React (TypeScript)
- Build: Vite
- Ledger Integration: `@daml/react`, `@daml/ledger`
- State: DAML Streaming Queries (WebSocket)
- Styling: Custom CSS (Dark Mode Financial Theme)
- Auth: Local JWT simulation (`src/services/CantonIAM.ts`)

## Prerequisites
- DAML SDK + Sandbox running
- DAR built for the CantonSuite project
- Node 18+ / npm

## Setup

1. Install dependencies
```bash
npm install
```

2. Generate DAML JS bindings (from project root)
```bash
cd CantonSuite
daml build
daml codegen js .daml/dist/CantonSuite-0.0.1.dar -o ui/src/daml
```
3. Install the JS bindings
```bash
npm install ./src/daml/*
```
4. Start the dev server (from `ui/`)
```bash
npm run dev
# Defaults: http://localhost:5173
```

## Project Structure
src/
- components/
  - buyer/        — Marketplace, Portfolio
  - issuer/       — Asset Management, Yield tools
  - lending/      — Pools, Loans, Requests workflow
  - LoadingSpinner.tsx
  - MainLayout.tsx — Role-based navigation wrapper
  - Modal.tsx
- context/
  - ToastContext.tsx
- daml/           — Auto-generated DAML TypeScript bindings
- hooks/
  - useStreamNotification.ts
- pages/
  - BuyerDashboard.tsx
  - IssuerDashboard.tsx
  - LendingDashboard.tsx
  - ComplianceDashboard.tsx
  - RegulatorDashboard.tsx
  - Login.tsx
  - Signup.tsx
- services/
  - CantonIAM.ts   — JWT & party allocation helper for Sandbox
- App.tsx
- index.css       — Dark mode theme variables

## Key Features
- Live Ledger Sync via `useStreamQueries` (no REST polling; real-time updates over WebSocket).
- Role-based rendering: dynamic dashboards for Issuer, Buyer, Compliance, Regulator.
- CantonIAM: local JWT generation and Sandbox party setup for developer quick access.
- DeFi Lending module: pools, positions, request approval flows.
- Custom financial dark theme (CSS variables).

## Development Notes
- Rebuild DAR and re-run `daml codegen js` if DAML templates change.
- Vite proxy forwards `/v1` to the JSON API (default port 7575) — see `vite.config.ts`.
- HMR enabled via Vite; UI updates on save.

## Debugging Tips
- Ensure Sandbox + JSON API are reachable (default JSON API port 7575).
- Verify generated bindings in `src/daml` match the DAR used by the Sandbox.
- Open browser devtools and network tab for WS connection issues.

## License
Apache 2.0
