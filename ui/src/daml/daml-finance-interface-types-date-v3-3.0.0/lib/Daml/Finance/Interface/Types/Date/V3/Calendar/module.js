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

var pkgbfcd37bd6b84768e86e432f5f6c33e25d9e7724a9d42e33875ff74f6348e733f = require('@daml.js/bfcd37bd6b84768e86e432f5f6c33e25d9e7724a9d42e33875ff74f6348e733f');


exports.BusinessDayAdjustment = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({calendarIds: damlTypes.List(damlTypes.Text).decoder, convention: exports.BusinessDayConventionEnum.decoder, }); }),
  encode: function (__typed__) {
  return {
    calendarIds: damlTypes.List(damlTypes.Text).encode(__typed__.calendarIds),
    convention: exports.BusinessDayConventionEnum.encode(__typed__.convention),
  };
}
,
};



exports.BusinessDayConventionEnum = {
  Following: 'Following',
  ModifiedFollowing: 'ModifiedFollowing',
  ModifiedPreceding: 'ModifiedPreceding',
  NoAdjustment: 'NoAdjustment',
  Preceding: 'Preceding',
  keys: ['Following','ModifiedFollowing','ModifiedPreceding','NoAdjustment','Preceding',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.BusinessDayConventionEnum.Following), jtv.constant(exports.BusinessDayConventionEnum.ModifiedFollowing), jtv.constant(exports.BusinessDayConventionEnum.ModifiedPreceding), jtv.constant(exports.BusinessDayConventionEnum.NoAdjustment), jtv.constant(exports.BusinessDayConventionEnum.Preceding)); }),
  encode: function (__typed__) { return __typed__; },
};



exports.HolidayCalendarData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({id: damlTypes.Text.decoder, weekend: damlTypes.List(pkgbfcd37bd6b84768e86e432f5f6c33e25d9e7724a9d42e33875ff74f6348e733f.DA.Date.Types.DayOfWeek).decoder, holidays: damlTypes.List(damlTypes.Date).decoder, }); }),
  encode: function (__typed__) {
  return {
    id: damlTypes.Text.encode(__typed__.id),
    weekend: damlTypes.List(pkgbfcd37bd6b84768e86e432f5f6c33e25d9e7724a9d42e33875ff74f6348e733f.DA.Date.Types.DayOfWeek).encode(__typed__.weekend),
    holidays: damlTypes.List(damlTypes.Date).encode(__typed__.holidays),
  };
}
,
};

