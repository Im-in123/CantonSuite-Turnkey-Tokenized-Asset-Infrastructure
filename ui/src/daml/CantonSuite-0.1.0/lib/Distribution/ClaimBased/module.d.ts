// Generated from Distribution/ClaimBased.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as TokenStandard_Interfaces from '../../TokenStandard/Interfaces/module';

export declare type CreateAnnouncement = {
  totalUnitsOutstanding: damlTypes.Numeric;
  uniqueAnnouncementId: string;
  holdersAtSnapshot: damlTypes.Party[];
};

export declare const CreateAnnouncement:
  damlTypes.Serializable<CreateAnnouncement> & {
  }
;


export declare type DividendAnnouncementWorkflow = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  regulator: damlTypes.Party;
  assetId: string;
  dividendLabel: string;
  perUnitAmount: damlTypes.Numeric;
  expirationDays: damlTypes.Int;
};

export declare interface DividendAnnouncementWorkflowInterface {
  Archive: damlTypes.Choice<DividendAnnouncementWorkflow, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendAnnouncementWorkflow, undefined>>;
  CreateAnnouncement: damlTypes.Choice<DividendAnnouncementWorkflow, CreateAnnouncement, damlTypes.ContractId<DividendAnnouncement>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendAnnouncementWorkflow, undefined>>;
}
export declare const DividendAnnouncementWorkflow:
  damlTypes.Template<DividendAnnouncementWorkflow, undefined, '#CantonSuite:Distribution.ClaimBased:DividendAnnouncementWorkflow'> &
  damlTypes.ToInterface<DividendAnnouncementWorkflow, never> &
  DividendAnnouncementWorkflowInterface;

export declare namespace DividendAnnouncementWorkflow {
  export type CreateEvent = damlLedger.CreateEvent<DividendAnnouncementWorkflow, undefined, typeof DividendAnnouncementWorkflow.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DividendAnnouncementWorkflow, typeof DividendAnnouncementWorkflow.templateId>
  export type Event = damlLedger.Event<DividendAnnouncementWorkflow, undefined, typeof DividendAnnouncementWorkflow.templateId>
  export type QueryResult = damlLedger.QueryResult<DividendAnnouncementWorkflow, undefined, typeof DividendAnnouncementWorkflow.templateId>
}



export declare type DividendRegulatorView = {
  regulator: damlTypes.Party;
  issuer: damlTypes.Party;
  assetId: string;
  dividendLabel: string;
  totalAmount: damlTypes.Numeric;
  recipientHash: string;
  distributedAt: damlTypes.Time;
  claimExpiresAt: damlTypes.Time;
};

export declare interface DividendRegulatorViewInterface {
  Archive: damlTypes.Choice<DividendRegulatorView, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendRegulatorView, undefined>>;
}
export declare const DividendRegulatorView:
  damlTypes.Template<DividendRegulatorView, undefined, '#CantonSuite:Distribution.ClaimBased:DividendRegulatorView'> &
  damlTypes.ToInterface<DividendRegulatorView, never> &
  DividendRegulatorViewInterface;

export declare namespace DividendRegulatorView {
  export type CreateEvent = damlLedger.CreateEvent<DividendRegulatorView, undefined, typeof DividendRegulatorView.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DividendRegulatorView, typeof DividendRegulatorView.templateId>
  export type Event = damlLedger.Event<DividendRegulatorView, undefined, typeof DividendRegulatorView.templateId>
  export type QueryResult = damlLedger.QueryResult<DividendRegulatorView, undefined, typeof DividendRegulatorView.templateId>
}



