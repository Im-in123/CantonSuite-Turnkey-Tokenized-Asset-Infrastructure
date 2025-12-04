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


exports.TradeStatus = {
  TRequested: 'TRequested',
  TExecuted: 'TExecuted',
  TRejected: 'TRejected',
  TUnderReview: 'TUnderReview',
  keys: ['TRequested','TExecuted','TRejected','TUnderReview',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.TradeStatus.TRequested), jtv.constant(exports.TradeStatus.TExecuted), jtv.constant(exports.TradeStatus.TRejected), jtv.constant(exports.TradeStatus.TUnderReview)); }),
  encode: function (__typed__) { return __typed__; },
};



exports.KYCStatus = {
  KPending: 'KPending',
  KApproved: 'KApproved',
  KRejected: 'KRejected',
  keys: ['KPending','KApproved','KRejected',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.KYCStatus.KPending), jtv.constant(exports.KYCStatus.KApproved), jtv.constant(exports.KYCStatus.KRejected)); }),
  encode: function (__typed__) { return __typed__; },
};



exports.Role = {
  Issuer: 'Issuer',
  Buyer: 'Buyer',
  Compliance: 'Compliance',
  Regulator: 'Regulator',
  keys: ['Issuer','Buyer','Compliance','Regulator',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.Role.Issuer), jtv.constant(exports.Role.Buyer), jtv.constant(exports.Role.Compliance), jtv.constant(exports.Role.Regulator)); }),
  encode: function (__typed__) { return __typed__; },
};

