// Generated from Daml/Finance/Interface/Account/V4/Factory.daml
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

import * as Daml_Finance_Interface_Account_V4_Account from '../../../../../../Daml/Finance/Interface/Account/V4/Account/module';

export declare type Factory = damlTypes.Interface<'a9732861398a32e2383632afbae347abd0eb7c8f01bc41a695114d51ee8f4c74:Daml.Finance.Interface.Account.V4.Factory:Factory'> & View;
export declare interface FactoryInterface {
  Archive: damlTypes.Choice<Factory, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Factory, undefined>>;
  Create: damlTypes.Choice<Factory, Create, damlTypes.ContractId<Daml_Finance_Interface_Account_V4_Account.Account>, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Factory, undefined>>;
}
export declare const Factory:
  damlTypes.InterfaceCompanion<Factory, undefined, 'a9732861398a32e2383632afbae347abd0eb7c8f01bc41a695114d51ee8f4c74:Daml.Finance.Interface.Account.V4.Factory:Factory'> &
  damlTypes.FromTemplate<Factory, unknown> &
  FactoryInterface;


export declare type Create = {
  account: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.AccountKey;
  holdingFactory: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.HoldingFactoryKey;
  controllers: Daml_Finance_Interface_Account_V4_Account.Controllers;
  description: string;
  observers: damlTypes.Map<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare const Create:
  damlTypes.Serializable<Create> & {
  }
;


export declare type View = {
  provider: damlTypes.Party;
};

export declare const View:
  damlTypes.Serializable<View> & {
  }
;

