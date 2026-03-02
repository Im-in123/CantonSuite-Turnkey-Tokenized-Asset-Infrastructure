// Generated from Finance/Accounts.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg336dbc9bf241a2050a74f89ce6d914232bf5b18ebd78765badbbd3c9e5d9c99b from '@daml.js/daml-finance-account-v4-4.0.0';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type CreateAccount = {
  accountOwner: damlTypes.Party;
  accountId: string;
  description: string;
};

export declare const CreateAccount:
  damlTypes.Serializable<CreateAccount> & {
  }
;


export declare type AccountFactory = {
  provider: damlTypes.Party;
  observers: damlTypes.Party[];
};

export declare interface AccountFactoryInterface {
  CreateAccount: damlTypes.Choice<AccountFactory, CreateAccount, damlTypes.ContractId<pkg336dbc9bf241a2050a74f89ce6d914232bf5b18ebd78765badbbd3c9e5d9c99b.Daml.Finance.Account.V4.Account.Account>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AccountFactory, undefined>>;
  Archive: damlTypes.Choice<AccountFactory, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AccountFactory, undefined>>;
}
export declare const AccountFactory:
  damlTypes.Template<AccountFactory, undefined, '#CantonSuite:Finance.Accounts:AccountFactory'> &
  damlTypes.ToInterface<AccountFactory, never> &
  AccountFactoryInterface;

export declare namespace AccountFactory {
  export type CreateEvent = damlLedger.CreateEvent<AccountFactory, undefined, typeof AccountFactory.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<AccountFactory, typeof AccountFactory.templateId>
  export type Event = damlLedger.Event<AccountFactory, undefined, typeof AccountFactory.templateId>
  export type QueryResult = damlLedger.QueryResult<AccountFactory, undefined, typeof AccountFactory.templateId>
}


