// Generated from Daml/Finance/Interface/Instrument/Base/V4/Instrument.daml
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

export declare type Instrument = damlTypes.Interface<'4498a831f345b46d372cc52ef2876fae36ddc246c434ff73bf38bd4892f840f6:Daml.Finance.Interface.Instrument.Base.V4.Instrument:Instrument'> & View;
export declare interface InstrumentInterface {
  Remove: damlTypes.Choice<Instrument, Remove, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Instrument, undefined>>;
  GetView: damlTypes.Choice<Instrument, GetView, View, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Instrument, undefined>>;
  Archive: damlTypes.Choice<Instrument, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Instrument, undefined>>;
}
export declare const Instrument:
  damlTypes.InterfaceCompanion<Instrument, undefined, '4498a831f345b46d372cc52ef2876fae36ddc246c434ff73bf38bd4892f840f6:Daml.Finance.Interface.Instrument.Base.V4.Instrument:Instrument'> &
  damlTypes.FromTemplate<Instrument, unknown> &
  InstrumentInterface;


export declare type SetObservers = {
  newObservers: damlTypes.Map<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare const SetObservers:
  damlTypes.Serializable<SetObservers> & {
  }
;


export declare type SetCid = {
  newCid: damlTypes.ContractId<Instrument>;
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
  instrumentView: View;
  cid: damlTypes.ContractId<Instrument>;
  observers: damlTypes.Map<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare interface ReferenceInterface {
  SetCid: damlTypes.Choice<Reference, SetCid, damlTypes.ContractId<Reference>, Reference.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Reference, Reference.Key>>;
  SetObservers: damlTypes.Choice<Reference, SetObservers, damlTypes.ContractId<Reference>, Reference.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Reference, Reference.Key>>;
  Archive: damlTypes.Choice<Reference, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, Reference.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Reference, Reference.Key>>;
  GetCid: damlTypes.Choice<Reference, GetCid, damlTypes.ContractId<Instrument>, Reference.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Reference, Reference.Key>>;
}
export declare const Reference:
  damlTypes.Template<Reference, Reference.Key, '#daml-finance-interface-instrument-base-v4:Daml.Finance.Interface.Instrument.Base.V4.Instrument:Reference'> &
  damlTypes.ToInterface<Reference, never> &
  ReferenceInterface;

export declare namespace Reference {
  export type Key = pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.InstrumentKey
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


export declare type GetView = {
  viewer: damlTypes.Party;
};

export declare const GetView:
  damlTypes.Serializable<GetView> & {
  }
;


export declare type View = {
  issuer: damlTypes.Party;
  depository: damlTypes.Party;
  id: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.Id;
  version: string;
  holdingStandard: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.HoldingStandard;
  description: string;
  validAsOf: damlTypes.Time;
};

export declare const View:
  damlTypes.Serializable<View> & {
  }
;

