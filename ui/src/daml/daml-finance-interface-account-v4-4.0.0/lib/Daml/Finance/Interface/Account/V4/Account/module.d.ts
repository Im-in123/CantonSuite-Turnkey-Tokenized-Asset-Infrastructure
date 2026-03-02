// Generated from Daml/Finance/Interface/Account/V4/Account.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg49a7fd6a0515033677fd779be46379bc2b59a88fc9926a139cc55c4d6a79607e from '@daml.js/daml-finance-interface-holding-v4-4.0.0';
import * as pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b from '@daml.js/daml-finance-interface-types-common-v3-3.0.0';
import * as pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657 from '@daml.js/daml-stdlib-DA-Set-Types-1.0.0';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Account = damlTypes.Interface<'a9732861398a32e2383632afbae347abd0eb7c8f01bc41a695114d51ee8f4c74:Daml.Finance.Interface.Account.V4.Account:Account'> & View;
export declare interface AccountInterface {
  Remove: damlTypes.Choice<Account, Remove, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Account, undefined>>;
  Credit: damlTypes.Choice<Account, Credit, damlTypes.ContractId<pkg49a7fd6a0515033677fd779be46379bc2b59a88fc9926a139cc55c4d6a79607e.Daml.Finance.Interface.Holding.V4.Holding.Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Account, undefined>>;
  Debit: damlTypes.Choice<Account, Debit, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Account, undefined>>;
  GetView: damlTypes.Choice<Account, GetView, View, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Account, undefined>>;
  Archive: damlTypes.Choice<Account, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Account, undefined>>;
}
export declare const Account:
  damlTypes.InterfaceCompanion<Account, undefined, 'a9732861398a32e2383632afbae347abd0eb7c8f01bc41a695114d51ee8f4c74:Daml.Finance.Interface.Account.V4.Account:Account'> &
  damlTypes.FromTemplate<Account, unknown> &
  AccountInterface;


export declare type SetObservers = {
  newObservers: damlTypes.Map<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare const SetObservers:
  damlTypes.Serializable<SetObservers> & {
  }
;


export declare type SetCid = {
  newCid: damlTypes.ContractId<Account>;
};

export declare const SetCid:
  damlTypes.Serializable<SetCid> & {
  }
;


export declare type GetCid = {
  viewer: damlTypes.Party;
};

export declare const GetCid:
  damlTypes.Serializable<GetCid> & {
  }
;


export declare type Reference = {
  accountView: View;
  cid: damlTypes.ContractId<Account>;
  observers: damlTypes.Map<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare interface ReferenceInterface {
  SetCid: damlTypes.Choice<Reference, SetCid, damlTypes.ContractId<Reference>, Reference.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Reference, Reference.Key>>;
  SetObservers: damlTypes.Choice<Reference, SetObservers, damlTypes.ContractId<Reference>, Reference.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Reference, Reference.Key>>;
  Archive: damlTypes.Choice<Reference, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, Reference.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Reference, Reference.Key>>;
  GetCid: damlTypes.Choice<Reference, GetCid, damlTypes.ContractId<Account>, Reference.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Reference, Reference.Key>>;
}
export declare const Reference:
  damlTypes.Template<Reference, Reference.Key, '#daml-finance-interface-account-v4:Daml.Finance.Interface.Account.V4.Account:Reference'> &
  damlTypes.ToInterface<Reference, never> &
  ReferenceInterface;

export declare namespace Reference {
  export type Key = pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.AccountKey
  export type CreateEvent = damlLedger.CreateEvent<Reference, Reference.Key, typeof Reference.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Reference, typeof Reference.templateId>
  export type Event = damlLedger.Event<Reference, Reference.Key, typeof Reference.templateId>
  export type QueryResult = damlLedger.QueryResult<Reference, Reference.Key, typeof Reference.templateId>
}



export declare type Remove = {
};

export declare const Remove:
  damlTypes.Serializable<Remove> & {
  }
;


export declare type Debit = {
  holdingCid: damlTypes.ContractId<pkg49a7fd6a0515033677fd779be46379bc2b59a88fc9926a139cc55c4d6a79607e.Daml.Finance.Interface.Holding.V4.Holding.Holding>;
};

export declare const Debit:
  damlTypes.Serializable<Debit> & {
  }
;


export declare type Credit = {
  quantity: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.Quantity<pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.InstrumentKey, damlTypes.Numeric>;
};

export declare const Credit:
  damlTypes.Serializable<Credit> & {
  }
;


export declare type GetView = {
  viewer: damlTypes.Party;
};

export declare const GetView:
  damlTypes.Serializable<GetView> & {
  }
;


export declare type View = {
  custodian: damlTypes.Party;
  owner: damlTypes.Party;
  id: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.Id;
  description: string;
  controllers: Controllers;
};

export declare const View:
  damlTypes.Serializable<View> & {
  }
;


export declare type Controllers = {
  outgoing: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>;
  incoming: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>;
};

export declare const Controllers:
  damlTypes.Serializable<Controllers> & {
  }
;

