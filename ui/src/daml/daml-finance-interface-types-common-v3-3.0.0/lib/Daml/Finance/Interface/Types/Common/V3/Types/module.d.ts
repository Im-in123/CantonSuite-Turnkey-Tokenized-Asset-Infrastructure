// Generated from Daml/Finance/Interface/Types/Common/V3/Types.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

export declare type Quantity<u, a> = {
  unit: u;
  amount: a;
};

export declare const Quantity :
  (<u, a>(u: damlTypes.Serializable<u>, a: damlTypes.Serializable<a>) => damlTypes.Serializable<Quantity<u, a>>) & {
};


export declare type InstrumentKey = {
  depository: damlTypes.Party;
  issuer: damlTypes.Party;
  id: Id;
  version: string;
  holdingStandard: HoldingStandard;
};

export declare const InstrumentKey:
  damlTypes.Serializable<InstrumentKey> & {
  }
;


export declare type AccountKey = {
  custodian: damlTypes.Party;
  owner: damlTypes.Party;
  id: Id;
};

export declare const AccountKey:
  damlTypes.Serializable<AccountKey> & {
  }
;


export declare type HoldingFactoryKey = {
  provider: damlTypes.Party;
  id: Id;
};

export declare const HoldingFactoryKey:
  damlTypes.Serializable<HoldingFactoryKey> & {
  }
;


export declare type HoldingStandard =
  | 'TransferableFungible'
  | 'Transferable'
  | 'Fungible'
  | 'BaseHolding'
;

export declare const HoldingStandard:
  damlTypes.Serializable<HoldingStandard> & {
  }
& { readonly keys: HoldingStandard[] } & { readonly [e in HoldingStandard]: e }
;


export declare type Id = {
  unpack: string;
};

export declare const Id:
  damlTypes.Serializable<Id> & {
  }
;