export declare type CreateSnapshot = {
  holdingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare const CreateSnapshot:
  damlTypes.Serializable<CreateSnapshot> & {
  }
;


export declare type HoldingSnapshot = {
  issuer: damlTypes.Party;
  assetId: string;
  snapshotTime: damlTypes.Time;
  holder: damlTypes.Party;
  quantity: damlTypes.Numeric;
  holdingHash: string;
};

export declare interface HoldingSnapshotInterface {
  CreateSnapshot: damlTypes.Choice<HoldingSnapshot, CreateSnapshot, damlTypes.ContractId<HoldingSnapshot>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HoldingSnapshot, undefined>>;
  Archive: damlTypes.Choice<HoldingSnapshot, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HoldingSnapshot, undefined>>;
}
export declare const HoldingSnapshot:
  damlTypes.Template<HoldingSnapshot, undefined, '#CantonSuite:Distribution.ClaimBased:HoldingSnapshot'> &
  damlTypes.ToInterface<HoldingSnapshot, never> &
  HoldingSnapshotInterface;

export declare namespace HoldingSnapshot {
  export type CreateEvent = damlLedger.CreateEvent<HoldingSnapshot, undefined, typeof HoldingSnapshot.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<HoldingSnapshot, typeof HoldingSnapshot.templateId>
  export type Event = damlLedger.Event<HoldingSnapshot, undefined, typeof HoldingSnapshot.templateId>
  export type QueryResult = damlLedger.QueryResult<HoldingSnapshot, undefined, typeof HoldingSnapshot.templateId>
}



export declare type RedeemClaim = {
};

export declare const RedeemClaim:
  damlTypes.Serializable<RedeemClaim> & {
  }
;


export declare type DividendClaim = {
  issuer: damlTypes.Party;
  holder: damlTypes.Party;
  assetId: string;
  dividendLabel: string;
  amount: damlTypes.Numeric;
  holdingSnapshot: damlTypes.Numeric;
  claimedAt: damlTypes.Time;
  proofOfOwnership: string;
  announcementId: string;
};

export declare interface DividendClaimInterface {
  RedeemClaim: damlTypes.Choice<DividendClaim, RedeemClaim, damlTypes.ContractId<TokenStandard_Interfaces.Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendClaim, undefined>>;
  Archive: damlTypes.Choice<DividendClaim, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendClaim, undefined>>;
}
export declare const DividendClaim:
  damlTypes.Template<DividendClaim, undefined, '#CantonSuite:Distribution.ClaimBased:DividendClaim'> &
  damlTypes.ToInterface<DividendClaim, never> &
  DividendClaimInterface;

export declare namespace DividendClaim {
  export type CreateEvent = damlLedger.CreateEvent<DividendClaim, undefined, typeof DividendClaim.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DividendClaim, typeof DividendClaim.templateId>
  export type Event = damlLedger.Event<DividendClaim, undefined, typeof DividendClaim.templateId>
  export type QueryResult = damlLedger.QueryResult<DividendClaim, undefined, typeof DividendClaim.templateId>
}



export declare type DividendClaimRecord = {
  announcementId: string;
  holder: damlTypes.Party;
  issuer: damlTypes.Party;
  assetId: string;
  dividendLabel: string;
  holdingSnapshot: damlTypes.Numeric;
  holderShare: damlTypes.Numeric;
  proofOfOwnership: string;
  claimedAt: damlTypes.Time;
};

export declare interface DividendClaimRecordInterface {
  Archive: damlTypes.Choice<DividendClaimRecord, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, DividendClaimRecord.Key> & damlTypes.ChoiceFrom<damlTypes.Template<DividendClaimRecord, DividendClaimRecord.Key>>;
}
export declare const DividendClaimRecord:
  damlTypes.Template<DividendClaimRecord, DividendClaimRecord.Key, '#CantonSuite:Distribution.ClaimBased:DividendClaimRecord'> &
  damlTypes.ToInterface<DividendClaimRecord, never> &
  DividendClaimRecordInterface;

export declare namespace DividendClaimRecord {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<string, damlTypes.Party>
  export type CreateEvent = damlLedger.CreateEvent<DividendClaimRecord, DividendClaimRecord.Key, typeof DividendClaimRecord.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DividendClaimRecord, typeof DividendClaimRecord.templateId>
  export type Event = damlLedger.Event<DividendClaimRecord, DividendClaimRecord.Key, typeof DividendClaimRecord.templateId>
  export type QueryResult = damlLedger.QueryResult<DividendClaimRecord, DividendClaimRecord.Key, typeof DividendClaimRecord.templateId>
}



export declare type DividendAnnouncementInfo = {
  assetId: string;
  dividendLabel: string;
  perUnitAmount: damlTypes.Numeric;
  snapshotTime: damlTypes.Time;
  expirationTime: damlTypes.Time;
  totalDividendPool: damlTypes.Numeric;
  isExpired: boolean;
};

export declare const DividendAnnouncementInfo:
  damlTypes.Serializable<DividendAnnouncementInfo> & {
  }
;


export declare type GetAnnouncementInfo = {
};

export declare const GetAnnouncementInfo:
  damlTypes.Serializable<GetAnnouncementInfo> & {
  }
;


export declare type CloseAnnouncement = {
};

export declare const CloseAnnouncement:
  damlTypes.Serializable<CloseAnnouncement> & {
  }
;


export declare type ClaimDividend = {
  holder: damlTypes.Party;
  holdingSnapshot: damlTypes.Numeric;
  proofOfOwnership: string;
};

export declare const ClaimDividend:
  damlTypes.Serializable<ClaimDividend> & {
  }
;


export declare type DividendAnnouncement = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  regulator: damlTypes.Party;
  assetId: string;
  dividendLabel: string;
  perUnitAmount: damlTypes.Numeric;
  snapshotTime: damlTypes.Time;
  expirationTime: damlTypes.Time;
  totalUnitsAtSnapshot: damlTypes.Numeric;
  totalDividendPool: damlTypes.Numeric;
  announcementId: string;
  eligibleHolders: damlTypes.Party[];
};

export declare interface DividendAnnouncementInterface {
  ClaimDividend: damlTypes.Choice<DividendAnnouncement, ClaimDividend, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<DividendClaim>, damlTypes.ContractId<DividendClaimRecord>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendAnnouncement, undefined>>;
  CloseAnnouncement: damlTypes.Choice<DividendAnnouncement, CloseAnnouncement, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendAnnouncement, undefined>>;
  GetAnnouncementInfo: damlTypes.Choice<DividendAnnouncement, GetAnnouncementInfo, DividendAnnouncementInfo, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendAnnouncement, undefined>>;
  Archive: damlTypes.Choice<DividendAnnouncement, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendAnnouncement, undefined>>;
}
export declare const DividendAnnouncement:
  damlTypes.Template<DividendAnnouncement, undefined, '#CantonSuite:Distribution.ClaimBased:DividendAnnouncement'> &
  damlTypes.ToInterface<DividendAnnouncement, never> &
  DividendAnnouncementInterface;

export declare namespace DividendAnnouncement {
  export type CreateEvent = damlLedger.CreateEvent<DividendAnnouncement, undefined, typeof DividendAnnouncement.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DividendAnnouncement, typeof DividendAnnouncement.templateId>
  export type Event = damlLedger.Event<DividendAnnouncement, undefined, typeof DividendAnnouncement.templateId>
  export type QueryResult = damlLedger.QueryResult<DividendAnnouncement, undefined, typeof DividendAnnouncement.templateId>
}


