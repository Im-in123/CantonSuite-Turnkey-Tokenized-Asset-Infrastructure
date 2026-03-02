// Generated from Network/TemplateMigration.daml
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

export declare type ExecuteRollback = {
  reason: string;
};

export declare const ExecuteRollback:
  damlTypes.Serializable<ExecuteRollback> & {
  }
;


export declare type MigrationRollback = {
  migrationController: damlTypes.Party;
  owner: damlTypes.Party;
  migrationReceipt: damlTypes.ContractId<MigrationReceipt>;
  backupData: damlTypes.Map<string, string>;
};

export declare interface MigrationRollbackInterface {
  ExecuteRollback: damlTypes.Choice<MigrationRollback, ExecuteRollback, damlTypes.ContractId<TokenStandard_Interfaces.Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationRollback, undefined>>;
  Archive: damlTypes.Choice<MigrationRollback, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationRollback, undefined>>;
}
export declare const MigrationRollback:
  damlTypes.Template<MigrationRollback, undefined, '#CantonSuite:Network.TemplateMigration:MigrationRollback'> &
  damlTypes.ToInterface<MigrationRollback, never> &
  MigrationRollbackInterface;

export declare namespace MigrationRollback {
  export type CreateEvent = damlLedger.CreateEvent<MigrationRollback, undefined, typeof MigrationRollback.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<MigrationRollback, typeof MigrationRollback.templateId>
  export type Event = damlLedger.Event<MigrationRollback, undefined, typeof MigrationRollback.templateId>
  export type QueryResult = damlLedger.QueryResult<MigrationRollback, undefined, typeof MigrationRollback.templateId>
}



export declare type MigrationProgress = {
  totalContracts: damlTypes.Int;
  completedMigrations: damlTypes.Int;
  percentComplete: damlTypes.Numeric;
  remainingContracts: damlTypes.Int;
};

export declare const MigrationProgress:
  damlTypes.Serializable<MigrationProgress> & {
  }
;


export declare type GetMigrationProgress = {
  totalContracts: damlTypes.Int;
  completedMigrations: damlTypes.Int;
};

export declare const GetMigrationProgress:
  damlTypes.Serializable<GetMigrationProgress> & {
  }
;


export declare type CreateBatchMigrationRequests = {
  contractCids: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, string>[];
};

export declare const CreateBatchMigrationRequests:
  damlTypes.Serializable<CreateBatchMigrationRequests> & {
  }
;


export declare type BatchMigrationCoordinator = {
  coordinator: damlTypes.Party;
  templateName: string;
  oldVersion: string;
  newVersion: string;
  targetOwners: damlTypes.Party[];
};

export declare interface BatchMigrationCoordinatorInterface {
  GetMigrationProgress: damlTypes.Choice<BatchMigrationCoordinator, GetMigrationProgress, MigrationProgress, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BatchMigrationCoordinator, undefined>>;
  CreateBatchMigrationRequests: damlTypes.Choice<BatchMigrationCoordinator, CreateBatchMigrationRequests, damlTypes.ContractId<MigrationRequest>[], undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BatchMigrationCoordinator, undefined>>;
  Archive: damlTypes.Choice<BatchMigrationCoordinator, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BatchMigrationCoordinator, undefined>>;
}
export declare const BatchMigrationCoordinator:
  damlTypes.Template<BatchMigrationCoordinator, undefined, '#CantonSuite:Network.TemplateMigration:BatchMigrationCoordinator'> &
  damlTypes.ToInterface<BatchMigrationCoordinator, never> &
  BatchMigrationCoordinatorInterface;

export declare namespace BatchMigrationCoordinator {
  export type CreateEvent = damlLedger.CreateEvent<BatchMigrationCoordinator, undefined, typeof BatchMigrationCoordinator.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<BatchMigrationCoordinator, typeof BatchMigrationCoordinator.templateId>
  export type Event = damlLedger.Event<BatchMigrationCoordinator, undefined, typeof BatchMigrationCoordinator.templateId>
  export type QueryResult = damlLedger.QueryResult<BatchMigrationCoordinator, undefined, typeof BatchMigrationCoordinator.templateId>
}



export declare type MigrateInstrument = {
};

export declare const MigrateInstrument:
  damlTypes.Serializable<MigrateInstrument> & {
  }
;


export declare type RWAInstrumentMigrationV1toV2 = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  oldInstrumentCid: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
  jurisdictions: string[];
  regulatoryFramework: string;
  transferRestrictions: string[];
};

export declare interface RWAInstrumentMigrationV1toV2Interface {
  MigrateInstrument: damlTypes.Choice<RWAInstrumentMigrationV1toV2, MigrateInstrument, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Finance_Instruments.RWAInstrument>, damlTypes.ContractId<MigrationReceipt>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RWAInstrumentMigrationV1toV2, undefined>>;
  Archive: damlTypes.Choice<RWAInstrumentMigrationV1toV2, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RWAInstrumentMigrationV1toV2, undefined>>;
}
export declare const RWAInstrumentMigrationV1toV2:
  damlTypes.Template<RWAInstrumentMigrationV1toV2, undefined, '#CantonSuite:Network.TemplateMigration:RWAInstrumentMigrationV1toV2'> &
  damlTypes.ToInterface<RWAInstrumentMigrationV1toV2, never> &
  RWAInstrumentMigrationV1toV2Interface;

