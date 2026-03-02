// Generated from Daml/Finance/Instrument/Token/V4/Factory.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657 from '@daml.js/daml-stdlib-DA-Set-Types-1.0.0';
import * as pkgc264b287e2683d0a6be838e3abdfd0ca66ae36c2bfc07b2db6dbdf026d6099c3 from '@daml.js/daml-finance-interface-instrument-token-v4-4.0.0';
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
  damlTypes.Template<Factory, undefined, '#daml-finance-instrument-token-v4:Daml.Finance.Instrument.Token.V4.Factory:Factory'> &
  damlTypes.ToInterface<Factory, pkge464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4.Daml.Finance.Interface.Util.V3.Disclosure.Disclosure | pkgc264b287e2683d0a6be838e3abdfd0ca66ae36c2bfc07b2db6dbdf026d6099c3.Daml.Finance.Interface.Instrument.Token.V4.Factory.Factory> &
  FactoryInterface;

export declare namespace Factory {
  export type CreateEvent = damlLedger.CreateEvent<Factory, undefined, typeof Factory.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Factory, typeof Factory.templateId>
  export type Event = damlLedger.Event<Factory, undefined, typeof Factory.templateId>
  export type QueryResult = damlLedger.QueryResult<Factory, undefined, typeof Factory.templateId>
}


