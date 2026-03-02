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


exports.ComplianceAuditTrail = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Regulator:ComplianceAuditTrail',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({regulator: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, actionType: damlTypes.Text.decoder, affectedPartyHash: damlTypes.Text.decoder, assetId: damlTypes.Optional(damlTypes.Text).decoder, actionReason: damlTypes.Text.decoder, officerIdHash: damlTypes.Text.decoder, actionTime: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    regulator: damlTypes.Party.encode(__typed__.regulator),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    actionType: damlTypes.Text.encode(__typed__.actionType),
    affectedPartyHash: damlTypes.Text.encode(__typed__.affectedPartyHash),
    assetId: damlTypes.Optional(damlTypes.Text).encode(__typed__.assetId),
    actionReason: damlTypes.Text.encode(__typed__.actionReason),
    officerIdHash: damlTypes.Text.encode(__typed__.officerIdHash),
    actionTime: damlTypes.Time.encode(__typed__.actionTime),
  };
}
,
  Archive: {
    template: function () { return exports.ComplianceAuditTrail; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ComplianceAuditTrail, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.AMLAlert = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Regulator:AMLAlert',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({regulator: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, alertId: damlTypes.Text.decoder, suspiciousPartyHash: damlTypes.Text.decoder, activityPattern: damlTypes.Text.decoder, totalAmount: damlTypes.Numeric(10).decoder, transactionCount: damlTypes.Int.decoder, timeWindow: damlTypes.Text.decoder, detectedAt: damlTypes.Time.decoder, riskScore: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    regulator: damlTypes.Party.encode(__typed__.regulator),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    alertId: damlTypes.Text.encode(__typed__.alertId),
    suspiciousPartyHash: damlTypes.Text.encode(__typed__.suspiciousPartyHash),
    activityPattern: damlTypes.Text.encode(__typed__.activityPattern),
    totalAmount: damlTypes.Numeric(10).encode(__typed__.totalAmount),
    transactionCount: damlTypes.Int.encode(__typed__.transactionCount),
    timeWindow: damlTypes.Text.encode(__typed__.timeWindow),
    detectedAt: damlTypes.Time.encode(__typed__.detectedAt),
    riskScore: damlTypes.Numeric(10).encode(__typed__.riskScore),
  };
}
,
  Archive: {
    template: function () { return exports.AMLAlert; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.AMLAlert, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.RiskThresholdBreach = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Regulator:RiskThresholdBreach',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({regulator: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, breachType: damlTypes.Text.decoder, assetId: damlTypes.Text.decoder, thresholdValue: damlTypes.Numeric(10).decoder, actualValue: damlTypes.Numeric(10).decoder, affectedPartyHash: damlTypes.Text.decoder, breachTime: damlTypes.Time.decoder, severity: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    regulator: damlTypes.Party.encode(__typed__.regulator),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    breachType: damlTypes.Text.encode(__typed__.breachType),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    thresholdValue: damlTypes.Numeric(10).encode(__typed__.thresholdValue),
    actualValue: damlTypes.Numeric(10).encode(__typed__.actualValue),
    affectedPartyHash: damlTypes.Text.encode(__typed__.affectedPartyHash),
    breachTime: damlTypes.Time.encode(__typed__.breachTime),
    severity: damlTypes.Text.encode(__typed__.severity),
  };
}
,
  Archive: {
    template: function () { return exports.RiskThresholdBreach; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.RiskThresholdBreach, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.SolvencyAuditView = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Regulator:SolvencyAuditView',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({regulator: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, totalMinted: damlTypes.Numeric(10).decoder, totalBurned: damlTypes.Numeric(10).decoder, circulatingSupply: damlTypes.Numeric(10).decoder, reportDate: damlTypes.Time.decoder, userCountHash: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    regulator: damlTypes.Party.encode(__typed__.regulator),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    totalMinted: damlTypes.Numeric(10).encode(__typed__.totalMinted),
    totalBurned: damlTypes.Numeric(10).encode(__typed__.totalBurned),
    circulatingSupply: damlTypes.Numeric(10).encode(__typed__.circulatingSupply),
    reportDate: damlTypes.Time.encode(__typed__.reportDate),
    userCountHash: damlTypes.Text.encode(__typed__.userCountHash),
  };
}
,
  Archive: {
    template: function () { return exports.SolvencyAuditView; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.SolvencyAuditView, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.RegulatorView = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Regulator:RegulatorView',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({regulator: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, buyerHash: damlTypes.Text.decoder, sellerHash: damlTypes.Text.decoder, issuer: damlTypes.Party.decoder, executedAt: damlTypes.Time.decoder, eventType: damlTypes.Text.decoder, transactionHash: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    regulator: damlTypes.Party.encode(__typed__.regulator),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    buyerHash: damlTypes.Text.encode(__typed__.buyerHash),
    sellerHash: damlTypes.Text.encode(__typed__.sellerHash),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    executedAt: damlTypes.Time.encode(__typed__.executedAt),
    eventType: damlTypes.Text.encode(__typed__.eventType),
    transactionHash: damlTypes.Text.encode(__typed__.transactionHash),
  };
}
,
  Archive: {
    template: function () { return exports.RegulatorView; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.RegulatorView, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

