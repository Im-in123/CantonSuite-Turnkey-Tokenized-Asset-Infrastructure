// Generated from Trade.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Assets from '../Assets/module';

export declare type Finalize = {
};

export declare const Finalize:
  damlTypes.Serializable<Finalize> & {
  }
;


export declare type ApprovedTrade = {
  buyer: damlTypes.Party;
  seller: damlTypes.Party;
  assetIssuer: damlTypes.Party;
  assetId: string;
  assetCid: damlTypes.ContractId<Assets.Asset>;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  isPrimary: boolean;
  complianceParty: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  createdAt: damlTypes.Time;
  expiresAt: damlTypes.Time;
  approvedAt: damlTypes.Time;
};

export declare interface ApprovedTradeInterface {
  Archive: damlTypes.Choice<ApprovedTrade, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ApprovedTrade, undefined>>;
  Finalize: damlTypes.Choice<ApprovedTrade, Finalize, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ApprovedTrade, undefined>>;
}
export declare const ApprovedTrade:
  damlTypes.Template<ApprovedTrade, undefined, '#CantonSuite:Trade:ApprovedTrade'> &
  damlTypes.ToInterface<ApprovedTrade, never> &
  ApprovedTradeInterface;

export declare namespace ApprovedTrade {
  export type CreateEvent = damlLedger.CreateEvent<ApprovedTrade, undefined, typeof ApprovedTrade.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ApprovedTrade, typeof ApprovedTrade.templateId>
  export type Event = damlLedger.Event<ApprovedTrade, undefined, typeof ApprovedTrade.templateId>
  export type QueryResult = damlLedger.QueryResult<ApprovedTrade, undefined, typeof ApprovedTrade.templateId>
}



export declare type CancelTrade = {
};

export declare const CancelTrade:
  damlTypes.Serializable<CancelTrade> & {
  }
;


export declare type ApproveByCompliance = {
};

export declare const ApproveByCompliance:
  damlTypes.Serializable<ApproveByCompliance> & {
  }
;


export declare type TradeAgreement = {
  buyer: damlTypes.Party;
  seller: damlTypes.Party;
  assetIssuer: damlTypes.Party;
  assetId: string;
  assetCid: damlTypes.ContractId<Assets.Asset>;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  isPrimary: boolean;
  complianceParty: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  createdAt: damlTypes.Time;
  expiresAt: damlTypes.Time;
};

export declare interface TradeAgreementInterface {
  Archive: damlTypes.Choice<TradeAgreement, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TradeAgreement, undefined>>;
  CancelTrade: damlTypes.Choice<TradeAgreement, CancelTrade, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TradeAgreement, undefined>>;
  ApproveByCompliance: damlTypes.Choice<TradeAgreement, ApproveByCompliance, damlTypes.ContractId<ApprovedTrade>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<TradeAgreement, undefined>>;
}
export declare const TradeAgreement:
  damlTypes.Template<TradeAgreement, undefined, '#CantonSuite:Trade:TradeAgreement'> &
  damlTypes.ToInterface<TradeAgreement, never> &
  TradeAgreementInterface;

export declare namespace TradeAgreement {
  export type CreateEvent = damlLedger.CreateEvent<TradeAgreement, undefined, typeof TradeAgreement.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<TradeAgreement, typeof TradeAgreement.templateId>
  export type Event = damlLedger.Event<TradeAgreement, undefined, typeof TradeAgreement.templateId>
  export type QueryResult = damlLedger.QueryResult<TradeAgreement, undefined, typeof TradeAgreement.templateId>
}



export declare type CancelProposal = {
};

export declare const CancelProposal:
  damlTypes.Serializable<CancelProposal> & {
  }
;


export declare type SellerAccept = {
};

export declare const SellerAccept:
  damlTypes.Serializable<SellerAccept> & {
  }
;


export declare type ProposedTrade = {
  buyer: damlTypes.Party;
  seller: damlTypes.Party;
  assetIssuer: damlTypes.Party;
  assetId: string;
  assetCid: damlTypes.ContractId<Assets.Asset>;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  isPrimary: boolean;
  complianceParty: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  createdAt: damlTypes.Time;
};

export declare interface ProposedTradeInterface {
  Archive: damlTypes.Choice<ProposedTrade, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ProposedTrade, undefined>>;
  CancelProposal: damlTypes.Choice<ProposedTrade, CancelProposal, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ProposedTrade, undefined>>;
  SellerAccept: damlTypes.Choice<ProposedTrade, SellerAccept, damlTypes.ContractId<TradeAgreement>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ProposedTrade, undefined>>;
}
export declare const ProposedTrade:
  damlTypes.Template<ProposedTrade, undefined, '#CantonSuite:Trade:ProposedTrade'> &
  damlTypes.ToInterface<ProposedTrade, never> &
  ProposedTradeInterface;

export declare namespace ProposedTrade {
  export type CreateEvent = damlLedger.CreateEvent<ProposedTrade, undefined, typeof ProposedTrade.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ProposedTrade, typeof ProposedTrade.templateId>
  export type Event = damlLedger.Event<ProposedTrade, undefined, typeof ProposedTrade.templateId>
  export type QueryResult = damlLedger.QueryResult<ProposedTrade, undefined, typeof ProposedTrade.templateId>
}


