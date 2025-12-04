// Generated from Types.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

export declare type TradeStatus =
  | 'TRequested'
  | 'TExecuted'
  | 'TRejected'
  | 'TUnderReview'
;

export declare const TradeStatus:
  damlTypes.Serializable<TradeStatus> & {
  }
& { readonly keys: TradeStatus[] } & { readonly [e in TradeStatus]: e }
;


export declare type KYCStatus =
  | 'KPending'
  | 'KApproved'
  | 'KRejected'
;

export declare const KYCStatus:
  damlTypes.Serializable<KYCStatus> & {
  }
& { readonly keys: KYCStatus[] } & { readonly [e in KYCStatus]: e }
;


export declare type Role =
  | 'Issuer'
  | 'Buyer'
  | 'Compliance'
  | 'Regulator'
;

export declare const Role:
  damlTypes.Serializable<Role> & {
  }
& { readonly keys: Role[] } & { readonly [e in Role]: e }
;

