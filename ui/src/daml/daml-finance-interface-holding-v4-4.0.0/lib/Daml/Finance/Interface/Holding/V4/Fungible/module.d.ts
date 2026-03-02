// Generated from Daml/Finance/Interface/Holding/V4/Fungible.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657 from '@daml.js/daml-stdlib-DA-Set-Types-1.0.0';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Fungible = damlTypes.Interface<'49a7fd6a0515033677fd779be46379bc2b59a88fc9926a139cc55c4d6a79607e:Daml.Finance.Interface.Holding.V4.Fungible:Fungible'> & View;
export declare interface FungibleInterface {
  GetView: damlTypes.Choice<Fungible, GetView, View, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Fungible, undefined>>;
  Archive: damlTypes.Choice<Fungible, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Fungible, undefined>>;
  Split: damlTypes.Choice<Fungible, Split, SplitResult, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Fungible, undefined>>;
  Merge: damlTypes.Choice<Fungible, Merge, damlTypes.ContractId<Fungible>, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Fungible, undefined>>;
}
export declare const Fungible:
  damlTypes.InterfaceCompanion<Fungible, undefined, '49a7fd6a0515033677fd779be46379bc2b59a88fc9926a139cc55c4d6a79607e:Daml.Finance.Interface.Holding.V4.Fungible:Fungible'> &
  damlTypes.FromTemplate<Fungible, unknown> &
  FungibleInterface;


export declare type Merge = {
  fungibleCids: damlTypes.ContractId<Fungible>[];
};

export declare const Merge:
  damlTypes.Serializable<Merge> & {
  }
;


export declare type Split = {
  amounts: damlTypes.Numeric[];
};

export declare const Split:
  damlTypes.Serializable<Split> & {
  }
;


export declare type GetView = {
  viewer: damlTypes.Party;
};

export declare const GetView:
  damlTypes.Serializable<GetView> & {
  }
;


export declare type SplitResult = {
  splitCids: damlTypes.ContractId<Fungible>[];
  rest: damlTypes.Optional<damlTypes.ContractId<Fungible>>;
};

export declare const SplitResult:
  damlTypes.Serializable<SplitResult> & {
  }
;


export declare type View = {
  modifiers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>;
};

export declare const View:
  damlTypes.Serializable<View> & {
  }
;

