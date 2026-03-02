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


exports.RevokeVoucher = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({revocationReason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    revocationReason: damlTypes.Text.encode(__typed__.revocationReason),
  };
}
,
};



exports.ConsumeVoucher = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({tradeAmount: damlTypes.Numeric(10).decoder, tradeCid: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    tradeAmount: damlTypes.Numeric(10).encode(__typed__.tradeAmount),
    tradeCid: damlTypes.Text.encode(__typed__.tradeCid),
  };
}
,
};



exports.VerifyKYC = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({tradeAmount: damlTypes.Numeric(10).decoder, tradingParty: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    tradeAmount: damlTypes.Numeric(10).encode(__typed__.tradeAmount),
    tradingParty: damlTypes.Party.encode(__typed__.tradingParty),
  };
}
,
};



exports.ComplianceApprovalVoucher = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Compliance.Vouchers:ComplianceApprovalVoucher',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({compliance: damlTypes.Party.decoder, approvedParty: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, maxAmount: damlTypes.Numeric(10).decoder, expiresAt: damlTypes.Time.decoder, approvalReason: damlTypes.Text.decoder, restrictions: damlTypes.List(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    compliance: damlTypes.Party.encode(__typed__.compliance),
    approvedParty: damlTypes.Party.encode(__typed__.approvedParty),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    maxAmount: damlTypes.Numeric(10).encode(__typed__.maxAmount),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    approvalReason: damlTypes.Text.encode(__typed__.approvalReason),
    restrictions: damlTypes.List(damlTypes.Text).encode(__typed__.restrictions),
  };
}
,
  VerifyKYC: {
    template: function () { return exports.ComplianceApprovalVoucher; },
    choiceName: 'VerifyKYC',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.VerifyKYC.decoder; }),
    argumentEncode: function (__typed__) { return exports.VerifyKYC.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ConsumeVoucher: {
    template: function () { return exports.ComplianceApprovalVoucher; },
    choiceName: 'ConsumeVoucher',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ConsumeVoucher.decoder; }),
    argumentEncode: function (__typed__) { return exports.ConsumeVoucher.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ComplianceApprovalVoucher; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  RevokeVoucher: {
    template: function () { return exports.ComplianceApprovalVoucher; },
    choiceName: 'RevokeVoucher',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RevokeVoucher.decoder; }),
    argumentEncode: function (__typed__) { return exports.RevokeVoucher.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ComplianceApprovalVoucher, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

