// Generated from Redemption/Atomic.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as CantonCoin_MiningRoundSync from '../../CantonCoin/MiningRoundSync/module';
import * as Compliance_AtomicAudit from '../../Compliance/AtomicAudit/module';
import * as TokenStandard_Interfaces from '../../TokenStandard/Interfaces/module';

export declare type ProcessQueueBatch = {
  cashAmounts: damlTypes.Numeric[];
};

export declare const ProcessQueueBatch:
  damlTypes.Serializable<ProcessQueueBatch> & {
  }
;


export declare type AddToQueue = {
  effectCid: damlTypes.ContractId<RedemptionEffect>;
};

export declare const AddToQueue:
  damlTypes.Serializable<AddToQueue> & {
  }
;


export declare type RedemptionQueue = {
  issuer: damlTypes.Party;
  assetId: string;
  pendingEffects: damlTypes.ContractId<RedemptionEffect>[];
  maxBatchSize: damlTypes.Int;
};

export declare interface RedemptionQueueInterface {
  AddToQueue: damlTypes.Choice<RedemptionQueue, AddToQueue, damlTypes.ContractId<RedemptionQueue>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionQueue, undefined>>;
  Archive: damlTypes.Choice<RedemptionQueue, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionQueue, undefined>>;
  ProcessQueueBatch: damlTypes.Choice<RedemptionQueue, ProcessQueueBatch, damlTypes.ContractId<RedemptionQueue>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionQueue, undefined>>;
}
export declare const RedemptionQueue:
  damlTypes.Template<RedemptionQueue, undefined, '#CantonSuite:Redemption.Atomic:RedemptionQueue'> &
  damlTypes.ToInterface<RedemptionQueue, never> &
  RedemptionQueueInterface;

export declare namespace RedemptionQueue {
  export type CreateEvent = damlLedger.CreateEvent<RedemptionQueue, undefined, typeof RedemptionQueue.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RedemptionQueue, typeof RedemptionQueue.templateId>
  export type Event = damlLedger.Event<RedemptionQueue, undefined, typeof RedemptionQueue.templateId>
  export type QueryResult = damlLedger.QueryResult<RedemptionQueue, undefined, typeof RedemptionQueue.templateId>
}



export declare type ProcessBatchRedemptions_DEPRECATED = {
  holdingCids: damlTypes.ContractId<TokenStandard_Interfaces.Holding>[];
  deadlineHours: damlTypes.Int;
  miningRoundCid: damlTypes.Optional<damlTypes.ContractId<CantonCoin_MiningRoundSync.MiningRoundReference>>;
};

export declare const ProcessBatchRedemptions_DEPRECATED:
  damlTypes.Serializable<ProcessBatchRedemptions_DEPRECATED> & {
  }
;


export declare type ProcessRedemptionEffects = {
  effectCids: damlTypes.ContractId<RedemptionEffect>[];
};

export declare const ProcessRedemptionEffects:
  damlTypes.Serializable<ProcessRedemptionEffects> & {
  }
;


export declare type BatchRedemptionRequest = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  assetId: string;
  redemptions: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<damlTypes.Party, damlTypes.Numeric, string>[];
  requestedAt: damlTypes.Time;
};

export declare interface BatchRedemptionRequestInterface {
  ProcessRedemptionEffects: damlTypes.Choice<BatchRedemptionRequest, ProcessRedemptionEffects, damlTypes.ContractId<RedemptionWorkflow>[], undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BatchRedemptionRequest, undefined>>;
  ProcessBatchRedemptions_DEPRECATED: damlTypes.Choice<BatchRedemptionRequest, ProcessBatchRedemptions_DEPRECATED, damlTypes.ContractId<RedemptionWorkflow>[], undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BatchRedemptionRequest, undefined>>;
  Archive: damlTypes.Choice<BatchRedemptionRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BatchRedemptionRequest, undefined>>;
}
export declare const BatchRedemptionRequest:
  damlTypes.Template<BatchRedemptionRequest, undefined, '#CantonSuite:Redemption.Atomic:BatchRedemptionRequest'> &
  damlTypes.ToInterface<BatchRedemptionRequest, never> &
  BatchRedemptionRequestInterface;

