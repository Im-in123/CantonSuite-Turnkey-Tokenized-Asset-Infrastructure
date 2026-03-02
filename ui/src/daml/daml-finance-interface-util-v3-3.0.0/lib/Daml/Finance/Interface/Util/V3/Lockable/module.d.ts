// Generated from Daml/Finance/Interface/Util/V3/Lockable.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657 from '@daml.js/daml-stdlib-DA-Set-Types-1.0.0';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Lockable = damlTypes.Interface<'e464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4:Daml.Finance.Interface.Util.V3.Lockable:Lockable'> & View;
export declare interface LockableInterface {
  GetView: damlTypes.Choice<Lockable, GetView, View, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Lockable, undefined>>;
  Archive: damlTypes.Choice<Lockable, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Lockable, undefined>>;
  Acquire: damlTypes.Choice<Lockable, Acquire, damlTypes.ContractId<Lockable>, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Lockable, undefined>>;
  Release: damlTypes.Choice<Lockable, Release, damlTypes.ContractId<Lockable>, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Lockable, undefined>>;
}
export declare const Lockable:
  damlTypes.InterfaceCompanion<Lockable, undefined, 'e464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4:Daml.Finance.Interface.Util.V3.Lockable:Lockable'> &
  damlTypes.FromTemplate<Lockable, unknown> &
  LockableInterface;


export declare type Release = {
  context: string;
};

export declare const Release:
  damlTypes.Serializable<Release> & {
  }
;


export declare type Acquire = {
  newLockers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>;
  context: string;
  lockType: LockType;
};

export declare const Acquire:
  damlTypes.Serializable<Acquire> & {
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
  lock: damlTypes.Optional<Lock>;
  controllers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>;
};

export declare const View:
  damlTypes.Serializable<View> & {
  }
;


export declare type Lock = {
  lockers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>;
  context: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<string>;
  lockType: LockType;
};

export declare const Lock:
  damlTypes.Serializable<Lock> & {
  }
;


export declare type LockType =
  | 'Semaphore'
  | 'Reentrant'
;

export declare const LockType:
  damlTypes.Serializable<LockType> & {
  }
& { readonly keys: LockType[] } & { readonly [e in LockType]: e }
;

