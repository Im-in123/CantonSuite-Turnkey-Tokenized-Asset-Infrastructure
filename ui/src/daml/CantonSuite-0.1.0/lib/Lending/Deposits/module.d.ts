// Generated from Lending/Deposits.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Lending_Pool from '../../Lending/Pool/module';
import * as TokenStandard_Interfaces from '../../TokenStandard/Interfaces/module';

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
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
  existingHoldingCid: damlTypes.Optional<damlTypes.ContractId<TokenStandard_Interfaces.Holding>>;
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
  ApproveWithdrawal: damlTypes.Choice<WithdrawalRequest, ApproveWithdrawal, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Lending_Pool.WithdrawalEffect>, damlTypes.ContractId<TokenStandard_Interfaces.Holding>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<WithdrawalRequest, undefined>>;
  RejectWithdrawal: damlTypes.Choice<WithdrawalRequest, RejectWithdrawal, damlTypes.ContractId<LenderShare>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<WithdrawalRequest, undefined>>;
  Archive: damlTypes.Choice<WithdrawalRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<WithdrawalRequest, undefined>>;
  CancelWithdrawalRequest: damlTypes.Choice<WithdrawalRequest, CancelWithdrawalRequest, damlTypes.ContractId<LenderShare>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<WithdrawalRequest, undefined>>;
}
export declare const WithdrawalRequest:
  damlTypes.Template<WithdrawalRequest, undefined, '#CantonSuite:Lending.Deposits:WithdrawalRequest'> &
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
  RequestWithdrawal: damlTypes.Choice<LenderShare, RequestWithdrawal, damlTypes.ContractId<WithdrawalRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LenderShare, undefined>>;
  Archive: damlTypes.Choice<LenderShare, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LenderShare, undefined>>;
}
export declare const LenderShare:
  damlTypes.Template<LenderShare, undefined, '#CantonSuite:Lending.Deposits:LenderShare'> &
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
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
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
  AcceptDeposit: damlTypes.Choice<DepositRequest, AcceptDeposit, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Lending_Pool.DepositEffect>, damlTypes.ContractId<LenderShare>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DepositRequest, undefined>>;
  CancelDepositRequest: damlTypes.Choice<DepositRequest, CancelDepositRequest, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DepositRequest, undefined>>;
  Archive: damlTypes.Choice<DepositRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DepositRequest, undefined>>;
}
export declare const DepositRequest:
  damlTypes.Template<DepositRequest, undefined, '#CantonSuite:Lending.Deposits:DepositRequest'> &
  damlTypes.ToInterface<DepositRequest, never> &
  DepositRequestInterface;

export declare namespace DepositRequest {
  export type CreateEvent = damlLedger.CreateEvent<DepositRequest, undefined, typeof DepositRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DepositRequest, typeof DepositRequest.templateId>
  export type Event = damlLedger.Event<DepositRequest, undefined, typeof DepositRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<DepositRequest, undefined, typeof DepositRequest.templateId>
}


