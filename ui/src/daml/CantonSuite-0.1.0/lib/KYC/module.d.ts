// Generated from KYC.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Compliance_Vouchers from '../Compliance/Vouchers/module';
import * as Types from '../Types/module';

export declare type KYCStats = {
  totalKYC: damlTypes.Int;
  approved: damlTypes.Int;
  pending: damlTypes.Int;
  rejected: damlTypes.Int;
  approvalRate: damlTypes.Numeric;
  activeVouchers: damlTypes.Int;
  expiredVouchers: damlTypes.Int;
};

export declare const KYCStats:
  damlTypes.Serializable<KYCStats> & {
  }
;


export declare type GetKYCStats = {
};

export declare const GetKYCStats:
  damlTypes.Serializable<GetKYCStats> & {
  }
;


export declare type ComplianceDashboard = {
  compliance: damlTypes.Party;
  totalKYCApproved: damlTypes.Int;
  totalKYCPending: damlTypes.Int;
  totalKYCRejected: damlTypes.Int;
  activeVouchers: damlTypes.Int;
  expiredVouchers: damlTypes.Int;
};

export declare interface ComplianceDashboardInterface {
  Archive: damlTypes.Choice<ComplianceDashboard, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceDashboard, undefined>>;
  GetKYCStats: damlTypes.Choice<ComplianceDashboard, GetKYCStats, KYCStats, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceDashboard, undefined>>;
}
export declare const ComplianceDashboard:
  damlTypes.Template<ComplianceDashboard, undefined, '#CantonSuite:KYC:ComplianceDashboard'> &
  damlTypes.ToInterface<ComplianceDashboard, never> &
  ComplianceDashboardInterface;

export declare namespace ComplianceDashboard {
  export type CreateEvent = damlLedger.CreateEvent<ComplianceDashboard, undefined, typeof ComplianceDashboard.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ComplianceDashboard, typeof ComplianceDashboard.templateId>
  export type Event = damlLedger.Event<ComplianceDashboard, undefined, typeof ComplianceDashboard.templateId>
  export type QueryResult = damlLedger.QueryResult<ComplianceDashboard, undefined, typeof ComplianceDashboard.templateId>
}



export declare type IssueBatchVouchers = {
};

export declare const IssueBatchVouchers:
  damlTypes.Serializable<IssueBatchVouchers> & {
  }
;


export declare type BatchVoucherIssuance = {
  compliance: damlTypes.Party;
  approvedParties: damlTypes.Party[];
  defaultAmount: damlTypes.Numeric;
  defaultDuration: damlTypes.Int;
  reason: string;
};

export declare interface BatchVoucherIssuanceInterface {
  IssueBatchVouchers: damlTypes.Choice<BatchVoucherIssuance, IssueBatchVouchers, damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>[], undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BatchVoucherIssuance, undefined>>;
  Archive: damlTypes.Choice<BatchVoucherIssuance, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BatchVoucherIssuance, undefined>>;
}
export declare const BatchVoucherIssuance:
  damlTypes.Template<BatchVoucherIssuance, undefined, '#CantonSuite:KYC:BatchVoucherIssuance'> &
  damlTypes.ToInterface<BatchVoucherIssuance, never> &
  BatchVoucherIssuanceInterface;

export declare namespace BatchVoucherIssuance {
  export type CreateEvent = damlLedger.CreateEvent<BatchVoucherIssuance, undefined, typeof BatchVoucherIssuance.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<BatchVoucherIssuance, typeof BatchVoucherIssuance.templateId>
  export type Event = damlLedger.Event<BatchVoucherIssuance, undefined, typeof BatchVoucherIssuance.templateId>
  export type QueryResult = damlLedger.QueryResult<BatchVoucherIssuance, undefined, typeof BatchVoucherIssuance.templateId>
}



export declare type RejectVoucherRequest = {
  rejectionReason: string;
};

export declare const RejectVoucherRequest:
  damlTypes.Serializable<RejectVoucherRequest> & {
  }
;


export declare type ApproveVoucherRequest = {
  approvedAmount: damlTypes.Numeric;
  voucherDuration: damlTypes.Int;
};

export declare const ApproveVoucherRequest:
  damlTypes.Serializable<ApproveVoucherRequest> & {
  }
;


export declare type VoucherRequest = {
  requester: damlTypes.Party;
  compliance: damlTypes.Party;
  assetId: string;
  requestedAmount: damlTypes.Numeric;
  reason: string;
  requestedAt: damlTypes.Time;
};

export declare interface VoucherRequestInterface {
  ApproveVoucherRequest: damlTypes.Choice<VoucherRequest, ApproveVoucherRequest, damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<VoucherRequest, undefined>>;
  RejectVoucherRequest: damlTypes.Choice<VoucherRequest, RejectVoucherRequest, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<VoucherRequest, undefined>>;
  Archive: damlTypes.Choice<VoucherRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<VoucherRequest, undefined>>;
}
export declare const VoucherRequest:
  damlTypes.Template<VoucherRequest, undefined, '#CantonSuite:KYC:VoucherRequest'> &
  damlTypes.ToInterface<VoucherRequest, never> &
  VoucherRequestInterface;

