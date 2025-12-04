// Generated from Lending.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Portfolio from '../Portfolio/module';

export declare type LendingRegulatorView = {
  regulator: damlTypes.Party;
  poolOperator: damlTypes.Party;
  loanId: string;
  assetId: string;
  principal: damlTypes.Numeric;
  collateralRatio: damlTypes.Numeric;
  interestRate: damlTypes.Numeric;
  status: string;
  originationDate: damlTypes.Time;
  maturityDate: damlTypes.Time;
  eventType: string;
  eventTimestamp: damlTypes.Time;
};

export declare interface LendingRegulatorViewInterface {
  Archive: damlTypes.Choice<LendingRegulatorView, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingRegulatorView, undefined>>;
}
export declare const LendingRegulatorView:
  damlTypes.Template<LendingRegulatorView, undefined, '#CantonSuite:Lending:LendingRegulatorView'> &
  damlTypes.ToInterface<LendingRegulatorView, never> &
  LendingRegulatorViewInterface;

export declare namespace LendingRegulatorView {
  export type CreateEvent = damlLedger.CreateEvent<LendingRegulatorView, undefined, typeof LendingRegulatorView.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<LendingRegulatorView, typeof LendingRegulatorView.templateId>
  export type Event = damlLedger.Event<LendingRegulatorView, undefined, typeof LendingRegulatorView.templateId>
  export type QueryResult = damlLedger.QueryResult<LendingRegulatorView, undefined, typeof LendingRegulatorView.templateId>
}



export declare type ExtendLoan = {
  additionalDays: damlTypes.Int;
};

export declare const ExtendLoan:
  damlTypes.Serializable<ExtendLoan> & {
  }
;


export declare type LiquidateCollateral = {
  poolCid: damlTypes.ContractId<LendingPool>;
};

export declare const LiquidateCollateral:
  damlTypes.Serializable<LiquidateCollateral> & {
  }
;


export declare type RepayLoan = {
  repaymentAllocCid: damlTypes.ContractId<Portfolio.Allocation>;
  poolCid: damlTypes.ContractId<LendingPool>;
};

export declare const RepayLoan:
  damlTypes.Serializable<RepayLoan> & {
  }
;


export declare type Loan = {
  borrower: damlTypes.Party;
  lender: damlTypes.Party;
  assetId: string;
  principal: damlTypes.Numeric;
  interestRate: damlTypes.Numeric;
  collateralAssetId: string;
  collateralAmount: damlTypes.Numeric;
  collateralLocked: damlTypes.ContractId<Portfolio.Allocation>;
  originationDate: damlTypes.Time;
  maturityDate: damlTypes.Time;
  status: LoanStatus;
  regulatorParty: damlTypes.Party;
  complianceParty: damlTypes.Party;
};

export declare interface LoanInterface {
  RepayLoan: damlTypes.Choice<Loan, RepayLoan, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<damlTypes.ContractId<Portfolio.Allocation>, damlTypes.ContractId<LendingPool>, damlTypes.ContractId<LendingRegulatorView>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Loan, undefined>>;
  LiquidateCollateral: damlTypes.Choice<Loan, LiquidateCollateral, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<damlTypes.ContractId<Portfolio.Allocation>, damlTypes.ContractId<LendingPool>, damlTypes.ContractId<LendingRegulatorView>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Loan, undefined>>;
  Archive: damlTypes.Choice<Loan, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Loan, undefined>>;
  ExtendLoan: damlTypes.Choice<Loan, ExtendLoan, damlTypes.ContractId<Loan>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Loan, undefined>>;
}
export declare const Loan:
  damlTypes.Template<Loan, undefined, '#CantonSuite:Lending:Loan'> &
  damlTypes.ToInterface<Loan, never> &
  LoanInterface;