export declare namespace BatchRedemptionRequest {
  export type CreateEvent = damlLedger.CreateEvent<BatchRedemptionRequest, undefined, typeof BatchRedemptionRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<BatchRedemptionRequest, typeof BatchRedemptionRequest.templateId>
  export type Event = damlLedger.Event<BatchRedemptionRequest, undefined, typeof BatchRedemptionRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<BatchRedemptionRequest, undefined, typeof BatchRedemptionRequest.templateId>
}



export declare type CancelRedemptionEffect = {
};

export declare const CancelRedemptionEffect:
  damlTypes.Serializable<CancelRedemptionEffect> & {
  }
;


export declare type ExecuteRedemptionEffect = {
};

export declare const ExecuteRedemptionEffect:
  damlTypes.Serializable<ExecuteRedemptionEffect> & {
  }
;


export declare type RedemptionEffect = {
  redeemer: damlTypes.Party;
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  reason: string;
  holdingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  deadlineHours: damlTypes.Int;
  miningRoundCid: damlTypes.Optional<damlTypes.ContractId<CantonCoin_MiningRoundSync.MiningRoundReference>>;
  createdAt: damlTypes.Time;
  effectId: string;
};

export declare interface RedemptionEffectInterface {
  ExecuteRedemptionEffect: damlTypes.Choice<RedemptionEffect, ExecuteRedemptionEffect, damlTypes.ContractId<RedemptionWorkflow>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionEffect, undefined>>;
  CancelRedemptionEffect: damlTypes.Choice<RedemptionEffect, CancelRedemptionEffect, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionEffect, undefined>>;
  Archive: damlTypes.Choice<RedemptionEffect, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionEffect, undefined>>;
}
export declare const RedemptionEffect:
  damlTypes.Template<RedemptionEffect, undefined, '#CantonSuite:Redemption.Atomic:RedemptionEffect'> &
  damlTypes.ToInterface<RedemptionEffect, never> &
  RedemptionEffectInterface;

export declare namespace RedemptionEffect {
  export type CreateEvent = damlLedger.CreateEvent<RedemptionEffect, undefined, typeof RedemptionEffect.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RedemptionEffect, typeof RedemptionEffect.templateId>
  export type Event = damlLedger.Event<RedemptionEffect, undefined, typeof RedemptionEffect.templateId>
  export type QueryResult = damlLedger.QueryResult<RedemptionEffect, undefined, typeof RedemptionEffect.templateId>
}



export declare type ExecuteRedemptionFlow = {
  holdingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  deadlineHours: damlTypes.Int;
  miningRoundCid: damlTypes.Optional<damlTypes.ContractId<CantonCoin_MiningRoundSync.MiningRoundReference>>;
  redeemerCurrentSync: string;
  targetSync: string;
};

export declare const ExecuteRedemptionFlow:
  damlTypes.Serializable<ExecuteRedemptionFlow> & {
  }
;


export declare type InitiateRedemption = {
  redeemer: damlTypes.Party;
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  reason: string;
};

export declare interface InitiateRedemptionInterface {
  ExecuteRedemptionFlow: damlTypes.Choice<InitiateRedemption, ExecuteRedemptionFlow, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either<string, damlTypes.ContractId<RedemptionWorkflow>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<InitiateRedemption, undefined>>;
  Archive: damlTypes.Choice<InitiateRedemption, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<InitiateRedemption, undefined>>;
}
export declare const InitiateRedemption:
  damlTypes.Template<InitiateRedemption, undefined, '#CantonSuite:Redemption.Atomic:InitiateRedemption'> &
  damlTypes.ToInterface<InitiateRedemption, never> &
  InitiateRedemptionInterface;

export declare namespace InitiateRedemption {
  export type CreateEvent = damlLedger.CreateEvent<InitiateRedemption, undefined, typeof InitiateRedemption.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<InitiateRedemption, typeof InitiateRedemption.templateId>
  export type Event = damlLedger.Event<InitiateRedemption, undefined, typeof InitiateRedemption.templateId>
  export type QueryResult = damlLedger.QueryResult<InitiateRedemption, undefined, typeof InitiateRedemption.templateId>
}



export declare type WithdrawRedemption = {
};

export declare const WithdrawRedemption:
  damlTypes.Serializable<WithdrawRedemption> & {
  }
;


export declare type RejectRedemption = {
  rejectionReason: string;
};

