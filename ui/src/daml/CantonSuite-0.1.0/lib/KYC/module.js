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

var Compliance_Vouchers = require('../Compliance/Vouchers/module');
var Types = require('../Types/module');


exports.KYCStats = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({totalKYC: damlTypes.Int.decoder, approved: damlTypes.Int.decoder, pending: damlTypes.Int.decoder, rejected: damlTypes.Int.decoder, approvalRate: damlTypes.Numeric(10).decoder, activeVouchers: damlTypes.Int.decoder, expiredVouchers: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    totalKYC: damlTypes.Int.encode(__typed__.totalKYC),
    approved: damlTypes.Int.encode(__typed__.approved),
    pending: damlTypes.Int.encode(__typed__.pending),
    rejected: damlTypes.Int.encode(__typed__.rejected),
    approvalRate: damlTypes.Numeric(10).encode(__typed__.approvalRate),
    activeVouchers: damlTypes.Int.encode(__typed__.activeVouchers),
    expiredVouchers: damlTypes.Int.encode(__typed__.expiredVouchers),
  };
}
,
};



exports.GetKYCStats = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ComplianceDashboard = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:KYC:ComplianceDashboard',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({compliance: damlTypes.Party.decoder, totalKYCApproved: damlTypes.Int.decoder, totalKYCPending: damlTypes.Int.decoder, totalKYCRejected: damlTypes.Int.decoder, activeVouchers: damlTypes.Int.decoder, expiredVouchers: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    compliance: damlTypes.Party.encode(__typed__.compliance),
    totalKYCApproved: damlTypes.Int.encode(__typed__.totalKYCApproved),
    totalKYCPending: damlTypes.Int.encode(__typed__.totalKYCPending),
    totalKYCRejected: damlTypes.Int.encode(__typed__.totalKYCRejected),
    activeVouchers: damlTypes.Int.encode(__typed__.activeVouchers),
    expiredVouchers: damlTypes.Int.encode(__typed__.expiredVouchers),
  };
}
,
  Archive: {
    template: function () { return exports.ComplianceDashboard; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  GetKYCStats: {
    template: function () { return exports.ComplianceDashboard; },
    choiceName: 'GetKYCStats',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetKYCStats.decoder; }),
    argumentEncode: function (__typed__) { return exports.GetKYCStats.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.KYCStats.decoder; }),
    resultEncode: function (__typed__) { return exports.KYCStats.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ComplianceDashboard, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.IssueBatchVouchers = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.BatchVoucherIssuance = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:KYC:BatchVoucherIssuance',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({compliance: damlTypes.Party.decoder, approvedParties: damlTypes.List(damlTypes.Party).decoder, defaultAmount: damlTypes.Numeric(10).decoder, defaultDuration: damlTypes.Int.decoder, reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    compliance: damlTypes.Party.encode(__typed__.compliance),
    approvedParties: damlTypes.List(damlTypes.Party).encode(__typed__.approvedParties),
    defaultAmount: damlTypes.Numeric(10).encode(__typed__.defaultAmount),
    defaultDuration: damlTypes.Int.encode(__typed__.defaultDuration),
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
  IssueBatchVouchers: {
    template: function () { return exports.BatchVoucherIssuance; },
    choiceName: 'IssueBatchVouchers',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.IssueBatchVouchers.decoder; }),
    argumentEncode: function (__typed__) { return exports.IssueBatchVouchers.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.List(damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher)).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.List(damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.BatchVoucherIssuance; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.BatchVoucherIssuance, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.RejectVoucherRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({rejectionReason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    rejectionReason: damlTypes.Text.encode(__typed__.rejectionReason),
  };
}
,
};



exports.ApproveVoucherRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({approvedAmount: damlTypes.Numeric(10).decoder, voucherDuration: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    approvedAmount: damlTypes.Numeric(10).encode(__typed__.approvedAmount),
    voucherDuration: damlTypes.Int.encode(__typed__.voucherDuration),
  };
}
,
};



exports.VoucherRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:KYC:VoucherRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({requester: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, requestedAmount: damlTypes.Numeric(10).decoder, reason: damlTypes.Text.decoder, requestedAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    requester: damlTypes.Party.encode(__typed__.requester),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    requestedAmount: damlTypes.Numeric(10).encode(__typed__.requestedAmount),
    reason: damlTypes.Text.encode(__typed__.reason),
    requestedAt: damlTypes.Time.encode(__typed__.requestedAt),
  };
}
,
  ApproveVoucherRequest: {
    template: function () { return exports.VoucherRequest; },
    choiceName: 'ApproveVoucherRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApproveVoucherRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApproveVoucherRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).encode(__typed__); },
  },
  RejectVoucherRequest: {
    template: function () { return exports.VoucherRequest; },
    choiceName: 'RejectVoucherRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectVoucherRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectVoucherRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.VoucherRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.VoucherRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.RevokeKYC = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({revocationReason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    revocationReason: damlTypes.Text.encode(__typed__.revocationReason),
  };
}
,
};