export declare namespace Loan {
  export type CreateEvent = damlLedger.CreateEvent<Loan, undefined, typeof Loan.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Loan, typeof Loan.templateId>
  export type Event = damlLedger.Event<Loan, undefined, typeof Loan.templateId>
  export type QueryResult = damlLedger.QueryResult<Loan, undefined, typeof Loan.templateId>
}



export declare type CancelRequest = {
};

export declare const CancelRequest:
  damlTypes.Serializable<CancelRequest> & {
  }
;


export declare type RejectLoan = {
};

export declare const RejectLoan:
  damlTypes.Serializable<RejectLoan> & {
  }
;


export declare type ApproveLoan = {
  poolCid: damlTypes.ContractId<LendingPool>;
};

export declare const ApproveLoan:
  damlTypes.Serializable<ApproveLoan> & {
  }
;


export declare type LoanRequest = {
  borrower: damlTypes.Party;
  poolOperator: damlTypes.Party;
  assetId: string;
  requestedAmount: damlTypes.Numeric;
  collateralAssetId: string;
  collateralAmount: damlTypes.Numeric;
  collateralCid: damlTypes.ContractId<Portfolio.Allocation>;
  durationDays: damlTypes.Int;
  createdAt: damlTypes.Time;
  complianceParty: damlTypes.Party;
  regulatorParty: damlTypes.Party;
};

export declare interface LoanRequestInterface {
  ApproveLoan: damlTypes.Choice<LoanRequest, ApproveLoan, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Loan>, damlTypes.ContractId<LendingRegulatorView>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LoanRequest, undefined>>;
  Archive: damlTypes.Choice<LoanRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LoanRequest, undefined>>;
  RejectLoan: damlTypes.Choice<LoanRequest, RejectLoan, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LoanRequest, undefined>>;
  CancelRequest: damlTypes.Choice<LoanRequest, CancelRequest, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LoanRequest, undefined>>;
}
export declare const LoanRequest:
  damlTypes.Template<LoanRequest, undefined, '#CantonSuite:Lending:LoanRequest'> &
  damlTypes.ToInterface<LoanRequest, never> &
  LoanRequestInterface;

export declare namespace LoanRequest {
  export type CreateEvent = damlLedger.CreateEvent<LoanRequest, undefined, typeof LoanRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<LoanRequest, typeof LoanRequest.templateId>
  export type Event = damlLedger.Event<LoanRequest, undefined, typeof LoanRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<LoanRequest, undefined, typeof LoanRequest.templateId>
}



export declare type CancelWithdrawalRequest = {
};

export declare const CancelWithdrawalRequest:
  damlTypes.Serializable<CancelWithdrawalRequest> & {
  }
;


export declare type RejectWithdrawal = {
};

export declare const RejectWithdrawal:
  damlTypes.Serializable<RejectWithdrawal> & {
  }
;


export declare type ApproveWithdrawal = {
  poolCid: damlTypes.ContractId<LendingPool>;
};

export declare const ApproveWithdrawal:
  damlTypes.Serializable<ApproveWithdrawal> & {
  }
;


export declare type WithdrawalRequest = {
  lender: damlTypes.Party;
  poolOperator: damlTypes.Party;
  assetId: string;
  shares: damlTypes.Numeric;
};

export declare interface WithdrawalRequestInterface {
  Archive: damlTypes.Choice<WithdrawalRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<WithdrawalRequest, undefined>>;
  ApproveWithdrawal: damlTypes.Choice<WithdrawalRequest, ApproveWithdrawal, damlTypes.ContractId<Portfolio.Allocation>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<WithdrawalRequest, undefined>>;
  RejectWithdrawal: damlTypes.Choice<WithdrawalRequest, RejectWithdrawal, damlTypes.ContractId<LenderShare>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<WithdrawalRequest, undefined>>;
  CancelWithdrawalRequest: damlTypes.Choice<WithdrawalRequest, CancelWithdrawalRequest, damlTypes.ContractId<LenderShare>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<WithdrawalRequest, undefined>>;
}
export declare const WithdrawalRequest:
  damlTypes.Template<WithdrawalRequest, undefined, '#CantonSuite:Lending:WithdrawalRequest'> &
  damlTypes.ToInterface<WithdrawalRequest, never> &
  WithdrawalRequestInterface;

