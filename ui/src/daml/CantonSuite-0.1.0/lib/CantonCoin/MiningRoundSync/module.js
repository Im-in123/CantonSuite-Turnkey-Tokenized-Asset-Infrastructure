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

var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');


exports.PrepareTransferWithRoundCheck = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({estimatedSigningDelaySeconds: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    estimatedSigningDelaySeconds: damlTypes.Int.encode(__typed__.estimatedSigningDelaySeconds),
  };
}
,
};



exports.CCTransferWithRoundCheck = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:CantonCoin.MiningRoundSync:CCTransferWithRoundCheck',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({sender: damlTypes.Party.decoder, receiver: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, roundReferenceCid: damlTypes.ContractId(exports.MiningRoundReference).decoder, senderHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, issuer: damlTypes.Party.decoder, amuletApp: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    sender: damlTypes.Party.encode(__typed__.sender),
    receiver: damlTypes.Party.encode(__typed__.receiver),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    roundReferenceCid: damlTypes.ContractId(exports.MiningRoundReference).encode(__typed__.roundReferenceCid),
    senderHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.senderHoldingCid),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    amuletApp: damlTypes.Party.encode(__typed__.amuletApp),
  };
}
,
  PrepareTransferWithRoundCheck: {
    template: function () { return exports.CCTransferWithRoundCheck; },
    choiceName: 'PrepareTransferWithRoundCheck',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.PrepareTransferWithRoundCheck.decoder; }),
    argumentEncode: function (__typed__) { return exports.PrepareTransferWithRoundCheck.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.Text, damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.Text, damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.CCTransferWithRoundCheck; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.CCTransferWithRoundCheck, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.MiningRoundStatus = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({roundNumber: damlTypes.Int.decoder, remainingSeconds: damlTypes.Int.decoder, totalDuration: damlTypes.Int.decoder, percentComplete: damlTypes.Numeric(10).decoder, canPrepareNow: damlTypes.Bool.decoder, warningMessage: damlTypes.Optional(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    roundNumber: damlTypes.Int.encode(__typed__.roundNumber),
    remainingSeconds: damlTypes.Int.encode(__typed__.remainingSeconds),
    totalDuration: damlTypes.Int.encode(__typed__.totalDuration),
    percentComplete: damlTypes.Numeric(10).encode(__typed__.percentComplete),
    canPrepareNow: damlTypes.Bool.encode(__typed__.canPrepareNow),
    warningMessage: damlTypes.Optional(damlTypes.Text).encode(__typed__.warningMessage),
  };
}
,
};



exports.CCTransactionApproval = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({approved: damlTypes.Bool.decoder, warningMessage: damlTypes.Optional(damlTypes.Text).decoder, approvedAt: damlTypes.Time.decoder, expiresAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    approved: damlTypes.Bool.encode(__typed__.approved),
    warningMessage: damlTypes.Optional(damlTypes.Text).encode(__typed__.warningMessage),
    approvedAt: damlTypes.Time.encode(__typed__.approvedAt),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
  };
}
,
};



exports.VerifyRoundAndProceed = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({estimatedSigningDelaySeconds: damlTypes.Int.decoder, amuletApp: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    estimatedSigningDelaySeconds: damlTypes.Int.encode(__typed__.estimatedSigningDelaySeconds),
    amuletApp: damlTypes.Party.encode(__typed__.amuletApp),
  };
}
,
};



exports.CCTransactionPrecondition = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:CantonCoin.MiningRoundSync:CCTransactionPrecondition',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({user: damlTypes.Party.decoder, roundReferenceCid: damlTypes.ContractId(exports.MiningRoundReference).decoder, operation: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    user: damlTypes.Party.encode(__typed__.user),
    roundReferenceCid: damlTypes.ContractId(exports.MiningRoundReference).encode(__typed__.roundReferenceCid),
    operation: damlTypes.Text.encode(__typed__.operation),
  };
}
,
  VerifyRoundAndProceed: {
    template: function () { return exports.CCTransactionPrecondition; },
    choiceName: 'VerifyRoundAndProceed',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.VerifyRoundAndProceed.decoder; }),
    argumentEncode: function (__typed__) { return exports.VerifyRoundAndProceed.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.CCTransactionApproval.decoder; }),
    resultEncode: function (__typed__) { return exports.CCTransactionApproval.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.CCTransactionPrecondition; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.CCTransactionPrecondition, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.HasTimeForExternalSigning = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({estimatedSigningDelaySeconds: damlTypes.Int.decoder, caller: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    estimatedSigningDelaySeconds: damlTypes.Int.encode(__typed__.estimatedSigningDelaySeconds),
    caller: damlTypes.Party.encode(__typed__.caller),
  };
}
,
};



exports.GetRemainingSeconds = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({caller: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    caller: damlTypes.Party.encode(__typed__.caller),
  };
}
,
};



exports.IsRoundValid = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({caller: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    caller: damlTypes.Party.encode(__typed__.caller),
  };
}
,
};



exports.MiningRoundReference = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:CantonCoin.MiningRoundSync:MiningRoundReference',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({roundNumber: damlTypes.Int.decoder, openedAt: damlTypes.Time.decoder, expiresAt: damlTypes.Time.decoder, amuletApp: damlTypes.Party.decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    roundNumber: damlTypes.Int.encode(__typed__.roundNumber),
    openedAt: damlTypes.Time.encode(__typed__.openedAt),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    amuletApp: damlTypes.Party.encode(__typed__.amuletApp),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  GetRemainingSeconds: {
    template: function () { return exports.MiningRoundReference; },
    choiceName: 'GetRemainingSeconds',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetRemainingSeconds.decoder; }),
    argumentEncode: function (__typed__) { return exports.GetRemainingSeconds.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Int.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Int.encode(__typed__); },
  },
  HasTimeForExternalSigning: {
    template: function () { return exports.MiningRoundReference; },
    choiceName: 'HasTimeForExternalSigning',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.HasTimeForExternalSigning.decoder; }),
    argumentEncode: function (__typed__) { return exports.HasTimeForExternalSigning.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Bool.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Bool.encode(__typed__); },
  },
  IsRoundValid: {
    template: function () { return exports.MiningRoundReference; },
    choiceName: 'IsRoundValid',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.IsRoundValid.decoder; }),
    argumentEncode: function (__typed__) { return exports.IsRoundValid.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Bool.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Bool.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.MiningRoundReference; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.MiningRoundReference, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

