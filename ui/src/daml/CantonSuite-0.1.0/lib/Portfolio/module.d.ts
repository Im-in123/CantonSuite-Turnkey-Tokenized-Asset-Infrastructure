// Generated from Portfolio.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as TokenStandard_Interfaces from '../TokenStandard/Interfaces/module';

export declare type HoldingSummary = {
  owner: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  custodian: damlTypes.Party;
  locked: boolean;
};

export declare const HoldingSummary:
  damlTypes.Serializable<HoldingSummary> & {
  }
;


export declare type CreditLockedHolding = {
  owner: damlTypes.Party;
  assetId: string;
  amount: damlTypes.Numeric;
  lockContext: string;
  observers: damlTypes.Party[];
};

export declare const CreditLockedHolding:
  damlTypes.Serializable<CreditLockedHolding> & {
  }
;


export declare type CreditHolding = {
  owner: damlTypes.Party;
  assetId: string;
  amount: damlTypes.Numeric;
  observers: damlTypes.Party[];
};

export declare const CreditHolding:
  damlTypes.Serializable<CreditHolding> & {
  }
;


export declare type HoldingFactory = {
  custodian: damlTypes.Party;
  compliance: damlTypes.Party;
  observers: damlTypes.Party[];
};

export declare interface HoldingFactoryInterface {
  CreditHolding: damlTypes.Choice<HoldingFactory, CreditHolding, damlTypes.ContractId<TokenStandard_Interfaces.Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HoldingFactory, undefined>>;
  CreditLockedHolding: damlTypes.Choice<HoldingFactory, CreditLockedHolding, damlTypes.ContractId<TokenStandard_Interfaces.Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HoldingFactory, undefined>>;
  Archive: damlTypes.Choice<HoldingFactory, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HoldingFactory, undefined>>;
}
export declare const HoldingFactory:
  damlTypes.Template<HoldingFactory, undefined, '#CantonSuite:Portfolio:HoldingFactory'> &
  damlTypes.ToInterface<HoldingFactory, never> &
  HoldingFactoryInterface;

export declare namespace HoldingFactory {
  export type CreateEvent = damlLedger.CreateEvent<HoldingFactory, undefined, typeof HoldingFactory.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<HoldingFactory, typeof HoldingFactory.templateId>
  export type Event = damlLedger.Event<HoldingFactory, undefined, typeof HoldingFactory.templateId>
  export type QueryResult = damlLedger.QueryResult<HoldingFactory, undefined, typeof HoldingFactory.templateId>
}



export declare type ClawbackResult = {
  recoveredHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  clawbackMetadata: damlTypes.Map<string, string>;
};

export declare const ClawbackResult:
  damlTypes.Serializable<ClawbackResult> & {
  }
;


export declare type WithdrawClawback = {
};

export declare const WithdrawClawback:
  damlTypes.Serializable<WithdrawClawback> & {
  }
;


export declare type RejectClawback = {
  rejectionReason: string;
};

export declare const RejectClawback:
  damlTypes.Serializable<RejectClawback> & {
  }
;


export declare type AuthorizeClawback = {
  complianceOfficer: string;
  authorizationDate: damlTypes.Time;
  courtOrderHash: string;
};

export declare const AuthorizeClawback:
  damlTypes.Serializable<AuthorizeClawback> & {
  }
;


export declare type ClawbackRequest = {
  targetOwner: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  legalReason: string;
  jurisdiction: string;
  caseReference: string;
  lockedHoldingCid: damlTypes.ContractId<LockedHolding_Impl>;
  metadata: damlTypes.Map<string, string>;
};

export declare interface ClawbackRequestInterface {
  AuthorizeClawback: damlTypes.Choice<ClawbackRequest, AuthorizeClawback, ClawbackResult, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ClawbackRequest, undefined>>;
  RejectClawback: damlTypes.Choice<ClawbackRequest, RejectClawback, damlTypes.ContractId<TokenStandard_Interfaces.Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ClawbackRequest, undefined>>;
  WithdrawClawback: damlTypes.Choice<ClawbackRequest, WithdrawClawback, damlTypes.ContractId<TokenStandard_Interfaces.Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ClawbackRequest, undefined>>;
  Archive: damlTypes.Choice<ClawbackRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ClawbackRequest, undefined>>;
}
export declare const ClawbackRequest:
  damlTypes.Template<ClawbackRequest, undefined, '#CantonSuite:Portfolio:ClawbackRequest'> &
  damlTypes.ToInterface<ClawbackRequest, never> &
  ClawbackRequestInterface;

