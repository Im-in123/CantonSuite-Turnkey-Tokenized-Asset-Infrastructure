// Generated from TokenStandard/Interfaces.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Allocation = damlTypes.Interface<'7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:Allocation'> & AllocationView;
export declare interface AllocationInterface {
  Archive: damlTypes.Choice<Allocation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Allocation, undefined>>;
}
export declare const Allocation:
  damlTypes.InterfaceCompanion<Allocation, undefined, '7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:Allocation'> &
  damlTypes.FromTemplate<Allocation, unknown> &
  AllocationInterface;


export declare type AllocationInstruction = damlTypes.Interface<'7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:AllocationInstruction'> & AllocationInstructionView;
export declare interface AllocationInstructionInterface {
  Archive: damlTypes.Choice<AllocationInstruction, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<AllocationInstruction, undefined>>;
}
export declare const AllocationInstruction:
  damlTypes.InterfaceCompanion<AllocationInstruction, undefined, '7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:AllocationInstruction'> &
  damlTypes.FromTemplate<AllocationInstruction, unknown> &
  AllocationInstructionInterface;


export declare type AllocationRequest = damlTypes.Interface<'7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:AllocationRequest'> & AllocationRequestView;
export declare interface AllocationRequestInterface {
  Archive: damlTypes.Choice<AllocationRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<AllocationRequest, undefined>>;
}
export declare const AllocationRequest:
  damlTypes.InterfaceCompanion<AllocationRequest, undefined, '7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:AllocationRequest'> &
  damlTypes.FromTemplate<AllocationRequest, unknown> &
  AllocationRequestInterface;


export declare type Holding = damlTypes.Interface<'7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:Holding'> & HoldingView;
export declare interface HoldingInterface {
  Archive: damlTypes.Choice<Holding, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Holding, undefined>>;
}
export declare const Holding:
  damlTypes.InterfaceCompanion<Holding, undefined, '7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:Holding'> &
  damlTypes.FromTemplate<Holding, unknown> &
  HoldingInterface;


export declare type TokenMetadata = damlTypes.Interface<'7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:TokenMetadata'> & TokenMetadataView;
export declare interface TokenMetadataInterface {
  Archive: damlTypes.Choice<TokenMetadata, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<TokenMetadata, undefined>>;
}
export declare const TokenMetadata:
  damlTypes.InterfaceCompanion<TokenMetadata, undefined, '7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:TokenMetadata'> &
  damlTypes.FromTemplate<TokenMetadata, unknown> &
  TokenMetadataInterface;


export declare type TransferInstruction = damlTypes.Interface<'7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:TransferInstruction'> & TransferInstructionView;
export declare interface TransferInstructionInterface {
  Archive: damlTypes.Choice<TransferInstruction, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<TransferInstruction, undefined>>;
}
export declare const TransferInstruction:
  damlTypes.InterfaceCompanion<TransferInstruction, undefined, '7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:TransferInstruction'> &
  damlTypes.FromTemplate<TransferInstruction, unknown> &
  TransferInstructionInterface;


export declare type AllocationInstructionView = {
  holder: damlTypes.Party;
  instrument: InstrumentId;
  amount: damlTypes.Numeric;
  settlementId: string;
  deadline: damlTypes.Time;
  settlementApp: damlTypes.Party;
  metadata: damlTypes.Map<string, string>;
};

export declare const AllocationInstructionView:
  damlTypes.Serializable<AllocationInstructionView> & {
  }
;


export declare type AllocationRequestView = {
  holder: damlTypes.Party;
  instrument: InstrumentId;
  amount: damlTypes.Numeric;
  settlementId: string;
  deadline: damlTypes.Time;
  settlementApp: damlTypes.Party;
  metadata: damlTypes.Map<string, string>;
};

export declare const AllocationRequestView:
  damlTypes.Serializable<AllocationRequestView> & {
  }
;


export declare type AllocationView = {
  owner: damlTypes.Party;
  instrument: InstrumentId;
  amount: damlTypes.Numeric;
  settlementId: string;
  deadline: damlTypes.Time;
  settlementApp: damlTypes.Party;
  metadata: damlTypes.Map<string, string>;
};

export declare const AllocationView:
  damlTypes.Serializable<AllocationView> & {
  }
;


export declare type AllocationResult = {
  receiverHoldingCid: damlTypes.ContractId<Holding>;
  resultMetadata: damlTypes.Map<string, string>;
};

export declare const AllocationResult:
  damlTypes.Serializable<AllocationResult> & {
  }
;


export declare type TransferInstructionView = {
  sender: damlTypes.Party;
  receiver: damlTypes.Party;
  instrument: InstrumentId;
  amount: damlTypes.Numeric;
  deadline: damlTypes.Time;
  status: TransferStatus;
  metadata: damlTypes.Map<string, string>;
};

export declare const TransferInstructionView:
  damlTypes.Serializable<TransferInstructionView> & {
  }
;


export declare type TransferResult = {
  receiverHoldingCid: damlTypes.ContractId<Holding>;
  resultMetadata: damlTypes.Map<string, string>;
};

export declare const TransferResult:
  damlTypes.Serializable<TransferResult> & {
  }
;


export declare type TransferStatus =
  | 'Pending'
  | 'Executed'
  | 'Aborted'
  | 'Withdrawn'
;

export declare const TransferStatus:
  damlTypes.Serializable<TransferStatus> & {
  }
& { readonly keys: TransferStatus[] } & { readonly [e in TransferStatus]: e }
;


export declare type HoldingView = {
  instrument: InstrumentId;
  account: AccountId;
  amount: damlTypes.Numeric;
  locked: boolean;
  lockContext: damlTypes.Optional<string>;
  metadata: damlTypes.Map<string, string>;
};

export declare const HoldingView:
  damlTypes.Serializable<HoldingView> & {
  }
;


export declare type TokenMetadataView = {
  instrumentId: InstrumentId;
  name: string;
  symbol: string;
  assetType: string;
  registryUrl: damlTypes.Optional<string>;
  metadata: damlTypes.Map<string, string>;
};

export declare const TokenMetadataView:
  damlTypes.Serializable<TokenMetadataView> & {
  }
;


export declare type AccountId = {
  custodian: damlTypes.Party;
  owner: damlTypes.Party;
  id: string;
};

export declare const AccountId:
  damlTypes.Serializable<AccountId> & {
  }
;


export declare type InstrumentId = {
  depository: damlTypes.Party;
  issuer: damlTypes.Party;
  id: string;
  version: string;
};

export declare const InstrumentId:
  damlTypes.Serializable<InstrumentId> & {
  }
;

