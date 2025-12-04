// Generated from KYC.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Types from '../Types/module';

export declare type Reject = {
};

export declare const Reject:
  damlTypes.Serializable<Reject> & {
  }
;


export declare type Approve = {
};

export declare const Approve:
  damlTypes.Serializable<Approve> & {
  }
;


export declare type KYC = {
  buyer: damlTypes.Party;
  compliance: damlTypes.Party;
  status: Types.KYCStatus;
};

export declare interface KYCInterface {
  Approve: damlTypes.Choice<KYC, Approve, damlTypes.ContractId<KYC>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<KYC, undefined>>;
  Archive: damlTypes.Choice<KYC, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<KYC, undefined>>;
  Reject: damlTypes.Choice<KYC, Reject, damlTypes.ContractId<KYC>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<KYC, undefined>>;
}
export declare const KYC:
  damlTypes.Template<KYC, undefined, '#CantonSuite:KYC:KYC'> &
  damlTypes.ToInterface<KYC, never> &
  KYCInterface;

export declare namespace KYC {
  export type CreateEvent = damlLedger.CreateEvent<KYC, undefined, typeof KYC.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<KYC, typeof KYC.templateId>
  export type Event = damlLedger.Event<KYC, undefined, typeof KYC.templateId>
  export type QueryResult = damlLedger.QueryResult<KYC, undefined, typeof KYC.templateId>
}


