// Generated from Lending/Pool.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Lending_Types from '../../Lending/Types/module';

export declare type ProcessMixedBatch = {
  depositCids: damlTypes.ContractId<DepositEffect>[];
  withdrawalCids: damlTypes.ContractId<WithdrawalEffect>[];
  borrowCids: damlTypes.ContractId<BorrowEffect>[];
  repaymentCids: damlTypes.ContractId<RepaymentEffect>[];
};

export declare const ProcessMixedBatch:
  damlTypes.Serializable<ProcessMixedBatch> & {
  }
;


export declare type ProcessWithdrawalBatch = {
  withdrawalEffectCids: damlTypes.ContractId<WithdrawalEffect>[];
};

export declare const ProcessWithdrawalBatch:
  damlTypes.Serializable<ProcessWithdrawalBatch> & {
  }
;


export declare type ProcessDepositBatch = {
  depositEffectCids: damlTypes.ContractId<DepositEffect>[];
};

export declare const ProcessDepositBatch:
  damlTypes.Serializable<ProcessDepositBatch> & {
  }
;


export declare type BatchEffectProcessor = {
  poolOperator: damlTypes.Party;
  poolCid: damlTypes.ContractId<LendingPool>;
};

export declare interface BatchEffectProcessorInterface {
  ProcessDepositBatch: damlTypes.Choice<BatchEffectProcessor, ProcessDepositBatch, damlTypes.ContractId<LendingPool>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BatchEffectProcessor, undefined>>;
  ProcessWithdrawalBatch: damlTypes.Choice<BatchEffectProcessor, ProcessWithdrawalBatch, damlTypes.ContractId<LendingPool>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BatchEffectProcessor, undefined>>;
  Archive: damlTypes.Choice<BatchEffectProcessor, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BatchEffectProcessor, undefined>>;
  ProcessMixedBatch: damlTypes.Choice<BatchEffectProcessor, ProcessMixedBatch, damlTypes.ContractId<LendingPool>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BatchEffectProcessor, undefined>>;
}
export declare const BatchEffectProcessor:
  damlTypes.Template<BatchEffectProcessor, undefined, '#CantonSuite:Lending.Pool:BatchEffectProcessor'> &
  damlTypes.ToInterface<BatchEffectProcessor, never> &
  BatchEffectProcessorInterface;

export declare namespace BatchEffectProcessor {
  export type CreateEvent = damlLedger.CreateEvent<BatchEffectProcessor, undefined, typeof BatchEffectProcessor.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<BatchEffectProcessor, typeof BatchEffectProcessor.templateId>
  export type Event = damlLedger.Event<BatchEffectProcessor, undefined, typeof BatchEffectProcessor.templateId>
  export type QueryResult = damlLedger.QueryResult<BatchEffectProcessor, undefined, typeof BatchEffectProcessor.templateId>
}



export declare type CancelRepaymentEffect = {
};

export declare const CancelRepaymentEffect:
  damlTypes.Serializable<CancelRepaymentEffect> & {
  }
;


export declare type ApplyRepaymentEffect = {
};

export declare const ApplyRepaymentEffect:
  damlTypes.Serializable<ApplyRepaymentEffect> & {
  }
;


export declare type RepaymentEffect = {
  poolOperator: damlTypes.Party;
  borrower: damlTypes.Party;
  poolCid: damlTypes.ContractId<LendingPool>;
  assetId: string;
  principal: damlTypes.Numeric;
  interest: damlTypes.Numeric;
  timestamp: damlTypes.Time;
  effectId: string;
  poolSequence: damlTypes.Int;
};

export declare interface RepaymentEffectInterface {
  ApplyRepaymentEffect: damlTypes.Choice<RepaymentEffect, ApplyRepaymentEffect, damlTypes.ContractId<LendingPool>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RepaymentEffect, undefined>>;
  CancelRepaymentEffect: damlTypes.Choice<RepaymentEffect, CancelRepaymentEffect, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RepaymentEffect, undefined>>;
  Archive: damlTypes.Choice<RepaymentEffect, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RepaymentEffect, undefined>>;
}
export declare const RepaymentEffect:
  damlTypes.Template<RepaymentEffect, undefined, '#CantonSuite:Lending.Pool:RepaymentEffect'> &
  damlTypes.ToInterface<RepaymentEffect, never> &
  RepaymentEffectInterface;

