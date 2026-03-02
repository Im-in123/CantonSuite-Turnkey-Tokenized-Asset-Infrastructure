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

var Daml_Finance_Interface_Types_Date_V3_Calendar = require('../../../../../../../Daml/Finance/Interface/Types/Date/V3/Calendar/module');
var Daml_Finance_Interface_Types_Date_V3_RollConvention = require('../../../../../../../Daml/Finance/Interface/Types/Date/V3/RollConvention/module');


exports.DateOffset = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({period: Daml_Finance_Interface_Types_Date_V3_RollConvention.PeriodEnum.decoder, periodMultiplier: damlTypes.Int.decoder, dayType: damlTypes.Optional(exports.DayTypeEnum).decoder, businessDayConvention: Daml_Finance_Interface_Types_Date_V3_Calendar.BusinessDayConventionEnum.decoder, businessCenters: damlTypes.List(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    period: Daml_Finance_Interface_Types_Date_V3_RollConvention.PeriodEnum.encode(__typed__.period),
    periodMultiplier: damlTypes.Int.encode(__typed__.periodMultiplier),
    dayType: damlTypes.Optional(exports.DayTypeEnum).encode(__typed__.dayType),
    businessDayConvention: Daml_Finance_Interface_Types_Date_V3_Calendar.BusinessDayConventionEnum.encode(__typed__.businessDayConvention),
    businessCenters: damlTypes.List(damlTypes.Text).encode(__typed__.businessCenters),
  };
}
,
};



exports.DayTypeEnum = {
  Business: 'Business',
  Calendar: 'Calendar',
  keys: ['Business','Calendar',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.DayTypeEnum.Business), jtv.constant(exports.DayTypeEnum.Calendar)); }),
  encode: function (__typed__) { return __typed__; },
};

