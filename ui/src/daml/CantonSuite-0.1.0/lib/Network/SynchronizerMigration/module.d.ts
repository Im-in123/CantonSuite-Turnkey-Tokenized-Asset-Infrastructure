// Generated from Network/SynchronizerMigration.daml
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

export declare type PreparationResult = {
  ready: boolean;
  buyerMigrationCid: damlTypes.Optional<damlTypes.ContractId<SynchronizerMigrationRequest>>;
  sellerMigrationCid: damlTypes.Optional<damlTypes.ContractId<SynchronizerMigrationRequest>>;
  estimatedWaitTime: damlTypes.Int;
};

export declare const PreparationResult:
  damlTypes.Serializable<PreparationResult> & {
  }
;


export declare type PrepareForSettlement = {
  buyerCurrentSync: string;
  sellerCurrentSync: string;
};

export declare const PrepareForSettlement:
  damlTypes.Serializable<PrepareForSettlement> & {
  }
;


export declare type DVPSettlementWithMigration = {
  settlementId: string;
  settlementApp: damlTypes.Party;
  buyer: damlTypes.Party;
  seller: damlTypes.Party;
  buyerHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  sellerHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  deadline: damlTypes.Time;
  targetSync: string;
};

export declare interface DVPSettlementWithMigrationInterface {
  Archive: damlTypes.Choice<DVPSettlementWithMigration, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DVPSettlementWithMigration, undefined>>;
  PrepareForSettlement: damlTypes.Choice<DVPSettlementWithMigration, PrepareForSettlement, PreparationResult, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DVPSettlementWithMigration, undefined>>;
}
export declare const DVPSettlementWithMigration:
  damlTypes.Template<DVPSettlementWithMigration, undefined, '#CantonSuite:Network.SynchronizerMigration:DVPSettlementWithMigration'> &
  damlTypes.ToInterface<DVPSettlementWithMigration, never> &
  DVPSettlementWithMigrationInterface;

export declare namespace DVPSettlementWithMigration {
  export type CreateEvent = damlLedger.CreateEvent<DVPSettlementWithMigration, undefined, typeof DVPSettlementWithMigration.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DVPSettlementWithMigration, typeof DVPSettlementWithMigration.templateId>
  export type Event = damlLedger.Event<DVPSettlementWithMigration, undefined, typeof DVPSettlementWithMigration.templateId>
  export type QueryResult = damlLedger.QueryResult<DVPSettlementWithMigration, undefined, typeof DVPSettlementWithMigration.templateId>
}



export declare type MigrationPlan = {
  migrationRequired: boolean;
  holdingsToMigrate: damlTypes.ContractId<TokenStandard_Interfaces.Holding>[];
  estimatedTime: damlTypes.Int;
};

export declare const MigrationPlan:
  damlTypes.Serializable<MigrationPlan> & {
  }
;


export declare type InitiateBatchMigration = {
  holdingSyncInfo: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, string>[];
};

export declare const InitiateBatchMigration:
  damlTypes.Serializable<InitiateBatchMigration> & {
  }
;


export declare type CheckMigrationNeeded = {
  holdingSyncMeta: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, string>[];
};

export declare const CheckMigrationNeeded:
  damlTypes.Serializable<CheckMigrationNeeded> & {
  }
;


export declare type PreSettlementMigrationCoordinator = {
  coordinator: damlTypes.Party;
  settlementId: string;
  targetSync: string;
  buyerHoldings: damlTypes.ContractId<TokenStandard_Interfaces.Holding>[];
  sellerHoldings: damlTypes.ContractId<TokenStandard_Interfaces.Holding>[];
  deadline: damlTypes.Time;
};

export declare interface PreSettlementMigrationCoordinatorInterface {
  CheckMigrationNeeded: damlTypes.Choice<PreSettlementMigrationCoordinator, CheckMigrationNeeded, MigrationPlan, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PreSettlementMigrationCoordinator, undefined>>;
  InitiateBatchMigration: damlTypes.Choice<PreSettlementMigrationCoordinator, InitiateBatchMigration, damlTypes.ContractId<SynchronizerMigrationRequest>[], undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PreSettlementMigrationCoordinator, undefined>>;
  Archive: damlTypes.Choice<PreSettlementMigrationCoordinator, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PreSettlementMigrationCoordinator, undefined>>;
}
export declare const PreSettlementMigrationCoordinator:
  damlTypes.Template<PreSettlementMigrationCoordinator, undefined, '#CantonSuite:Network.SynchronizerMigration:PreSettlementMigrationCoordinator'> &
  damlTypes.ToInterface<PreSettlementMigrationCoordinator, never> &
  PreSettlementMigrationCoordinatorInterface;

