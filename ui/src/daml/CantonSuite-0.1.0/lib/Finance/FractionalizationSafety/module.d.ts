// Generated from Finance/FractionalizationSafety.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Finance_Instruments from '../../Finance/Instruments/module';
import * as TokenStandard_Interfaces from '../../TokenStandard/Interfaces/module';

export declare type GetFractionalizationSetting = {
};

export declare const GetFractionalizationSetting:
  damlTypes.Serializable<GetFractionalizationSetting> & {
  }
;


export declare type AttemptToggle = {
  requestor: damlTypes.Party;
};

export declare const AttemptToggle:
  damlTypes.Serializable<AttemptToggle> & {
  }
;


export declare type ImmutableFractionalization = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  assetId: string;
  fractionalizedValue: boolean;
  setAtIssuance: damlTypes.Time;
  permanentlyLocked: boolean;
};

export declare interface ImmutableFractionalizationInterface {
  AttemptToggle: damlTypes.Choice<ImmutableFractionalization, AttemptToggle, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ImmutableFractionalization, undefined>>;
  GetFractionalizationSetting: damlTypes.Choice<ImmutableFractionalization, GetFractionalizationSetting, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<boolean, damlTypes.Time>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ImmutableFractionalization, undefined>>;
  Archive: damlTypes.Choice<ImmutableFractionalization, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ImmutableFractionalization, undefined>>;
}
export declare const ImmutableFractionalization:
  damlTypes.Template<ImmutableFractionalization, undefined, '#CantonSuite:Finance.FractionalizationSafety:ImmutableFractionalization'> &
  damlTypes.ToInterface<ImmutableFractionalization, never> &
  ImmutableFractionalizationInterface;

export declare namespace ImmutableFractionalization {
  export type CreateEvent = damlLedger.CreateEvent<ImmutableFractionalization, undefined, typeof ImmutableFractionalization.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ImmutableFractionalization, typeof ImmutableFractionalization.templateId>
  export type Event = damlLedger.Event<ImmutableFractionalization, undefined, typeof ImmutableFractionalization.templateId>
  export type QueryResult = damlLedger.QueryResult<ImmutableFractionalization, undefined, typeof ImmutableFractionalization.templateId>
}



export declare type SweepProgress = {
  totalDustHoldings: damlTypes.Int;
  completedBuyBacks: damlTypes.Int;
  percentComplete: damlTypes.Numeric;
  remainingDust: damlTypes.Int;
};

export declare const SweepProgress:
  damlTypes.Serializable<SweepProgress> & {
  }
;


export declare type CheckSweepProgress = {
  completedBuyBacks: damlTypes.Int;
};

export declare const CheckSweepProgress:
  damlTypes.Serializable<CheckSweepProgress> & {
  }
;


export declare type InitiateSweep = {
};

export declare const InitiateSweep:
  damlTypes.Serializable<InitiateSweep> & {
  }
;


export declare type DustSweepCoordinator = {
  coordinator: damlTypes.Party;
  compliance: damlTypes.Party;
  assetId: string;
  buyBackPrice: damlTypes.Numeric;
  deadline: damlTypes.Time;
  dustHoldings: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, damlTypes.ContractId<TokenStandard_Interfaces.Holding>>[];
};

export declare interface DustSweepCoordinatorInterface {
  InitiateSweep: damlTypes.Choice<DustSweepCoordinator, InitiateSweep, damlTypes.ContractId<DustSweepBuyBack>[], undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DustSweepCoordinator, undefined>>;
  CheckSweepProgress: damlTypes.Choice<DustSweepCoordinator, CheckSweepProgress, SweepProgress, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DustSweepCoordinator, undefined>>;
  Archive: damlTypes.Choice<DustSweepCoordinator, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DustSweepCoordinator, undefined>>;
}
export declare const DustSweepCoordinator:
  damlTypes.Template<DustSweepCoordinator, undefined, '#CantonSuite:Finance.FractionalizationSafety:DustSweepCoordinator'> &
  damlTypes.ToInterface<DustSweepCoordinator, never> &
  DustSweepCoordinatorInterface;