export declare namespace RepaymentEffect {
  export type CreateEvent = damlLedger.CreateEvent<RepaymentEffect, undefined, typeof RepaymentEffect.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RepaymentEffect, typeof RepaymentEffect.templateId>
  export type Event = damlLedger.Event<RepaymentEffect, undefined, typeof RepaymentEffect.templateId>
  export type QueryResult = damlLedger.QueryResult<RepaymentEffect, undefined, typeof RepaymentEffect.templateId>
}



export declare type CancelBorrowEffect = {
};

export declare const CancelBorrowEffect:
  damlTypes.Serializable<CancelBorrowEffect> & {
  }
;


export declare type ApplyBorrowEffect = {
};

export declare const ApplyBorrowEffect:
  damlTypes.Serializable<ApplyBorrowEffect> & {
  }
;


export declare type BorrowEffect = {
  poolOperator: damlTypes.Party;
  borrower: damlTypes.Party;
  poolCid: damlTypes.ContractId<LendingPool>;
  assetId: string;
  amount: damlTypes.Numeric;
  timestamp: damlTypes.Time;
  effectId: string;
  poolSequence: damlTypes.Int;
};

export declare interface BorrowEffectInterface {
  ApplyBorrowEffect: damlTypes.Choice<BorrowEffect, ApplyBorrowEffect, damlTypes.ContractId<LendingPool>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BorrowEffect, undefined>>;
  CancelBorrowEffect: damlTypes.Choice<BorrowEffect, CancelBorrowEffect, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BorrowEffect, undefined>>;
  Archive: damlTypes.Choice<BorrowEffect, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BorrowEffect, undefined>>;
}
export declare const BorrowEffect:
  damlTypes.Template<BorrowEffect, undefined, '#CantonSuite:Lending.Pool:BorrowEffect'> &
  damlTypes.ToInterface<BorrowEffect, never> &
  BorrowEffectInterface;

export declare namespace BorrowEffect {
  export type CreateEvent = damlLedger.CreateEvent<BorrowEffect, undefined, typeof BorrowEffect.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<BorrowEffect, typeof BorrowEffect.templateId>
  export type Event = damlLedger.Event<BorrowEffect, undefined, typeof BorrowEffect.templateId>
  export type QueryResult = damlLedger.QueryResult<BorrowEffect, undefined, typeof BorrowEffect.templateId>
}



export declare type CancelWithdrawalEffect = {
};

export declare const CancelWithdrawalEffect:
  damlTypes.Serializable<CancelWithdrawalEffect> & {
  }
;


export declare type ApplyWithdrawalEffect = {
};

export declare const ApplyWithdrawalEffect:
  damlTypes.Serializable<ApplyWithdrawalEffect> & {
  }
;


export declare type WithdrawalEffect = {
  poolOperator: damlTypes.Party;
  user: damlTypes.Party;
  poolCid: damlTypes.ContractId<LendingPool>;
  assetId: string;
  shares: damlTypes.Numeric;
  timestamp: damlTypes.Time;
  effectId: string;
  poolSequence: damlTypes.Int;
};

export declare interface WithdrawalEffectInterface {
  ApplyWithdrawalEffect: damlTypes.Choice<WithdrawalEffect, ApplyWithdrawalEffect, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<LendingPool>, damlTypes.Numeric>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<WithdrawalEffect, undefined>>;
  CancelWithdrawalEffect: damlTypes.Choice<WithdrawalEffect, CancelWithdrawalEffect, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<WithdrawalEffect, undefined>>;
  Archive: damlTypes.Choice<WithdrawalEffect, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<WithdrawalEffect, undefined>>;
}
export declare const WithdrawalEffect:
  damlTypes.Template<WithdrawalEffect, undefined, '#CantonSuite:Lending.Pool:WithdrawalEffect'> &
  damlTypes.ToInterface<WithdrawalEffect, never> &
  WithdrawalEffectInterface;

export declare namespace WithdrawalEffect {
  export type CreateEvent = damlLedger.CreateEvent<WithdrawalEffect, undefined, typeof WithdrawalEffect.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<WithdrawalEffect, typeof WithdrawalEffect.templateId>
  export type Event = damlLedger.Event<WithdrawalEffect, undefined, typeof WithdrawalEffect.templateId>
  export type QueryResult = damlLedger.QueryResult<WithdrawalEffect, undefined, typeof WithdrawalEffect.templateId>
}



export declare type CancelDepositEffect = {
};

export declare const CancelDepositEffect:
  damlTypes.Serializable<CancelDepositEffect> & {
  }
;


