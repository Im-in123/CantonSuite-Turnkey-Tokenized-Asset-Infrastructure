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

var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');


exports.CreateAnnouncement = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({totalUnitsOutstanding: damlTypes.Numeric(10).decoder, uniqueAnnouncementId: damlTypes.Text.decoder, holdersAtSnapshot: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    totalUnitsOutstanding: damlTypes.Numeric(10).encode(__typed__.totalUnitsOutstanding),
    uniqueAnnouncementId: damlTypes.Text.encode(__typed__.uniqueAnnouncementId),
    holdersAtSnapshot: damlTypes.List(damlTypes.Party).encode(__typed__.holdersAtSnapshot),
  };
}
,
};



exports.DividendAnnouncementWorkflow = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Distribution.ClaimBased:DividendAnnouncementWorkflow',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, regulator: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, dividendLabel: damlTypes.Text.decoder, perUnitAmount: damlTypes.Numeric(10).decoder, expirationDays: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    regulator: damlTypes.Party.encode(__typed__.regulator),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    dividendLabel: damlTypes.Text.encode(__typed__.dividendLabel),
    perUnitAmount: damlTypes.Numeric(10).encode(__typed__.perUnitAmount),
    expirationDays: damlTypes.Int.encode(__typed__.expirationDays),
  };
}
,
  Archive: {
    template: function () { return exports.DividendAnnouncementWorkflow; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CreateAnnouncement: {
    template: function () { return exports.DividendAnnouncementWorkflow; },
    choiceName: 'CreateAnnouncement',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateAnnouncement.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateAnnouncement.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.DividendAnnouncement).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.DividendAnnouncement).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DividendAnnouncementWorkflow, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.DividendRegulatorView = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Distribution.ClaimBased:DividendRegulatorView',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({regulator: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, dividendLabel: damlTypes.Text.decoder, totalAmount: damlTypes.Numeric(10).decoder, recipientHash: damlTypes.Text.decoder, distributedAt: damlTypes.Time.decoder, claimExpiresAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    regulator: damlTypes.Party.encode(__typed__.regulator),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    dividendLabel: damlTypes.Text.encode(__typed__.dividendLabel),
    totalAmount: damlTypes.Numeric(10).encode(__typed__.totalAmount),
    recipientHash: damlTypes.Text.encode(__typed__.recipientHash),
    distributedAt: damlTypes.Time.encode(__typed__.distributedAt),
    claimExpiresAt: damlTypes.Time.encode(__typed__.claimExpiresAt),
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


damlTypes.registerTemplate(exports.DividendRegulatorView, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CreateSnapshot = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.holdingCid),
  };
}
,
};



