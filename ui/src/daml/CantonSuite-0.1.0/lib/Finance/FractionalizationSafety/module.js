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

var Finance_Instruments = require('../../Finance/Instruments/module');
var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');


exports.GetFractionalizationSetting = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AttemptToggle = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({requestor: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    requestor: damlTypes.Party.encode(__typed__.requestor),
  };
}
,
};



exports.ImmutableFractionalization = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Finance.FractionalizationSafety:ImmutableFractionalization',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, fractionalizedValue: damlTypes.Bool.decoder, setAtIssuance: damlTypes.Time.decoder, permanentlyLocked: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    fractionalizedValue: damlTypes.Bool.encode(__typed__.fractionalizedValue),
    setAtIssuance: damlTypes.Time.encode(__typed__.setAtIssuance),
    permanentlyLocked: damlTypes.Bool.encode(__typed__.permanentlyLocked),
  };
}
,
  AttemptToggle: {
    template: function () { return exports.ImmutableFractionalization; },
    choiceName: 'AttemptToggle',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AttemptToggle.decoder; }),
    argumentEncode: function (__typed__) { return exports.AttemptToggle.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  GetFractionalizationSetting: {
    template: function () { return exports.ImmutableFractionalization; },
    choiceName: 'GetFractionalizationSetting',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetFractionalizationSetting.decoder; }),
    argumentEncode: function (__typed__) { return exports.GetFractionalizationSetting.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Bool, damlTypes.Time).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Bool, damlTypes.Time).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ImmutableFractionalization; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ImmutableFractionalization, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.SweepProgress = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({totalDustHoldings: damlTypes.Int.decoder, completedBuyBacks: damlTypes.Int.decoder, percentComplete: damlTypes.Numeric(10).decoder, remainingDust: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    totalDustHoldings: damlTypes.Int.encode(__typed__.totalDustHoldings),
    completedBuyBacks: damlTypes.Int.encode(__typed__.completedBuyBacks),
    percentComplete: damlTypes.Numeric(10).encode(__typed__.percentComplete),
    remainingDust: damlTypes.Int.encode(__typed__.remainingDust),
  };
}
,
};



exports.CheckSweepProgress = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({completedBuyBacks: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    completedBuyBacks: damlTypes.Int.encode(__typed__.completedBuyBacks),
  };
}
,
};



exports.InitiateSweep = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.DustSweepCoordinator = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Finance.FractionalizationSafety:DustSweepCoordinator',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({coordinator: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, buyBackPrice: damlTypes.Numeric(10).decoder, deadline: damlTypes.Time.decoder, dustHoldings: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.ContractId(TokenStandard_Interfaces.Holding))).decoder, }); }),
  encode: function (__typed__) {
  return {
    coordinator: damlTypes.Party.encode(__typed__.coordinator),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    buyBackPrice: damlTypes.Numeric(10).encode(__typed__.buyBackPrice),
    deadline: damlTypes.Time.encode(__typed__.deadline),
    dustHoldings: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.ContractId(TokenStandard_Interfaces.Holding))).encode(__typed__.dustHoldings),
  };
}
,
  InitiateSweep: {
    template: function () { return exports.DustSweepCoordinator; },
    choiceName: 'InitiateSweep',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InitiateSweep.decoder; }),
    argumentEncode: function (__typed__) { return exports.InitiateSweep.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.List(damlTypes.ContractId(exports.DustSweepBuyBack)).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.List(damlTypes.ContractId(exports.DustSweepBuyBack)).encode(__typed__); },
  },
  CheckSweepProgress: {
    template: function () { return exports.DustSweepCoordinator; },
    choiceName: 'CheckSweepProgress',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CheckSweepProgress.decoder; }),
    argumentEncode: function (__typed__) { return exports.CheckSweepProgress.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.SweepProgress.decoder; }),
    resultEncode: function (__typed__) { return exports.SweepProgress.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.DustSweepCoordinator; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DustSweepCoordinator, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.AcknowledgeReceipt = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.DustBuyBackReceipt = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Finance.FractionalizationSafety:DustBuyBackReceipt',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, recipient: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, dustAmount: damlTypes.Numeric(10).decoder, payment: damlTypes.Numeric(10).decoder, completedAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    recipient: damlTypes.Party.encode(__typed__.recipient),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    dustAmount: damlTypes.Numeric(10).encode(__typed__.dustAmount),
    payment: damlTypes.Numeric(10).encode(__typed__.payment),
    completedAt: damlTypes.Time.encode(__typed__.completedAt),
  };
}
,
  AcknowledgeReceipt: {
    template: function () { return exports.DustBuyBackReceipt; },
    choiceName: 'AcknowledgeReceipt',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcknowledgeReceipt.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcknowledgeReceipt.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.DustBuyBackReceipt; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DustBuyBackReceipt, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.VerifyNoDustRemains = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({remainingHoldings: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Numeric(10))).decoder, }); }),
  encode: function (__typed__) {
  return {
    remainingHoldings: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Numeric(10))).encode(__typed__.remainingHoldings),
  };
}
,
};