export declare namespace VoucherRequest {
  export type CreateEvent = damlLedger.CreateEvent<VoucherRequest, undefined, typeof VoucherRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<VoucherRequest, typeof VoucherRequest.templateId>
  export type Event = damlLedger.Event<VoucherRequest, undefined, typeof VoucherRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<VoucherRequest, undefined, typeof VoucherRequest.templateId>
}



export declare type RevokeKYC = {
  revocationReason: string;
};

export declare const RevokeKYC:
  damlTypes.Serializable<RevokeKYC> & {
  }
;


export declare type UpdateTradingLimit = {
  newMaxAmount: damlTypes.Numeric;
};

export declare const UpdateTradingLimit:
  damlTypes.Serializable<UpdateTradingLimit> & {
  }
;


export declare type RenewVoucher = {
};

export declare const RenewVoucher:
  damlTypes.Serializable<RenewVoucher> & {
  }
;


export declare type KYCWithAutoRenewal = {
  buyer: damlTypes.Party;
  compliance: damlTypes.Party;
  status: Types.KYCStatus;
  maxTradeAmount: damlTypes.Numeric;
  autoRenewVouchers: boolean;
  renewalPeriodDays: damlTypes.Int;
};

export declare interface KYCWithAutoRenewalInterface {
  RenewVoucher: damlTypes.Choice<KYCWithAutoRenewal, RenewVoucher, damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<KYCWithAutoRenewal, undefined>>;
  UpdateTradingLimit: damlTypes.Choice<KYCWithAutoRenewal, UpdateTradingLimit, damlTypes.ContractId<KYCWithAutoRenewal>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<KYCWithAutoRenewal, undefined>>;
  RevokeKYC: damlTypes.Choice<KYCWithAutoRenewal, RevokeKYC, damlTypes.ContractId<KYCWithAutoRenewal>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<KYCWithAutoRenewal, undefined>>;
  Archive: damlTypes.Choice<KYCWithAutoRenewal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<KYCWithAutoRenewal, undefined>>;
}
export declare const KYCWithAutoRenewal:
  damlTypes.Template<KYCWithAutoRenewal, undefined, '#CantonSuite:KYC:KYCWithAutoRenewal'> &
  damlTypes.ToInterface<KYCWithAutoRenewal, never> &
  KYCWithAutoRenewalInterface;

export declare namespace KYCWithAutoRenewal {
  export type CreateEvent = damlLedger.CreateEvent<KYCWithAutoRenewal, undefined, typeof KYCWithAutoRenewal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<KYCWithAutoRenewal, typeof KYCWithAutoRenewal.templateId>
  export type Event = damlLedger.Event<KYCWithAutoRenewal, undefined, typeof KYCWithAutoRenewal.templateId>
  export type QueryResult = damlLedger.QueryResult<KYCWithAutoRenewal, undefined, typeof KYCWithAutoRenewal.templateId>
}



export declare type RequestReview = {
};

export declare const RequestReview:
  damlTypes.Serializable<RequestReview> & {
  }
;


export declare type Reject = {
  rejectionReason: string;
};

export declare const Reject:
  damlTypes.Serializable<Reject> & {
  }
;


export declare type ApproveWithRestrictions = {
  approvalReason: string;
  maxTradeAmount: damlTypes.Numeric;
  voucherDuration: damlTypes.Int;
  assetRestrictions: string[];
  otherRestrictions: string[];
};

export declare const ApproveWithRestrictions:
  damlTypes.Serializable<ApproveWithRestrictions> & {
  }
;


export declare type Approve = {
  approvalReason: string;
  maxTradeAmount: damlTypes.Numeric;
  voucherDuration: damlTypes.Int;
};

export declare const Approve:
  damlTypes.Serializable<Approve> & {
  }
;


export declare type KYC = {
  buyer: damlTypes.Party;
  compliance: damlTypes.Party;
  status: Types.KYCStatus;
};

export declare interface KYCInterface {
  Approve: damlTypes.Choice<KYC, Approve, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<KYC>, damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<KYC, undefined>>;
  ApproveWithRestrictions: damlTypes.Choice<KYC, ApproveWithRestrictions, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<KYC>, damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<KYC, undefined>>;
  Reject: damlTypes.Choice<KYC, Reject, damlTypes.ContractId<KYC>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<KYC, undefined>>;
  RequestReview: damlTypes.Choice<KYC, RequestReview, damlTypes.ContractId<KYC>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<KYC, undefined>>;
  Archive: damlTypes.Choice<KYC, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<KYC, undefined>>;
}
export declare const KYC:
  damlTypes.Template<KYC, undefined, '#CantonSuite:KYC:KYC'> &
  damlTypes.ToInterface<KYC, never> &
  KYCInterface;

export declare namespace KYC {
  export type CreateEvent = damlLedger.CreateEvent<KYC, undefined, typeof KYC.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<KYC, typeof KYC.templateId>
  export type Event = damlLedger.Event<KYC, undefined, typeof KYC.templateId>
  export type QueryResult = damlLedger.QueryResult<KYC, undefined, typeof KYC.templateId>
}


