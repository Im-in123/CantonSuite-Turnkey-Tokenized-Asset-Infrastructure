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


exports.LoanStatus = {
  Active: 'Active',
  Defaulted: 'Defaulted',
  Repaid: 'Repaid',
  keys: ['Active','Defaulted','Repaid',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.LoanStatus.Active), jtv.constant(exports.LoanStatus.Defaulted), jtv.constant(exports.LoanStatus.Repaid)); }),
  encode: function (__typed__) { return __typed__; },
};



exports.PoolStatus = {
  Open: 'Open',
  Closing: 'Closing',
  Closed: 'Closed',
  keys: ['Open','Closing','Closed',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.PoolStatus.Open), jtv.constant(exports.PoolStatus.Closing), jtv.constant(exports.PoolStatus.Closed)); }),
  encode: function (__typed__) { return __typed__; },
};

