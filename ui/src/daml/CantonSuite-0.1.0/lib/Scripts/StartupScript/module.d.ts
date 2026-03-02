// Generated from Scripts/StartupScript.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as CantonCoin_MiningRoundSync from '../../CantonCoin/MiningRoundSync/module';
import * as Compliance_SanctionsRegistry from '../../Compliance/SanctionsRegistry/module';
import * as Compliance_Vouchers from '../../Compliance/Vouchers/module';
import * as Distribution_ClaimBased from '../../Distribution/ClaimBased/module';
import * as Finance_FractionalizationSafety from '../../Finance/FractionalizationSafety/module';
import * as Finance_Instruments from '../../Finance/Instruments/module';
import * as KYC from '../../KYC/module';
import * as Lending_CrossRegistryCollateral from '../../Lending/CrossRegistryCollateral/module';
import * as Lending_Deposits from '../../Lending/Deposits/module';
import * as Lending_Loans from '../../Lending/Loans/module';
import * as Lending_Pool from '../../Lending/Pool/module';
import * as Marketplace_MultiTier from '../../Marketplace/MultiTier/module';
import * as Network_SynchronizerMigration from '../../Network/SynchronizerMigration/module';
import * as Portfolio from '../../Portfolio/module';
import * as Redemption_Atomic from '../../Redemption/Atomic/module';
import * as Regulator from '../../Regulator/module';
import * as TokenStandard_Interfaces from '../../TokenStandard/Interfaces/module';
import * as Users from '../../Users/module';

export declare type FOPResult = {
  transferInstruction: damlTypes.ContractId<TokenStandard_Interfaces.TransferInstruction>;
  receiverHolding: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare const FOPResult:
  damlTypes.Serializable<FOPResult> & {
  }
;


export declare type TradeResult = {
  buyerHolding: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  sellerHolding: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  regulatorView: damlTypes.ContractId<Regulator.RegulatorView>;
};

export declare const TradeResult:
  damlTypes.Serializable<TradeResult> & {
  }
;


export declare type MiningRoundResult = {
  miningRound: damlTypes.ContractId<CantonCoin_MiningRoundSync.MiningRoundReference>;
};

export declare const MiningRoundResult:
  damlTypes.Serializable<MiningRoundResult> & {
  }
;


export declare type AssetResult = {
  propertyToken: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
  bondToken: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
  usdInstrument: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
  cantonCoinInstrument: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
  factory: damlTypes.ContractId<Portfolio.HoldingFactory>;
  alicePropertyHolding: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  bobBondHolding: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  charliePropertyHolding: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  fractionalizationGov: damlTypes.ContractId<Finance_FractionalizationSafety.FractionalizationGovernance>;
};

export declare const AssetResult:
  damlTypes.Serializable<AssetResult> & {
  }
;


export declare type SetupResult = {
  issuer: damlTypes.Party;
  alice: damlTypes.Party;
  bob: damlTypes.Party;
  charlie: damlTypes.Party;
  compliance: damlTypes.Party;
  regulator: damlTypes.Party;
  poolOperator: damlTypes.Party;
  bank: damlTypes.Party;
  hedgeFund: damlTypes.Party;
  firm: damlTypes.Party;
  borrower: damlTypes.Party;
  amuletApp: damlTypes.Party;
  publicMarket: damlTypes.Party;
  aliceUser: damlTypes.ContractId<Users.User>;
  bobUser: damlTypes.ContractId<Users.User>;
  aliceKYC: damlTypes.ContractId<KYC.KYC>;
  bobKYC: damlTypes.ContractId<KYC.KYC>;
  aliceVoucher: damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>;
  bobVoucher: damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>;
  sanctionsRegistry: damlTypes.ContractId<Compliance_SanctionsRegistry.SanctionsRegistry>;
};

export declare const SetupResult:
  damlTypes.Serializable<SetupResult> & {
  }
;


export declare type RedemptionResult = {
  redemptionRequest: damlTypes.ContractId<Redemption_Atomic.RedemptionRequest>;
  redemptionWorkflow: damlTypes.ContractId<Redemption_Atomic.RedemptionWorkflow>;
};

export declare const RedemptionResult:
  damlTypes.Serializable<RedemptionResult> & {
  }
;


export declare type SynchronizerResult = {
  migrationRequest: damlTypes.ContractId<Network_SynchronizerMigration.SynchronizerMigrationRequest>;
  migrationWorkflow: damlTypes.ContractId<Network_SynchronizerMigration.MigrationWorkflow>;
};

export declare const SynchronizerResult:
  damlTypes.Serializable<SynchronizerResult> & {
  }
;


export declare type FractionalizationResult = {
  dustDetector: damlTypes.ContractId<Finance_FractionalizationSafety.DustDetector>;
  dustSweepCoordinator: damlTypes.ContractId<Finance_FractionalizationSafety.DustSweepCoordinator>;
  toggleApproval: damlTypes.ContractId<Finance_Instruments.FractionalizationGovernanceApproval>;
};

export declare const FractionalizationResult:
  damlTypes.Serializable<FractionalizationResult> & {
  }
;


export declare type DividendResult = {
  announcement: damlTypes.ContractId<Distribution_ClaimBased.DividendAnnouncement>;
  claimRecord: damlTypes.ContractId<Distribution_ClaimBased.DividendClaimRecord>;
  dividendHolding: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare const DividendResult:
  damlTypes.Serializable<DividendResult> & {
  }
;


export declare type CrossRegistryLoanResult = {
  collateralRegistry: damlTypes.ContractId<Lending_CrossRegistryCollateral.CollateralRegistry>;
  loanRequest: damlTypes.ContractId<Lending_CrossRegistryCollateral.CrossRegistryLoanRequest>;
  loan: damlTypes.ContractId<Lending_CrossRegistryCollateral.CrossRegistryLoan>;
};

export declare const CrossRegistryLoanResult:
  damlTypes.Serializable<CrossRegistryLoanResult> & {
  }
;


export declare type LendingResult = {
  lendingPool: damlTypes.ContractId<Lending_Pool.LendingPool>;
  depositRequest: damlTypes.ContractId<Lending_Deposits.DepositRequest>;
  loanRequest: damlTypes.ContractId<Lending_Loans.LoanRequest>;
  loan: damlTypes.ContractId<Lending_Loans.Loan>;
};

export declare const LendingResult:
  damlTypes.Serializable<LendingResult> & {
  }
;


export declare type MarketplaceResult = {
  globalListing: damlTypes.ContractId<Marketplace_MultiTier.GlobalDiscoveryListing>;
  firmMembership: damlTypes.ContractId<Marketplace_MultiTier.FirmMembership>;
  firmListing: damlTypes.ContractId<Marketplace_MultiTier.FirmMarketplaceListing>;
  invitation: damlTypes.ContractId<Marketplace_MultiTier.InvestorInvitation>;
  clubDeal: damlTypes.ContractId<Marketplace_MultiTier.ClubDeal>;
};

export declare const MarketplaceResult:
  damlTypes.Serializable<MarketplaceResult> & {
  }
;

