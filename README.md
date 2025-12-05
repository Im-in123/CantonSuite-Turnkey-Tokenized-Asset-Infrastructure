# CantonSuite+: Turnkey Tokenized Asset Infrastructure

> **Ideathon Track:** Tokenized Real-World Assets

[![Canton Network](https://img.shields.io/badge/Built%20On-Canton%20Network-blue)](https://canton.io/)
[![DAML](https://img.shields.io/badge/Language-DAML-333)](https://daml.com/)
[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-Apache%202.0-green)](./LICENSE)

---

## 📺 Project Demo

**Click the image below or the link to watch the walkthrough:**

### [▶️ Watch/Download Demo Video](./demo.mp4)
*(Download or view the `demo.mp4` file located in the root directory)*

---

## 📝 Project Description
**CantonSuite+** is a modular, permissioned trading and compliance platform built on the Canton Network with integrated DeFi layer for lending and borrowing, yield distribution and fractionalized trading, and privacy preserving live audit for regulators, designed for boutique institutions. It enables issuers to tokenize Real-World Assets (RWA), buyers to trade with built-in KYC, and regulators to audit securely via privacy-preserving dashboards. 

By unifying issuer, buyer, compliance, and regulator workflows. CantonSuite+ transforms tokenized finance from complex backend infrastructure into a practical, accessible, and fully compliant ecosystem.

---

## ⚠️ The Problem
Smaller financial institutions and asset managers face high barriers to entry when adopting blockchain technology:

1.  **Infrastructure Gap:** Lack of turnkey solutions to tokenize and trade niche assets (Real Estate, Private Equity) without hiring a full blockchain team.
2.  **Regulatory Friction:** Compliance checks are often manual or disconnected from the ledger, making audits difficult. They usually have a hard choice: either they see nothing (and can't verify solvency) or they demand everything (names, addresses, IDs), which creates massive liability for them (holding toxic data) and violates privacy laws like GDPR.
3.  **Capital Inefficiency:** Tokenized assets often sit idle. There is a lack of integrated infrastructure to generate yield or borrow against RWAs.
4.  **Privacy Concerns:** Public blockchains expose too much data; existing private chains often lack interoperability and usually expose Personally Identifiable Information (PII). Buyers and Issuers want to remain compliant, but they don't want regualtory breach(or hackers who breach the regulator) to see their entire trade history and real names

## 💡 The Solution
CantonSuite+ utilizes the **Canton Network's** privacy and sub-transaction privacy features to create a unified platform with four distinct, role-based dashboards:

*   **For Issuers:** A "Tokenization Engine" to draft, finalize, mint/burn assets, and manage lifecycle events like Dividend Distributions.
*   **For Buyers:** A retail-friendly dashboard to trade fractionalized assets, manage portfolios, and access **DeFi Lending Pools** to borrow cash against their RWA collateral.
*   **For Compliance:** A gatekeeper dashboard to review KYC applications and flag high-value trades before settlement.
*   **For Regulators:** A read-only "Live Audit" node. SEC-style agencies, central banks, or government oversight bodies can views sanitized, hashed transaction logs to verify system solvency without accessing Personally Identifiable Information (PII).

---

## ✨ Key Features

### 1. 🛡️ Regulatory Compliance & Privacy
*   **Built-in KYC/AML:** Traders cannot access the marketplace until their identity is verified by the Compliance node.
*   **Privacy-Preserving Audit:** Regulators see transaction volumes and solvency ratios (e.g., "Loan Amount: $500") but user identities are cryptographically hashed (e.g., `UserHash: 8f3a...`).

### 2. 💸 Automated Yield & Dividends
*   **One-Click Distribution:** Issuers can announce a dividend (e.g., $0.50 per unit).
*   **Atomic Batch Execution:** The system automatically calculates payouts for all fractional holders and distributes funds in a single atomic transaction.

### 3. 🏦 Integrated DeFi Lending
*   **RWA Collateral:** Buyers can pledge their Real Estate or Equity tokens as collateral to borrow liquidity (Stablecoins).
*   **Lending Pools:** Users can deposit funds to earn interest, creating a liquid market within the platform.

### 4. 🏭 Asset Lifecycle Management
*   **Draft & Finalize:** Issuers can create asset drafts that require Compliance approval before going live.
*   **Mint/Burn/Fractionalize:** Full control over supply and the ability to toggle fractional trading on/off.

---

## 🛠️ Technology Stack
*   **Smart Contracts:** DAML (Digital Asset Modeling Language)
*   **Ledger:** Canton Network (Sandbox for prototype)
*   **Frontend:** React (TypeScript) + Vite
*   **State Management:** `@daml/react` and `@daml/ledger` libraries
*   **Styling:** Custom CSS with a dark-mode financial terminal aesthetic

---

## 🚀 Setup & Installation Instructions

**Prerequisites:**

*   [DAML SDK 2.10.2](https://docs.daml.com/getting-started/installation.html)

For users who prefer a one-shot installer (no need to open the link), run the following in your terminal to install DAML SDK 2.10.2:

```bash
curl -sSL -o get-daml.sh https://get.daml.com
chmod +x get-daml.sh
./get-daml.sh 2.10.2
echo 'export PATH="$HOME/.daml/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
daml version
```
* Clone the Repository

```bash
 git clone https://github.com/Im-in123/CantonSuite-Turnkey-Tokenized-Asset-Infrastructure
 cd  CantonSuite-Turnkey-Tokenized-Asset-Infrastructure
```
### 1. Backend Setup (DAML)
Open your terminal in the root directory.

```bash
# 1. Enter the DAML project folder
cd CantonSuite

# 2. Build the DAML model
daml build

# 3. Generate JavaScript codegen libraries for the UI
daml codegen js .daml/dist/CantonSuite-0.0.1.dar -o ../ui/src/daml

# 4. Start the Canton Sandbox and HTTP JSON API
daml start
```

Note: Keep this terminal window open. The Ledger ID is set to sandbox by default.

### 2. Frontend Setup (React)
Open a new terminal window.

```bash
# 1. Enter the UI folder
cd ui

# 2. Install dependencies
npm install

# 3. Install JS bindings from daml folder
npm install ./src/daml/*

# 4. Start the development server
npm run dev
```

Access the application at: http://localhost:5173

### 🧪 Testing Guide (Judges Walkthrough)
To fully experience the application, follow this flow to simulate a full asset lifecycle.
Note: The app includes a "Developer Quick Access" login screen to easily switch between personas.

Phase 1: Issuance & Compliance
* Login as Issuer1.
* Go to Asset Management.
* Click + Issue New Asset.
* Create TECH-C (Supply: 1000, Price: 10). It creates a Draft.
* Login as Compliance.
* Go to KYC & Assets.
* You will see the pending asset TECH-C. Click Finalize.
* Result: Asset is now live on the ledger.

Phase 2: Onboarding & Trading
* Login as Buyer (Create a new account or use Buyer3).
* Click Verify Identity (Starts KYC).
* Login as Compliance.
* Go to KYC Worklist. Approve the new buyer.
* Login as Buyer.
* Go to Marketplace. You can now see assets.
* Buy 10 units of TECH-A.
* Result: Portfolio updates immediately.

Phase 3: DeFi Lending (RWA Collateral)
* Login as Issuer1.
* Go to DeFi Lending -> Create Pool.
* Create a pool for USD (Stablecoin) with 5% Interest.
* Deposit $50,000 liquidity into the pool.
* Login as Alice (Wealthy Buyer).
* Ensure Alice has TECH-A tokens.
* Go to DeFi Lending.
* Click Borrow on the USD Pool.
* Select TECH-A as collateral. Borrow $500.
* Result: Alice receives USD, and her TECH-A is locked in a holding contract.

Phase 4: Automated Yield Distribution
* Login as Issuer1.
* Go to the Yield Distribution tab.
* Click + Announce Yield.
* Select Asset: TECH-A. Label: "Q4 Dividend". Amount: $0.50 per unit.
* Click Distribute. (This atomically calculates and creates payments for all fractional holders).
* Login as Buyer (or Alice).
* Go to Yield & Dividends.
* You will see a "Q4 Dividend" payment waiting.
* Click Claim. The cash is added to your portfolio.

Phase 5: Regulatory Audit (Privacy Check)
* Login as Regulator.
* Go to DeFi Solvency or Yield Audit tab.
* Observe the LOAN_ORIGINATED and DIVIDEND_DISTRIBUTED events.
* Verification: Notice the "Loan Hash" or "Receiver Hash" is visible, but the specific identity of "Alice" is hidden/hashed. The regulator sees the risk (Amount, Collateral Ratio) but not the PII.

### 📄 License
Apache 2.0