export declare namespace PreSettlementMigrationCoordinator {
  export type CreateEvent = damlLedger.CreateEvent<PreSettlementMigrationCoordinator, undefined, typeof PreSettlementMigrationCoordinator.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PreSettlementMigrationCoordinator, typeof PreSettlementMigrationCoordinator.templateId>
  export type Event = damlLedger.Event<PreSettlementMigrationCoordinator, undefined, typeof PreSettlementMigrationCoordinator.templateId>
  export type QueryResult = damlLedger.QueryResult<PreSettlementMigrationCoordinator, undefined, typeof PreSettlementMigrationCoordinator.templateId>
}



export declare type FailMigration = {
  failureReason: string;
};

export declare const FailMigration:
  damlTypes.Serializable<FailMigration> & {
  }
;


export declare type CompleteMigration = {
  migrationProof: string;
};

export declare const CompleteMigration:
  damlTypes.Serializable<CompleteMigration> & {
  }
;


export declare type LockForMigration = {
};

export declare const LockForMigration:
  damlTypes.Serializable<LockForMigration> & {
  }
;


export declare type MigrationWorkflow = {
  requester: damlTypes.Party;
  issuer: damlTypes.Party;
  holdingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  currentSync: string;
  targetSync: string;
  reason: string;
  status: MigrationStatus;
  initiatedAt: damlTypes.Time;
};

export declare interface MigrationWorkflowInterface {
  FailMigration: damlTypes.Choice<MigrationWorkflow, FailMigration, damlTypes.ContractId<TokenStandard_Interfaces.Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationWorkflow, undefined>>;
  CompleteMigration: damlTypes.Choice<MigrationWorkflow, CompleteMigration, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, damlTypes.ContractId<HoldingSynchronizerMetadata>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationWorkflow, undefined>>;
  LockForMigration: damlTypes.Choice<MigrationWorkflow, LockForMigration, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, damlTypes.ContractId<MigrationWorkflow>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationWorkflow, undefined>>;
  Archive: damlTypes.Choice<MigrationWorkflow, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationWorkflow, undefined>>;
}
export declare const MigrationWorkflow:
  damlTypes.Template<MigrationWorkflow, undefined, '#CantonSuite:Network.SynchronizerMigration:MigrationWorkflow'> &
  damlTypes.ToInterface<MigrationWorkflow, never> &
  MigrationWorkflowInterface;

export declare namespace MigrationWorkflow {
  export type CreateEvent = damlLedger.CreateEvent<MigrationWorkflow, undefined, typeof MigrationWorkflow.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<MigrationWorkflow, typeof MigrationWorkflow.templateId>
  export type Event = damlLedger.Event<MigrationWorkflow, undefined, typeof MigrationWorkflow.templateId>
  export type QueryResult = damlLedger.QueryResult<MigrationWorkflow, undefined, typeof MigrationWorkflow.templateId>
}



export declare type MigrationStatus =
  | 'MigrationPending'
  | 'MigrationInProgress'
  | 'MigrationCompleted'
  | 'MigrationFailed'
;

export declare const MigrationStatus:
  damlTypes.Serializable<MigrationStatus> & {
  }
& { readonly keys: MigrationStatus[] } & { readonly [e in MigrationStatus]: e }
;


export declare type RejectMigration = {
  rejectionReason: string;
};

export declare const RejectMigration:
  damlTypes.Serializable<RejectMigration> & {
  }
;


export declare type ApproveMigration = {
};

export declare const ApproveMigration:
  damlTypes.Serializable<ApproveMigration> & {
  }
;


export declare type SynchronizerMigrationRequest = {
  requester: damlTypes.Party;
  issuer: damlTypes.Party;
  holdingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  currentSync: string;
  targetSync: string;
  reason: string;
  requestedAt: damlTypes.Time;
  deadline: damlTypes.Time;
};

export declare interface SynchronizerMigrationRequestInterface {
  ApproveMigration: damlTypes.Choice<SynchronizerMigrationRequest, ApproveMigration, damlTypes.ContractId<MigrationWorkflow>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SynchronizerMigrationRequest, undefined>>;
  RejectMigration: damlTypes.Choice<SynchronizerMigrationRequest, RejectMigration, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SynchronizerMigrationRequest, undefined>>;
  Archive: damlTypes.Choice<SynchronizerMigrationRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SynchronizerMigrationRequest, undefined>>;
}
export declare const SynchronizerMigrationRequest:
  damlTypes.Template<SynchronizerMigrationRequest, undefined, '#CantonSuite:Network.SynchronizerMigration:SynchronizerMigrationRequest'> &
  damlTypes.ToInterface<SynchronizerMigrationRequest, never> &
  SynchronizerMigrationRequestInterface;

export declare namespace SynchronizerMigrationRequest {
  export type CreateEvent = damlLedger.CreateEvent<SynchronizerMigrationRequest, undefined, typeof SynchronizerMigrationRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<SynchronizerMigrationRequest, typeof SynchronizerMigrationRequest.templateId>
  export type Event = damlLedger.Event<SynchronizerMigrationRequest, undefined, typeof SynchronizerMigrationRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<SynchronizerMigrationRequest, undefined, typeof SynchronizerMigrationRequest.templateId>
}



