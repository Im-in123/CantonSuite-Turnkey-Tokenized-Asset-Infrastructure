// Generated from TokenStandard/FOP_Transfers.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Compliance_Vouchers from '../../Compliance/Vouchers/module';
import * as TokenStandard_Interfaces from '../../TokenStandard/Interfaces/module';

export declare type WithdrawComplianceTransfer = {
};

export declare const WithdrawComplianceTransfer:
  damlTypes.Serializable<WithdrawComplianceTransfer> & {
  }
;


export declare type RejectComplianceTransfer = {
};

export declare const RejectComplianceTransfer:
  damlTypes.Serializable<RejectComplianceTransfer> & {
  }
;


export declare type ApproveAndInitiate = {
  senderHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  senderVoucherCid: damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>;
  receiverVoucherCid: damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>;
};

export declare const ApproveAndInitiate:
  damlTypes.Serializable<ApproveAndInitiate> & {
  }
;


export declare type ComplianceGatedTransfer = {
  sender: damlTypes.Party;
  receiver: damlTypes.Party;
  assetId: string;
  issuer: damlTypes.Party;
  amount: damlTypes.Numeric;
  complianceParty: damlTypes.Party;
  deadline: damlTypes.Time;
  transferNotes: string;
};

export declare interface ComplianceGatedTransferInterface {
  ApproveAndInitiate: damlTypes.Choice<ComplianceGatedTransfer, ApproveAndInitiate, damlTypes.ContractId<TransferExecutionRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceGatedTransfer, undefined>>;
  RejectComplianceTransfer: damlTypes.Choice<ComplianceGatedTransfer, RejectComplianceTransfer, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceGatedTransfer, undefined>>;
  Archive: damlTypes.Choice<ComplianceGatedTransfer, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceGatedTransfer, undefined>>;
  WithdrawComplianceTransfer: damlTypes.Choice<ComplianceGatedTransfer, WithdrawComplianceTransfer, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceGatedTransfer, undefined>>;
}
export declare const ComplianceGatedTransfer:
  damlTypes.Template<ComplianceGatedTransfer, undefined, '#CantonSuite:TokenStandard.FOP_Transfers:ComplianceGatedTransfer'> &
  damlTypes.ToInterface<ComplianceGatedTransfer, never> &
  ComplianceGatedTransferInterface;

export declare namespace ComplianceGatedTransfer {
  export type CreateEvent = damlLedger.CreateEvent<ComplianceGatedTransfer, undefined, typeof ComplianceGatedTransfer.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ComplianceGatedTransfer, typeof ComplianceGatedTransfer.templateId>
  export type Event = damlLedger.Event<ComplianceGatedTransfer, undefined, typeof ComplianceGatedTransfer.templateId>
  export type QueryResult = damlLedger.QueryResult<ComplianceGatedTransfer, undefined, typeof ComplianceGatedTransfer.templateId>
}



export declare type ConfirmSend = {
  myHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  hoursUntilExpiry: damlTypes.Int;
};

export declare const ConfirmSend:
  damlTypes.Serializable<ConfirmSend> & {
  }
;


export declare type QuickSendRequest = {
  from: damlTypes.Party;
  to: damlTypes.Party;
  asset: string;
  issuer: damlTypes.Party;
  amount: damlTypes.Numeric;
  memo: string;
};

export declare interface QuickSendRequestInterface {
  ConfirmSend: damlTypes.Choice<QuickSendRequest, ConfirmSend, damlTypes.ContractId<TokenStandard_Interfaces.TransferInstruction>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<QuickSendRequest, undefined>>;
  Archive: damlTypes.Choice<QuickSendRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<QuickSendRequest, undefined>>;
}
export declare const QuickSendRequest:
  damlTypes.Template<QuickSendRequest, undefined, '#CantonSuite:TokenStandard.FOP_Transfers:QuickSendRequest'> &
  damlTypes.ToInterface<QuickSendRequest, never> &
  QuickSendRequestInterface;

export declare namespace QuickSendRequest {
  export type CreateEvent = damlLedger.CreateEvent<QuickSendRequest, undefined, typeof QuickSendRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<QuickSendRequest, typeof QuickSendRequest.templateId>
  export type Event = damlLedger.Event<QuickSendRequest, undefined, typeof QuickSendRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<QuickSendRequest, undefined, typeof QuickSendRequest.templateId>
}



export declare type AbortTransfer = {
  instructionCid: damlTypes.ContractId<TokenStandard_Interfaces.TransferInstruction>;
  reason: string;
};