exports.DustSweepCompletion = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Finance.FractionalizationSafety:DustSweepCompletion',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, completedAt: damlTypes.Time.decoder, holdersBoughtBack: damlTypes.Int.decoder, totalDustSwept: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    completedAt: damlTypes.Time.encode(__typed__.completedAt),
    holdersBoughtBack: damlTypes.Int.encode(__typed__.holdersBoughtBack),
    totalDustSwept: damlTypes.Numeric(10).encode(__typed__.totalDustSwept),
  };
}
,
  VerifyNoDustRemains: {
    template: function () { return exports.DustSweepCompletion; },
    choiceName: 'VerifyNoDustRemains',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.VerifyNoDustRemains.decoder; }),
    argumentEncode: function (__typed__) { return exports.VerifyNoDustRemains.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Bool.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Bool.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.DustSweepCompletion; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DustSweepCompletion, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CloseBuyBack = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({totalHoldersBoughtBack: damlTypes.Int.decoder, totalDustSwept: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    totalHoldersBoughtBack: damlTypes.Int.encode(__typed__.totalHoldersBoughtBack),
    totalDustSwept: damlTypes.Numeric(10).encode(__typed__.totalDustSwept),
  };
}
,
};



exports.AcceptDustBuyBack = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({dustHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    dustHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.dustHoldingCid),
  };
}
,
};



exports.DustSweepBuyBack = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Finance.FractionalizationSafety:DustSweepBuyBack',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, buyBackHolder: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, buyBackPrice: damlTypes.Numeric(10).decoder, deadline: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    buyBackHolder: damlTypes.Party.encode(__typed__.buyBackHolder),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    buyBackPrice: damlTypes.Numeric(10).encode(__typed__.buyBackPrice),
    deadline: damlTypes.Time.encode(__typed__.deadline),
  };
}
,
  AcceptDustBuyBack: {
    template: function () { return exports.DustSweepBuyBack; },
    choiceName: 'AcceptDustBuyBack',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptDustBuyBack.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptDustBuyBack.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(exports.DustBuyBackReceipt)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(exports.DustBuyBackReceipt)).encode(__typed__); },
  },
  CloseBuyBack: {
    template: function () { return exports.DustSweepBuyBack; },
    choiceName: 'CloseBuyBack',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CloseBuyBack.decoder; }),
    argumentEncode: function (__typed__) { return exports.CloseBuyBack.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.DustSweepCompletion).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.DustSweepCompletion).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.DustSweepBuyBack; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DustSweepBuyBack, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.DustReport = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({assetId: damlTypes.Text.decoder, totalDustHoldings: damlTypes.Int.decoder, totalDustAmount: damlTypes.Numeric(10).decoder, dustHoldings: damlTypes.List(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder, requiresSweep: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    assetId: damlTypes.Text.encode(__typed__.assetId),
    totalDustHoldings: damlTypes.Int.encode(__typed__.totalDustHoldings),
    totalDustAmount: damlTypes.Numeric(10).encode(__typed__.totalDustAmount),
    dustHoldings: damlTypes.List(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__.dustHoldings),
    requiresSweep: damlTypes.Bool.encode(__typed__.requiresSweep),
  };
}
,
};



exports.DetectDustHoldings = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({holdings: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Numeric(10))).decoder, }); }),
  encode: function (__typed__) {
  return {
    holdings: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Numeric(10))).encode(__typed__.holdings),
  };
}
,
};



exports.DustDetector = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Finance.FractionalizationSafety:DustDetector',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    assetId: damlTypes.Text.encode(__typed__.assetId),
  };
}
,
  DetectDustHoldings: {
    template: function () { return exports.DustDetector; },
    choiceName: 'DetectDustHoldings',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DetectDustHoldings.decoder; }),
    argumentEncode: function (__typed__) { return exports.DetectDustHoldings.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.DustReport.decoder; }),
    resultEncode: function (__typed__) { return exports.DustReport.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.DustDetector; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DustDetector, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ExecuteToggle = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, allHolders: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.instrumentCid),
    allHolders: damlTypes.List(damlTypes.Party).encode(__typed__.allHolders),
  };
}
,
};



