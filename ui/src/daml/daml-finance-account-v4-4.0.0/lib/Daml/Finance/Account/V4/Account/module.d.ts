// Generated from Daml/Finance/Account/V4/Account.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b from '@daml.js/daml-finance-interface-types-common-v3-3.0.0';
import * as pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657 from '@daml.js/daml-stdlib-DA-Set-Types-1.0.0';
import * as pkga9732861398a32e2383632afbae347abd0eb7c8f01bc41a695114d51ee8f4c74 from '@daml.js/daml-finance-interface-account-v4-4.0.0';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';
import * as pkge464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4 from '@daml.js/daml-finance-interface-util-v3-3.0.0';

export declare type Factory = {
  provider: damlTypes.Party;
  observers: damlTypes.Map<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare interface FactoryInterface {
  Archive: damlTypes.Choice<Factory, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Factory, undefined>>;
}
export declare const Factory:
  damlTypes.Template<Factory, undefined, '#daml-finance-account-v4:Daml.Finance.Account.V4.Account:Factory'> &
  damlTypes.ToInterface<Factory, pkge464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4.Daml.Finance.Interface.Util.V3.Disclosure.Disclosure | pkga9732861398a32e2383632afbae347abd0eb7c8f01bc41a695114d51ee8f4c74.Daml.Finance.Interface.Account.V4.Factory.Factory> &
  FactoryInterface;

export declare namespace Factory {
  export type CreateEvent = damlLedger.CreateEvent<Factory, undefined, typeof Factory.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Factory, typeof Factory.templateId>
  export type Event = damlLedger.Event<Factory, undefined, typeof Factory.templateId>
  export type QueryResult = damlLedger.QueryResult<Factory, undefined, typeof Factory.templateId>
}



export declare type Account = {
  custodian: damlTypes.Party;
  owner: damlTypes.Party;
  lock: damlTypes.Optional<pkge464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4.Daml.Finance.Interface.Util.V3.Lockable.Lock>;
  controllers: pkga9732861398a32e2383632afbae347abd0eb7c8f01bc41a695114d51ee8f4c74.Daml.Finance.Interface.Account.V4.Account.Controllers;
  id: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.Id;
  description: string;
  holdingFactory: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.HoldingFactoryKey;
  observers: damlTypes.Map<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare interface AccountInterface {
  Archive: damlTypes.Choice<Account, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Account, undefined>>;
}
export declare const Account:
  damlTypes.Template<Account, undefined, '#daml-finance-account-v4:Daml.Finance.Account.V4.Account:Account'> &
  damlTypes.ToInterface<Account, pkga9732861398a32e2383632afbae347abd0eb7c8f01bc41a695114d51ee8f4c74.Daml.Finance.Interface.Account.V4.Account.Account | pkge464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4.Daml.Finance.Interface.Util.V3.Disclosure.Disclosure | pkge464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4.Daml.Finance.Interface.Util.V3.Lockable.Lockable> &
  AccountInterface;

export declare namespace Account {
  export type CreateEvent = damlLedger.CreateEvent<Account, undefined, typeof Account.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Account, typeof Account.templateId>
  export type Event = damlLedger.Event<Account, undefined, typeof Account.templateId>
  export type QueryResult = damlLedger.QueryResult<Account, undefined, typeof Account.templateId>
}


