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

var CantonCoin_MiningRoundSync = require('../../CantonCoin/MiningRoundSync/module');
var Compliance_AtomicAudit = require('../../Compliance/AtomicAudit/module');
var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');


exports.ProcessQueueBatch = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({cashAmounts: damlTypes.List(damlTypes.Numeric(10)).decoder, }); }),
  encode: function (__typed__) {
  return {
    cashAmounts: damlTypes.List(damlTypes.Numeric(10)).encode(__typed__.cashAmounts),
  };
}
,
};



exports.AddToQueue = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({effectCid: damlTypes.ContractId(exports.RedemptionEffect).decoder, }); }),
  encode: function (__typed__) {
  return {
    effectCid: damlTypes.ContractId(exports.RedemptionEffect).encode(__typed__.effectCid),
  };
}
,
};



exports.RedemptionQueue = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Redemption.Atomic:RedemptionQueue',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, pendingEffects: damlTypes.List(damlTypes.ContractId(exports.RedemptionEffect)).decoder, maxBatchSize: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    pendingEffects: damlTypes.List(damlTypes.ContractId(exports.RedemptionEffect)).encode(__typed__.pendingEffects),
    maxBatchSize: damlTypes.Int.encode(__typed__.maxBatchSize),
  };
}
,
  AddToQueue: {
    template: function () { return exports.RedemptionQueue; },
    choiceName: 'AddToQueue',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddToQueue.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddToQueue.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RedemptionQueue).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.RedemptionQueue).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.RedemptionQueue; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ProcessQueueBatch: {
    template: function () { return exports.RedemptionQueue; },
    choiceName: 'ProcessQueueBatch',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ProcessQueueBatch.decoder; }),
    argumentEncode: function (__typed__) { return exports.ProcessQueueBatch.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RedemptionQueue).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.RedemptionQueue).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.RedemptionQueue, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ProcessBatchRedemptions_DEPRECATED = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({holdingCids: damlTypes.List(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder, deadlineHours: damlTypes.Int.decoder, miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).decoder, }); }),
  encode: function (__typed__) {
  return {
    holdingCids: damlTypes.List(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__.holdingCids),
    deadlineHours: damlTypes.Int.encode(__typed__.deadlineHours),
    miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).encode(__typed__.miningRoundCid),
  };
}
,
};



exports.ProcessRedemptionEffects = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({effectCids: damlTypes.List(damlTypes.ContractId(exports.RedemptionEffect)).decoder, }); }),
  encode: function (__typed__) {
  return {
    effectCids: damlTypes.List(damlTypes.ContractId(exports.RedemptionEffect)).encode(__typed__.effectCids),
  };
}
,
};



exports.BatchRedemptionRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Redemption.Atomic:BatchRedemptionRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, redemptions: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Party, damlTypes.Numeric(10), damlTypes.Text)).decoder, requestedAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    redemptions: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Party, damlTypes.Numeric(10), damlTypes.Text)).encode(__typed__.redemptions),
    requestedAt: damlTypes.Time.encode(__typed__.requestedAt),
  };
}
,
  ProcessRedemptionEffects: {
    template: function () { return exports.BatchRedemptionRequest; },
    choiceName: 'ProcessRedemptionEffects',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ProcessRedemptionEffects.decoder; }),
    argumentEncode: function (__typed__) { return exports.ProcessRedemptionEffects.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.List(damlTypes.ContractId(exports.RedemptionWorkflow)).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.List(damlTypes.ContractId(exports.RedemptionWorkflow)).encode(__typed__); },
  },
  ProcessBatchRedemptions_DEPRECATED: {
    template: function () { return exports.BatchRedemptionRequest; },
    choiceName: 'ProcessBatchRedemptions_DEPRECATED',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ProcessBatchRedemptions_DEPRECATED.decoder; }),
    argumentEncode: function (__typed__) { return exports.ProcessBatchRedemptions_DEPRECATED.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.List(damlTypes.ContractId(exports.RedemptionWorkflow)).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.List(damlTypes.ContractId(exports.RedemptionWorkflow)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.BatchRedemptionRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.BatchRedemptionRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CancelRedemptionEffect = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ExecuteRedemptionEffect = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RedemptionEffect = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Redemption.Atomic:RedemptionEffect',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({redeemer: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, reason: damlTypes.Text.decoder, holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, deadlineHours: damlTypes.Int.decoder, miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).decoder, createdAt: damlTypes.Time.decoder, effectId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    redeemer: damlTypes.Party.encode(__typed__.redeemer),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    reason: damlTypes.Text.encode(__typed__.reason),
    holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.holdingCid),
    deadlineHours: damlTypes.Int.encode(__typed__.deadlineHours),
    miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).encode(__typed__.miningRoundCid),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    effectId: damlTypes.Text.encode(__typed__.effectId),
  };
}
,
  ExecuteRedemptionEffect: {
    template: function () { return exports.RedemptionEffect; },
    choiceName: 'ExecuteRedemptionEffect',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteRedemptionEffect.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteRedemptionEffect.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RedemptionWorkflow).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.RedemptionWorkflow).encode(__typed__); },
  },
  CancelRedemptionEffect: {
    template: function () { return exports.RedemptionEffect; },
    choiceName: 'CancelRedemptionEffect',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelRedemptionEffect.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelRedemptionEffect.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.RedemptionEffect; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.RedemptionEffect, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ExecuteRedemptionFlow = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, deadlineHours: damlTypes.Int.decoder, miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).decoder, redeemerCurrentSync: damlTypes.Text.decoder, targetSync: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.holdingCid),
    deadlineHours: damlTypes.Int.encode(__typed__.deadlineHours),
    miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).encode(__typed__.miningRoundCid),
    redeemerCurrentSync: damlTypes.Text.encode(__typed__.redeemerCurrentSync),
    targetSync: damlTypes.Text.encode(__typed__.targetSync),
  };
}
,
};



