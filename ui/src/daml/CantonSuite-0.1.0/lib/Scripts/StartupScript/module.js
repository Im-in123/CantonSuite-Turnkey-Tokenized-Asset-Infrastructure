"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var CantonCoin_MiningRoundSync = require('../../CantonCoin/MiningRoundSync/module');
var Compliance_SanctionsRegistry = require('../../Compliance/SanctionsRegistry/module');
var Compliance_Vouchers = require('../../Compliance/Vouchers/module');
var Distribution_ClaimBased = require('../../Distribution/ClaimBased/module');
var Finance_FractionalizationSafety = require('../../Finance/FractionalizationSafety/module');
var Finance_Instruments = require('../../Finance/Instruments/module');
var KYC = require('../../KYC/module');
var Lending_CrossRegistryCollateral = require('../../Lending/CrossRegistryCollateral/module');
var Lending_Deposits = require('../../Lending/Deposits/module');
var Lending_Loans = require('../../Lending/Loans/module');
var Lending_Pool = require('../../Lending/Pool/module');
var Marketplace_MultiTier = require('../../Marketplace/MultiTier/module');
var Network_SynchronizerMigration = require('../../Network/SynchronizerMigration/module');
var Portfolio = require('../../Portfolio/module');
var Redemption_Atomic = require('../../Redemption/Atomic/module');
var Regulator = require('../../Regulator/module');
var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');
var Users = require('../../Users/module');


exports.FOPResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({transferInstruction: damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).decoder, receiverHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    transferInstruction: damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).encode(__typed__.transferInstruction),
    receiverHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.receiverHolding),
  };
}
,
};



exports.TradeResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyerHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, sellerHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, regulatorView: damlTypes.ContractId(Regulator.RegulatorView).decoder, }); }),
  encode: function (__typed__) {
  return {
    buyerHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.buyerHolding),
    sellerHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.sellerHolding),
    regulatorView: damlTypes.ContractId(Regulator.RegulatorView).encode(__typed__.regulatorView),
  };
}
,
};



exports.MiningRoundResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({miningRound: damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference).decoder, }); }),
  encode: function (__typed__) {
  return {
    miningRound: damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference).encode(__typed__.miningRound),
  };
}
,
};



exports.AssetResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({propertyToken: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, bondToken: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, usdInstrument: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, cantonCoinInstrument: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, factory: damlTypes.ContractId(Portfolio.HoldingFactory).decoder, alicePropertyHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, bobBondHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, charliePropertyHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, fractionalizationGov: damlTypes.ContractId(Finance_FractionalizationSafety.FractionalizationGovernance).decoder, }); }),
  encode: function (__typed__) {
  return {
    propertyToken: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.propertyToken),
    bondToken: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.bondToken),
    usdInstrument: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.usdInstrument),
    cantonCoinInstrument: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.cantonCoinInstrument),
    factory: damlTypes.ContractId(Portfolio.HoldingFactory).encode(__typed__.factory),
    alicePropertyHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.alicePropertyHolding),
    bobBondHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.bobBondHolding),
    charliePropertyHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.charliePropertyHolding),
    fractionalizationGov: damlTypes.ContractId(Finance_FractionalizationSafety.FractionalizationGovernance).encode(__typed__.fractionalizationGov),
  };
}
,
};



exports.SetupResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, alice: damlTypes.Party.decoder, bob: damlTypes.Party.decoder, charlie: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, regulator: damlTypes.Party.decoder, poolOperator: damlTypes.Party.decoder, bank: damlTypes.Party.decoder, hedgeFund: damlTypes.Party.decoder, firm: damlTypes.Party.decoder, borrower: damlTypes.Party.decoder, amuletApp: damlTypes.Party.decoder, publicMarket: damlTypes.Party.decoder, aliceUser: damlTypes.ContractId(Users.User).decoder, bobUser: damlTypes.ContractId(Users.User).decoder, aliceKYC: damlTypes.ContractId(KYC.KYC).decoder, bobKYC: damlTypes.ContractId(KYC.KYC).decoder, aliceVoucher: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).decoder, bobVoucher: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).decoder, sanctionsRegistry: damlTypes.ContractId(Compliance_SanctionsRegistry.SanctionsRegistry).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    alice: damlTypes.Party.encode(__typed__.alice),
    bob: damlTypes.Party.encode(__typed__.bob),
    charlie: damlTypes.Party.encode(__typed__.charlie),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    regulator: damlTypes.Party.encode(__typed__.regulator),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    bank: damlTypes.Party.encode(__typed__.bank),
    hedgeFund: damlTypes.Party.encode(__typed__.hedgeFund),
    firm: damlTypes.Party.encode(__typed__.firm),
    borrower: damlTypes.Party.encode(__typed__.borrower),
    amuletApp: damlTypes.Party.encode(__typed__.amuletApp),
    publicMarket: damlTypes.Party.encode(__typed__.publicMarket),
    aliceUser: damlTypes.ContractId(Users.User).encode(__typed__.aliceUser),
    bobUser: damlTypes.ContractId(Users.User).encode(__typed__.bobUser),
    aliceKYC: damlTypes.ContractId(KYC.KYC).encode(__typed__.aliceKYC),
    bobKYC: damlTypes.ContractId(KYC.KYC).encode(__typed__.bobKYC),
    aliceVoucher: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).encode(__typed__.aliceVoucher),
    bobVoucher: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).encode(__typed__.bobVoucher),
    sanctionsRegistry: damlTypes.ContractId(Compliance_SanctionsRegistry.SanctionsRegistry).encode(__typed__.sanctionsRegistry),
  };
}
,
};



