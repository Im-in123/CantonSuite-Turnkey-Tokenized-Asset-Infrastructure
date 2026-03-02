// Generated from TokenStandard/DVP_Settlement.daml
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

export declare type ExecuteAllocationInstruction = {
  instructionCid: damlTypes.ContractId<TokenStandard_Interfaces.AllocationInstruction>;
};

export declare const ExecuteAllocationInstruction:
  damlTypes.Serializable<ExecuteAllocationInstruction> & {
  }
;


export declare type AllocationExecutionHandler = {
  registry: damlTypes.Party;
  complianceParty: damlTypes.Party;
};

export declare interface AllocationExecutionHandlerInterface {
  Archive: damlTypes.Choice<AllocationExecutionHandler, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AllocationExecutionHandler, undefined>>;
  ExecuteAllocationInstruction: damlTypes.Choice<AllocationExecutionHandler, ExecuteAllocationInstruction, damlTypes.ContractId<TokenStandard_Interfaces.Allocation>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AllocationExecutionHandler, undefined>>;
}
export declare const AllocationExecutionHandler:
  damlTypes.Template<AllocationExecutionHandler, undefined, '#CantonSuite:TokenStandard.DVP_Settlement:AllocationExecutionHandler'> &
  damlTypes.ToInterface<AllocationExecutionHandler, never> &
  AllocationExecutionHandlerInterface;

export declare namespace AllocationExecutionHandler {
  export type CreateEvent = damlLedger.CreateEvent<AllocationExecutionHandler, undefined, typeof AllocationExecutionHandler.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<AllocationExecutionHandler, typeof AllocationExecutionHandler.templateId>
  export type Event = damlLedger.Event<AllocationExecutionHandler, undefined, typeof AllocationExecutionHandler.templateId>
  export type QueryResult = damlLedger.QueryResult<AllocationExecutionHandler, undefined, typeof AllocationExecutionHandler.templateId>
}



export declare type AtomicDVPResult = {
  sellerReceivedPayment: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  buyerReceivedAsset: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  executedAt: damlTypes.Time;
};

export declare const AtomicDVPResult:
  damlTypes.Serializable<AtomicDVPResult> & {
  }
;


export declare type ExtendDeadline = {
  newDeadline: damlTypes.Time;
};

export declare const ExtendDeadline:
  damlTypes.Serializable<ExtendDeadline> & {
  }
;


export declare type CancelSettlement = {
  reason: string;
};

export declare const CancelSettlement:
  damlTypes.Serializable<CancelSettlement> & {
  }
;


export declare type ExecuteAtomicDVP = {
  buyerAllocationCid: damlTypes.ContractId<TokenStandard_Interfaces.Allocation>;
  sellerAllocationCid: damlTypes.ContractId<TokenStandard_Interfaces.Allocation>;
};

export declare const ExecuteAtomicDVP:
  damlTypes.Serializable<ExecuteAtomicDVP> & {
  }
;


export declare type RequestAllocationsWithSyncCheck = {
  buyerCurrentSync: string;
  sellerCurrentSync: string;
  targetSync: string;
};

export declare const RequestAllocationsWithSyncCheck:
  damlTypes.Serializable<RequestAllocationsWithSyncCheck> & {
  }
;


export declare type RequestAllocations = {
};

export declare const RequestAllocations:
  damlTypes.Serializable<RequestAllocations> & {
  }
;


export declare type DVPSettlement = {
  settlementId: string;
  settlementApp: damlTypes.Party;
  buyer: damlTypes.Party;
  seller: damlTypes.Party;
  buyerAsset: TokenStandard_Interfaces.InstrumentId;
  sellerAsset: TokenStandard_Interfaces.InstrumentId;
  buyerAmount: damlTypes.Numeric;
  sellerAmount: damlTypes.Numeric;
  deadline: damlTypes.Time;
  complianceParty: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  description: string;
};