export declare namespace RWAInstrumentMigrationV1toV2 {
  export type CreateEvent = damlLedger.CreateEvent<RWAInstrumentMigrationV1toV2, undefined, typeof RWAInstrumentMigrationV1toV2.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RWAInstrumentMigrationV1toV2, typeof RWAInstrumentMigrationV1toV2.templateId>
  export type Event = damlLedger.Event<RWAInstrumentMigrationV1toV2, undefined, typeof RWAInstrumentMigrationV1toV2.templateId>
  export type QueryResult = damlLedger.QueryResult<RWAInstrumentMigrationV1toV2, undefined, typeof RWAInstrumentMigrationV1toV2.templateId>
}



export declare type AcknowledgeMigration = {
};

export declare const AcknowledgeMigration:
  damlTypes.Serializable<AcknowledgeMigration> & {
  }
;


export declare type MigrationReceipt = {
  migrator: damlTypes.Party;
  owner: damlTypes.Party;
  templateName: string;
  oldContractCid: string;
  newContractCid: string;
  oldVersion: string;
  newVersion: string;
  migratedAt: damlTypes.Time;
  preservedFields: string[];
  addedFieldNames: string[];
};

export declare interface MigrationReceiptInterface {
  AcknowledgeMigration: damlTypes.Choice<MigrationReceipt, AcknowledgeMigration, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationReceipt, undefined>>;
  Archive: damlTypes.Choice<MigrationReceipt, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationReceipt, undefined>>;
}
export declare const MigrationReceipt:
  damlTypes.Template<MigrationReceipt, undefined, '#CantonSuite:Network.TemplateMigration:MigrationReceipt'> &
  damlTypes.ToInterface<MigrationReceipt, never> &
  MigrationReceiptInterface;

export declare namespace MigrationReceipt {
  export type CreateEvent = damlLedger.CreateEvent<MigrationReceipt, undefined, typeof MigrationReceipt.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<MigrationReceipt, typeof MigrationReceipt.templateId>
  export type Event = damlLedger.Event<MigrationReceipt, undefined, typeof MigrationReceipt.templateId>
  export type QueryResult = damlLedger.QueryResult<MigrationReceipt, undefined, typeof MigrationReceipt.templateId>
}



export declare type ExecuteMigration = {
};

export declare const ExecuteMigration:
  damlTypes.Serializable<ExecuteMigration> & {
  }
;


export declare type HoldingMigrationV1toV2 = {
  migrator: damlTypes.Party;
  owner: damlTypes.Party;
  oldHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  addedFields: damlTypes.Map<string, string>;
};

export declare interface HoldingMigrationV1toV2Interface {
  ExecuteMigration: damlTypes.Choice<HoldingMigrationV1toV2, ExecuteMigration, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, damlTypes.ContractId<MigrationReceipt>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HoldingMigrationV1toV2, undefined>>;
  Archive: damlTypes.Choice<HoldingMigrationV1toV2, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HoldingMigrationV1toV2, undefined>>;
}
export declare const HoldingMigrationV1toV2:
  damlTypes.Template<HoldingMigrationV1toV2, undefined, '#CantonSuite:Network.TemplateMigration:HoldingMigrationV1toV2'> &
  damlTypes.ToInterface<HoldingMigrationV1toV2, never> &
  HoldingMigrationV1toV2Interface;

export declare namespace HoldingMigrationV1toV2 {
  export type CreateEvent = damlLedger.CreateEvent<HoldingMigrationV1toV2, undefined, typeof HoldingMigrationV1toV2.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<HoldingMigrationV1toV2, typeof HoldingMigrationV1toV2.templateId>
  export type Event = damlLedger.Event<HoldingMigrationV1toV2, undefined, typeof HoldingMigrationV1toV2.templateId>
  export type QueryResult = damlLedger.QueryResult<HoldingMigrationV1toV2, undefined, typeof HoldingMigrationV1toV2.templateId>
}



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


export declare type MigrationRequest = {
  migrationController: damlTypes.Party;
  owner: damlTypes.Party;
  templateName: string;
  oldVersion: string;
  newVersion: string;
  contractCid: string;
  reason: string;
  requestedAt: damlTypes.Time;
  status: MigrationRequestStatus;
};

export declare interface MigrationRequestInterface {
  ApproveMigration: damlTypes.Choice<MigrationRequest, ApproveMigration, damlTypes.ContractId<MigrationRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationRequest, undefined>>;
  RejectMigration: damlTypes.Choice<MigrationRequest, RejectMigration, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationRequest, undefined>>;
  Archive: damlTypes.Choice<MigrationRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationRequest, undefined>>;
}
export declare const MigrationRequest:
  damlTypes.Template<MigrationRequest, undefined, '#CantonSuite:Network.TemplateMigration:MigrationRequest'> &
  damlTypes.ToInterface<MigrationRequest, never> &
  MigrationRequestInterface;