exports.RedemptionResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({redemptionRequest: damlTypes.ContractId(Redemption_Atomic.RedemptionRequest).decoder, redemptionWorkflow: damlTypes.ContractId(Redemption_Atomic.RedemptionWorkflow).decoder, }); }),
  encode: function (__typed__) {
  return {
    redemptionRequest: damlTypes.ContractId(Redemption_Atomic.RedemptionRequest).encode(__typed__.redemptionRequest),
    redemptionWorkflow: damlTypes.ContractId(Redemption_Atomic.RedemptionWorkflow).encode(__typed__.redemptionWorkflow),
  };
}
,
};



exports.SynchronizerResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({migrationRequest: damlTypes.ContractId(Network_SynchronizerMigration.SynchronizerMigrationRequest).decoder, migrationWorkflow: damlTypes.ContractId(Network_SynchronizerMigration.MigrationWorkflow).decoder, }); }),
  encode: function (__typed__) {
  return {
    migrationRequest: damlTypes.ContractId(Network_SynchronizerMigration.SynchronizerMigrationRequest).encode(__typed__.migrationRequest),
    migrationWorkflow: damlTypes.ContractId(Network_SynchronizerMigration.MigrationWorkflow).encode(__typed__.migrationWorkflow),
  };
}
,
};



exports.FractionalizationResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({dustDetector: damlTypes.ContractId(Finance_FractionalizationSafety.DustDetector).decoder, dustSweepCoordinator: damlTypes.ContractId(Finance_FractionalizationSafety.DustSweepCoordinator).decoder, toggleApproval: damlTypes.ContractId(Finance_Instruments.FractionalizationGovernanceApproval).decoder, }); }),
  encode: function (__typed__) {
  return {
    dustDetector: damlTypes.ContractId(Finance_FractionalizationSafety.DustDetector).encode(__typed__.dustDetector),
    dustSweepCoordinator: damlTypes.ContractId(Finance_FractionalizationSafety.DustSweepCoordinator).encode(__typed__.dustSweepCoordinator),
    toggleApproval: damlTypes.ContractId(Finance_Instruments.FractionalizationGovernanceApproval).encode(__typed__.toggleApproval),
  };
}
,
};



exports.DividendResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({announcement: damlTypes.ContractId(Distribution_ClaimBased.DividendAnnouncement).decoder, claimRecord: damlTypes.ContractId(Distribution_ClaimBased.DividendClaimRecord).decoder, dividendHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    announcement: damlTypes.ContractId(Distribution_ClaimBased.DividendAnnouncement).encode(__typed__.announcement),
    claimRecord: damlTypes.ContractId(Distribution_ClaimBased.DividendClaimRecord).encode(__typed__.claimRecord),
    dividendHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.dividendHolding),
  };
}
,
};



exports.CrossRegistryLoanResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({collateralRegistry: damlTypes.ContractId(Lending_CrossRegistryCollateral.CollateralRegistry).decoder, loanRequest: damlTypes.ContractId(Lending_CrossRegistryCollateral.CrossRegistryLoanRequest).decoder, loan: damlTypes.ContractId(Lending_CrossRegistryCollateral.CrossRegistryLoan).decoder, }); }),
  encode: function (__typed__) {
  return {
    collateralRegistry: damlTypes.ContractId(Lending_CrossRegistryCollateral.CollateralRegistry).encode(__typed__.collateralRegistry),
    loanRequest: damlTypes.ContractId(Lending_CrossRegistryCollateral.CrossRegistryLoanRequest).encode(__typed__.loanRequest),
    loan: damlTypes.ContractId(Lending_CrossRegistryCollateral.CrossRegistryLoan).encode(__typed__.loan),
  };
}
,
};



exports.LendingResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({lendingPool: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, depositRequest: damlTypes.ContractId(Lending_Deposits.DepositRequest).decoder, loanRequest: damlTypes.ContractId(Lending_Loans.LoanRequest).decoder, loan: damlTypes.ContractId(Lending_Loans.Loan).decoder, }); }),
  encode: function (__typed__) {
  return {
    lendingPool: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.lendingPool),
    depositRequest: damlTypes.ContractId(Lending_Deposits.DepositRequest).encode(__typed__.depositRequest),
    loanRequest: damlTypes.ContractId(Lending_Loans.LoanRequest).encode(__typed__.loanRequest),
    loan: damlTypes.ContractId(Lending_Loans.Loan).encode(__typed__.loan),
  };
}
,
};



exports.MarketplaceResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({globalListing: damlTypes.ContractId(Marketplace_MultiTier.GlobalDiscoveryListing).decoder, firmMembership: damlTypes.ContractId(Marketplace_MultiTier.FirmMembership).decoder, firmListing: damlTypes.ContractId(Marketplace_MultiTier.FirmMarketplaceListing).decoder, invitation: damlTypes.ContractId(Marketplace_MultiTier.InvestorInvitation).decoder, clubDeal: damlTypes.ContractId(Marketplace_MultiTier.ClubDeal).decoder, }); }),
  encode: function (__typed__) {
  return {
    globalListing: damlTypes.ContractId(Marketplace_MultiTier.GlobalDiscoveryListing).encode(__typed__.globalListing),
    firmMembership: damlTypes.ContractId(Marketplace_MultiTier.FirmMembership).encode(__typed__.firmMembership),
    firmListing: damlTypes.ContractId(Marketplace_MultiTier.FirmMarketplaceListing).encode(__typed__.firmListing),
    invitation: damlTypes.ContractId(Marketplace_MultiTier.InvestorInvitation).encode(__typed__.invitation),
    clubDeal: damlTypes.ContractId(Marketplace_MultiTier.ClubDeal).encode(__typed__.clubDeal),
  };
}
,
};

