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


exports.DayCountConventionEnum = {
  Act360: 'Act360',
  Act365Fixed: 'Act365Fixed',
  Act365NL: 'Act365NL',
  Act365L: 'Act365L',
  ActActAFB: 'ActActAFB',
  ActActISDA: 'ActActISDA',
  ActActICMA: 'ActActICMA',
  Basis1: 'Basis1',
  Basis30360: 'Basis30360',
  Basis30365: 'Basis30365',
  Basis30360ICMA: 'Basis30360ICMA',
  Basis30E360: 'Basis30E360',
  Basis30E2360: 'Basis30E2360',
  Basis30E3360: 'Basis30E3360',
  keys: ['Act360','Act365Fixed','Act365NL','Act365L','ActActAFB','ActActISDA','ActActICMA','Basis1','Basis30360','Basis30365','Basis30360ICMA','Basis30E360','Basis30E2360','Basis30E3360',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.DayCountConventionEnum.Act360), jtv.constant(exports.DayCountConventionEnum.Act365Fixed), jtv.constant(exports.DayCountConventionEnum.Act365NL), jtv.constant(exports.DayCountConventionEnum.Act365L), jtv.constant(exports.DayCountConventionEnum.ActActAFB), jtv.constant(exports.DayCountConventionEnum.ActActISDA), jtv.constant(exports.DayCountConventionEnum.ActActICMA), jtv.constant(exports.DayCountConventionEnum.Basis1), jtv.constant(exports.DayCountConventionEnum.Basis30360), jtv.constant(exports.DayCountConventionEnum.Basis30365), jtv.constant(exports.DayCountConventionEnum.Basis30360ICMA), jtv.constant(exports.DayCountConventionEnum.Basis30E360), jtv.constant(exports.DayCountConventionEnum.Basis30E2360), jtv.constant(exports.DayCountConventionEnum.Basis30E3360)); }),
  encode: function (__typed__) { return __typed__; },
};

