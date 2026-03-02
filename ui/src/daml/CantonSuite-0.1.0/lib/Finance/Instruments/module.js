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

var pkg332c97558616b4d4db3ab4ab9f306cc60b200dd4c8dcc72e06ab7e349b39c4ff = require('@daml.js/daml-finance-instrument-token-v4-4.0.0');
var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');
var pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b = require('@daml.js/daml-finance-interface-types-common-v3-3.0.0');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');


exports.FinalizeIssuance = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({additionalObservers: damlTypes.List(damlTypes.Party).decoder, description: damlTypes.Text.decoder, validAsOf: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    additionalObservers: damlTypes.List(damlTypes.Party).encode(__typed__.additionalObservers),
    description: damlTypes.Text.encode(__typed__.description),
    validAsOf: damlTypes.Time.encode(__typed__.validAsOf),
  };
}
,
};



exports.DraftRWAInstrument = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Finance.Instruments:DraftRWAInstrument',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({draftIssuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, instrumentId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, assetType: damlTypes.Text.decoder, pricePerUnit: damlTypes.Numeric(10).decoder, fractionalized: damlTypes.Bool.decoder, draftObservers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    draftIssuer: damlTypes.Party.encode(__typed__.draftIssuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    instrumentId: damlTypes.Text.encode(__typed__.instrumentId),
    name: damlTypes.Text.encode(__typed__.name),
    assetType: damlTypes.Text.encode(__typed__.assetType),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    fractionalized: damlTypes.Bool.encode(__typed__.fractionalized),
    draftObservers: damlTypes.List(damlTypes.Party).encode(__typed__.draftObservers),
  };
}
,
  Archive: {
    template: function () { return exports.DraftRWAInstrument; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  FinalizeIssuance: {
    template: function () { return exports.DraftRWAInstrument; },
    choiceName: 'FinalizeIssuance',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.FinalizeIssuance.decoder; }),
    argumentEncode: function (__typed__) { return exports.FinalizeIssuance.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(pkg332c97558616b4d4db3ab4ab9f306cc60b200dd4c8dcc72e06ab7e349b39c4ff.Daml.Finance.Instrument.Token.V4.Instrument.Instrument), damlTypes.ContractId(exports.RWAInstrument)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(pkg332c97558616b4d4db3ab4ab9f306cc60b200dd4c8dcc72e06ab7e349b39c4ff.Daml.Finance.Instrument.Token.V4.Instrument.Instrument), damlTypes.ContractId(exports.RWAInstrument)).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DraftRWAInstrument, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ToggleFractionalized = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({approvalCid: damlTypes.ContractId(exports.FractionalizationGovernanceApproval).decoder, }); }),
  encode: function (__typed__) {
  return {
    approvalCid: damlTypes.ContractId(exports.FractionalizationGovernanceApproval).encode(__typed__.approvalCid),
  };
}
,
};



exports.UpdatePrice = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newPrice: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    newPrice: damlTypes.Numeric(10).encode(__typed__.newPrice),
  };
}
,
};



exports.RWAInstrument = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Finance.Instruments:RWAInstrument',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({instrument: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.InstrumentKey.decoder, tokenIssuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, name: damlTypes.Text.decoder, assetType: damlTypes.Text.decoder, pricePerUnit: damlTypes.Numeric(10).decoder, fractionalized: damlTypes.Bool.decoder, rwaObservers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    instrument: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.InstrumentKey.encode(__typed__.instrument),
    tokenIssuer: damlTypes.Party.encode(__typed__.tokenIssuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    name: damlTypes.Text.encode(__typed__.name),
    assetType: damlTypes.Text.encode(__typed__.assetType),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    fractionalized: damlTypes.Bool.encode(__typed__.fractionalized),
    rwaObservers: damlTypes.List(damlTypes.Party).encode(__typed__.rwaObservers),
  };
}
,
  ToggleFractionalized: {
    template: function () { return exports.RWAInstrument; },
    choiceName: 'ToggleFractionalized',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ToggleFractionalized.decoder; }),
    argumentEncode: function (__typed__) { return exports.ToggleFractionalized.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RWAInstrument).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.RWAInstrument).encode(__typed__); },
  },
  UpdatePrice: {
    template: function () { return exports.RWAInstrument; },
    choiceName: 'UpdatePrice',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdatePrice.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdatePrice.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RWAInstrument).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.RWAInstrument).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.RWAInstrument; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

, TokenStandard_Interfaces.TokenMetadata
);


damlTypes.registerTemplate(exports.RWAInstrument, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ConsumeApproval = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.FractionalizationGovernanceApproval = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Finance.Instruments:FractionalizationGovernanceApproval',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, newValue: damlTypes.Bool.decoder, approvedAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    newValue: damlTypes.Bool.encode(__typed__.newValue),
    approvedAt: damlTypes.Time.encode(__typed__.approvedAt),
  };
}
,
  ConsumeApproval: {
    template: function () { return exports.FractionalizationGovernanceApproval; },
    choiceName: 'ConsumeApproval',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ConsumeApproval.decoder; }),
    argumentEncode: function (__typed__) { return exports.ConsumeApproval.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.FractionalizationGovernanceApproval; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.FractionalizationGovernanceApproval, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