export declare interface DVPSettlementInterface {
  RequestAllocations: damlTypes.Choice<DVPSettlement, RequestAllocations, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.AllocationRequest>, damlTypes.ContractId<TokenStandard_Interfaces.AllocationRequest>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DVPSettlement, undefined>>;
  RequestAllocationsWithSyncCheck: damlTypes.Choice<DVPSettlement, RequestAllocationsWithSyncCheck, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either<string, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.AllocationRequest>, damlTypes.ContractId<TokenStandard_Interfaces.AllocationRequest>>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DVPSettlement, undefined>>;
  ExecuteAtomicDVP: damlTypes.Choice<DVPSettlement, ExecuteAtomicDVP, AtomicDVPResult, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DVPSettlement, undefined>>;
  CancelSettlement: damlTypes.Choice<DVPSettlement, CancelSettlement, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DVPSettlement, undefined>>;
  ExtendDeadline: damlTypes.Choice<DVPSettlement, ExtendDeadline, damlTypes.ContractId<DVPSettlement>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DVPSettlement, undefined>>;
  Archive: damlTypes.Choice<DVPSettlement, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DVPSettlement, undefined>>;
}
export declare const DVPSettlement:
  damlTypes.Template<DVPSettlement, undefined, '#CantonSuite:TokenStandard.DVP_Settlement:DVPSettlement'> &
  damlTypes.ToInterface<DVPSettlement, never> &
  DVPSettlementInterface;

export declare namespace DVPSettlement {
  export type CreateEvent = damlLedger.CreateEvent<DVPSettlement, undefined, typeof DVPSettlement.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DVPSettlement, typeof DVPSettlement.templateId>
  export type Event = damlLedger.Event<DVPSettlement, undefined, typeof DVPSettlement.templateId>
  export type QueryResult = damlLedger.QueryResult<DVPSettlement, undefined, typeof DVPSettlement.templateId>
}



export declare type WithdrawInstruction = {
  reason: string;
  withdrawMetadata: damlTypes.Map<string, string>;
};

export declare const WithdrawInstruction:
  damlTypes.Serializable<WithdrawInstruction> & {
  }
;


export declare type AbortInstruction = {
  reason: string;
  abortMetadata: damlTypes.Map<string, string>;
};

export declare const AbortInstruction:
  damlTypes.Serializable<AbortInstruction> & {
  }
;


export declare type ExecuteInstruction = {
  executionMetadata: damlTypes.Map<string, string>;
};

export declare const ExecuteInstruction:
  damlTypes.Serializable<ExecuteInstruction> & {
  }
;