export declare const AbortTransfer:
  damlTypes.Serializable<AbortTransfer> & {
  }
;


export declare type ExecuteTransfer = {
  instructionCid: damlTypes.ContractId<TokenStandard_Interfaces.TransferInstruction>;
  senderVoucherCid: damlTypes.ContractId<Compliance_Vouchers.ComplianceApprovalVoucher>;
};

export declare const ExecuteTransfer:
  damlTypes.Serializable<ExecuteTransfer> & {
  }
;


export declare type TransferExecutionHandler = {
  registry: damlTypes.Party;
  complianceParty: damlTypes.Party;
};

export declare interface TransferExecutionHandlerInterface {
  ExecuteTransfer: damlTypes.Choice<TransferExecutionHandler, ExecuteTransfer, damlTypes.ContractId<TransferExecutionRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TransferExecutionHandler, undefined>>;
  AbortTransfer: damlTypes.Choice<TransferExecutionHandler, AbortTransfer, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TransferExecutionHandler, undefined>>;
  Archive: damlTypes.Choice<TransferExecutionHandler, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TransferExecutionHandler, undefined>>;
}
export declare const TransferExecutionHandler:
  damlTypes.Template<TransferExecutionHandler, undefined, '#CantonSuite:TokenStandard.FOP_Transfers:TransferExecutionHandler'> &
  damlTypes.ToInterface<TransferExecutionHandler, never> &
  TransferExecutionHandlerInterface;

export declare namespace TransferExecutionHandler {
  export type CreateEvent = damlLedger.CreateEvent<TransferExecutionHandler, undefined, typeof TransferExecutionHandler.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<TransferExecutionHandler, typeof TransferExecutionHandler.templateId>
  export type Event = damlLedger.Event<TransferExecutionHandler, undefined, typeof TransferExecutionHandler.templateId>
  export type QueryResult = damlLedger.QueryResult<TransferExecutionHandler, undefined, typeof TransferExecutionHandler.templateId>
}



export declare type CancelProposal = {
};

export declare const CancelProposal:
  damlTypes.Serializable<CancelProposal> & {
  }
;


export declare type InitiateFOPTransfer = {
  senderHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  deadlineHours: damlTypes.Int;
  notes: string;
};

export declare const InitiateFOPTransfer:
  damlTypes.Serializable<InitiateFOPTransfer> & {
  }
;


export declare type InitiateFOPTransferWithSyncCheck = {
  senderHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  deadlineHours: damlTypes.Int;
  notes: string;
  senderCurrentSync: string;
  receiverCurrentSync: string;
  targetSync: string;
};

export declare const InitiateFOPTransferWithSyncCheck:
  damlTypes.Serializable<InitiateFOPTransferWithSyncCheck> & {
  }
;


export declare type CreateFOPTransfer = {
  sender: damlTypes.Party;
  receiver: damlTypes.Party;
  assetId: string;
  issuer: damlTypes.Party;
  amount: damlTypes.Numeric;
};

export declare interface CreateFOPTransferInterface {
  InitiateFOPTransferWithSyncCheck: damlTypes.Choice<CreateFOPTransfer, InitiateFOPTransferWithSyncCheck, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either<string, damlTypes.ContractId<TokenStandard_Interfaces.TransferInstruction>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CreateFOPTransfer, undefined>>;
  InitiateFOPTransfer: damlTypes.Choice<CreateFOPTransfer, InitiateFOPTransfer, damlTypes.ContractId<TokenStandard_Interfaces.TransferInstruction>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CreateFOPTransfer, undefined>>;
  CancelProposal: damlTypes.Choice<CreateFOPTransfer, CancelProposal, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CreateFOPTransfer, undefined>>;
  Archive: damlTypes.Choice<CreateFOPTransfer, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CreateFOPTransfer, undefined>>;
}
export declare const CreateFOPTransfer:
  damlTypes.Template<CreateFOPTransfer, undefined, '#CantonSuite:TokenStandard.FOP_Transfers:CreateFOPTransfer'> &
  damlTypes.ToInterface<CreateFOPTransfer, never> &
  CreateFOPTransferInterface;

export declare namespace CreateFOPTransfer {
  export type CreateEvent = damlLedger.CreateEvent<CreateFOPTransfer, undefined, typeof CreateFOPTransfer.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CreateFOPTransfer, typeof CreateFOPTransfer.templateId>
  export type Event = damlLedger.Event<CreateFOPTransfer, undefined, typeof CreateFOPTransfer.templateId>
  export type QueryResult = damlLedger.QueryResult<CreateFOPTransfer, undefined, typeof CreateFOPTransfer.templateId>
}



