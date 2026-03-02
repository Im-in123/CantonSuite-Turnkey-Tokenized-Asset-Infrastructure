// Generated from Lending/Types.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

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

