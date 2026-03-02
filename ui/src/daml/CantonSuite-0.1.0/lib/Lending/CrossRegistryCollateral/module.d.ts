// Generated from Lending/CrossRegistryCollateral.daml
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
import * as Lending_Pool from '../../Lending/Pool/module';
import * as Lending_Types from '../../Lending/Types/module';
import * as TokenStandard_Interfaces from '../../TokenStandard/Interfaces/module';

export declare type ExecuteTradeWithFees = {
  buyerPaymentCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  sellerAssetCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare const ExecuteTradeWithFees:
  damlTypes.Serializable<ExecuteTradeWithFees> & {
  }
;


export declare type TradeAgreementWithFees = {
  buyer: damlTypes.Party;
  seller: damlTypes.Party;
  issuer: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  feeStructure: FeeStructure;
  platformParty: damlTypes.Party;
};

export declare interface TradeAgreementWithFeesInterface {
  ExecuteTradeWithFees: damlTypes.Choice<TradeAgreementWithFees, ExecuteTradeWithFees, TradeWithFeesResult, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TradeAgreementWithFees, undefined>>;
  Archive: damlTypes.Choice<TradeAgreementWithFees, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TradeAgreementWithFees, undefined>>;
}
export declare const TradeAgreementWithFees:
  damlTypes.Template<TradeAgreementWithFees, undefined, '#CantonSuite:Lending.CrossRegistryCollateral:TradeAgreementWithFees'> &
  damlTypes.ToInterface<TradeAgreementWithFees, never> &
  TradeAgreementWithFeesInterface;

export declare namespace TradeAgreementWithFees {
  export type CreateEvent = damlLedger.CreateEvent<TradeAgreementWithFees, undefined, typeof TradeAgreementWithFees.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<TradeAgreementWithFees, typeof TradeAgreementWithFees.templateId>
  export type Event = damlLedger.Event<TradeAgreementWithFees, undefined, typeof TradeAgreementWithFees.templateId>
  export type QueryResult = damlLedger.QueryResult<TradeAgreementWithFees, undefined, typeof TradeAgreementWithFees.templateId>
}



export declare type TradeWithFeesResult = {
  buyerHolding: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  sellerHolding: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  platformFee: damlTypes.Numeric;
  feeHolding: damlTypes.Optional<damlTypes.ContractId<TokenStandard_Interfaces.Holding>>;
};

export declare const TradeWithFeesResult:
  damlTypes.Serializable<TradeWithFeesResult> & {
  }
;


export declare type LiquidateCrossRegistryLoan = {
  collateralInstrumentCid: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
};

export declare const LiquidateCrossRegistryLoan:
  damlTypes.Serializable<LiquidateCrossRegistryLoan> & {
  }
;


export declare type RepayLoanWithFees = {
  repaymentHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare const RepayLoanWithFees:
  damlTypes.Serializable<RepayLoanWithFees> & {
  }
;


export declare type CrossRegistryLoan = {
  borrower: damlTypes.Party;
  lender: damlTypes.Party;
  lendingAsset: TokenStandard_Interfaces.InstrumentId;
  collateralAsset: TokenStandard_Interfaces.InstrumentId;
  principal: damlTypes.Numeric;
  netPrincipal: damlTypes.Numeric;
  originationFee: damlTypes.Numeric;
  collateralAmount: damlTypes.Numeric;
  collateralValueUSD: damlTypes.Numeric;
  lockedCollateralCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  originationDate: damlTypes.Time;
  maturityDate: damlTypes.Time;
  ltv: damlTypes.Numeric;
  liquidationLTV: damlTypes.Numeric;
  feeStructure: FeeStructure;
  status: Lending_Types.LoanStatus;
};

export declare interface CrossRegistryLoanInterface {
  RepayLoanWithFees: damlTypes.Choice<CrossRegistryLoan, RepayLoanWithFees, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple4<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, damlTypes.ContractId<TokenStandard_Interfaces.Holding>, damlTypes.Numeric, damlTypes.Numeric>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CrossRegistryLoan, undefined>>;
  LiquidateCrossRegistryLoan: damlTypes.Choice<CrossRegistryLoan, LiquidateCrossRegistryLoan, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, damlTypes.Numeric>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CrossRegistryLoan, undefined>>;
  Archive: damlTypes.Choice<CrossRegistryLoan, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CrossRegistryLoan, undefined>>;
}
export declare const CrossRegistryLoan:
  damlTypes.Template<CrossRegistryLoan, undefined, '#CantonSuite:Lending.CrossRegistryCollateral:CrossRegistryLoan'> &
  damlTypes.ToInterface<CrossRegistryLoan, never> &
  CrossRegistryLoanInterface;

export declare namespace CrossRegistryLoan {
  export type CreateEvent = damlLedger.CreateEvent<CrossRegistryLoan, undefined, typeof CrossRegistryLoan.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CrossRegistryLoan, typeof CrossRegistryLoan.templateId>
  export type Event = damlLedger.Event<CrossRegistryLoan, undefined, typeof CrossRegistryLoan.templateId>
  export type QueryResult = damlLedger.QueryResult<CrossRegistryLoan, undefined, typeof CrossRegistryLoan.templateId>
}



export declare type ApproveCrossRegistryLoan = {
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
  collateralInstrumentCid: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
};

export declare const ApproveCrossRegistryLoan:
  damlTypes.Serializable<ApproveCrossRegistryLoan> & {
  }
;


export declare type CrossRegistryLoanRequest = {
  borrower: damlTypes.Party;
  poolOperator: damlTypes.Party;
  lendingAsset: TokenStandard_Interfaces.InstrumentId;
  collateralAsset: TokenStandard_Interfaces.InstrumentId;
  collateralCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  requestedAmount: damlTypes.Numeric;
  collateralAmount: damlTypes.Numeric;
  durationDays: damlTypes.Int;
  collateralRegistryCid: damlTypes.ContractId<CollateralRegistry>;
  createdAt: damlTypes.Time;
  feeStructure: FeeStructure;
};

export declare interface CrossRegistryLoanRequestInterface {
  ApproveCrossRegistryLoan: damlTypes.Choice<CrossRegistryLoanRequest, ApproveCrossRegistryLoan, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<CrossRegistryLoan>, damlTypes.Numeric>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CrossRegistryLoanRequest, undefined>>;
  Archive: damlTypes.Choice<CrossRegistryLoanRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CrossRegistryLoanRequest, undefined>>;
}
export declare const CrossRegistryLoanRequest:
  damlTypes.Template<CrossRegistryLoanRequest, undefined, '#CantonSuite:Lending.CrossRegistryCollateral:CrossRegistryLoanRequest'> &
  damlTypes.ToInterface<CrossRegistryLoanRequest, never> &
  CrossRegistryLoanRequestInterface;

export declare namespace CrossRegistryLoanRequest {
  export type CreateEvent = damlLedger.CreateEvent<CrossRegistryLoanRequest, undefined, typeof CrossRegistryLoanRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CrossRegistryLoanRequest, typeof CrossRegistryLoanRequest.templateId>
  export type Event = damlLedger.Event<CrossRegistryLoanRequest, undefined, typeof CrossRegistryLoanRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<CrossRegistryLoanRequest, undefined, typeof CrossRegistryLoanRequest.templateId>
}



export declare type CollateralTerms = {
  maxLTV: damlTypes.Numeric;
  liquidationLTV: damlTypes.Numeric;
  minimumValueUSD: damlTypes.Numeric;
  haircut: damlTypes.Numeric;
};

export declare const CollateralTerms:
  damlTypes.Serializable<CollateralTerms> & {
  }
;


export declare type RemoveCollateralAsset = {
  instrumentToRemove: TokenStandard_Interfaces.InstrumentId;
};

export declare const RemoveCollateralAsset:
  damlTypes.Serializable<RemoveCollateralAsset> & {
  }
;


export declare type AddCollateralAsset = {
  newInstrument: TokenStandard_Interfaces.InstrumentId;
  terms: CollateralTerms;
};

export declare const AddCollateralAsset:
  damlTypes.Serializable<AddCollateralAsset> & {
  }
;


export declare type GetCollateralTerms = {
  checkInstrument: TokenStandard_Interfaces.InstrumentId;
};

export declare const GetCollateralTerms:
  damlTypes.Serializable<GetCollateralTerms> & {
  }
;


export declare type IsAcceptedCollateral = {
  checkInstrument: TokenStandard_Interfaces.InstrumentId;
};

export declare const IsAcceptedCollateral:
  damlTypes.Serializable<IsAcceptedCollateral> & {
  }
;


export declare type CollateralRegistry = {
  registry: damlTypes.Party;
  compliance: damlTypes.Party;
  acceptedAssets: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<TokenStandard_Interfaces.InstrumentId, CollateralTerms>[];
};

export declare interface CollateralRegistryInterface {
  Archive: damlTypes.Choice<CollateralRegistry, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CollateralRegistry, undefined>>;
  IsAcceptedCollateral: damlTypes.Choice<CollateralRegistry, IsAcceptedCollateral, boolean, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CollateralRegistry, undefined>>;
  GetCollateralTerms: damlTypes.Choice<CollateralRegistry, GetCollateralTerms, damlTypes.Optional<CollateralTerms>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CollateralRegistry, undefined>>;
  AddCollateralAsset: damlTypes.Choice<CollateralRegistry, AddCollateralAsset, damlTypes.ContractId<CollateralRegistry>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CollateralRegistry, undefined>>;
  RemoveCollateralAsset: damlTypes.Choice<CollateralRegistry, RemoveCollateralAsset, damlTypes.ContractId<CollateralRegistry>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CollateralRegistry, undefined>>;
}
export declare const CollateralRegistry:
  damlTypes.Template<CollateralRegistry, undefined, '#CantonSuite:Lending.CrossRegistryCollateral:CollateralRegistry'> &
  damlTypes.ToInterface<CollateralRegistry, never> &
  CollateralRegistryInterface;

export declare namespace CollateralRegistry {
  export type CreateEvent = damlLedger.CreateEvent<CollateralRegistry, undefined, typeof CollateralRegistry.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CollateralRegistry, typeof CollateralRegistry.templateId>
  export type Event = damlLedger.Event<CollateralRegistry, undefined, typeof CollateralRegistry.templateId>
  export type QueryResult = damlLedger.QueryResult<CollateralRegistry, undefined, typeof CollateralRegistry.templateId>
}



export declare type FeeStructure = {
  originationFeeBps: damlTypes.Numeric;
  managementFeeBps: damlTypes.Numeric;
  tradingFeeBps: damlTypes.Numeric;
  redemptionFeeBps: damlTypes.Numeric;
  performanceFeeBps: damlTypes.Numeric;
};

export declare const FeeStructure:
  damlTypes.Serializable<FeeStructure> & {
  }
;

