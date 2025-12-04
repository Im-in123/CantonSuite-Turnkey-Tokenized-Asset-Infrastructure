// Generated from Distribution.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type CancelAnnouncement = {
};

export declare const CancelAnnouncement:
  damlTypes.Serializable<CancelAnnouncement> & {
  }
;


export declare type DistributeToAll = {
  holders: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, damlTypes.Numeric>[];
};

export declare const DistributeToAll:
  damlTypes.Serializable<DistributeToAll> & {
  }
;


export declare type DistributeToBuyer = {
  buyer: damlTypes.Party;
  quantity: damlTypes.Numeric;
};

export declare const DistributeToBuyer:
  damlTypes.Serializable<DistributeToBuyer> & {
  }
;


export declare type DividendAnnouncement = {
  issuer: damlTypes.Party;
  assetId: string;
  label: string;
  perUnitAmount: damlTypes.Numeric;
  distributionDate: damlTypes.Time;
  compliance: damlTypes.Party;
  regulator: damlTypes.Party;
};

export declare interface DividendAnnouncementInterface {
  DistributeToBuyer: damlTypes.Choice<DividendAnnouncement, DistributeToBuyer, damlTypes.ContractId<Dividend>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendAnnouncement, undefined>>;
  DistributeToAll: damlTypes.Choice<DividendAnnouncement, DistributeToAll, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendAnnouncement, undefined>>;
  Archive: damlTypes.Choice<DividendAnnouncement, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendAnnouncement, undefined>>;
  CancelAnnouncement: damlTypes.Choice<DividendAnnouncement, CancelAnnouncement, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendAnnouncement, undefined>>;
}
export declare const DividendAnnouncement:
  damlTypes.Template<DividendAnnouncement, undefined, '#CantonSuite:Distribution:DividendAnnouncement'> &
  damlTypes.ToInterface<DividendAnnouncement, never> &
  DividendAnnouncementInterface;

export declare namespace DividendAnnouncement {
  export type CreateEvent = damlLedger.CreateEvent<DividendAnnouncement, undefined, typeof DividendAnnouncement.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DividendAnnouncement, typeof DividendAnnouncement.templateId>
  export type Event = damlLedger.Event<DividendAnnouncement, undefined, typeof DividendAnnouncement.templateId>
  export type QueryResult = damlLedger.QueryResult<DividendAnnouncement, undefined, typeof DividendAnnouncement.templateId>
}



export declare type DividendRegulatorView = {
  regulator: damlTypes.Party;
  issuer: damlTypes.Party;
  assetId: string;
  label: string;
  amount: damlTypes.Numeric;
  receiverHash: string;
  distributedAt: damlTypes.Time;
};

export declare interface DividendRegulatorViewInterface {
  Archive: damlTypes.Choice<DividendRegulatorView, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DividendRegulatorView, undefined>>;
}
export declare const DividendRegulatorView:
  damlTypes.Template<DividendRegulatorView, undefined, '#CantonSuite:Distribution:DividendRegulatorView'> &
  damlTypes.ToInterface<DividendRegulatorView, never> &
  DividendRegulatorViewInterface;

export declare namespace DividendRegulatorView {
  export type CreateEvent = damlLedger.CreateEvent<DividendRegulatorView, undefined, typeof DividendRegulatorView.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DividendRegulatorView, typeof DividendRegulatorView.templateId>
  export type Event = damlLedger.Event<DividendRegulatorView, undefined, typeof DividendRegulatorView.templateId>
  export type QueryResult = damlLedger.QueryResult<DividendRegulatorView, undefined, typeof DividendRegulatorView.templateId>
}



export declare type ClaimDividend = {
};

export declare const ClaimDividend:
  damlTypes.Serializable<ClaimDividend> & {
  }
;


export declare type Dividend = {
  issuer: damlTypes.Party;
  owner: damlTypes.Party;
  compliance: damlTypes.Party;
  assetId: string;
  label: string;
  cashAmount: damlTypes.Numeric;
  issuedAt: damlTypes.Time;
};

export declare interface DividendInterface {
  ClaimDividend: damlTypes.Choice<Dividend, ClaimDividend, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Dividend, undefined>>;
  Archive: damlTypes.Choice<Dividend, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Dividend, undefined>>;
}
export declare const Dividend:
  damlTypes.Template<Dividend, undefined, '#CantonSuite:Distribution:Dividend'> &
  damlTypes.ToInterface<Dividend, never> &
  DividendInterface;

export declare namespace Dividend {
  export type CreateEvent = damlLedger.CreateEvent<Dividend, undefined, typeof Dividend.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Dividend, typeof Dividend.templateId>
  export type Event = damlLedger.Event<Dividend, undefined, typeof Dividend.templateId>
  export type QueryResult = damlLedger.QueryResult<Dividend, undefined, typeof Dividend.templateId>
}


