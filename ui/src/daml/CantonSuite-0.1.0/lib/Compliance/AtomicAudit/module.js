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

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Regulator = require('../../Regulator/module');
var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');


exports.AuditCompletenessReport = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({periodStart: damlTypes.Time.decoder, periodEnd: damlTypes.Time.decoder, totalTransactions: damlTypes.Int.decoder, auditedTransactions: damlTypes.Int.decoder, missingAudits: damlTypes.Int.decoder, completenessPercentage: damlTypes.Numeric(10).decoder, fullyCompliant: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    periodStart: damlTypes.Time.encode(__typed__.periodStart),
    periodEnd: damlTypes.Time.encode(__typed__.periodEnd),
    totalTransactions: damlTypes.Int.encode(__typed__.totalTransactions),
    auditedTransactions: damlTypes.Int.encode(__typed__.auditedTransactions),
    missingAudits: damlTypes.Int.encode(__typed__.missingAudits),
    completenessPercentage: damlTypes.Numeric(10).encode(__typed__.completenessPercentage),
    fullyCompliant: damlTypes.Bool.encode(__typed__.fullyCompliant),
  };
}
,
};



exports.VerifyAuditCompleteness = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({totalSettlements: damlTypes.Int.decoder, totalRegulatorViews: damlTypes.Int.decoder, missingAudits: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    totalSettlements: damlTypes.Int.encode(__typed__.totalSettlements),
    totalRegulatorViews: damlTypes.Int.encode(__typed__.totalRegulatorViews),
    missingAudits: damlTypes.Int.encode(__typed__.missingAudits),
  };
}
,
};



exports.AuditCompletenessCheck = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Compliance.AtomicAudit:AuditCompletenessCheck',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({regulator: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, checkPeriodStart: damlTypes.Time.decoder, checkPeriodEnd: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    regulator: damlTypes.Party.encode(__typed__.regulator),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    checkPeriodStart: damlTypes.Time.encode(__typed__.checkPeriodStart),
    checkPeriodEnd: damlTypes.Time.encode(__typed__.checkPeriodEnd),
  };
}
,
  Archive: {
    template: function () { return exports.AuditCompletenessCheck; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  VerifyAuditCompleteness: {
    template: function () { return exports.AuditCompletenessCheck; },
    choiceName: 'VerifyAuditCompleteness',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.VerifyAuditCompleteness.decoder; }),
    argumentEncode: function (__typed__) { return exports.VerifyAuditCompleteness.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.AuditCompletenessReport.decoder; }),
    resultEncode: function (__typed__) { return exports.AuditCompletenessReport.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.AuditCompletenessCheck, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ExecuteAtomicBurn = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AtomicBurnWithAudit = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Compliance.AtomicAudit:AtomicBurnWithAudit',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, regulator: damlTypes.Party.decoder, burnHolder: damlTypes.Party.decoder, holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, quantity: damlTypes.Numeric(10).decoder, burnReason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    regulator: damlTypes.Party.encode(__typed__.regulator),
    burnHolder: damlTypes.Party.encode(__typed__.burnHolder),
    holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.holdingCid),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    burnReason: damlTypes.Text.encode(__typed__.burnReason),
  };
}
,
  ExecuteAtomicBurn: {
    template: function () { return exports.AtomicBurnWithAudit; },
    choiceName: 'ExecuteAtomicBurn',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteAtomicBurn.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteAtomicBurn.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.AuditedBurnResult.decoder; }),
    resultEncode: function (__typed__) { return exports.AuditedBurnResult.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.AtomicBurnWithAudit; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.AtomicBurnWithAudit, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.AuditedBurnResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({regulatorView: damlTypes.ContractId(Regulator.RegulatorView).decoder, burnTime: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    regulatorView: damlTypes.ContractId(Regulator.RegulatorView).encode(__typed__.regulatorView),
    burnTime: damlTypes.Time.encode(__typed__.burnTime),
  };
}
,
};