export declare type CompatibilityResult = {
  compatible: boolean;
  incompatibleContracts: damlTypes.ContractId<TokenStandard_Interfaces.Holding>[];
  recommendedAction: damlTypes.Optional<string>;
};

export declare const CompatibilityResult:
  damlTypes.Serializable<CompatibilityResult> & {
  }
;


export declare type CheckCompatibility = {
};

export declare const CheckCompatibility:
  damlTypes.Serializable<CheckCompatibility> & {
  }
;


export declare type SynchronizerCompatibilityCheck = {
  checker: damlTypes.Party;
  contracts: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, string>[];
  settlementId: string;
  requiredSync: string;
};

export declare interface SynchronizerCompatibilityCheckInterface {
  CheckCompatibility: damlTypes.Choice<SynchronizerCompatibilityCheck, CheckCompatibility, CompatibilityResult, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SynchronizerCompatibilityCheck, undefined>>;
  Archive: damlTypes.Choice<SynchronizerCompatibilityCheck, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SynchronizerCompatibilityCheck, undefined>>;
}
export declare const SynchronizerCompatibilityCheck:
  damlTypes.Template<SynchronizerCompatibilityCheck, undefined, '#CantonSuite:Network.SynchronizerMigration:SynchronizerCompatibilityCheck'> &
  damlTypes.ToInterface<SynchronizerCompatibilityCheck, never> &
  SynchronizerCompatibilityCheckInterface;

export declare namespace SynchronizerCompatibilityCheck {
  export type CreateEvent = damlLedger.CreateEvent<SynchronizerCompatibilityCheck, undefined, typeof SynchronizerCompatibilityCheck.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<SynchronizerCompatibilityCheck, typeof SynchronizerCompatibilityCheck.templateId>
  export type Event = damlLedger.Event<SynchronizerCompatibilityCheck, undefined, typeof SynchronizerCompatibilityCheck.templateId>
  export type QueryResult = damlLedger.QueryResult<SynchronizerCompatibilityCheck, undefined, typeof SynchronizerCompatibilityCheck.templateId>
}



export declare type UpdateAfterMigration = {
  newSynchronizerInfo: SynchronizerInfo;
};

export declare const UpdateAfterMigration:
  damlTypes.Serializable<UpdateAfterMigration> & {
  }
;


export declare type GetSynchronizerInfo = {
};

export declare const GetSynchronizerInfo:
  damlTypes.Serializable<GetSynchronizerInfo> & {
  }
;


export declare type HoldingSynchronizerMetadata = {
  owner: damlTypes.Party;
  issuer: damlTypes.Party;
  assetId: string;
  holdingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  synchronizerInfo: SynchronizerInfo;
  canMigrate: boolean;
};

export declare interface HoldingSynchronizerMetadataInterface {
  GetSynchronizerInfo: damlTypes.Choice<HoldingSynchronizerMetadata, GetSynchronizerInfo, SynchronizerInfo, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HoldingSynchronizerMetadata, undefined>>;
  UpdateAfterMigration: damlTypes.Choice<HoldingSynchronizerMetadata, UpdateAfterMigration, damlTypes.ContractId<HoldingSynchronizerMetadata>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HoldingSynchronizerMetadata, undefined>>;
  Archive: damlTypes.Choice<HoldingSynchronizerMetadata, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HoldingSynchronizerMetadata, undefined>>;
}
export declare const HoldingSynchronizerMetadata:
  damlTypes.Template<HoldingSynchronizerMetadata, undefined, '#CantonSuite:Network.SynchronizerMigration:HoldingSynchronizerMetadata'> &
  damlTypes.ToInterface<HoldingSynchronizerMetadata, never> &
  HoldingSynchronizerMetadataInterface;

export declare namespace HoldingSynchronizerMetadata {
  export type CreateEvent = damlLedger.CreateEvent<HoldingSynchronizerMetadata, undefined, typeof HoldingSynchronizerMetadata.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<HoldingSynchronizerMetadata, typeof HoldingSynchronizerMetadata.templateId>
  export type Event = damlLedger.Event<HoldingSynchronizerMetadata, undefined, typeof HoldingSynchronizerMetadata.templateId>
  export type QueryResult = damlLedger.QueryResult<HoldingSynchronizerMetadata, undefined, typeof HoldingSynchronizerMetadata.templateId>
}



export declare type SynchronizerInfo = {
  synchronizerId: string;
  synchronizerUrl: string;
  connectedAt: damlTypes.Time;
  lastVerified: damlTypes.Time;
};

export declare const SynchronizerInfo:
  damlTypes.Serializable<SynchronizerInfo> & {
  }
;

