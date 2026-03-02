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


exports.VerifyClearance = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ConsumeClearance = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.SanctionsClearance = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Compliance.SanctionsRegistry:SanctionsClearance',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({compliance: damlTypes.Party.decoder, clearedParty: damlTypes.Party.decoder, tradeId: damlTypes.Text.decoder, issuedAt: damlTypes.Time.decoder, expiresAt: damlTypes.Time.decoder, consumed: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    compliance: damlTypes.Party.encode(__typed__.compliance),
    clearedParty: damlTypes.Party.encode(__typed__.clearedParty),
    tradeId: damlTypes.Text.encode(__typed__.tradeId),
    issuedAt: damlTypes.Time.encode(__typed__.issuedAt),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    consumed: damlTypes.Bool.encode(__typed__.consumed),
  };
}
,
  ConsumeClearance: {
    template: function () { return exports.SanctionsClearance; },
    choiceName: 'ConsumeClearance',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ConsumeClearance.decoder; }),
    argumentEncode: function (__typed__) { return exports.ConsumeClearance.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.SanctionsClearance; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  VerifyClearance: {
    template: function () { return exports.SanctionsClearance; },
    choiceName: 'VerifyClearance',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.VerifyClearance.decoder; }),
    argumentEncode: function (__typed__) { return exports.VerifyClearance.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Bool.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Bool.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.SanctionsClearance, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.IssueClearance = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({partyToCheck: damlTypes.Party.decoder, tradeId: damlTypes.Text.decoder, settlementWindow: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    partyToCheck: damlTypes.Party.encode(__typed__.partyToCheck),
    tradeId: damlTypes.Text.encode(__typed__.tradeId),
    settlementWindow: damlTypes.Int.encode(__typed__.settlementWindow),
  };
}
,
};



exports.CheckSanctioned = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({partyHash: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    partyHash: damlTypes.Text.encode(__typed__.partyHash),
  };
}
,
};



exports.RemoveSanctionedEntity = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({partyHash: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    partyHash: damlTypes.Text.encode(__typed__.partyHash),
  };
}
,
};



exports.AddSanctionedEntity = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({partyHash: damlTypes.Text.decoder, reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    partyHash: damlTypes.Text.encode(__typed__.partyHash),
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
};



exports.SanctionsRegistry = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Compliance.SanctionsRegistry:SanctionsRegistry',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({compliance: damlTypes.Party.decoder, regulator: damlTypes.Party.decoder, sanctionedHashes: damlTypes.List(damlTypes.Text).decoder, lastUpdated: damlTypes.Time.decoder, listVersion: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    compliance: damlTypes.Party.encode(__typed__.compliance),
    regulator: damlTypes.Party.encode(__typed__.regulator),
    sanctionedHashes: damlTypes.List(damlTypes.Text).encode(__typed__.sanctionedHashes),
    lastUpdated: damlTypes.Time.encode(__typed__.lastUpdated),
    listVersion: damlTypes.Text.encode(__typed__.listVersion),
  };
}
,
  IssueClearance: {
    template: function () { return exports.SanctionsRegistry; },
    choiceName: 'IssueClearance',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.IssueClearance.decoder; }),
    argumentEncode: function (__typed__) { return exports.IssueClearance.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.SanctionsClearance).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.SanctionsClearance).encode(__typed__); },
  },
  AddSanctionedEntity: {
    template: function () { return exports.SanctionsRegistry; },
    choiceName: 'AddSanctionedEntity',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddSanctionedEntity.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddSanctionedEntity.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.SanctionsRegistry).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.SanctionsRegistry).encode(__typed__); },
  },
  RemoveSanctionedEntity: {
    template: function () { return exports.SanctionsRegistry; },
    choiceName: 'RemoveSanctionedEntity',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RemoveSanctionedEntity.decoder; }),
    argumentEncode: function (__typed__) { return exports.RemoveSanctionedEntity.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.SanctionsRegistry).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.SanctionsRegistry).encode(__typed__); },
  },
  CheckSanctioned: {
    template: function () { return exports.SanctionsRegistry; },
    choiceName: 'CheckSanctioned',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CheckSanctioned.decoder; }),
    argumentEncode: function (__typed__) { return exports.CheckSanctioned.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Bool.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Bool.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.SanctionsRegistry; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.SanctionsRegistry, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