exports.UpdateTradingLimit = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newMaxAmount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    newMaxAmount: damlTypes.Numeric(10).encode(__typed__.newMaxAmount),
  };
}
,
};



exports.RenewVoucher = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.KYCWithAutoRenewal = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:KYC:KYCWithAutoRenewal',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, status: Types.KYCStatus.decoder, maxTradeAmount: damlTypes.Numeric(10).decoder, autoRenewVouchers: damlTypes.Bool.decoder, renewalPeriodDays: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    status: Types.KYCStatus.encode(__typed__.status),
    maxTradeAmount: damlTypes.Numeric(10).encode(__typed__.maxTradeAmount),
    autoRenewVouchers: damlTypes.Bool.encode(__typed__.autoRenewVouchers),
    renewalPeriodDays: damlTypes.Int.encode(__typed__.renewalPeriodDays),
  };
}
,
  RenewVoucher: {
    template: function () { return exports.KYCWithAutoRenewal; },
    choiceName: 'RenewVoucher',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RenewVoucher.decoder; }),
    argumentEncode: function (__typed__) { return exports.RenewVoucher.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher).encode(__typed__); },
  },
  UpdateTradingLimit: {
    template: function () { return exports.KYCWithAutoRenewal; },
    choiceName: 'UpdateTradingLimit',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdateTradingLimit.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdateTradingLimit.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.KYCWithAutoRenewal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.KYCWithAutoRenewal).encode(__typed__); },
  },
  RevokeKYC: {
    template: function () { return exports.KYCWithAutoRenewal; },
    choiceName: 'RevokeKYC',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RevokeKYC.decoder; }),
    argumentEncode: function (__typed__) { return exports.RevokeKYC.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.KYCWithAutoRenewal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.KYCWithAutoRenewal).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.KYCWithAutoRenewal; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.KYCWithAutoRenewal, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.RequestReview = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Reject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({rejectionReason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    rejectionReason: damlTypes.Text.encode(__typed__.rejectionReason),
  };
}
,
};



exports.ApproveWithRestrictions = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({approvalReason: damlTypes.Text.decoder, maxTradeAmount: damlTypes.Numeric(10).decoder, voucherDuration: damlTypes.Int.decoder, assetRestrictions: damlTypes.List(damlTypes.Text).decoder, otherRestrictions: damlTypes.List(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    approvalReason: damlTypes.Text.encode(__typed__.approvalReason),
    maxTradeAmount: damlTypes.Numeric(10).encode(__typed__.maxTradeAmount),
    voucherDuration: damlTypes.Int.encode(__typed__.voucherDuration),
    assetRestrictions: damlTypes.List(damlTypes.Text).encode(__typed__.assetRestrictions),
    otherRestrictions: damlTypes.List(damlTypes.Text).encode(__typed__.otherRestrictions),
  };
}
,
};



exports.Approve = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({approvalReason: damlTypes.Text.decoder, maxTradeAmount: damlTypes.Numeric(10).decoder, voucherDuration: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    approvalReason: damlTypes.Text.encode(__typed__.approvalReason),
    maxTradeAmount: damlTypes.Numeric(10).encode(__typed__.maxTradeAmount),
    voucherDuration: damlTypes.Int.encode(__typed__.voucherDuration),
  };
}
,
};



exports.KYC = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:KYC:KYC',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, status: Types.KYCStatus.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    status: Types.KYCStatus.encode(__typed__.status),
  };
}
,
  Approve: {
    template: function () { return exports.KYC; },
    choiceName: 'Approve',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Approve.decoder; }),
    argumentEncode: function (__typed__) { return exports.Approve.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.KYC), damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.KYC), damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher)).encode(__typed__); },
  },
  ApproveWithRestrictions: {
    template: function () { return exports.KYC; },
    choiceName: 'ApproveWithRestrictions',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApproveWithRestrictions.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApproveWithRestrictions.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.KYC), damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.KYC), damlTypes.ContractId(Compliance_Vouchers.ComplianceApprovalVoucher)).encode(__typed__); },
  },
  Reject: {
    template: function () { return exports.KYC; },
    choiceName: 'Reject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Reject.decoder; }),
    argumentEncode: function (__typed__) { return exports.Reject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.KYC).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.KYC).encode(__typed__); },
  },
  RequestReview: {
    template: function () { return exports.KYC; },
    choiceName: 'RequestReview',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestReview.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestReview.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.KYC).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.KYC).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.KYC; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.KYC, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