exports.HolderApproval = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({approver: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    approver: damlTypes.Party.encode(__typed__.approver),
  };
}
,
};



exports.RecordDustSweepCompleted = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({dustSweepProof: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    dustSweepProof: damlTypes.Text.encode(__typed__.dustSweepProof),
  };
}
,
};



exports.FractionalizationToggleRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Finance.FractionalizationSafety:FractionalizationToggleRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, currentValue: damlTypes.Bool.decoder, newValue: damlTypes.Bool.decoder, reason: damlTypes.Text.decoder, requestedAt: damlTypes.Time.decoder, requiresDustSweep: damlTypes.Bool.decoder, dustSweepCompleted: damlTypes.Bool.decoder, holderApprovalsRequired: damlTypes.Bool.decoder, approvals: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    currentValue: damlTypes.Bool.encode(__typed__.currentValue),
    newValue: damlTypes.Bool.encode(__typed__.newValue),
    reason: damlTypes.Text.encode(__typed__.reason),
    requestedAt: damlTypes.Time.encode(__typed__.requestedAt),
    requiresDustSweep: damlTypes.Bool.encode(__typed__.requiresDustSweep),
    dustSweepCompleted: damlTypes.Bool.encode(__typed__.dustSweepCompleted),
    holderApprovalsRequired: damlTypes.Bool.encode(__typed__.holderApprovalsRequired),
    approvals: damlTypes.List(damlTypes.Party).encode(__typed__.approvals),
  };
}
,
  RecordDustSweepCompleted: {
    template: function () { return exports.FractionalizationToggleRequest; },
    choiceName: 'RecordDustSweepCompleted',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RecordDustSweepCompleted.decoder; }),
    argumentEncode: function (__typed__) { return exports.RecordDustSweepCompleted.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.FractionalizationToggleRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.FractionalizationToggleRequest).encode(__typed__); },
  },
  HolderApproval: {
    template: function () { return exports.FractionalizationToggleRequest; },
    choiceName: 'HolderApproval',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.HolderApproval.decoder; }),
    argumentEncode: function (__typed__) { return exports.HolderApproval.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.FractionalizationToggleRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.FractionalizationToggleRequest).encode(__typed__); },
  },
  ExecuteToggle: {
    template: function () { return exports.FractionalizationToggleRequest; },
    choiceName: 'ExecuteToggle',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteToggle.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteToggle.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.FractionalizationToggleRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.FractionalizationToggleRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.RequestFractionalizationToggle = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newValue: damlTypes.Bool.decoder, reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    newValue: damlTypes.Bool.encode(__typed__.newValue),
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
};



exports.FractionalizationGovernance = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Finance.FractionalizationSafety:FractionalizationGovernance',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, currentlyFractionalized: damlTypes.Bool.decoder, policy: exports.FractionalizationPolicy.decoder, issuanceDate: damlTypes.Time.decoder, canToggle: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    currentlyFractionalized: damlTypes.Bool.encode(__typed__.currentlyFractionalized),
    policy: exports.FractionalizationPolicy.encode(__typed__.policy),
    issuanceDate: damlTypes.Time.encode(__typed__.issuanceDate),
    canToggle: damlTypes.Bool.encode(__typed__.canToggle),
  };
}
,
  RequestFractionalizationToggle: {
    template: function () { return exports.FractionalizationGovernance; },
    choiceName: 'RequestFractionalizationToggle',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestFractionalizationToggle.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestFractionalizationToggle.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.Text, damlTypes.ContractId(exports.FractionalizationToggleRequest)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.Text, damlTypes.ContractId(exports.FractionalizationToggleRequest)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.FractionalizationGovernance; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.FractionalizationGovernance, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.FractionalizationPolicy = {
  ImmutableAfterIssuance: 'ImmutableAfterIssuance',
  RequiresDustSweep: 'RequiresDustSweep',
  RequiresUnanimousConsent: 'RequiresUnanimousConsent',
  keys: ['ImmutableAfterIssuance','RequiresDustSweep','RequiresUnanimousConsent',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.FractionalizationPolicy.ImmutableAfterIssuance), jtv.constant(exports.FractionalizationPolicy.RequiresDustSweep), jtv.constant(exports.FractionalizationPolicy.RequiresUnanimousConsent)); }),
  encode: function (__typed__) { return __typed__; },
};

