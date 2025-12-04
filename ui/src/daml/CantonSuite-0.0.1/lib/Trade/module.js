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


exports.Finalize = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ApprovedTrade = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Trade:ApprovedTrade',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, assetIssuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, assetCid: damlTypes.ContractId(Assets.Asset).decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, isPrimary: damlTypes.Bool.decoder, complianceParty: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, createdAt: damlTypes.Time.decoder, expiresAt: damlTypes.Time.decoder, approvedAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    seller: damlTypes.Party.encode(__typed__.seller),
    assetIssuer: damlTypes.Party.encode(__typed__.assetIssuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    assetCid: damlTypes.ContractId(Assets.Asset).encode(__typed__.assetCid),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    isPrimary: damlTypes.Bool.encode(__typed__.isPrimary),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    approvedAt: damlTypes.Time.encode(__typed__.approvedAt),
  };
}
,
  Archive: {
    template: function () { return exports.ApprovedTrade; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Finalize: {
    template: function () { return exports.ApprovedTrade; },
    choiceName: 'Finalize',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Finalize.decoder; }),
    argumentEncode: function (__typed__) { return exports.Finalize.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ApprovedTrade, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);



exports.CancelTrade = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ApproveByCompliance = {
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
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, assetIssuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, assetCid: damlTypes.ContractId(Assets.Asset).decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, isPrimary: damlTypes.Bool.decoder, complianceParty: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, createdAt: damlTypes.Time.decoder, expiresAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    seller: damlTypes.Party.encode(__typed__.seller),
    assetIssuer: damlTypes.Party.encode(__typed__.assetIssuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    assetCid: damlTypes.ContractId(Assets.Asset).encode(__typed__.assetCid),
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
  Archive: {
    template: function () { return exports.TradeAgreement; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CancelTrade: {
    template: function () { return exports.TradeAgreement; },
    choiceName: 'CancelTrade',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelTrade.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelTrade.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ApproveByCompliance: {
    template: function () { return exports.TradeAgreement; },
    choiceName: 'ApproveByCompliance',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApproveByCompliance.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApproveByCompliance.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ApprovedTrade).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ApprovedTrade).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.TradeAgreement, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);



exports.CancelProposal = {
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
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, assetIssuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, assetCid: damlTypes.ContractId(Assets.Asset).decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, isPrimary: damlTypes.Bool.decoder, complianceParty: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, createdAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    seller: damlTypes.Party.encode(__typed__.seller),
    assetIssuer: damlTypes.Party.encode(__typed__.assetIssuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    assetCid: damlTypes.ContractId(Assets.Asset).encode(__typed__.assetCid),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    isPrimary: damlTypes.Bool.encode(__typed__.isPrimary),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
  };
}
,
  Archive: {
    template: function () { return exports.ProposedTrade; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CancelProposal: {
    template: function () { return exports.ProposedTrade; },
    choiceName: 'CancelProposal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelProposal.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelProposal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  SellerAccept: {
    template: function () { return exports.ProposedTrade; },
    choiceName: 'SellerAccept',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SellerAccept.decoder; }),
    argumentEncode: function (__typed__) { return exports.SellerAccept.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.TradeAgreement).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.TradeAgreement).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ProposedTrade, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);

