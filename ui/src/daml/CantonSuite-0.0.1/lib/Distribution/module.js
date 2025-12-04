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


exports.CancelAnnouncement = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.DistributeToAll = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({holders: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Numeric(10))).decoder, }); }),
  encode: function (__typed__) {
  return {
    holders: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Numeric(10))).encode(__typed__.holders),
  };
}
,
};



exports.DistributeToBuyer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, quantity: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
  };
}
,
};



exports.DividendAnnouncement = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Distribution:DividendAnnouncement',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, label: damlTypes.Text.decoder, perUnitAmount: damlTypes.Numeric(10).decoder, distributionDate: damlTypes.Time.decoder, compliance: damlTypes.Party.decoder, regulator: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    label: damlTypes.Text.encode(__typed__.label),
    perUnitAmount: damlTypes.Numeric(10).encode(__typed__.perUnitAmount),
    distributionDate: damlTypes.Time.encode(__typed__.distributionDate),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    regulator: damlTypes.Party.encode(__typed__.regulator),
  };
}
,
  DistributeToBuyer: {
    template: function () { return exports.DividendAnnouncement; },
    choiceName: 'DistributeToBuyer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DistributeToBuyer.decoder; }),
    argumentEncode: function (__typed__) { return exports.DistributeToBuyer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Dividend).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Dividend).encode(__typed__); },
  },
  DistributeToAll: {
    template: function () { return exports.DividendAnnouncement; },
    choiceName: 'DistributeToAll',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DistributeToAll.decoder; }),
    argumentEncode: function (__typed__) { return exports.DistributeToAll.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.DividendAnnouncement; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CancelAnnouncement: {
    template: function () { return exports.DividendAnnouncement; },
    choiceName: 'CancelAnnouncement',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelAnnouncement.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelAnnouncement.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DividendAnnouncement, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);



exports.DividendRegulatorView = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Distribution:DividendRegulatorView',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({regulator: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, label: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, receiverHash: damlTypes.Text.decoder, distributedAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    regulator: damlTypes.Party.encode(__typed__.regulator),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    label: damlTypes.Text.encode(__typed__.label),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    receiverHash: damlTypes.Text.encode(__typed__.receiverHash),
    distributedAt: damlTypes.Time.encode(__typed__.distributedAt),
  };
}
,
  Archive: {
    template: function () { return exports.DividendRegulatorView; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DividendRegulatorView, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);



exports.ClaimDividend = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Dividend = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Distribution:Dividend',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, label: damlTypes.Text.decoder, cashAmount: damlTypes.Numeric(10).decoder, issuedAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    owner: damlTypes.Party.encode(__typed__.owner),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    label: damlTypes.Text.encode(__typed__.label),
    cashAmount: damlTypes.Numeric(10).encode(__typed__.cashAmount),
    issuedAt: damlTypes.Time.encode(__typed__.issuedAt),
  };
}
,
  ClaimDividend: {
    template: function () { return exports.Dividend; },
    choiceName: 'ClaimDividend',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ClaimDividend.decoder; }),
    argumentEncode: function (__typed__) { return exports.ClaimDividend.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Dividend; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Dividend, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);

