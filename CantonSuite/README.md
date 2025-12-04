# CantonSuite+ Backend (DAML Models)

This directory contains the core smart contract logic for **CantonSuite+**, written in **DAML** (Digital Asset Modeling Language). It defines rules, rights, and privacy obligations for Tokenized Real-World Assets (RWA), DeFi Lending, and Regulatory Compliance.

---

## Project structure

daml/
- Assets.daml            — RWA definitions (Drafts, Final Assets, Fractionalization)
- Compliance.daml        — Compliance audit logs and approval workflows
- Distribution.daml      — Yield/Dividend logic with privacy-preserving regulator views
- KYC.daml               — Identity verification contracts
- Lending.daml           — DeFi logic: Pools, Loans, Collateral management
- Portfolio.daml         — User asset holdings (Allocations)
- Redemption.daml        — Logic for burning tokens to redeem underlying assets
- Regulator.daml         — Read-only, sanitized view contracts for auditors
- Trade.daml             — Atomic swap logic (DvP) with compliance hooks
- Types.daml             — Global data types and enums
- Users.daml             — On-ledger user profiles and roles
- Scripts/
  - MultiPartySetup.daml — Initialization script for testing/demos

---

## Building & testing

### Prerequisites
- DAML SDK >= 2.10.2 — https://docs.daml.com/

### 1. Compile contracts
Compiles the DAML code into a DAR (DAML Archive) file:

```bash
daml build
```

### 2. Run tests / scripts
Executes the MultiPartySetup.daml script to verify logic flows and initialize a test ledger state:

```bash
daml test
```

### 3. Generate JavaScript bindings
If you modify any .daml files, regenerate the TypeScript libraries for the UI. Run from the repository root:

```bash
daml codegen js .daml/dist/CantonSuite-0.0.1.dar -o ui/src/daml
```

### 4. Start local ledger (sandbox)
Starts the local ledger and HTTP JSON API service:

```bash
daml start
```

---

## Core logic & workflows

1. Asset issuance (two-step)
   - Draft creation: Issuer creates a DraftAsset.
   - Compliance review: Compliance party reviews the draft.
   - Finalization: Compliance exercises FinalizeIssuance, transforming the Draft into a live Asset contract.

2. Trading (atomic swaps)
   - ProposedTrade: Buyer proposes terms.
   - TradeAgreement: Seller accepts.
   - ComplianceCheck: Compliance approves the TradeAgreement.
   - Settlement: Issuer finalizes the trade, atomically updating Allocation contracts.

3. DeFi lending (pooled liquidity)
   - Pools: Users deposit cash into a LendingPool.
   - Shares: Depositors receive LenderShare contracts representing liquidity.
   - Borrowing: A user requests a loan by locking an Allocation as collateral.
   - Privacy: Collateral locking is split atomically so Pool Operator sees only the locked amount.

4. Yield distribution (privacy-preserving)
   - Issuer triggers DistributeToAll.
   - Private result: Dividend contracts with cash are created for token holders; only Holder and Issuer see them.
   - Public/audit result: DividendRegulatorView created for the Regulator containing Amount and hashed holder identity (sha256), proving payment without revealing PII.

---

## Privacy model

CantonSuite+ leverages a need-to-know privacy model:

- Issuer: Sees all assets they issued, total supply, incoming trade requests.
- Buyer: Sees only their own portfolio and trades.
- Compliance: Sees KYC data and pending Trade Agreements.
- Regulator: Sees sanitized views (RegulatorView, LendingRegulatorView) with aggregate risk data but no PII.

---

## Key scripts

MultiPartySetup.daml:
- Allocates parties (Issuer1, Issuer2, Alice, Bob, Compliance, Regulator).
- Creates User contracts for login.
- Issues sample assets (TECH-A, RE-PROP1).
- Distributes initial holdings to Alice and Bob.
- Simulates a trade to generate sample ledger data.

---

## License

Apache-2.0