export declare const RejectRedemption:
  damlTypes.Serializable<RejectRedemption> & {
  }
;


export declare type CompleteRedemptionAtomic = {
  cashAmount: damlTypes.Numeric;
};

export declare const CompleteRedemptionAtomic:
  damlTypes.Serializable<CompleteRedemptionAtomic> & {
  }
;


export declare type RedemptionWorkflow = {
  redeemer: damlTypes.Party;
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  reason: string;
  requestedAt: damlTypes.Time;
  allocationCid: damlTypes.ContractId<TokenStandard_Interfaces.Allocation>;
  cashPaymentPending: boolean;
  miningRoundCid: damlTypes.Optional<damlTypes.ContractId<CantonCoin_MiningRoundSync.MiningRoundReference>>;
};

export declare interface RedemptionWorkflowInterface {
  CompleteRedemptionAtomic: damlTypes.Choice<RedemptionWorkflow, CompleteRedemptionAtomic, Compliance_AtomicAudit.AuditedRedemptionResult, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionWorkflow, undefined>>;
  RejectRedemption: damlTypes.Choice<RedemptionWorkflow, RejectRedemption, damlTypes.ContractId<TokenStandard_Interfaces.Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionWorkflow, undefined>>;
  WithdrawRedemption: damlTypes.Choice<RedemptionWorkflow, WithdrawRedemption, damlTypes.ContractId<TokenStandard_Interfaces.Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionWorkflow, undefined>>;
  Archive: damlTypes.Choice<RedemptionWorkflow, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionWorkflow, undefined>>;
}
export declare const RedemptionWorkflow:
  damlTypes.Template<RedemptionWorkflow, undefined, '#CantonSuite:Redemption.Atomic:RedemptionWorkflow'> &
  damlTypes.ToInterface<RedemptionWorkflow, never> &
  RedemptionWorkflowInterface;

export declare namespace RedemptionWorkflow {
  export type CreateEvent = damlLedger.CreateEvent<RedemptionWorkflow, undefined, typeof RedemptionWorkflow.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RedemptionWorkflow, typeof RedemptionWorkflow.templateId>
  export type Event = damlLedger.Event<RedemptionWorkflow, undefined, typeof RedemptionWorkflow.templateId>
  export type QueryResult = damlLedger.QueryResult<RedemptionWorkflow, undefined, typeof RedemptionWorkflow.templateId>
}



export declare type CancelRedemption = {
};

export declare const CancelRedemption:
  damlTypes.Serializable<CancelRedemption> & {
  }
;


export declare type CreateRedemptionAllocation = {
};

export declare const CreateRedemptionAllocation:
  damlTypes.Serializable<CreateRedemptionAllocation> & {
  }
;


export declare type RedemptionRequest = {
  redeemer: damlTypes.Party;
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  reason: string;
  requestedAt: damlTypes.Time;
  deadline: damlTypes.Time;
  regulatorParty: damlTypes.Party;
  miningRoundCid: damlTypes.Optional<damlTypes.ContractId<CantonCoin_MiningRoundSync.MiningRoundReference>>;
};

export declare interface RedemptionRequestInterface {
  CreateRedemptionAllocation: damlTypes.Choice<RedemptionRequest, CreateRedemptionAllocation, damlTypes.ContractId<TokenStandard_Interfaces.AllocationRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionRequest, undefined>>;
  CancelRedemption: damlTypes.Choice<RedemptionRequest, CancelRedemption, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionRequest, undefined>>;
  Archive: damlTypes.Choice<RedemptionRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionRequest, undefined>>;
}
export declare const RedemptionRequest:
  damlTypes.Template<RedemptionRequest, undefined, '#CantonSuite:Redemption.Atomic:RedemptionRequest'> &
  damlTypes.ToInterface<RedemptionRequest, never> &
  RedemptionRequestInterface;

export declare namespace RedemptionRequest {
  export type CreateEvent = damlLedger.CreateEvent<RedemptionRequest, undefined, typeof RedemptionRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RedemptionRequest, typeof RedemptionRequest.templateId>
  export type Event = damlLedger.Event<RedemptionRequest, undefined, typeof RedemptionRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<RedemptionRequest, undefined, typeof RedemptionRequest.templateId>
}


