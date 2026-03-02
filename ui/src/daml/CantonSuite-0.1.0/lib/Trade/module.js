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

var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var CantonCoin_MiningRoundSync = require('../CantonCoin/MiningRoundSync/module');
var Compliance_AtomicAudit = require('../Compliance/AtomicAudit/module');
var Compliance_Vouchers = require('../Compliance/Vouchers/module');
var Finance_Instruments = require('../Finance/Instruments/module');
var TokenStandard_DVP_Settlement = require('../TokenStandard/DVP_Settlement/module');
var TokenStandard_Interfaces = require('../TokenStandard/Interfaces/module');


exports.ExpireTrade = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ExecuteAtomicSettlement = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyerPaymentCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, sellerAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).decoder, }); }),
  encode: function (__typed__) {
  return {
    buyerPaymentCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.buyerPaymentCid),
    sellerAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.sellerAssetCid),
    miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).encode(__typed__.miningRoundCid),
  };
}
,
};



exports.CreateDVPWithSyncCheck = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({paymentAssetId: damlTypes.Text.decoder, buyerCurrentSync: damlTypes.Text.decoder, sellerCurrentSync: damlTypes.Text.decoder, targetSync: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    paymentAssetId: damlTypes.Text.encode(__typed__.paymentAssetId),
    buyerCurrentSync: damlTypes.Text.encode(__typed__.buyerCurrentSync),
    sellerCurrentSync: damlTypes.Text.encode(__typed__.sellerCurrentSync),
    targetSync: damlTypes.Text.encode(__typed__.targetSync),
  };
}
,
};



exports.CreateDVPSettlement = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({paymentAssetId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    paymentAssetId: damlTypes.Text.encode(__typed__.paymentAssetId),
  };
}
,
};



exports.ApprovedTrade = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Trade:ApprovedTrade',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, assetIssuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, isPrimary: damlTypes.Bool.decoder, complianceParty: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, createdAt: damlTypes.Time.decoder, expiresAt: damlTypes.Time.decoder, approvedAt: damlTypes.Time.decoder, complianceNotes: damlTypes.Text.decoder, buyerVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).decoder, sellerVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    seller: damlTypes.Party.encode(__typed__.seller),
    assetIssuer: damlTypes.Party.encode(__typed__.assetIssuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.instrumentCid),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    isPrimary: damlTypes.Bool.encode(__typed__.isPrimary),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    approvedAt: damlTypes.Time.encode(__typed__.approvedAt),
    complianceNotes: damlTypes.Text.encode(__typed__.complianceNotes),
    buyerVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).encode(__typed__.buyerVoucherCid),
    sellerVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).encode(__typed__.sellerVoucherCid),
  };
}
,
  CreateDVPSettlement: {
    template: function () { return exports.ApprovedTrade; },
    choiceName: 'CreateDVPSettlement',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateDVPSettlement.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateDVPSettlement.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_DVP_Settlement.DVPSettlement).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_DVP_Settlement.DVPSettlement).encode(__typed__); },
  },
  CreateDVPWithSyncCheck: {
    template: function () { return exports.ApprovedTrade; },
    choiceName: 'CreateDVPWithSyncCheck',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateDVPWithSyncCheck.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateDVPWithSyncCheck.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.Text, damlTypes.ContractId(TokenStandard_DVP_Settlement.DVPSettlement)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.Text, damlTypes.ContractId(TokenStandard_DVP_Settlement.DVPSettlement)).encode(__typed__); },
  },
  ExecuteAtomicSettlement: {
    template: function () { return exports.ApprovedTrade; },
    choiceName: 'ExecuteAtomicSettlement',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteAtomicSettlement.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteAtomicSettlement.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return Compliance_AtomicAudit.AuditedSettlementResult.decoder; }),
    resultEncode: function (__typed__) { return Compliance_AtomicAudit.AuditedSettlementResult.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ApprovedTrade; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ExpireTrade: {
    template: function () { return exports.ApprovedTrade; },
    choiceName: 'ExpireTrade',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExpireTrade.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExpireTrade.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ApprovedTrade, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ComplianceRejection = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Trade:ComplianceRejection',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({compliance: damlTypes.Party.decoder, buyer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, totalValue: damlTypes.Numeric(10).decoder, reason: damlTypes.Text.decoder, rejectedAt: damlTypes.Time.decoder, regulatorParty: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    compliance: damlTypes.Party.encode(__typed__.compliance),
    buyer: damlTypes.Party.encode(__typed__.buyer),
    seller: damlTypes.Party.encode(__typed__.seller),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    totalValue: damlTypes.Numeric(10).encode(__typed__.totalValue),
    reason: damlTypes.Text.encode(__typed__.reason),
    rejectedAt: damlTypes.Time.encode(__typed__.rejectedAt),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
  };
}
,
  Archive: {
    template: function () { return exports.ComplianceRejection; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ComplianceRejection, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.RejectTrade = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({rejectionReason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    rejectionReason: damlTypes.Text.encode(__typed__.rejectionReason),
  };
}
,
};



exports.IssueApprovalVoucher = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyerVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).decoder, sellerVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).decoder, complianceNotes: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyerVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).encode(__typed__.buyerVoucherCid),
    sellerVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).encode(__typed__.sellerVoucherCid),
    complianceNotes: damlTypes.Text.encode(__typed__.complianceNotes),
  };
}
,
};



