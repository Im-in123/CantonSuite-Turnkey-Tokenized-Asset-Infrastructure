// Generated from Lending/Loans.daml
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
import * as Lending_Pool from '../../Lending/Pool/module';
import * as Lending_Types from '../../Lending/Types/module';
import * as TokenStandard_Interfaces from '../../TokenStandard/Interfaces/module';

export declare type LendingRegulatorView = {
  regulator: damlTypes.Party;
  poolOperator: damlTypes.Party;
  loanIdHash: string;
  borrowerHash: string;
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
  damlTypes.Template<LendingRegulatorView, undefined, '#CantonSuite:Lending.Loans:LendingRegulatorView'> &
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
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
};

export declare const LiquidateCollateral:
  damlTypes.Serializable<LiquidateCollateral> & {
  }
;


export declare type RepayLoan = {
  repaymentHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
  existingCollateralCid: damlTypes.Optional<damlTypes.ContractId<TokenStandard_Interfaces.Holding>>;
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
  collateralTransferCid: damlTypes.ContractId<TokenStandard_Interfaces.TransferInstruction>;
  originationDate: damlTypes.Time;
  maturityDate: damlTypes.Time;
  status: Lending_Types.LoanStatus;
  regulatorParty: damlTypes.Party;
  complianceParty: damlTypes.Party;
  miningRoundCid: damlTypes.Optional<damlTypes.ContractId<CantonCoin_MiningRoundSync.MiningRoundReference>>;
};

export declare interface LoanInterface {
  RepayLoan: damlTypes.Choice<Loan, RepayLoan, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple4<damlTypes.ContractId<TokenStandard_Interfaces.TransferInstruction>, damlTypes.ContractId<TokenStandard_Interfaces.TransferInstruction>, damlTypes.ContractId<Lending_Pool.LendingPool>, damlTypes.ContractId<LendingRegulatorView>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Loan, undefined>>;
  LiquidateCollateral: damlTypes.Choice<Loan, LiquidateCollateral, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<damlTypes.ContractId<TokenStandard_Interfaces.TransferInstruction>, damlTypes.ContractId<Lending_Pool.LendingPool>, damlTypes.ContractId<LendingRegulatorView>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Loan, undefined>>;
  Archive: damlTypes.Choice<Loan, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Loan, undefined>>;
  ExtendLoan: damlTypes.Choice<Loan, ExtendLoan, damlTypes.ContractId<Loan>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Loan, undefined>>;
}
export declare const Loan:
  damlTypes.Template<Loan, undefined, '#CantonSuite:Lending.Loans:Loan'> &
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
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
  existingCashCid: damlTypes.Optional<damlTypes.ContractId<TokenStandard_Interfaces.Holding>>;
  borrowerCurrentSync: string;
  poolCurrentSync: string;
  targetSync: string;
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
  collateralCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  durationDays: damlTypes.Int;
  createdAt: damlTypes.Time;
  complianceParty: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  miningRoundCid: damlTypes.Optional<damlTypes.ContractId<CantonCoin_MiningRoundSync.MiningRoundReference>>;
};

export declare interface LoanRequestInterface {
  ApproveLoan: damlTypes.Choice<LoanRequest, ApproveLoan, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<damlTypes.ContractId<Loan>, damlTypes.ContractId<TokenStandard_Interfaces.TransferInstruction>, damlTypes.ContractId<LendingRegulatorView>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LoanRequest, undefined>>;
  Archive: damlTypes.Choice<LoanRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LoanRequest, undefined>>;
  RejectLoan: damlTypes.Choice<LoanRequest, RejectLoan, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LoanRequest, undefined>>;
  CancelRequest: damlTypes.Choice<LoanRequest, CancelRequest, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<LoanRequest, undefined>>;
}
export declare const LoanRequest:
  damlTypes.Template<LoanRequest, undefined, '#CantonSuite:Lending.Loans:LoanRequest'> &
  damlTypes.ToInterface<LoanRequest, never> &
  LoanRequestInterface;

export declare namespace LoanRequest {
  export type CreateEvent = damlLedger.CreateEvent<LoanRequest, undefined, typeof LoanRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<LoanRequest, typeof LoanRequest.templateId>
  export type Event = damlLedger.Event<LoanRequest, undefined, typeof LoanRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<LoanRequest, undefined, typeof LoanRequest.templateId>
}


