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

var Compliance_Vouchers = require('../../Compliance/Vouchers/module');
var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');


exports.WithdrawComplianceTransfer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RejectComplianceTransfer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ApproveAndInitiate = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({senderHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, senderVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).decoder, receiverVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).decoder, }); }),
  encode: function (__typed__) {
  return {
    senderHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.senderHoldingCid),
    senderVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).encode(__typed__.senderVoucherCid),
    receiverVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).encode(__typed__.receiverVoucherCid),
  };
}
,
};



exports.ComplianceGatedTransfer = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:TokenStandard.FOP_Transfers:ComplianceGatedTransfer',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({sender: damlTypes.Party.decoder, receiver: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, issuer: damlTypes.Party.decoder, amount: damlTypes.Numeric(10).decoder, complianceParty: damlTypes.Party.decoder, deadline: damlTypes.Time.decoder, transferNotes: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    sender: damlTypes.Party.encode(__typed__.sender),
    receiver: damlTypes.Party.encode(__typed__.receiver),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    deadline: damlTypes.Time.encode(__typed__.deadline),
    transferNotes: damlTypes.Text.encode(__typed__.transferNotes),
  };
}
,
  ApproveAndInitiate: {
    template: function () { return exports.ComplianceGatedTransfer; },
    choiceName: 'ApproveAndInitiate',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApproveAndInitiate.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApproveAndInitiate.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.TransferExecutionRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.TransferExecutionRequest).encode(__typed__); },
  },
  RejectComplianceTransfer: {
    template: function () { return exports.ComplianceGatedTransfer; },
    choiceName: 'RejectComplianceTransfer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectComplianceTransfer.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectComplianceTransfer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ComplianceGatedTransfer; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  WithdrawComplianceTransfer: {
    template: function () { return exports.ComplianceGatedTransfer; },
    choiceName: 'WithdrawComplianceTransfer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.WithdrawComplianceTransfer.decoder; }),
    argumentEncode: function (__typed__) { return exports.WithdrawComplianceTransfer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ComplianceGatedTransfer, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ConfirmSend = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({myHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, hoursUntilExpiry: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    myHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.myHoldingCid),
    hoursUntilExpiry: damlTypes.Int.encode(__typed__.hoursUntilExpiry),
  };
}
,
};



exports.QuickSendRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:TokenStandard.FOP_Transfers:QuickSendRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({from: damlTypes.Party.decoder, to: damlTypes.Party.decoder, asset: damlTypes.Text.decoder, issuer: damlTypes.Party.decoder, amount: damlTypes.Numeric(10).decoder, memo: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    from: damlTypes.Party.encode(__typed__.from),
    to: damlTypes.Party.encode(__typed__.to),
    asset: damlTypes.Text.encode(__typed__.asset),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    memo: damlTypes.Text.encode(__typed__.memo),
  };
}
,
  ConfirmSend: {
    template: function () { return exports.QuickSendRequest; },
    choiceName: 'ConfirmSend',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ConfirmSend.decoder; }),
    argumentEncode: function (__typed__) { return exports.ConfirmSend.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.QuickSendRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.QuickSendRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.AbortTransfer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({instructionCid: damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).decoder, reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    instructionCid: damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).encode(__typed__.instructionCid),
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
};



exports.ExecuteTransfer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({instructionCid: damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).decoder, senderVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).decoder, }); }),
  encode: function (__typed__) {
  return {
    instructionCid: damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).encode(__typed__.instructionCid),
    senderVoucherCid: damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).encode(__typed__.senderVoucherCid),
  };
}
,
};



exports.TransferExecutionHandler = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:TokenStandard.FOP_Transfers:TransferExecutionHandler',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({registry: damlTypes.Party.decoder, complianceParty: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    registry: damlTypes.Party.encode(__typed__.registry),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
  };
}
,
  ExecuteTransfer: {
    template: function () { return exports.TransferExecutionHandler; },
    choiceName: 'ExecuteTransfer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteTransfer.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteTransfer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.TransferExecutionRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.TransferExecutionRequest).encode(__typed__); },
  },
  AbortTransfer: {
    template: function () { return exports.TransferExecutionHandler; },
    choiceName: 'AbortTransfer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AbortTransfer.decoder; }),
    argumentEncode: function (__typed__) { return exports.AbortTransfer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.TransferExecutionHandler; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.TransferExecutionHandler, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CancelProposal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.InitiateFOPTransfer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({senderHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, deadlineHours: damlTypes.Int.decoder, notes: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    senderHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.senderHoldingCid),
    deadlineHours: damlTypes.Int.encode(__typed__.deadlineHours),
    notes: damlTypes.Text.encode(__typed__.notes),
  };
}
,
};



exports.InitiateFOPTransferWithSyncCheck = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({senderHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, deadlineHours: damlTypes.Int.decoder, notes: damlTypes.Text.decoder, senderCurrentSync: damlTypes.Text.decoder, receiverCurrentSync: damlTypes.Text.decoder, targetSync: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    senderHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.senderHoldingCid),
    deadlineHours: damlTypes.Int.encode(__typed__.deadlineHours),
    notes: damlTypes.Text.encode(__typed__.notes),
    senderCurrentSync: damlTypes.Text.encode(__typed__.senderCurrentSync),
    receiverCurrentSync: damlTypes.Text.encode(__typed__.receiverCurrentSync),
    targetSync: damlTypes.Text.encode(__typed__.targetSync),
  };
}
,
};