export declare type ApplyDepositEffect = {
};

export declare const ApplyDepositEffect:
  damlTypes.Serializable<ApplyDepositEffect> & {
  }
;


export declare type DepositEffect = {
  poolOperator: damlTypes.Party;
  user: damlTypes.Party;
  poolCid: damlTypes.ContractId<LendingPool>;
  assetId: string;
  amount: damlTypes.Numeric;
  timestamp: damlTypes.Time;
  effectId: string;
  poolSequence: damlTypes.Int;
};

export declare interface DepositEffectInterface {
  ApplyDepositEffect: damlTypes.Choice<DepositEffect, ApplyDepositEffect, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<LendingPool>, damlTypes.Numeric>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DepositEffect, undefined>>;
  CancelDepositEffect: damlTypes.Choice<DepositEffect, CancelDepositEffect, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DepositEffect, undefined>>;
  Archive: damlTypes.Choice<DepositEffect, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DepositEffect, undefined>>;
}
export declare const DepositEffect:
  damlTypes.Template<DepositEffect, undefined, '#CantonSuite:Lending.Pool:DepositEffect'> &
  damlTypes.ToInterface<DepositEffect, never> &
  DepositEffectInterface;

export declare namespace DepositEffect {
  export type CreateEvent = damlLedger.CreateEvent<DepositEffect, undefined, typeof DepositEffect.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DepositEffect, typeof DepositEffect.templateId>
  export type Event = damlLedger.Event<DepositEffect, undefined, typeof DepositEffect.templateId>
  export type QueryResult = damlLedger.QueryResult<DepositEffect, undefined, typeof DepositEffect.templateId>
}



export declare type InitiateClosure = {
};

export declare const InitiateClosure:
  damlTypes.Serializable<InitiateClosure> & {
  }
;


export declare type UpdateInterestRate = {
  newRate: damlTypes.Numeric;
};

export declare const UpdateInterestRate:
  damlTypes.Serializable<UpdateInterestRate> & {
  }
;


export declare type ValidateWithdrawal = {
  shares: damlTypes.Numeric;
  user: damlTypes.Party;
};

export declare const ValidateWithdrawal:
  damlTypes.Serializable<ValidateWithdrawal> & {
  }
;


export declare type ValidateDeposit = {
  amount: damlTypes.Numeric;
  user: damlTypes.Party;
};

export declare const ValidateDeposit:
  damlTypes.Serializable<ValidateDeposit> & {
  }
;


export declare type GetSharePrice = {
};

export declare const GetSharePrice:
  damlTypes.Serializable<GetSharePrice> & {
  }
;


export declare type LendingPool = {
  poolOperator: damlTypes.Party;
  complianceParty: damlTypes.Party;
  assetId: string;
  totalLiquidity: damlTypes.Numeric;
  totalBorrowed: damlTypes.Numeric;
  totalShares: damlTypes.Numeric;
  interestRate: damlTypes.Numeric;
  collateralRatio: damlTypes.Numeric;
  status: Lending_Types.PoolStatus;
  regulatorParty: damlTypes.Party;
  sequenceNumber: damlTypes.Int;
};

export declare interface LendingPoolInterface {
  GetSharePrice: damlTypes.Choice<LendingPool, GetSharePrice, damlTypes.Numeric, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
  ValidateDeposit: damlTypes.Choice<LendingPool, ValidateDeposit, boolean, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
  ValidateWithdrawal: damlTypes.Choice<LendingPool, ValidateWithdrawal, boolean, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
  UpdateInterestRate: damlTypes.Choice<LendingPool, UpdateInterestRate, damlTypes.ContractId<LendingPool>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
  InitiateClosure: damlTypes.Choice<LendingPool, InitiateClosure, damlTypes.ContractId<LendingPool>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
  Archive: damlTypes.Choice<LendingPool, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
}
export declare const LendingPool:
  damlTypes.Template<LendingPool, undefined, '#CantonSuite:Lending.Pool:LendingPool'> &
  damlTypes.ToInterface<LendingPool, never> &
  LendingPoolInterface;

export declare namespace LendingPool {
  export type CreateEvent = damlLedger.CreateEvent<LendingPool, undefined, typeof LendingPool.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<LendingPool, typeof LendingPool.templateId>
  export type Event = damlLedger.Event<LendingPool, undefined, typeof LendingPool.templateId>
  export type QueryResult = damlLedger.QueryResult<LendingPool, undefined, typeof LendingPool.templateId>
}


