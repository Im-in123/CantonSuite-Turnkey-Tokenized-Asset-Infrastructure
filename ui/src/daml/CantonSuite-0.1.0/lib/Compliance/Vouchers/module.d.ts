// Generated from Compliance/Vouchers.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type RevokeVoucher = {
  revocationReason: string;
};

export declare const RevokeVoucher:
  damlTypes.Serializable<RevokeVoucher> & {
  }
;


export declare type ConsumeVoucher = {
  tradeAmount: damlTypes.Numeric;
  tradeCid: string;
};

export declare const ConsumeVoucher:
  damlTypes.Serializable<ConsumeVoucher> & {
  }
;


export declare type VerifyKYC = {
  tradeAmount: damlTypes.Numeric;
  tradingParty: damlTypes.Party;
};

export declare const VerifyKYC:
  damlTypes.Serializable<VerifyKYC> & {
  }
;


export declare type ComplianceApprovalVoucher = {
  compliance: damlTypes.Party;
  approvedParty: damlTypes.Party;
  assetId: string;
  maxAmount: damlTypes.Numeric;
  expiresAt: damlTypes.Time;
  approvalReason: string;
  restrictions: string[];
};

export declare interface ComplianceApprovalVoucherInterface {
  VerifyKYC: damlTypes.Choice<ComplianceApprovalVoucher, VerifyKYC, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceApprovalVoucher, undefined>>;
  ConsumeVoucher: damlTypes.Choice<ComplianceApprovalVoucher, ConsumeVoucher, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceApprovalVoucher, undefined>>;
  Archive: damlTypes.Choice<ComplianceApprovalVoucher, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceApprovalVoucher, undefined>>;
  RevokeVoucher: damlTypes.Choice<ComplianceApprovalVoucher, RevokeVoucher, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceApprovalVoucher, undefined>>;
}
export declare const ComplianceApprovalVoucher:
  damlTypes.Template<ComplianceApprovalVoucher, undefined, '#CantonSuite:Compliance.Vouchers:ComplianceApprovalVoucher'> &
  damlTypes.ToInterface<ComplianceApprovalVoucher, never> &
  ComplianceApprovalVoucherInterface;

export declare namespace ComplianceApprovalVoucher {
  export type CreateEvent = damlLedger.CreateEvent<ComplianceApprovalVoucher, undefined, typeof ComplianceApprovalVoucher.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ComplianceApprovalVoucher, typeof ComplianceApprovalVoucher.templateId>
  export type Event = damlLedger.Event<ComplianceApprovalVoucher, undefined, typeof ComplianceApprovalVoucher.templateId>
  export type QueryResult = damlLedger.QueryResult<ComplianceApprovalVoucher, undefined, typeof ComplianceApprovalVoucher.templateId>
}