export declare type AllocationInstruction_Impl = {
  holder: damlTypes.Party;
  instrument: TokenStandard_Interfaces.InstrumentId;
  amount: damlTypes.Numeric;
  settlementId: string;
  deadline: damlTypes.Time;
  settlementApp: damlTypes.Party;
  metadata: damlTypes.Map<string, string>;
  sourceHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare interface AllocationInstruction_ImplInterface {
  ExecuteInstruction: damlTypes.Choice<AllocationInstruction_Impl, ExecuteInstruction, damlTypes.ContractId<TokenStandard_Interfaces.Allocation>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AllocationInstruction_Impl, undefined>>;
  AbortInstruction: damlTypes.Choice<AllocationInstruction_Impl, AbortInstruction, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AllocationInstruction_Impl, undefined>>;
  WithdrawInstruction: damlTypes.Choice<AllocationInstruction_Impl, WithdrawInstruction, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AllocationInstruction_Impl, undefined>>;
  Archive: damlTypes.Choice<AllocationInstruction_Impl, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AllocationInstruction_Impl, undefined>>;
}
export declare const AllocationInstruction_Impl:
  damlTypes.Template<AllocationInstruction_Impl, undefined, '#CantonSuite:TokenStandard.DVP_Settlement:AllocationInstruction_Impl'> &
  damlTypes.ToInterface<AllocationInstruction_Impl, TokenStandard_Interfaces.AllocationInstruction> &
  AllocationInstruction_ImplInterface;

export declare namespace AllocationInstruction_Impl {
  export type CreateEvent = damlLedger.CreateEvent<AllocationInstruction_Impl, undefined, typeof AllocationInstruction_Impl.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<AllocationInstruction_Impl, typeof AllocationInstruction_Impl.templateId>
  export type Event = damlLedger.Event<AllocationInstruction_Impl, undefined, typeof AllocationInstruction_Impl.templateId>
  export type QueryResult = damlLedger.QueryResult<AllocationInstruction_Impl, undefined, typeof AllocationInstruction_Impl.templateId>
}



export declare type RejectRequest = {
  reason: string;
  rejectMetadata: damlTypes.Map<string, string>;
};

export declare const RejectRequest:
  damlTypes.Serializable<RejectRequest> & {
  }
;


export declare type AcceptRequest = {
  holdingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  acceptMetadata: damlTypes.Map<string, string>;
};

export declare const AcceptRequest:
  damlTypes.Serializable<AcceptRequest> & {
  }
;


export declare type AllocationRequest_Impl = {
  holder: damlTypes.Party;
  instrument: TokenStandard_Interfaces.InstrumentId;
  amount: damlTypes.Numeric;
  settlementId: string;
  deadline: damlTypes.Time;
  settlementApp: damlTypes.Party;
  metadata: damlTypes.Map<string, string>;
};

export declare interface AllocationRequest_ImplInterface {
  AcceptRequest: damlTypes.Choice<AllocationRequest_Impl, AcceptRequest, damlTypes.ContractId<TokenStandard_Interfaces.AllocationInstruction>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AllocationRequest_Impl, undefined>>;
  RejectRequest: damlTypes.Choice<AllocationRequest_Impl, RejectRequest, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AllocationRequest_Impl, undefined>>;
  Archive: damlTypes.Choice<AllocationRequest_Impl, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AllocationRequest_Impl, undefined>>;
}
export declare const AllocationRequest_Impl:
  damlTypes.Template<AllocationRequest_Impl, undefined, '#CantonSuite:TokenStandard.DVP_Settlement:AllocationRequest_Impl'> &
  damlTypes.ToInterface<AllocationRequest_Impl, TokenStandard_Interfaces.AllocationRequest> &
  AllocationRequest_ImplInterface;

export declare namespace AllocationRequest_Impl {
  export type CreateEvent = damlLedger.CreateEvent<AllocationRequest_Impl, undefined, typeof AllocationRequest_Impl.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<AllocationRequest_Impl, typeof AllocationRequest_Impl.templateId>
  export type Event = damlLedger.Event<AllocationRequest_Impl, undefined, typeof AllocationRequest_Impl.templateId>
  export type QueryResult = damlLedger.QueryResult<AllocationRequest_Impl, undefined, typeof AllocationRequest_Impl.templateId>
}



export declare type WithdrawAllocation = {
  reason: string;
  withdrawMetadata: damlTypes.Map<string, string>;
};

export declare const WithdrawAllocation:
  damlTypes.Serializable<WithdrawAllocation> & {
  }
;


export declare type Allocation_Impl = {
  owner: damlTypes.Party;
  instrument: TokenStandard_Interfaces.InstrumentId;
  amount: damlTypes.Numeric;
  settlementId: string;
  deadline: damlTypes.Time;
  settlementApp: damlTypes.Party;
  metadata: damlTypes.Map<string, string>;
  lockedHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare interface Allocation_ImplInterface {
  WithdrawAllocation: damlTypes.Choice<Allocation_Impl, WithdrawAllocation, damlTypes.ContractId<TokenStandard_Interfaces.Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Allocation_Impl, undefined>>;
  Archive: damlTypes.Choice<Allocation_Impl, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Allocation_Impl, undefined>>;
}
export declare const Allocation_Impl:
  damlTypes.Template<Allocation_Impl, undefined, '#CantonSuite:TokenStandard.DVP_Settlement:Allocation_Impl'> &
  damlTypes.ToInterface<Allocation_Impl, TokenStandard_Interfaces.Allocation> &
  Allocation_ImplInterface;

export declare namespace Allocation_Impl {
  export type CreateEvent = damlLedger.CreateEvent<Allocation_Impl, undefined, typeof Allocation_Impl.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Allocation_Impl, typeof Allocation_Impl.templateId>
  export type Event = damlLedger.Event<Allocation_Impl, undefined, typeof Allocation_Impl.templateId>
  export type QueryResult = damlLedger.QueryResult<Allocation_Impl, undefined, typeof Allocation_Impl.templateId>
}