export declare namespace MigrationRequest {
  export type CreateEvent = damlLedger.CreateEvent<MigrationRequest, undefined, typeof MigrationRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<MigrationRequest, typeof MigrationRequest.templateId>
  export type Event = damlLedger.Event<MigrationRequest, undefined, typeof MigrationRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<MigrationRequest, undefined, typeof MigrationRequest.templateId>
}



export declare type MigrationRequestStatus =
  |  { tag: 'MigrationRequested'; value: {} }
  |  { tag: 'MigrationApproved'; value: {} }
  |  { tag: 'MigrationInProgress'; value: {} }
  |  { tag: 'MigrationCompleted'; value: {} }
  |  { tag: 'MigrationFailed'; value: string }
;

export declare const MigrationRequestStatus:
  damlTypes.Serializable<MigrationRequestStatus> & {
  }
;


export declare type RequestMigration = {
  owner: damlTypes.Party;
  contractCid: string;
  reason: string;
};

export declare const RequestMigration:
  damlTypes.Serializable<RequestMigration> & {
  }
;


export declare type NeedsMigration = {
  contractVersion: string;
};

export declare const NeedsMigration:
  damlTypes.Serializable<NeedsMigration> & {
  }
;


export declare type MigrationController = {
  migrationController: damlTypes.Party;
  templateName: string;
  oldVersion: string;
  newVersion: string;
  autoMigrate: boolean;
  notifyOwners: boolean;
};

export declare interface MigrationControllerInterface {
  NeedsMigration: damlTypes.Choice<MigrationController, NeedsMigration, boolean, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationController, undefined>>;
  RequestMigration: damlTypes.Choice<MigrationController, RequestMigration, damlTypes.ContractId<MigrationRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationController, undefined>>;
  Archive: damlTypes.Choice<MigrationController, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MigrationController, undefined>>;
}
export declare const MigrationController:
  damlTypes.Template<MigrationController, undefined, '#CantonSuite:Network.TemplateMigration:MigrationController'> &
  damlTypes.ToInterface<MigrationController, never> &
  MigrationControllerInterface;

export declare namespace MigrationController {
  export type CreateEvent = damlLedger.CreateEvent<MigrationController, undefined, typeof MigrationController.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<MigrationController, typeof MigrationController.templateId>
  export type Event = damlLedger.Event<MigrationController, undefined, typeof MigrationController.templateId>
  export type QueryResult = damlLedger.QueryResult<MigrationController, undefined, typeof MigrationController.templateId>
}



export declare type GetLatestVersion = {
  templateName: string;
};

export declare const GetLatestVersion:
  damlTypes.Serializable<GetLatestVersion> & {
  }
;


export declare type DeprecateVersion = {
  templateName: string;
  versionNumber: string;
  migrateBy: damlTypes.Time;
};

export declare const DeprecateVersion:
  damlTypes.Serializable<DeprecateVersion> & {
  }
;


export declare type RegisterVersion = {
  newVersion: TemplateVersion;
};

export declare const RegisterVersion:
  damlTypes.Serializable<RegisterVersion> & {
  }
;


export declare type TemplateRegistry = {
  registry: damlTypes.Party;
  versions: TemplateVersion[];
  observers: damlTypes.Party[];
};

export declare interface TemplateRegistryInterface {
  DeprecateVersion: damlTypes.Choice<TemplateRegistry, DeprecateVersion, damlTypes.ContractId<TemplateRegistry>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TemplateRegistry, undefined>>;
  GetLatestVersion: damlTypes.Choice<TemplateRegistry, GetLatestVersion, damlTypes.Optional<TemplateVersion>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TemplateRegistry, undefined>>;
  RegisterVersion: damlTypes.Choice<TemplateRegistry, RegisterVersion, damlTypes.ContractId<TemplateRegistry>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TemplateRegistry, undefined>>;
  Archive: damlTypes.Choice<TemplateRegistry, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TemplateRegistry, undefined>>;
}
export declare const TemplateRegistry:
  damlTypes.Template<TemplateRegistry, undefined, '#CantonSuite:Network.TemplateMigration:TemplateRegistry'> &
  damlTypes.ToInterface<TemplateRegistry, never> &
  TemplateRegistryInterface;

export declare namespace TemplateRegistry {
  export type CreateEvent = damlLedger.CreateEvent<TemplateRegistry, undefined, typeof TemplateRegistry.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<TemplateRegistry, typeof TemplateRegistry.templateId>
  export type Event = damlLedger.Event<TemplateRegistry, undefined, typeof TemplateRegistry.templateId>
  export type QueryResult = damlLedger.QueryResult<TemplateRegistry, undefined, typeof TemplateRegistry.templateId>
}



export declare type TemplateVersion = {
  templateName: string;
  version: string;
  deployedAt: damlTypes.Time;
  changeLog: string[];
  deprecated: boolean;
  migrateByDate: damlTypes.Optional<damlTypes.Time>;
};

export declare const TemplateVersion:
  damlTypes.Serializable<TemplateVersion> & {
  }
;