exports.CreateFOPTransfer = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:TokenStandard.FOP_Transfers:CreateFOPTransfer',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({sender: damlTypes.Party.decoder, receiver: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, issuer: damlTypes.Party.decoder, amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    sender: damlTypes.Party.encode(__typed__.sender),
    receiver: damlTypes.Party.encode(__typed__.receiver),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
  InitiateFOPTransferWithSyncCheck: {
    template: function () { return exports.CreateFOPTransfer; },
    choiceName: 'InitiateFOPTransferWithSyncCheck',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InitiateFOPTransferWithSyncCheck.decoder; }),
    argumentEncode: function (__typed__) { return exports.InitiateFOPTransferWithSyncCheck.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.Text, damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.Text, damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction)).encode(__typed__); },
  },
  InitiateFOPTransfer: {
    template: function () { return exports.CreateFOPTransfer; },
    choiceName: 'InitiateFOPTransfer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InitiateFOPTransfer.decoder; }),
    argumentEncode: function (__typed__) { return exports.InitiateFOPTransfer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).encode(__typed__); },
  },
  CancelProposal: {
    template: function () { return exports.CreateFOPTransfer; },
    choiceName: 'CancelProposal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelProposal.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelProposal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.CreateFOPTransfer; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.CreateFOPTransfer, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.RejectTransfer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
};



exports.AcceptTransfer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.TransferExecutionRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:TokenStandard.FOP_Transfers:TransferExecutionRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({sender: damlTypes.Party.decoder, receiver: damlTypes.Party.decoder, instrument: TokenStandard_Interfaces.InstrumentId.decoder, amount: damlTypes.Numeric(10).decoder, senderHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, instructionCid: damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).decoder, executionMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    sender: damlTypes.Party.encode(__typed__.sender),
    receiver: damlTypes.Party.encode(__typed__.receiver),
    instrument: TokenStandard_Interfaces.InstrumentId.encode(__typed__.instrument),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    senderHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.senderHoldingCid),
    instructionCid: damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).encode(__typed__.instructionCid),
    executionMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.executionMetadata),
  };
}
,
  AcceptTransfer: {
    template: function () { return exports.TransferExecutionRequest; },
    choiceName: 'AcceptTransfer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptTransfer.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptTransfer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return TokenStandard_Interfaces.TransferResult.decoder; }),
    resultEncode: function (__typed__) { return TokenStandard_Interfaces.TransferResult.encode(__typed__); },
  },
  RejectTransfer: {
    template: function () { return exports.TransferExecutionRequest; },
    choiceName: 'RejectTransfer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectTransfer.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectTransfer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.TransferExecutionRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.TransferExecutionRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.Withdraw = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, withdrawMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
    withdrawMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.withdrawMetadata),
  };
}
,
};



exports.Abort = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, abortMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
    abortMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.abortMetadata),
  };
}
,
};



exports.InitiateExecution = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({executionMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    executionMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.executionMetadata),
  };
}
,
};



exports.TransferInstruction_Impl = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:TokenStandard.FOP_Transfers:TransferInstruction_Impl',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({sender: damlTypes.Party.decoder, receiver: damlTypes.Party.decoder, instrument: TokenStandard_Interfaces.InstrumentId.decoder, amount: damlTypes.Numeric(10).decoder, deadline: damlTypes.Time.decoder, status: TokenStandard_Interfaces.TransferStatus.decoder, metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, senderHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    sender: damlTypes.Party.encode(__typed__.sender),
    receiver: damlTypes.Party.encode(__typed__.receiver),
    instrument: TokenStandard_Interfaces.InstrumentId.encode(__typed__.instrument),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    deadline: damlTypes.Time.encode(__typed__.deadline),
    status: TokenStandard_Interfaces.TransferStatus.encode(__typed__.status),
    metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.metadata),
    senderHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.senderHoldingCid),
  };
}
,
  InitiateExecution: {
    template: function () { return exports.TransferInstruction_Impl; },
    choiceName: 'InitiateExecution',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InitiateExecution.decoder; }),
    argumentEncode: function (__typed__) { return exports.InitiateExecution.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.TransferExecutionRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.TransferExecutionRequest).encode(__typed__); },
  },
  Abort: {
    template: function () { return exports.TransferInstruction_Impl; },
    choiceName: 'Abort',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Abort.decoder; }),
    argumentEncode: function (__typed__) { return exports.Abort.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Withdraw: {
    template: function () { return exports.TransferInstruction_Impl; },
    choiceName: 'Withdraw',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Withdraw.decoder; }),
    argumentEncode: function (__typed__) { return exports.Withdraw.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.TransferInstruction_Impl; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

, TokenStandard_Interfaces.TransferInstruction
);


damlTypes.registerTemplate(exports.TransferInstruction_Impl, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

