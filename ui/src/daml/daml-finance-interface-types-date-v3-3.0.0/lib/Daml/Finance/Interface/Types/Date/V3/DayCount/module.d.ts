// Generated from Daml/Finance/Interface/Types/Date/V3/DayCount.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

export declare type DayCountConventionEnum =
  | 'Act360'
  | 'Act365Fixed'
  | 'Act365NL'
  | 'Act365L'
  | 'ActActAFB'
  | 'ActActISDA'
  | 'ActActICMA'
  | 'Basis1'
  | 'Basis30360'
  | 'Basis30365'
  | 'Basis30360ICMA'
  | 'Basis30E360'
  | 'Basis30E2360'
  | 'Basis30E3360'
;

export declare const DayCountConventionEnum:
  damlTypes.Serializable<DayCountConventionEnum> & {
  }
& { readonly keys: DayCountConventionEnum[] } & { readonly [e in DayCountConventionEnum]: e }
;