exports.HoldingSnapshot = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Distribution.ClaimBased:HoldingSnapshot',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, snapshotTime: damlTypes.Time.decoder, holder: damlTypes.Party.decoder, quantity: damlTypes.Numeric(10).decoder, holdingHash: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    snapshotTime: damlTypes.Time.encode(__typed__.snapshotTime),
    holder: damlTypes.Party.encode(__typed__.holder),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    holdingHash: damlTypes.Text.encode(__typed__.holdingHash),
  };
}
,
  CreateSnapshot: {
    template: function () { return exports.HoldingSnapshot; },
    choiceName: 'CreateSnapshot',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateSnapshot.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateSnapshot.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.HoldingSnapshot).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.HoldingSnapshot).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.HoldingSnapshot; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.HoldingSnapshot, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.RedeemClaim = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.DividendClaim = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Distribution.ClaimBased:DividendClaim',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, holder: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, dividendLabel: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, holdingSnapshot: damlTypes.Numeric(10).decoder, claimedAt: damlTypes.Time.decoder, proofOfOwnership: damlTypes.Text.decoder, announcementId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    holder: damlTypes.Party.encode(__typed__.holder),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    dividendLabel: damlTypes.Text.encode(__typed__.dividendLabel),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    holdingSnapshot: damlTypes.Numeric(10).encode(__typed__.holdingSnapshot),
    claimedAt: damlTypes.Time.encode(__typed__.claimedAt),
    proofOfOwnership: damlTypes.Text.encode(__typed__.proofOfOwnership),
    announcementId: damlTypes.Text.encode(__typed__.announcementId),
  };
}
,
  RedeemClaim: {
    template: function () { return exports.DividendClaim; },
    choiceName: 'RedeemClaim',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RedeemClaim.decoder; }),
    argumentEncode: function (__typed__) { return exports.RedeemClaim.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.DividendClaim; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DividendClaim, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.DividendClaimRecord = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Distribution.ClaimBased:DividendClaimRecord',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Party).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Party).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({announcementId: damlTypes.Text.decoder, holder: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, dividendLabel: damlTypes.Text.decoder, holdingSnapshot: damlTypes.Numeric(10).decoder, holderShare: damlTypes.Numeric(10).decoder, proofOfOwnership: damlTypes.Text.decoder, claimedAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    announcementId: damlTypes.Text.encode(__typed__.announcementId),
    holder: damlTypes.Party.encode(__typed__.holder),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    dividendLabel: damlTypes.Text.encode(__typed__.dividendLabel),
    holdingSnapshot: damlTypes.Numeric(10).encode(__typed__.holdingSnapshot),
    holderShare: damlTypes.Numeric(10).encode(__typed__.holderShare),
    proofOfOwnership: damlTypes.Text.encode(__typed__.proofOfOwnership),
    claimedAt: damlTypes.Time.encode(__typed__.claimedAt),
  };
}
,
  Archive: {
    template: function () { return exports.DividendClaimRecord; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DividendClaimRecord, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.DividendAnnouncementInfo = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({assetId: damlTypes.Text.decoder, dividendLabel: damlTypes.Text.decoder, perUnitAmount: damlTypes.Numeric(10).decoder, snapshotTime: damlTypes.Time.decoder, expirationTime: damlTypes.Time.decoder, totalDividendPool: damlTypes.Numeric(10).decoder, isExpired: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    assetId: damlTypes.Text.encode(__typed__.assetId),
    dividendLabel: damlTypes.Text.encode(__typed__.dividendLabel),
    perUnitAmount: damlTypes.Numeric(10).encode(__typed__.perUnitAmount),
    snapshotTime: damlTypes.Time.encode(__typed__.snapshotTime),
    expirationTime: damlTypes.Time.encode(__typed__.expirationTime),
    totalDividendPool: damlTypes.Numeric(10).encode(__typed__.totalDividendPool),
    isExpired: damlTypes.Bool.encode(__typed__.isExpired),
  };
}
,
};



exports.GetAnnouncementInfo = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.CloseAnnouncement = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ClaimDividend = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({holder: damlTypes.Party.decoder, holdingSnapshot: damlTypes.Numeric(10).decoder, proofOfOwnership: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    holder: damlTypes.Party.encode(__typed__.holder),
    holdingSnapshot: damlTypes.Numeric(10).encode(__typed__.holdingSnapshot),
    proofOfOwnership: damlTypes.Text.encode(__typed__.proofOfOwnership),
  };
}
,
};



exports.DividendAnnouncement = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Distribution.ClaimBased:DividendAnnouncement',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, regulator: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, dividendLabel: damlTypes.Text.decoder, perUnitAmount: damlTypes.Numeric(10).decoder, snapshotTime: damlTypes.Time.decoder, expirationTime: damlTypes.Time.decoder, totalUnitsAtSnapshot: damlTypes.Numeric(10).decoder, totalDividendPool: damlTypes.Numeric(10).decoder, announcementId: damlTypes.Text.decoder, eligibleHolders: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    regulator: damlTypes.Party.encode(__typed__.regulator),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    dividendLabel: damlTypes.Text.encode(__typed__.dividendLabel),
    perUnitAmount: damlTypes.Numeric(10).encode(__typed__.perUnitAmount),
    snapshotTime: damlTypes.Time.encode(__typed__.snapshotTime),
    expirationTime: damlTypes.Time.encode(__typed__.expirationTime),
    totalUnitsAtSnapshot: damlTypes.Numeric(10).encode(__typed__.totalUnitsAtSnapshot),
    totalDividendPool: damlTypes.Numeric(10).encode(__typed__.totalDividendPool),
    announcementId: damlTypes.Text.encode(__typed__.announcementId),
    eligibleHolders: damlTypes.List(damlTypes.Party).encode(__typed__.eligibleHolders),
  };
}
,
  ClaimDividend: {
    template: function () { return exports.DividendAnnouncement; },
    choiceName: 'ClaimDividend',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ClaimDividend.decoder; }),
    argumentEncode: function (__typed__) { return exports.ClaimDividend.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.DividendClaim), damlTypes.ContractId(exports.DividendClaimRecord)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.DividendClaim), damlTypes.ContractId(exports.DividendClaimRecord)).encode(__typed__); },
  },
  CloseAnnouncement: {
    template: function () { return exports.DividendAnnouncement; },
    choiceName: 'CloseAnnouncement',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CloseAnnouncement.decoder; }),
    argumentEncode: function (__typed__) { return exports.CloseAnnouncement.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  GetAnnouncementInfo: {
    template: function () { return exports.DividendAnnouncement; },
    choiceName: 'GetAnnouncementInfo',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetAnnouncementInfo.decoder; }),
    argumentEncode: function (__typed__) { return exports.GetAnnouncementInfo.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.DividendAnnouncementInfo.decoder; }),
    resultEncode: function (__typed__) { return exports.DividendAnnouncementInfo.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.DividendAnnouncement; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DividendAnnouncement, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

