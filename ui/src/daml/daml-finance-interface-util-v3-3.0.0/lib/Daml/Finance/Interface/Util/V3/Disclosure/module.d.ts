// Generated from Daml/Finance/Interface/Util/V3/Disclosure.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657 from '@daml.js/daml-stdlib-DA-Set-Types-1.0.0';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Disclosure = damlTypes.Interface<'e464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4:Daml.Finance.Interface.Util.V3.Disclosure:Disclosure'> & View;
export declare interface DisclosureInterface {
  GetView: damlTypes.Choice<Disclosure, GetView, View, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Disclosure, undefined>>;
  Archive: damlTypes.Choice<Disclosure, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Disclosure, undefined>>;
  SetObservers: damlTypes.Choice<Disclosure, SetObservers, damlTypes.ContractId<Disclosure>, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Disclosure, undefined>>;
  AddObservers: damlTypes.Choice<Disclosure, AddObservers, damlTypes.ContractId<Disclosure>, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Disclosure, undefined>>;
  RemoveObservers: damlTypes.Choice<Disclosure, RemoveObservers, damlTypes.Optional<damlTypes.ContractId<Disclosure>>, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Disclosure, undefined>>;
}
export declare const Disclosure:
  damlTypes.InterfaceCompanion<Disclosure, undefined, 'e464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4:Daml.Finance.Interface.Util.V3.Disclosure:Disclosure'> &
  damlTypes.FromTemplate<Disclosure, unknown> &
  DisclosureInterface;


export declare type RemoveObservers = {
  disclosers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>;
  observersToRemove: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare const RemoveObservers:
  damlTypes.Serializable<RemoveObservers> & {
  }
;


export declare type AddObservers = {
  disclosers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>;
  observersToAdd: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare const AddObservers:
  damlTypes.Serializable<AddObservers> & {
  }
;


export declare type SetObservers = {
  disclosers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>;
  newObservers: damlTypes.Map<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare const SetObservers:
  damlTypes.Serializable<SetObservers> & {
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
  disclosureControllers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>;
  observers: damlTypes.Map<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare const View:
  damlTypes.Serializable<View> & {
  }
;

