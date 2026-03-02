// Generated from Trade.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as CantonCoin_MiningRoundSync from '../CantonCoin/MiningRoundSync/module';
import * as Compliance_AtomicAudit from '../Compliance/AtomicAudit/module';
import * as Compliance_Vouchers from '../Compliance/Vouchers/module';
import * as Finance_Instruments from '../Finance/Instruments/module';
import * as TokenStandard_DVP_Settlement from '../TokenStandard/DVP_Settlement/module';
import * as TokenStandard_Interfaces from '../TokenStandard/Interfaces/module';

export declare type ExpireTrade = {
};

export declare const ExpireTrade:
  damlTypes.Serializable<ExpireTrade> & {
  }
;


export declare type ExecuteAtomicSettlement = {
  buyerPaymentCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  sellerAssetCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  miningRoundCid: damlTypes.Optional<damlTypes.ContractId<CantonCoin_MiningRoundSync.MiningRoundReference>>;
};

export declare const ExecuteAtomicSettlement:
  damlTypes.Serializable<ExecuteAtomicSettlement> & {
  }
;


export declare type CreateDVPWithSyncCheck = {
  paymentAssetId: string;
  buyerCurrentSync: string;
  sellerCurrentSync: string;
  targetSync: string;
};

export declare const CreateDVPWithSyncCheck:
  damlTypes.Serializable<CreateDVPWithSyncCheck> & {
  }
;


export declare type CreateDVPSettlement = {
  paymentAssetId: string;
};

export declare const CreateDVPSettlement:
  damlTypes.Serializable<CreateDVPSettlement> & {
  }
;


export declare type ApprovedTrade = {
  buyer: damlTypes.Party;
  seller: damlTypes.Party;
  assetIssuer: damlTypes.Party;
  assetId: string;
  instrumentCid: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  isPrimary: boolean;
  complianceParty: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  createdAt: damlTypes.Time;
  expiresAt: damlTypes.Time;
  approvedAt: damlTypes.Time;
  complianceNotes: string;
  buyerVoucherCid: damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>;
  sellerVoucherCid: damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>;
};

export declare interface ApprovedTradeInterface {
  CreateDVPSettlement: damlTypes.Choice<ApprovedTrade, CreateDVPSettlement, damlTypes.ContractId<TokenStandard_DVP_Settlement.DVPSettlement>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ApprovedTrade, undefined>>;
  CreateDVPWithSyncCheck: damlTypes.Choice<ApprovedTrade, CreateDVPWithSyncCheck, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either<string, damlTypes.ContractId<TokenStandard_DVP_Settlement.DVPSettlement>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ApprovedTrade, undefined>>;
  ExecuteAtomicSettlement: damlTypes.Choice<ApprovedTrade, ExecuteAtomicSettlement, Compliance_AtomicAudit.AuditedSettlementResult, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ApprovedTrade, undefined>>;
  Archive: damlTypes.Choice<ApprovedTrade, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ApprovedTrade, undefined>>;
  ExpireTrade: damlTypes.Choice<ApprovedTrade, ExpireTrade, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ApprovedTrade, undefined>>;
}
export declare const ApprovedTrade:
  damlTypes.Template<ApprovedTrade, undefined, '#CantonSuite:Trade:ApprovedTrade'> &
  damlTypes.ToInterface<ApprovedTrade, never> &
  ApprovedTradeInterface;

export declare namespace ApprovedTrade {
  export type CreateEvent = damlLedger.CreateEvent<ApprovedTrade, undefined, typeof ApprovedTrade.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ApprovedTrade, typeof ApprovedTrade.templateId>
  export type Event = damlLedger.Event<ApprovedTrade, undefined, typeof ApprovedTrade.templateId>
  export type QueryResult = damlLedger.QueryResult<ApprovedTrade, undefined, typeof ApprovedTrade.templateId>
}



export declare type ComplianceRejection = {
  compliance: damlTypes.Party;
  buyer: damlTypes.Party;
  seller: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  totalValue: damlTypes.Numeric;
  reason: string;
  rejectedAt: damlTypes.Time;
  regulatorParty: damlTypes.Party;
};

export declare interface ComplianceRejectionInterface {
  Archive: damlTypes.Choice<ComplianceRejection, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceRejection, undefined>>;
}
export declare const ComplianceRejection:
  damlTypes.Template<ComplianceRejection, undefined, '#CantonSuite:Trade:ComplianceRejection'> &
  damlTypes.ToInterface<ComplianceRejection, never> &
  ComplianceRejectionInterface;

export declare namespace ComplianceRejection {
  export type CreateEvent = damlLedger.CreateEvent<ComplianceRejection, undefined, typeof ComplianceRejection.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ComplianceRejection, typeof ComplianceRejection.templateId>
  export type Event = damlLedger.Event<ComplianceRejection, undefined, typeof ComplianceRejection.templateId>
  export type QueryResult = damlLedger.QueryResult<ComplianceRejection, undefined, typeof ComplianceRejection.templateId>
}



export declare type RejectTrade = {
  rejectionReason: string;
};

export declare const RejectTrade:
  damlTypes.Serializable<RejectTrade> & {
  }
;


export declare type IssueApprovalVoucher = {
  buyerVoucherCid: damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>;
  sellerVoucherCid: damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>;
  complianceNotes: string;
};

