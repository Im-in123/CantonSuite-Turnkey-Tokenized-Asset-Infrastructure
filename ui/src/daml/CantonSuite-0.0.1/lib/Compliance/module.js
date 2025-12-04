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


exports.ComplianceReview = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Compliance:ComplianceReview',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({compliance: damlTypes.Party.decoder, reason: damlTypes.Text.decoder, createdAt: damlTypes.Time.decoder, buyer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    compliance: damlTypes.Party.encode(__typed__.compliance),
    reason: damlTypes.Text.encode(__typed__.reason),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    buyer: damlTypes.Party.encode(__typed__.buyer),
    seller: damlTypes.Party.encode(__typed__.seller),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
  Archive: {
    template: function () { return exports.ComplianceReview; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ComplianceReview, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);

