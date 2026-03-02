// Generated from Daml/Finance/Interface/Holding/V4/Factory.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b from '@daml.js/daml-finance-interface-types-common-v3-3.0.0';
import * as pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657 from '@daml.js/daml-stdlib-DA-Set-Types-1.0.0';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Daml_Finance_Interface_Holding_V4_Holding from '../../../../../../Daml/Finance/Interface/Holding/V4/Holding/module';

export declare type Factory = damlTypes.Interface<'49a7fd6a0515033677fd779be46379bc2b59a88fc9926a139cc55c4d6a79607e:Daml.Finance.Interface.Holding.V4.Factory:Factory'> & View;
export declare interface FactoryInterface {
  Remove: damlTypes.Choice<Factory, Remove, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Factory, undefined>>;
  Create: damlTypes.Choice<Factory, Create, damlTypes.ContractId<Daml_Finance_Interface_Holding_V4_Holding.Holding>, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Factory, undefined>>;
  GetView: damlTypes.Choice<Factory, GetView, View, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Factory, undefined>>;
  Archive: damlTypes.Choice<Factory, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Factory, undefined>>;
}
export declare const Factory:
  damlTypes.InterfaceCompanion<Factory, undefined, '49a7fd6a0515033677fd779be46379bc2b59a88fc9926a139cc55c4d6a79607e:Daml.Finance.Interface.Holding.V4.Factory:Factory'> &
  damlTypes.FromTemplate<Factory, unknown> &
  FactoryInterface;


export declare type SetObservers = {
  newObservers: damlTypes.Map<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare const SetObservers:
  damlTypes.Serializable<SetObservers> & {
  }
;


export declare type SetCid = {
  newCid: damlTypes.ContractId<Factory>;
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
  factoryView: View;
  cid: damlTypes.ContractId<Factory>;
  observers: damlTypes.Map<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare interface ReferenceInterface {
  SetCid: damlTypes.Choice<Reference, SetCid, damlTypes.ContractId<Reference>, Reference.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Reference, Reference.Key>>;
  SetObservers: damlTypes.Choice<Reference, SetObservers, damlTypes.ContractId<Reference>, Reference.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Reference, Reference.Key>>;
  Archive: damlTypes.Choice<Reference, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, Reference.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Reference, Reference.Key>>;
  GetCid: damlTypes.Choice<Reference, GetCid, damlTypes.ContractId<Factory>, Reference.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Reference, Reference.Key>>;
}
export declare const Reference:
  damlTypes.Template<Reference, Reference.Key, '#daml-finance-interface-holding-v4:Daml.Finance.Interface.Holding.V4.Factory:Reference'> &
  damlTypes.ToInterface<Reference, never> &
  ReferenceInterface;

export declare namespace Reference {
  export type Key = pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.HoldingFactoryKey
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


export declare type Create = {
  instrument: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.InstrumentKey;
  account: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.AccountKey;
  amount: damlTypes.Numeric;
  observers: damlTypes.Map<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare const Create:
  damlTypes.Serializable<Create> & {
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
  provider: damlTypes.Party;
  id: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.Id;
};

export declare const View:
  damlTypes.Serializable<View> & {
  }
;