export declare namespace WithdrawalRequest {
  export type CreateEvent = damlLedger.CreateEvent<WithdrawalRequest, undefined, typeof WithdrawalRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<WithdrawalRequest, typeof WithdrawalRequest.templateId>
  export type Event = damlLedger.Event<WithdrawalRequest, undefined, typeof WithdrawalRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<WithdrawalRequest, undefined, typeof WithdrawalRequest.templateId>
}



export declare type RequestWithdrawal = {
  sharesToWithdraw: damlTypes.Numeric;
};

export declare const RequestWithdrawal:
  damlTypes.Serializable<RequestWithdrawal> & {
  }
;


export declare type LenderShare = {
  lender: damlTypes.Party;
  poolOperator: damlTypes.Party;
  assetId: string;
  shareAmount: damlTypes.Numeric;
};

export declare interface LenderShareInterface {
  Archive: damlTypes.Choice<LenderShare, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LenderShare, undefined>>;
  RequestWithdrawal: damlTypes.Choice<LenderShare, RequestWithdrawal, damlTypes.ContractId<WithdrawalRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LenderShare, undefined>>;
}
export declare const LenderShare:
  damlTypes.Template<LenderShare, undefined, '#CantonSuite:Lending:LenderShare'> &
  damlTypes.ToInterface<LenderShare, never> &
  LenderShareInterface;

export declare namespace LenderShare {
  export type CreateEvent = damlLedger.CreateEvent<LenderShare, undefined, typeof LenderShare.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<LenderShare, typeof LenderShare.templateId>
  export type Event = damlLedger.Event<LenderShare, undefined, typeof LenderShare.templateId>
  export type QueryResult = damlLedger.QueryResult<LenderShare, undefined, typeof LenderShare.templateId>
}



export declare type CancelDepositRequest = {
};

export declare const CancelDepositRequest:
  damlTypes.Serializable<CancelDepositRequest> & {
  }
;


export declare type AcceptDeposit = {
  poolCid: damlTypes.ContractId<LendingPool>;
};

export declare const AcceptDeposit:
  damlTypes.Serializable<AcceptDeposit> & {
  }
;


export declare type DepositRequest = {
  lender: damlTypes.Party;
  poolOperator: damlTypes.Party;
  assetId: string;
  amount: damlTypes.Numeric;
};

export declare interface DepositRequestInterface {
  Archive: damlTypes.Choice<DepositRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DepositRequest, undefined>>;
  AcceptDeposit: damlTypes.Choice<DepositRequest, AcceptDeposit, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<LenderShare>, damlTypes.ContractId<LendingPool>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DepositRequest, undefined>>;
  CancelDepositRequest: damlTypes.Choice<DepositRequest, CancelDepositRequest, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DepositRequest, undefined>>;
}
export declare const DepositRequest:
  damlTypes.Template<DepositRequest, undefined, '#CantonSuite:Lending:DepositRequest'> &
  damlTypes.ToInterface<DepositRequest, never> &
  DepositRequestInterface;

export declare namespace DepositRequest {
  export type CreateEvent = damlLedger.CreateEvent<DepositRequest, undefined, typeof DepositRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DepositRequest, typeof DepositRequest.templateId>
  export type Event = damlLedger.Event<DepositRequest, undefined, typeof DepositRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<DepositRequest, undefined, typeof DepositRequest.templateId>
}



export declare type UpdatePoolOnDefault = {
  loanAmount: damlTypes.Numeric;
};

export declare const UpdatePoolOnDefault:
  damlTypes.Serializable<UpdatePoolOnDefault> & {
  }
;


export declare type UpdatePoolOnRepayment = {
  principal: damlTypes.Numeric;
  interest: damlTypes.Numeric;
};