export declare const IssueApprovalVoucher:
  damlTypes.Serializable<IssueApprovalVoucher> & {
  }
;


export declare type ComplianceReviewRequest = {
  tradeCid: damlTypes.ContractId<TradeAgreement>;
  buyer: damlTypes.Party;
  seller: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  totalValue: damlTypes.Numeric;
  complianceParty: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  requestedAt: damlTypes.Time;
};

export declare interface ComplianceReviewRequestInterface {
  IssueApprovalVoucher: damlTypes.Choice<ComplianceReviewRequest, IssueApprovalVoucher, damlTypes.ContractId<ApprovedTrade>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceReviewRequest, undefined>>;
  RejectTrade: damlTypes.Choice<ComplianceReviewRequest, RejectTrade, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceReviewRequest, undefined>>;
  Archive: damlTypes.Choice<ComplianceReviewRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceReviewRequest, undefined>>;
}
export declare const ComplianceReviewRequest:
  damlTypes.Template<ComplianceReviewRequest, undefined, '#CantonSuite:Trade:ComplianceReviewRequest'> &
  damlTypes.ToInterface<ComplianceReviewRequest, never> &
  ComplianceReviewRequestInterface;

export declare namespace ComplianceReviewRequest {
  export type CreateEvent = damlLedger.CreateEvent<ComplianceReviewRequest, undefined, typeof ComplianceReviewRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ComplianceReviewRequest, typeof ComplianceReviewRequest.templateId>
  export type Event = damlLedger.Event<ComplianceReviewRequest, undefined, typeof ComplianceReviewRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<ComplianceReviewRequest, undefined, typeof ComplianceReviewRequest.templateId>
}



export declare type CancelTrade = {
};

export declare const CancelTrade:
  damlTypes.Serializable<CancelTrade> & {
  }
;


export declare type RequestComplianceApproval = {
};

export declare const RequestComplianceApproval:
  damlTypes.Serializable<RequestComplianceApproval> & {
  }
;


export declare type TradeAgreement = {
  buyer: damlTypes.Party;
  seller: damlTypes.Party;
  assetIssuer: damlTypes.Party;
  assetId: string;
  instrumentCid: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  isPrimary: boolean;
  complianceParty: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  createdAt: damlTypes.Time;
  expiresAt: damlTypes.Time;
};

export declare interface TradeAgreementInterface {
  RequestComplianceApproval: damlTypes.Choice<TradeAgreement, RequestComplianceApproval, damlTypes.ContractId<ComplianceReviewRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TradeAgreement, undefined>>;
  CancelTrade: damlTypes.Choice<TradeAgreement, CancelTrade, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TradeAgreement, undefined>>;
  Archive: damlTypes.Choice<TradeAgreement, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TradeAgreement, undefined>>;
}
export declare const TradeAgreement:
  damlTypes.Template<TradeAgreement, undefined, '#CantonSuite:Trade:TradeAgreement'> &
  damlTypes.ToInterface<TradeAgreement, never> &
  TradeAgreementInterface;

export declare namespace TradeAgreement {
  export type CreateEvent = damlLedger.CreateEvent<TradeAgreement, undefined, typeof TradeAgreement.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<TradeAgreement, typeof TradeAgreement.templateId>
  export type Event = damlLedger.Event<TradeAgreement, undefined, typeof TradeAgreement.templateId>
  export type QueryResult = damlLedger.QueryResult<TradeAgreement, undefined, typeof TradeAgreement.templateId>
}



export declare type CancelTradeProposal = {
};

export declare const CancelTradeProposal:
  damlTypes.Serializable<CancelTradeProposal> & {
  }
;


export declare type SellerAccept = {
};

export declare const SellerAccept:
  damlTypes.Serializable<SellerAccept> & {
  }
;


export declare type ProposedTrade = {
  buyer: damlTypes.Party;
  seller: damlTypes.Party;
  assetIssuer: damlTypes.Party;
  assetId: string;
  instrumentCid: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  isPrimary: boolean;
  complianceParty: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  createdAt: damlTypes.Time;
};

export declare interface ProposedTradeInterface {
  SellerAccept: damlTypes.Choice<ProposedTrade, SellerAccept, damlTypes.ContractId<TradeAgreement>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ProposedTrade, undefined>>;
  CancelTradeProposal: damlTypes.Choice<ProposedTrade, CancelTradeProposal, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ProposedTrade, undefined>>;
  Archive: damlTypes.Choice<ProposedTrade, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ProposedTrade, undefined>>;
}
export declare const ProposedTrade:
  damlTypes.Template<ProposedTrade, undefined, '#CantonSuite:Trade:ProposedTrade'> &
  damlTypes.ToInterface<ProposedTrade, never> &
  ProposedTradeInterface;

export declare namespace ProposedTrade {
  export type CreateEvent = damlLedger.CreateEvent<ProposedTrade, undefined, typeof ProposedTrade.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ProposedTrade, typeof ProposedTrade.templateId>
  export type Event = damlLedger.Event<ProposedTrade, undefined, typeof ProposedTrade.templateId>
  export type QueryResult = damlLedger.QueryResult<ProposedTrade, undefined, typeof ProposedTrade.templateId>
}