exports.InitiateRedemption = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Redemption.Atomic:InitiateRedemption',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({redeemer: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    redeemer: damlTypes.Party.encode(__typed__.redeemer),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
  ExecuteRedemptionFlow: {
    template: function () { return exports.InitiateRedemption; },
    choiceName: 'ExecuteRedemptionFlow',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteRedemptionFlow.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteRedemptionFlow.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.Text, damlTypes.ContractId(exports.RedemptionWorkflow)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.Text, damlTypes.ContractId(exports.RedemptionWorkflow)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.InitiateRedemption; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.InitiateRedemption, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.WithdrawRedemption = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RejectRedemption = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({rejectionReason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    rejectionReason: damlTypes.Text.encode(__typed__.rejectionReason),
  };
}
,
};



exports.CompleteRedemptionAtomic = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({cashAmount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    cashAmount: damlTypes.Numeric(10).encode(__typed__.cashAmount),
  };
}
,
};



exports.RedemptionWorkflow = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Redemption.Atomic:RedemptionWorkflow',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({redeemer: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, reason: damlTypes.Text.decoder, requestedAt: damlTypes.Time.decoder, allocationCid: damlTypes.ContractId(TokenStandard_Interfaces.Allocation).decoder, cashPaymentPending: damlTypes.Bool.decoder, miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).decoder, }); }),
  encode: function (__typed__) {
  return {
    redeemer: damlTypes.Party.encode(__typed__.redeemer),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    reason: damlTypes.Text.encode(__typed__.reason),
    requestedAt: damlTypes.Time.encode(__typed__.requestedAt),
    allocationCid: damlTypes.ContractId(TokenStandard_Interfaces.Allocation).encode(__typed__.allocationCid),
    cashPaymentPending: damlTypes.Bool.encode(__typed__.cashPaymentPending),
    miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).encode(__typed__.miningRoundCid),
  };
}
,
  CompleteRedemptionAtomic: {
    template: function () { return exports.RedemptionWorkflow; },
    choiceName: 'CompleteRedemptionAtomic',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CompleteRedemptionAtomic.decoder; }),
    argumentEncode: function (__typed__) { return exports.CompleteRedemptionAtomic.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return Compliance_AtomicAudit.AuditedRedemptionResult.decoder; }),
    resultEncode: function (__typed__) { return Compliance_AtomicAudit.AuditedRedemptionResult.encode(__typed__); },
  },
  RejectRedemption: {
    template: function () { return exports.RedemptionWorkflow; },
    choiceName: 'RejectRedemption',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectRedemption.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectRedemption.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__); },
  },
  WithdrawRedemption: {
    template: function () { return exports.RedemptionWorkflow; },
    choiceName: 'WithdrawRedemption',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.WithdrawRedemption.decoder; }),
    argumentEncode: function (__typed__) { return exports.WithdrawRedemption.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.RedemptionWorkflow; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.RedemptionWorkflow, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CancelRedemption = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.CreateRedemptionAllocation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RedemptionRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Redemption.Atomic:RedemptionRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({redeemer: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, reason: damlTypes.Text.decoder, requestedAt: damlTypes.Time.decoder, deadline: damlTypes.Time.decoder, regulatorParty: damlTypes.Party.decoder, miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).decoder, }); }),
  encode: function (__typed__) {
  return {
    redeemer: damlTypes.Party.encode(__typed__.redeemer),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    reason: damlTypes.Text.encode(__typed__.reason),
    requestedAt: damlTypes.Time.encode(__typed__.requestedAt),
    deadline: damlTypes.Time.encode(__typed__.deadline),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).encode(__typed__.miningRoundCid),
  };
}
,
  CreateRedemptionAllocation: {
    template: function () { return exports.RedemptionRequest; },
    choiceName: 'CreateRedemptionAllocation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateRedemptionAllocation.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateRedemptionAllocation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.AllocationRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.AllocationRequest).encode(__typed__); },
  },
  CancelRedemption: {
    template: function () { return exports.RedemptionRequest; },
    choiceName: 'CancelRedemption',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelRedemption.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelRedemption.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.RedemptionRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.RedemptionRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