export declare const UpdatePoolOnRepayment:
  damlTypes.Serializable<UpdatePoolOnRepayment> & {
  }
;


export declare type UpdatePoolOnBorrow = {
  amount: damlTypes.Numeric;
};

export declare const UpdatePoolOnBorrow:
  damlTypes.Serializable<UpdatePoolOnBorrow> & {
  }
;


export declare type ProcessWithdrawal = {
  shares: damlTypes.Numeric;
};

export declare const ProcessWithdrawal:
  damlTypes.Serializable<ProcessWithdrawal> & {
  }
;


export declare type ProcessDeposit = {
  amount: damlTypes.Numeric;
};

export declare const ProcessDeposit:
  damlTypes.Serializable<ProcessDeposit> & {
  }
;


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


export declare type GetSharePrice = {
};

export declare const GetSharePrice:
  damlTypes.Serializable<GetSharePrice> & {
  }
;


export declare type LendingPool = {
  poolOperator: damlTypes.Party;
  assetId: string;
  totalLiquidity: damlTypes.Numeric;
  totalBorrowed: damlTypes.Numeric;
  totalShares: damlTypes.Numeric;
  interestRate: damlTypes.Numeric;
  collateralRatio: damlTypes.Numeric;
  status: PoolStatus;
  observers: damlTypes.Party[];
  regulatorParty: damlTypes.Party;
};

export declare interface LendingPoolInterface {
  GetSharePrice: damlTypes.Choice<LendingPool, GetSharePrice, damlTypes.Numeric, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
  ProcessDeposit: damlTypes.Choice<LendingPool, ProcessDeposit, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<LendingPool>, damlTypes.Numeric>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
  ProcessWithdrawal: damlTypes.Choice<LendingPool, ProcessWithdrawal, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<LendingPool>, damlTypes.Numeric>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
  Archive: damlTypes.Choice<LendingPool, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
  UpdateInterestRate: damlTypes.Choice<LendingPool, UpdateInterestRate, damlTypes.ContractId<LendingPool>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
  InitiateClosure: damlTypes.Choice<LendingPool, InitiateClosure, damlTypes.ContractId<LendingPool>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
  UpdatePoolOnBorrow: damlTypes.Choice<LendingPool, UpdatePoolOnBorrow, damlTypes.ContractId<LendingPool>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
  UpdatePoolOnRepayment: damlTypes.Choice<LendingPool, UpdatePoolOnRepayment, damlTypes.ContractId<LendingPool>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
  UpdatePoolOnDefault: damlTypes.Choice<LendingPool, UpdatePoolOnDefault, damlTypes.ContractId<LendingPool>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LendingPool, undefined>>;
}
export declare const LendingPool:
  damlTypes.Template<LendingPool, undefined, '#CantonSuite:Lending:LendingPool'> &
  damlTypes.ToInterface<LendingPool, never> &
  LendingPoolInterface;

export declare namespace LendingPool {
  export type CreateEvent = damlLedger.CreateEvent<LendingPool, undefined, typeof LendingPool.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<LendingPool, typeof LendingPool.templateId>
  export type Event = damlLedger.Event<LendingPool, undefined, typeof LendingPool.templateId>
  export type QueryResult = damlLedger.QueryResult<LendingPool, undefined, typeof LendingPool.templateId>
}



export declare type LoanStatus =
  | 'Active'
  | 'Defaulted'
  | 'Repaid'
;

export declare const LoanStatus:
  damlTypes.Serializable<LoanStatus> & {
  }
& { readonly keys: LoanStatus[] } & { readonly [e in LoanStatus]: e }
;


export declare type PoolStatus =
  | 'Open'
  | 'Closing'
  | 'Closed'
;

export declare const PoolStatus:
  damlTypes.Serializable<PoolStatus> & {
  }
& { readonly keys: PoolStatus[] } & { readonly [e in PoolStatus]: e }
;

