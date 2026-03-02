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


exports.SchedulePeriod = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({adjustedEndDate: damlTypes.Date.decoder, adjustedStartDate: damlTypes.Date.decoder, unadjustedEndDate: damlTypes.Date.decoder, unadjustedStartDate: damlTypes.Date.decoder, stubType: damlTypes.Optional(exports.StubPeriodTypeEnum).decoder, }); }),
  encode: function (__typed__) {
  return {
    adjustedEndDate: damlTypes.Date.encode(__typed__.adjustedEndDate),
    adjustedStartDate: damlTypes.Date.encode(__typed__.adjustedStartDate),
    unadjustedEndDate: damlTypes.Date.encode(__typed__.unadjustedEndDate),
    unadjustedStartDate: damlTypes.Date.encode(__typed__.unadjustedStartDate),
    stubType: damlTypes.Optional(exports.StubPeriodTypeEnum).encode(__typed__.stubType),
  };
}
,
};



exports.PeriodicSchedule = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({effectiveDate: damlTypes.Date.decoder, terminationDate: damlTypes.Date.decoder, firstRegularPeriodStartDate: damlTypes.Optional(damlTypes.Date).decoder, lastRegularPeriodEndDate: damlTypes.Optional(damlTypes.Date).decoder, frequency: exports.ScheduleFrequency.decoder, businessDayAdjustment: Daml_Finance_Interface_Types_Date_V3_Calendar.BusinessDayAdjustment.decoder, effectiveDateBusinessDayAdjustment: damlTypes.Optional(Daml_Finance_Interface_Types_Date_V3_Calendar.BusinessDayAdjustment).decoder, terminationDateBusinessDayAdjustment: damlTypes.Optional(Daml_Finance_Interface_Types_Date_V3_Calendar.BusinessDayAdjustment).decoder, stubPeriodType: damlTypes.Optional(exports.StubPeriodTypeEnum).decoder, }); }),
  encode: function (__typed__) {
  return {
    effectiveDate: damlTypes.Date.encode(__typed__.effectiveDate),
    terminationDate: damlTypes.Date.encode(__typed__.terminationDate),
    firstRegularPeriodStartDate: damlTypes.Optional(damlTypes.Date).encode(__typed__.firstRegularPeriodStartDate),
    lastRegularPeriodEndDate: damlTypes.Optional(damlTypes.Date).encode(__typed__.lastRegularPeriodEndDate),
    frequency: exports.ScheduleFrequency.encode(__typed__.frequency),
    businessDayAdjustment: Daml_Finance_Interface_Types_Date_V3_Calendar.BusinessDayAdjustment.encode(__typed__.businessDayAdjustment),
    effectiveDateBusinessDayAdjustment: damlTypes.Optional(Daml_Finance_Interface_Types_Date_V3_Calendar.BusinessDayAdjustment).encode(__typed__.effectiveDateBusinessDayAdjustment),
    terminationDateBusinessDayAdjustment: damlTypes.Optional(Daml_Finance_Interface_Types_Date_V3_Calendar.BusinessDayAdjustment).encode(__typed__.terminationDateBusinessDayAdjustment),
    stubPeriodType: damlTypes.Optional(exports.StubPeriodTypeEnum).encode(__typed__.stubPeriodType),
  };
}
,
};



exports.ScheduleFrequency = {
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.object({tag: jtv.constant('Periodic'), value: exports.Frequency.decoder, }), jtv.object({tag: jtv.constant('SinglePeriod'), value: damlTypes.Unit.decoder, })); }),
  encode: function (__typed__) {
  switch(__typed__.tag) {
    case 'Periodic': return {tag: __typed__.tag, value: exports.Frequency.encode(__typed__.value)};
    case 'SinglePeriod': return {tag: __typed__.tag, value: damlTypes.Unit.encode(__typed__.value)};
    default: throw 'unrecognized type tag: ' + __typed__.tag + ' while serializing a value of type ScheduleFrequency';
  }
}
,
};



exports.Frequency = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({period: Daml_Finance_Interface_Types_Date_V3_RollConvention.Period.decoder, rollConvention: Daml_Finance_Interface_Types_Date_V3_RollConvention.RollConventionEnum.decoder, }); }),
  encode: function (__typed__) {
  return {
    period: Daml_Finance_Interface_Types_Date_V3_RollConvention.Period.encode(__typed__.period),
    rollConvention: Daml_Finance_Interface_Types_Date_V3_RollConvention.RollConventionEnum.encode(__typed__.rollConvention),
  };
}
,
};



exports.StubPeriodTypeEnum = {
  LongFinal: 'LongFinal',
  LongInitial: 'LongInitial',
  ShortFinal: 'ShortFinal',
  ShortInitial: 'ShortInitial',
  keys: ['LongFinal','LongInitial','ShortFinal','ShortInitial',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.StubPeriodTypeEnum.LongFinal), jtv.constant(exports.StubPeriodTypeEnum.LongInitial), jtv.constant(exports.StubPeriodTypeEnum.ShortFinal), jtv.constant(exports.StubPeriodTypeEnum.ShortInitial)); }),
  encode: function (__typed__) { return __typed__; },
};