export declare type RejectTransfer = {
  reason: string;
};

export declare const RejectTransfer:
  damlTypes.Serializable<RejectTransfer> & {
  }
;


export declare type AcceptTransfer = {
};

export declare const AcceptTransfer:
  damlTypes.Serializable<AcceptTransfer> & {
  }
;


export declare type TransferExecutionRequest = {
  sender: damlTypes.Party;
  receiver: damlTypes.Party;
  instrument: TokenStandard_Interfaces.InstrumentId;
  amount: damlTypes.Numeric;
  senderHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  instructionCid: damlTypes.ContractId<TokenStandard_Interfaces.TransferInstruction>;
  executionMetadata: damlTypes.Map<string, string>;
};

export declare interface TransferExecutionRequestInterface {
  AcceptTransfer: damlTypes.Choice<TransferExecutionRequest, AcceptTransfer, TokenStandard_Interfaces.TransferResult, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TransferExecutionRequest, undefined>>;
  RejectTransfer: damlTypes.Choice<TransferExecutionRequest, RejectTransfer, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TransferExecutionRequest, undefined>>;
  Archive: damlTypes.Choice<TransferExecutionRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TransferExecutionRequest, undefined>>;
}
export declare const TransferExecutionRequest:
  damlTypes.Template<TransferExecutionRequest, undefined, '#CantonSuite:TokenStandard.FOP_Transfers:TransferExecutionRequest'> &
  damlTypes.ToInterface<TransferExecutionRequest, never> &
  TransferExecutionRequestInterface;

export declare namespace TransferExecutionRequest {
  export type CreateEvent = damlLedger.CreateEvent<TransferExecutionRequest, undefined, typeof TransferExecutionRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<TransferExecutionRequest, typeof TransferExecutionRequest.templateId>
  export type Event = damlLedger.Event<TransferExecutionRequest, undefined, typeof TransferExecutionRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<TransferExecutionRequest, undefined, typeof TransferExecutionRequest.templateId>
}



export declare type Withdraw = {
  reason: string;
  withdrawMetadata: damlTypes.Map<string, string>;
};

export declare const Withdraw:
  damlTypes.Serializable<Withdraw> & {
  }
;


export declare type Abort = {
  reason: string;
  abortMetadata: damlTypes.Map<string, string>;
};

export declare const Abort:
  damlTypes.Serializable<Abort> & {
  }
;


export declare type InitiateExecution = {
  executionMetadata: damlTypes.Map<string, string>;
};

export declare const InitiateExecution:
  damlTypes.Serializable<InitiateExecution> & {
  }
;


export declare type TransferInstruction_Impl = {
  sender: damlTypes.Party;
  receiver: damlTypes.Party;
  instrument: TokenStandard_Interfaces.InstrumentId;
  amount: damlTypes.Numeric;
  deadline: damlTypes.Time;
  status: TokenStandard_Interfaces.TransferStatus;
  metadata: damlTypes.Map<string, string>;
  senderHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare interface TransferInstruction_ImplInterface {
  InitiateExecution: damlTypes.Choice<TransferInstruction_Impl, InitiateExecution, damlTypes.ContractId<TransferExecutionRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TransferInstruction_Impl, undefined>>;
  Abort: damlTypes.Choice<TransferInstruction_Impl, Abort, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TransferInstruction_Impl, undefined>>;
  Withdraw: damlTypes.Choice<TransferInstruction_Impl, Withdraw, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TransferInstruction_Impl, undefined>>;
  Archive: damlTypes.Choice<TransferInstruction_Impl, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TransferInstruction_Impl, undefined>>;
}
export declare const TransferInstruction_Impl:
  damlTypes.Template<TransferInstruction_Impl, undefined, '#CantonSuite:TokenStandard.FOP_Transfers:TransferInstruction_Impl'> &
  damlTypes.ToInterface<TransferInstruction_Impl, TokenStandard_Interfaces.TransferInstruction> &
  TransferInstruction_ImplInterface;

export declare namespace TransferInstruction_Impl {
  export type CreateEvent = damlLedger.CreateEvent<TransferInstruction_Impl, undefined, typeof TransferInstruction_Impl.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<TransferInstruction_Impl, typeof TransferInstruction_Impl.templateId>
  export type Event = damlLedger.Event<TransferInstruction_Impl, undefined, typeof TransferInstruction_Impl.templateId>
  export type QueryResult = damlLedger.QueryResult<TransferInstruction_Impl, undefined, typeof TransferInstruction_Impl.templateId>
}