export declare namespace DustSweepCoordinator {
  export type CreateEvent = damlLedger.CreateEvent<DustSweepCoordinator, undefined, typeof DustSweepCoordinator.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DustSweepCoordinator, typeof DustSweepCoordinator.templateId>
  export type Event = damlLedger.Event<DustSweepCoordinator, undefined, typeof DustSweepCoordinator.templateId>
  export type QueryResult = damlLedger.QueryResult<DustSweepCoordinator, undefined, typeof DustSweepCoordinator.templateId>
}



export declare type AcknowledgeReceipt = {
};

export declare const AcknowledgeReceipt:
  damlTypes.Serializable<AcknowledgeReceipt> & {
  }
;


export declare type DustBuyBackReceipt = {
  issuer: damlTypes.Party;
  recipient: damlTypes.Party;
  assetId: string;
  dustAmount: damlTypes.Numeric;
  payment: damlTypes.Numeric;
  completedAt: damlTypes.Time;
};

export declare interface DustBuyBackReceiptInterface {
  AcknowledgeReceipt: damlTypes.Choice<DustBuyBackReceipt, AcknowledgeReceipt, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DustBuyBackReceipt, undefined>>;
  Archive: damlTypes.Choice<DustBuyBackReceipt, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DustBuyBackReceipt, undefined>>;
}
export declare const DustBuyBackReceipt:
  damlTypes.Template<DustBuyBackReceipt, undefined, '#CantonSuite:Finance.FractionalizationSafety:DustBuyBackReceipt'> &
  damlTypes.ToInterface<DustBuyBackReceipt, never> &
  DustBuyBackReceiptInterface;

export declare namespace DustBuyBackReceipt {
  export type CreateEvent = damlLedger.CreateEvent<DustBuyBackReceipt, undefined, typeof DustBuyBackReceipt.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DustBuyBackReceipt, typeof DustBuyBackReceipt.templateId>
  export type Event = damlLedger.Event<DustBuyBackReceipt, undefined, typeof DustBuyBackReceipt.templateId>
  export type QueryResult = damlLedger.QueryResult<DustBuyBackReceipt, undefined, typeof DustBuyBackReceipt.templateId>
}



export declare type VerifyNoDustRemains = {
  remainingHoldings: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, damlTypes.Numeric>[];
};

export declare const VerifyNoDustRemains:
  damlTypes.Serializable<VerifyNoDustRemains> & {
  }
;


export declare type DustSweepCompletion = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  assetId: string;
  completedAt: damlTypes.Time;
  holdersBoughtBack: damlTypes.Int;
  totalDustSwept: damlTypes.Numeric;
};

export declare interface DustSweepCompletionInterface {
  VerifyNoDustRemains: damlTypes.Choice<DustSweepCompletion, VerifyNoDustRemains, boolean, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DustSweepCompletion, undefined>>;
  Archive: damlTypes.Choice<DustSweepCompletion, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DustSweepCompletion, undefined>>;
}
export declare const DustSweepCompletion:
  damlTypes.Template<DustSweepCompletion, undefined, '#CantonSuite:Finance.FractionalizationSafety:DustSweepCompletion'> &
  damlTypes.ToInterface<DustSweepCompletion, never> &
  DustSweepCompletionInterface;

export declare namespace DustSweepCompletion {
  export type CreateEvent = damlLedger.CreateEvent<DustSweepCompletion, undefined, typeof DustSweepCompletion.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DustSweepCompletion, typeof DustSweepCompletion.templateId>
  export type Event = damlLedger.Event<DustSweepCompletion, undefined, typeof DustSweepCompletion.templateId>
  export type QueryResult = damlLedger.QueryResult<DustSweepCompletion, undefined, typeof DustSweepCompletion.templateId>
}



export declare type CloseBuyBack = {
  totalHoldersBoughtBack: damlTypes.Int;
  totalDustSwept: damlTypes.Numeric;
};

export declare const CloseBuyBack:
  damlTypes.Serializable<CloseBuyBack> & {
  }
