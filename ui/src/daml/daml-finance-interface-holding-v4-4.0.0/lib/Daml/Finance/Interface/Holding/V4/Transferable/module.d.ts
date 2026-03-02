// Generated from Daml/Finance/Interface/Holding/V4/Transferable.daml
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

export declare type Transferable = damlTypes.Interface<'49a7fd6a0515033677fd779be46379bc2b59a88fc9926a139cc55c4d6a79607e:Daml.Finance.Interface.Holding.V4.Transferable:Transferable'> & View;
export declare interface TransferableInterface {
  Transfer: damlTypes.Choice<Transferable, Transfer, damlTypes.ContractId<Transferable>, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Transferable, undefined>>;
  GetView: damlTypes.Choice<Transferable, GetView, View, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Transferable, undefined>>;
  Archive: damlTypes.Choice<Transferable, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Transferable, undefined>>;
}
export declare const Transferable:
  damlTypes.InterfaceCompanion<Transferable, undefined, '49a7fd6a0515033677fd779be46379bc2b59a88fc9926a139cc55c4d6a79607e:Daml.Finance.Interface.Holding.V4.Transferable:Transferable'> &
  damlTypes.FromTemplate<Transferable, unknown> &
  TransferableInterface;


export declare type Transfer = {
  actors: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>;
  newOwnerAccount: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.AccountKey;
};

export declare const Transfer:
  damlTypes.Serializable<Transfer> & {
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
};

export declare const View:
  damlTypes.Serializable<View> & {
  }
;

