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

var TokenStandard_Interfaces = require('../TokenStandard/Interfaces/module');


exports.HoldingSummary = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, custodian: damlTypes.Party.decoder, locked: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    custodian: damlTypes.Party.encode(__typed__.custodian),
    locked: damlTypes.Bool.encode(__typed__.locked),
  };
}
,
};



exports.CreditLockedHolding = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, lockContext: damlTypes.Text.decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    lockContext: damlTypes.Text.encode(__typed__.lockContext),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
};



exports.CreditHolding = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
};



exports.HoldingFactory = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Portfolio:HoldingFactory',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({custodian: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    custodian: damlTypes.Party.encode(__typed__.custodian),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  CreditHolding: {
    template: function () { return exports.HoldingFactory; },
    choiceName: 'CreditHolding',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreditHolding.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreditHolding.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__); },
  },
  CreditLockedHolding: {
    template: function () { return exports.HoldingFactory; },
    choiceName: 'CreditLockedHolding',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreditLockedHolding.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreditLockedHolding.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.HoldingFactory; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.HoldingFactory, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ClawbackResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({recoveredHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, clawbackMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    recoveredHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.recoveredHoldingCid),
    clawbackMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.clawbackMetadata),
  };
}
,
};



exports.WithdrawClawback = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RejectClawback = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({rejectionReason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    rejectionReason: damlTypes.Text.encode(__typed__.rejectionReason),
  };
}
,
};



exports.AuthorizeClawback = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({complianceOfficer: damlTypes.Text.decoder, authorizationDate: damlTypes.Time.decoder, courtOrderHash: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    complianceOfficer: damlTypes.Text.encode(__typed__.complianceOfficer),
    authorizationDate: damlTypes.Time.encode(__typed__.authorizationDate),
    courtOrderHash: damlTypes.Text.encode(__typed__.courtOrderHash),
  };
}
,
};



exports.ClawbackRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Portfolio:ClawbackRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({targetOwner: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, legalReason: damlTypes.Text.decoder, jurisdiction: damlTypes.Text.decoder, caseReference: damlTypes.Text.decoder, lockedHoldingCid: damlTypes.ContractId(exports.LockedHolding_Impl).decoder, metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    targetOwner: damlTypes.Party.encode(__typed__.targetOwner),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    legalReason: damlTypes.Text.encode(__typed__.legalReason),
    jurisdiction: damlTypes.Text.encode(__typed__.jurisdiction),
    caseReference: damlTypes.Text.encode(__typed__.caseReference),
    lockedHoldingCid: damlTypes.ContractId(exports.LockedHolding_Impl).encode(__typed__.lockedHoldingCid),
    metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.metadata),
  };
}
,
  AuthorizeClawback: {
    template: function () { return exports.ClawbackRequest; },
    choiceName: 'AuthorizeClawback',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AuthorizeClawback.decoder; }),
    argumentEncode: function (__typed__) { return exports.AuthorizeClawback.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.ClawbackResult.decoder; }),
    resultEncode: function (__typed__) { return exports.ClawbackResult.encode(__typed__); },
  },
  RejectClawback: {
    template: function () { return exports.ClawbackRequest; },
    choiceName: 'RejectClawback',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectClawback.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectClawback.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__); },
  },
  WithdrawClawback: {
    template: function () { return exports.ClawbackRequest; },
    choiceName: 'WithdrawClawback',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.WithdrawClawback.decoder; }),
    argumentEncode: function (__typed__) { return exports.WithdrawClawback.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ClawbackRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ClawbackRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.LockedHolding_Impl = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Portfolio:LockedHolding_Impl',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, lockContext: damlTypes.Text.decoder, metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    lockContext: damlTypes.Text.encode(__typed__.lockContext),
    metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.metadata),
  };
}
,
  Archive: {
    template: function () { return exports.LockedHolding_Impl; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

, TokenStandard_Interfaces.Holding
);


damlTypes.registerTemplate(exports.LockedHolding_Impl, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.InitiateClawback = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({legalReason: damlTypes.Text.decoder, jurisdiction: damlTypes.Text.decoder, caseReference: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    legalReason: damlTypes.Text.encode(__typed__.legalReason),
    jurisdiction: damlTypes.Text.encode(__typed__.jurisdiction),
    caseReference: damlTypes.Text.encode(__typed__.caseReference),
  };
}
,
};



exports.Merge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({otherHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, mergeMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    otherHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.otherHoldingCid),
    mergeMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.mergeMetadata),
  };
}
,
};



exports.Split = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({splitAmount: damlTypes.Numeric(10).decoder, splitMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    splitAmount: damlTypes.Numeric(10).encode(__typed__.splitAmount),
    splitMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.splitMetadata),
  };
}
,
};



exports.Holding_Impl = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Portfolio:Holding_Impl',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, locked: damlTypes.Bool.decoder, lockContext: damlTypes.Optional(damlTypes.Text).decoder, metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    locked: damlTypes.Bool.encode(__typed__.locked),
    lockContext: damlTypes.Optional(damlTypes.Text).encode(__typed__.lockContext),
    metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.metadata),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  Split: {
    template: function () { return exports.Holding_Impl; },
    choiceName: 'Split',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Split.decoder; }),
    argumentEncode: function (__typed__) { return exports.Split.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__); },
  },
  Merge: {
    template: function () { return exports.Holding_Impl; },
    choiceName: 'Merge',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Merge.decoder; }),
    argumentEncode: function (__typed__) { return exports.Merge.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__); },
  },
  InitiateClawback: {
    template: function () { return exports.Holding_Impl; },
    choiceName: 'InitiateClawback',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InitiateClawback.decoder; }),
    argumentEncode: function (__typed__) { return exports.InitiateClawback.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClawbackRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClawbackRequest).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Holding_Impl; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

, TokenStandard_Interfaces.Holding
);


damlTypes.registerTemplate(exports.Holding_Impl, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