;


export declare type AcceptDustBuyBack = {
  dustHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare const AcceptDustBuyBack:
  damlTypes.Serializable<AcceptDustBuyBack> & {
  }
;


export declare type DustSweepBuyBack = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  buyBackHolder: damlTypes.Party;
  assetId: string;
  buyBackPrice: damlTypes.Numeric;
  deadline: damlTypes.Time;
};

export declare interface DustSweepBuyBackInterface {
  AcceptDustBuyBack: damlTypes.Choice<DustSweepBuyBack, AcceptDustBuyBack, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, damlTypes.ContractId<DustBuyBackReceipt>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DustSweepBuyBack, undefined>>;
  CloseBuyBack: damlTypes.Choice<DustSweepBuyBack, CloseBuyBack, damlTypes.ContractId<DustSweepCompletion>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DustSweepBuyBack, undefined>>;
  Archive: damlTypes.Choice<DustSweepBuyBack, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DustSweepBuyBack, undefined>>;
}
export declare const DustSweepBuyBack:
  damlTypes.Template<DustSweepBuyBack, undefined, '#CantonSuite:Finance.FractionalizationSafety:DustSweepBuyBack'> &
  damlTypes.ToInterface<DustSweepBuyBack, never> &
  DustSweepBuyBackInterface;

export declare namespace DustSweepBuyBack {
  export type CreateEvent = damlLedger.CreateEvent<DustSweepBuyBack, undefined, typeof DustSweepBuyBack.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DustSweepBuyBack, typeof DustSweepBuyBack.templateId>
  export type Event = damlLedger.Event<DustSweepBuyBack, undefined, typeof DustSweepBuyBack.templateId>
  export type QueryResult = damlLedger.QueryResult<DustSweepBuyBack, undefined, typeof DustSweepBuyBack.templateId>
}



export declare type DustReport = {
  assetId: string;
  totalDustHoldings: damlTypes.Int;
  totalDustAmount: damlTypes.Numeric;
  dustHoldings: damlTypes.ContractId<TokenStandard_Interfaces.Holding>[];
  requiresSweep: boolean;
};

export declare const DustReport:
  damlTypes.Serializable<DustReport> & {
  }
;


export declare type DetectDustHoldings = {
  holdings: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, damlTypes.Numeric>[];
};

export declare const DetectDustHoldings:
  damlTypes.Serializable<DetectDustHoldings> & {
  }
;


export declare type DustDetector = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  assetId: string;
};

export declare interface DustDetectorInterface {
  DetectDustHoldings: damlTypes.Choice<DustDetector, DetectDustHoldings, DustReport, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DustDetector, undefined>>;
  Archive: damlTypes.Choice<DustDetector, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DustDetector, undefined>>;
}
export declare const DustDetector:
  damlTypes.Template<DustDetector, undefined, '#CantonSuite:Finance.FractionalizationSafety:DustDetector'> &
  damlTypes.ToInterface<DustDetector, never> &
  DustDetectorInterface;

export declare namespace DustDetector {
  export type CreateEvent = damlLedger.CreateEvent<DustDetector, undefined, typeof DustDetector.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DustDetector, typeof DustDetector.templateId>
  export type Event = damlLedger.Event<DustDetector, undefined, typeof DustDetector.templateId>
  export type QueryResult = damlLedger.QueryResult<DustDetector, undefined, typeof DustDetector.templateId>
}



export declare type ExecuteToggle = {
  instrumentCid: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
  allHolders: damlTypes.Party[];
};

export declare const ExecuteToggle:
  damlTypes.Serializable<ExecuteToggle> & {
  }
;


export declare type HolderApproval = {
  approver: damlTypes.Party;
};

export declare const HolderApproval:
  damlTypes.Serializable<HolderApproval> & {
  }
;


export declare type RecordDustSweepCompleted = {
  dustSweepProof: string;
};

export declare const RecordDustSweepCompleted:
  damlTypes.Serializable<RecordDustSweepCompleted> & {
  }
;


