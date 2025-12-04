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


exports.Burn = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
};



exports.Mint = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
};



exports.ToggleFractionalized = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
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



exports.DecreaseSupply = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({delta: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    delta: damlTypes.Numeric(10).encode(__typed__.delta),
  };
}
,
};



exports.Asset = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Assets:Asset',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, assetType: damlTypes.Text.decoder, totalSupply: damlTypes.Numeric(10).decoder, fractionalized: damlTypes.Bool.decoder, pricePerUnit: damlTypes.Numeric(10).decoder, availableSupply: damlTypes.Numeric(10).decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    name: damlTypes.Text.encode(__typed__.name),
    assetType: damlTypes.Text.encode(__typed__.assetType),
    totalSupply: damlTypes.Numeric(10).encode(__typed__.totalSupply),
    fractionalized: damlTypes.Bool.encode(__typed__.fractionalized),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    availableSupply: damlTypes.Numeric(10).encode(__typed__.availableSupply),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  DecreaseSupply: {
    template: function () { return exports.Asset; },
    choiceName: 'DecreaseSupply',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DecreaseSupply.decoder; }),
    argumentEncode: function (__typed__) { return exports.DecreaseSupply.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Asset).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Asset).encode(__typed__); },
  },
  UpdatePrice: {
    template: function () { return exports.Asset; },
    choiceName: 'UpdatePrice',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdatePrice.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdatePrice.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Asset).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Asset).encode(__typed__); },
  },
  ToggleFractionalized: {
    template: function () { return exports.Asset; },
    choiceName: 'ToggleFractionalized',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ToggleFractionalized.decoder; }),
    argumentEncode: function (__typed__) { return exports.ToggleFractionalized.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Asset).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Asset).encode(__typed__); },
  },
  Mint: {
    template: function () { return exports.Asset; },
    choiceName: 'Mint',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Mint.decoder; }),
    argumentEncode: function (__typed__) { return exports.Mint.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Asset).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Asset).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Asset; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Burn: {
    template: function () { return exports.Asset; },
    choiceName: 'Burn',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Burn.decoder; }),
    argumentEncode: function (__typed__) { return exports.Burn.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Asset).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Asset).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Asset, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);



exports.FinalizeIssuance = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({additionalObservers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    additionalObservers: damlTypes.List(damlTypes.Party).encode(__typed__.additionalObservers),
  };
}
,
};



exports.DraftAsset = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Assets:DraftAsset',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({draftIssuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, assetType: damlTypes.Text.decoder, totalSupply: damlTypes.Numeric(10).decoder, fractionalized: damlTypes.Bool.decoder, pricePerUnit: damlTypes.Numeric(10).decoder, availableSupply: damlTypes.Numeric(10).decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    draftIssuer: damlTypes.Party.encode(__typed__.draftIssuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    name: damlTypes.Text.encode(__typed__.name),
    assetType: damlTypes.Text.encode(__typed__.assetType),
    totalSupply: damlTypes.Numeric(10).encode(__typed__.totalSupply),
    fractionalized: damlTypes.Bool.encode(__typed__.fractionalized),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    availableSupply: damlTypes.Numeric(10).encode(__typed__.availableSupply),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  FinalizeIssuance: {
    template: function () { return exports.DraftAsset; },
    choiceName: 'FinalizeIssuance',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.FinalizeIssuance.decoder; }),
    argumentEncode: function (__typed__) { return exports.FinalizeIssuance.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Asset).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Asset).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.DraftAsset; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DraftAsset, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);