exports.ExecuteAtomicMint = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AtomicMintWithAudit = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Compliance.AtomicAudit:AtomicMintWithAudit',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, regulator: damlTypes.Party.decoder, recipient: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, mintReason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    regulator: damlTypes.Party.encode(__typed__.regulator),
    recipient: damlTypes.Party.encode(__typed__.recipient),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    mintReason: damlTypes.Text.encode(__typed__.mintReason),
  };
}
,
  ExecuteAtomicMint: {
    template: function () { return exports.AtomicMintWithAudit; },
    choiceName: 'ExecuteAtomicMint',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteAtomicMint.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteAtomicMint.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.AuditedMintResult.decoder; }),
    resultEncode: function (__typed__) { return exports.AuditedMintResult.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.AtomicMintWithAudit; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.AtomicMintWithAudit, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.AuditedMintResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({mintedHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, regulatorView: damlTypes.ContractId(Regulator.RegulatorView).decoder, mintTime: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    mintedHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.mintedHolding),
    regulatorView: damlTypes.ContractId(Regulator.RegulatorView).encode(__typed__.regulatorView),
    mintTime: damlTypes.Time.encode(__typed__.mintTime),
  };
}
,
};



exports.ExecuteAtomicRedemption = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AtomicRedemptionApproval = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Compliance.AtomicAudit:AtomicRedemptionApproval',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({redeemer: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, regulator: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, cashAmount: damlTypes.Numeric(10).decoder, lockedAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    redeemer: damlTypes.Party.encode(__typed__.redeemer),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    regulator: damlTypes.Party.encode(__typed__.regulator),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    cashAmount: damlTypes.Numeric(10).encode(__typed__.cashAmount),
    lockedAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.lockedAssetCid),
  };
}
,
  ExecuteAtomicRedemption: {
    template: function () { return exports.AtomicRedemptionApproval; },
    choiceName: 'ExecuteAtomicRedemption',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteAtomicRedemption.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteAtomicRedemption.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.AuditedRedemptionResult.decoder; }),
    resultEncode: function (__typed__) { return exports.AuditedRedemptionResult.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.AtomicRedemptionApproval; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.AtomicRedemptionApproval, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.AuditedRedemptionResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({cashHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, regulatorView: damlTypes.ContractId(Regulator.RegulatorView).decoder, redemptionTime: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    cashHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.cashHolding),
    regulatorView: damlTypes.ContractId(Regulator.RegulatorView).encode(__typed__.regulatorView),
    redemptionTime: damlTypes.Time.encode(__typed__.redemptionTime),
  };
}
,
};



exports.ExecuteAtomicSettlement = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AtomicTradeSettlement = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Compliance.AtomicAudit:AtomicTradeSettlement',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, assetIssuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, complianceParty: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, buyerPaymentCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, sellerAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    seller: damlTypes.Party.encode(__typed__.seller),
    assetIssuer: damlTypes.Party.encode(__typed__.assetIssuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    buyerPaymentCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.buyerPaymentCid),
    sellerAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.sellerAssetCid),
  };
}
,
  ExecuteAtomicSettlement: {
    template: function () { return exports.AtomicTradeSettlement; },
    choiceName: 'ExecuteAtomicSettlement',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteAtomicSettlement.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteAtomicSettlement.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.AuditedSettlementResult.decoder; }),
    resultEncode: function (__typed__) { return exports.AuditedSettlementResult.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.AtomicTradeSettlement; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.AtomicTradeSettlement, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.AuditedSettlementResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyerHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, sellerHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, regulatorView: damlTypes.ContractId(Regulator.RegulatorView).decoder, settlementTime: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyerHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.buyerHolding),
    sellerHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.sellerHolding),
    regulatorView: damlTypes.ContractId(Regulator.RegulatorView).encode(__typed__.regulatorView),
    settlementTime: damlTypes.Time.encode(__typed__.settlementTime),
  };
}
,
};