export declare type FractionalizationToggleRequest = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  assetId: string;
  currentValue: boolean;
  newValue: boolean;
  reason: string;
  requestedAt: damlTypes.Time;
  requiresDustSweep: boolean;
  dustSweepCompleted: boolean;
  holderApprovalsRequired: boolean;
  approvals: damlTypes.Party[];
};

export declare interface FractionalizationToggleRequestInterface {
  RecordDustSweepCompleted: damlTypes.Choice<FractionalizationToggleRequest, RecordDustSweepCompleted, damlTypes.ContractId<FractionalizationToggleRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FractionalizationToggleRequest, undefined>>;
  HolderApproval: damlTypes.Choice<FractionalizationToggleRequest, HolderApproval, damlTypes.ContractId<FractionalizationToggleRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FractionalizationToggleRequest, undefined>>;
  ExecuteToggle: damlTypes.Choice<FractionalizationToggleRequest, ExecuteToggle, damlTypes.ContractId<Finance_Instruments.RWAInstrument>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FractionalizationToggleRequest, undefined>>;
  Archive: damlTypes.Choice<FractionalizationToggleRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FractionalizationToggleRequest, undefined>>;
}
export declare const FractionalizationToggleRequest:
  damlTypes.Template<FractionalizationToggleRequest, undefined, '#CantonSuite:Finance.FractionalizationSafety:FractionalizationToggleRequest'> &
  damlTypes.ToInterface<FractionalizationToggleRequest, never> &
  FractionalizationToggleRequestInterface;

export declare namespace FractionalizationToggleRequest {
  export type CreateEvent = damlLedger.CreateEvent<FractionalizationToggleRequest, undefined, typeof FractionalizationToggleRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<FractionalizationToggleRequest, typeof FractionalizationToggleRequest.templateId>
  export type Event = damlLedger.Event<FractionalizationToggleRequest, undefined, typeof FractionalizationToggleRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<FractionalizationToggleRequest, undefined, typeof FractionalizationToggleRequest.templateId>
}



export declare type RequestFractionalizationToggle = {
  newValue: boolean;
  reason: string;
};

export declare const RequestFractionalizationToggle:
  damlTypes.Serializable<RequestFractionalizationToggle> & {
  }
;


export declare type FractionalizationGovernance = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  assetId: string;
  currentlyFractionalized: boolean;
  policy: FractionalizationPolicy;
  issuanceDate: damlTypes.Time;
  canToggle: boolean;
};

export declare interface FractionalizationGovernanceInterface {
  RequestFractionalizationToggle: damlTypes.Choice<FractionalizationGovernance, RequestFractionalizationToggle, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either<string, damlTypes.ContractId<FractionalizationToggleRequest>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FractionalizationGovernance, undefined>>;
  Archive: damlTypes.Choice<FractionalizationGovernance, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FractionalizationGovernance, undefined>>;
}
export declare const FractionalizationGovernance:
  damlTypes.Template<FractionalizationGovernance, undefined, '#CantonSuite:Finance.FractionalizationSafety:FractionalizationGovernance'> &
  damlTypes.ToInterface<FractionalizationGovernance, never> &
  FractionalizationGovernanceInterface;

export declare namespace FractionalizationGovernance {
  export type CreateEvent = damlLedger.CreateEvent<FractionalizationGovernance, undefined, typeof FractionalizationGovernance.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<FractionalizationGovernance, typeof FractionalizationGovernance.templateId>
  export type Event = damlLedger.Event<FractionalizationGovernance, undefined, typeof FractionalizationGovernance.templateId>
  export type QueryResult = damlLedger.QueryResult<FractionalizationGovernance, undefined, typeof FractionalizationGovernance.templateId>
}



export declare type FractionalizationPolicy =
  | 'ImmutableAfterIssuance'
  | 'RequiresDustSweep'
  | 'RequiresUnanimousConsent'
;

export declare const FractionalizationPolicy:
  damlTypes.Serializable<FractionalizationPolicy> & {
  }
& { readonly keys: FractionalizationPolicy[] } & { readonly [e in FractionalizationPolicy]: e }
;