exports.ComplianceReviewRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Trade:ComplianceReviewRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({tradeCid: damlTypes.ContractId(exports.TradeAgreement).decoder, buyer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, totalValue: damlTypes.Numeric(10).decoder, complianceParty: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, requestedAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    tradeCid: damlTypes.ContractId(exports.TradeAgreement).encode(__typed__.tradeCid),
    buyer: damlTypes.Party.encode(__typed__.buyer),
    seller: damlTypes.Party.encode(__typed__.seller),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    totalValue: damlTypes.Numeric(10).encode(__typed__.totalValue),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    requestedAt: damlTypes.Time.encode(__typed__.requestedAt),
  };
}
,
  IssueApprovalVoucher: {
    template: function () { return exports.ComplianceReviewRequest; },
    choiceName: 'IssueApprovalVoucher',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.IssueApprovalVoucher.decoder; }),
    argumentEncode: function (__typed__) { return exports.IssueApprovalVoucher.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ApprovedTrade).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ApprovedTrade).encode(__typed__); },
  },
  RejectTrade: {
    template: function () { return exports.ComplianceReviewRequest; },
    choiceName: 'RejectTrade',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectTrade.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectTrade.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ComplianceReviewRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ComplianceReviewRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CancelTrade = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RequestComplianceApproval = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.TradeAgreement = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Trade:TradeAgreement',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, assetIssuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, isPrimary: damlTypes.Bool.decoder, complianceParty: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, createdAt: damlTypes.Time.decoder, expiresAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    seller: damlTypes.Party.encode(__typed__.seller),
    assetIssuer: damlTypes.Party.encode(__typed__.assetIssuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.instrumentCid),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    isPrimary: damlTypes.Bool.encode(__typed__.isPrimary),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
  };
}
,
  RequestComplianceApproval: {
    template: function () { return exports.TradeAgreement; },
    choiceName: 'RequestComplianceApproval',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestComplianceApproval.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestComplianceApproval.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ComplianceReviewRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ComplianceReviewRequest).encode(__typed__); },
  },
  CancelTrade: {
    template: function () { return exports.TradeAgreement; },
    choiceName: 'CancelTrade',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelTrade.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelTrade.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.TradeAgreement; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.TradeAgreement, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CancelTradeProposal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.SellerAccept = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ProposedTrade = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Trade:ProposedTrade',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, assetIssuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, isPrimary: damlTypes.Bool.decoder, complianceParty: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, createdAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    seller: damlTypes.Party.encode(__typed__.seller),
    assetIssuer: damlTypes.Party.encode(__typed__.assetIssuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.instrumentCid),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    isPrimary: damlTypes.Bool.encode(__typed__.isPrimary),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
  };
}
,
  SellerAccept: {
    template: function () { return exports.ProposedTrade; },
    choiceName: 'SellerAccept',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SellerAccept.decoder; }),
    argumentEncode: function (__typed__) { return exports.SellerAccept.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.TradeAgreement).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.TradeAgreement).encode(__typed__); },
  },
  CancelTradeProposal: {
    template: function () { return exports.ProposedTrade; },
    choiceName: 'CancelTradeProposal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelTradeProposal.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelTradeProposal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ProposedTrade; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ProposedTrade, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

