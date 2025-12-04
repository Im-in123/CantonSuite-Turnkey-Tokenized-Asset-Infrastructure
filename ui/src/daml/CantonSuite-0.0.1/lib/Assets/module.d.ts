// Generated from Assets.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Burn = {
  amount: damlTypes.Numeric;
};

export declare const Burn:
  damlTypes.Serializable<Burn> & {
  }
;


export declare type Mint = {
  amount: damlTypes.Numeric;
};

export declare const Mint:
  damlTypes.Serializable<Mint> & {
  }
;


export declare type ToggleFractionalized = {
};

export declare const ToggleFractionalized:
  damlTypes.Serializable<ToggleFractionalized> & {
  }
;


export declare type UpdatePrice = {
  newPrice: damlTypes.Numeric;
};

export declare const UpdatePrice:
  damlTypes.Serializable<UpdatePrice> & {
  }
;


export declare type DecreaseSupply = {
  delta: damlTypes.Numeric;
};

export declare const DecreaseSupply:
  damlTypes.Serializable<DecreaseSupply> & {
  }
;


export declare type Asset = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  assetId: string;
  name: string;
  assetType: string;
  totalSupply: damlTypes.Numeric;
  fractionalized: boolean;
  pricePerUnit: damlTypes.Numeric;
  availableSupply: damlTypes.Numeric;
  observers: damlTypes.Party[];
};

export declare interface AssetInterface {
  DecreaseSupply: damlTypes.Choice<Asset, DecreaseSupply, damlTypes.ContractId<Asset>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Asset, undefined>>;
  UpdatePrice: damlTypes.Choice<Asset, UpdatePrice, damlTypes.ContractId<Asset>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Asset, undefined>>;
  ToggleFractionalized: damlTypes.Choice<Asset, ToggleFractionalized, damlTypes.ContractId<Asset>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Asset, undefined>>;
  Mint: damlTypes.Choice<Asset, Mint, damlTypes.ContractId<Asset>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Asset, undefined>>;
  Archive: damlTypes.Choice<Asset, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Asset, undefined>>;
  Burn: damlTypes.Choice<Asset, Burn, damlTypes.ContractId<Asset>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Asset, undefined>>;
}
export declare const Asset:
  damlTypes.Template<Asset, undefined, '#CantonSuite:Assets:Asset'> &
  damlTypes.ToInterface<Asset, never> &
  AssetInterface;

export declare namespace Asset {
  export type CreateEvent = damlLedger.CreateEvent<Asset, undefined, typeof Asset.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Asset, typeof Asset.templateId>
  export type Event = damlLedger.Event<Asset, undefined, typeof Asset.templateId>
  export type QueryResult = damlLedger.QueryResult<Asset, undefined, typeof Asset.templateId>
}



export declare type FinalizeIssuance = {
  additionalObservers: damlTypes.Party[];
};

export declare const FinalizeIssuance:
  damlTypes.Serializable<FinalizeIssuance> & {
  }
;


export declare type DraftAsset = {
  draftIssuer: damlTypes.Party;
  compliance: damlTypes.Party;
  assetId: string;
  name: string;
  assetType: string;
  totalSupply: damlTypes.Numeric;
  fractionalized: boolean;
  pricePerUnit: damlTypes.Numeric;
  availableSupply: damlTypes.Numeric;
  observers: damlTypes.Party[];
};

export declare interface DraftAssetInterface {
  FinalizeIssuance: damlTypes.Choice<DraftAsset, FinalizeIssuance, damlTypes.ContractId<Asset>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DraftAsset, undefined>>;
  Archive: damlTypes.Choice<DraftAsset, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DraftAsset, undefined>>;
}
export declare const DraftAsset:
  damlTypes.Template<DraftAsset, undefined, '#CantonSuite:Assets:DraftAsset'> &
  damlTypes.ToInterface<DraftAsset, never> &
  DraftAssetInterface;

export declare namespace DraftAsset {
  export type CreateEvent = damlLedger.CreateEvent<DraftAsset, undefined, typeof DraftAsset.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DraftAsset, typeof DraftAsset.templateId>
  export type Event = damlLedger.Event<DraftAsset, undefined, typeof DraftAsset.templateId>
  export type QueryResult = damlLedger.QueryResult<DraftAsset, undefined, typeof DraftAsset.templateId>
}