export declare namespace ClawbackRequest {
  export type CreateEvent = damlLedger.CreateEvent<ClawbackRequest, undefined, typeof ClawbackRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClawbackRequest, typeof ClawbackRequest.templateId>
  export type Event = damlLedger.Event<ClawbackRequest, undefined, typeof ClawbackRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<ClawbackRequest, undefined, typeof ClawbackRequest.templateId>
}



export declare type LockedHolding_Impl = {
  owner: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  lockContext: string;
  metadata: damlTypes.Map<string, string>;
};

export declare interface LockedHolding_ImplInterface {
  Archive: damlTypes.Choice<LockedHolding_Impl, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LockedHolding_Impl, undefined>>;
}
export declare const LockedHolding_Impl:
  damlTypes.Template<LockedHolding_Impl, undefined, '#CantonSuite:Portfolio:LockedHolding_Impl'> &
  damlTypes.ToInterface<LockedHolding_Impl, TokenStandard_Interfaces.Holding> &
  LockedHolding_ImplInterface;

export declare namespace LockedHolding_Impl {
  export type CreateEvent = damlLedger.CreateEvent<LockedHolding_Impl, undefined, typeof LockedHolding_Impl.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<LockedHolding_Impl, typeof LockedHolding_Impl.templateId>
  export type Event = damlLedger.Event<LockedHolding_Impl, undefined, typeof LockedHolding_Impl.templateId>
  export type QueryResult = damlLedger.QueryResult<LockedHolding_Impl, undefined, typeof LockedHolding_Impl.templateId>
}



export declare type InitiateClawback = {
  legalReason: string;
  jurisdiction: string;
  caseReference: string;
};

export declare const InitiateClawback:
  damlTypes.Serializable<InitiateClawback> & {
  }
;


export declare type Merge = {
  otherHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  mergeMetadata: damlTypes.Map<string, string>;
};

export declare const Merge:
  damlTypes.Serializable<Merge> & {
  }
;


export declare type Split = {
  splitAmount: damlTypes.Numeric;
  splitMetadata: damlTypes.Map<string, string>;
};

export declare const Split:
  damlTypes.Serializable<Split> & {
  }
;


export declare type Holding_Impl = {
  owner: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  locked: boolean;
  lockContext: damlTypes.Optional<string>;
  metadata: damlTypes.Map<string, string>;
  observers: damlTypes.Party[];
};

export declare interface Holding_ImplInterface {
  Split: damlTypes.Choice<Holding_Impl, Split, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, damlTypes.ContractId<TokenStandard_Interfaces.Holding>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Holding_Impl, undefined>>;
  Merge: damlTypes.Choice<Holding_Impl, Merge, damlTypes.ContractId<TokenStandard_Interfaces.Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Holding_Impl, undefined>>;
  InitiateClawback: damlTypes.Choice<Holding_Impl, InitiateClawback, damlTypes.ContractId<ClawbackRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Holding_Impl, undefined>>;
  Archive: damlTypes.Choice<Holding_Impl, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Holding_Impl, undefined>>;
}
export declare const Holding_Impl:
  damlTypes.Template<Holding_Impl, undefined, '#CantonSuite:Portfolio:Holding_Impl'> &
  damlTypes.ToInterface<Holding_Impl, TokenStandard_Interfaces.Holding> &
  Holding_ImplInterface;

export declare namespace Holding_Impl {
  export type CreateEvent = damlLedger.CreateEvent<Holding_Impl, undefined, typeof Holding_Impl.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Holding_Impl, typeof Holding_Impl.templateId>
  export type Event = damlLedger.Event<Holding_Impl, undefined, typeof Holding_Impl.templateId>
  export type QueryResult = damlLedger.QueryResult<Holding_Impl, undefined, typeof Holding_Impl.templateId>
}


