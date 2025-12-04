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

var Assets = require('../Assets/module');


exports.CancelRedemption = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ApproveRedemption = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({assetCid: damlTypes.ContractId(Assets.Asset).decoder, }); }),
  encode: function (__typed__) {
  return {
    assetCid: damlTypes.ContractId(Assets.Asset).encode(__typed__.assetCid),
  };
}
,
};



exports.RedemptionRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Redemption:RedemptionRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
  ApproveRedemption: {
    template: function () { return exports.RedemptionRequest; },
    choiceName: 'ApproveRedemption',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApproveRedemption.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApproveRedemption.encode(__typed__); },
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
  CancelRedemption: {
    template: function () { return exports.RedemptionRequest; },
    choiceName: 'CancelRedemption',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelRedemption.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelRedemption.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.RedemptionRequest, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);

