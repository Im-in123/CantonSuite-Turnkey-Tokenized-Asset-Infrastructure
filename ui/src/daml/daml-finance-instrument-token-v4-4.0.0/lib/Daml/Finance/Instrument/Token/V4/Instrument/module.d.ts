// Generated from Daml/Finance/Instrument/Token/V4/Instrument.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg4498a831f345b46d372cc52ef2876fae36ddc246c434ff73bf38bd4892f840f6 from '@daml.js/daml-finance-interface-instrument-base-v4-4.0.0';
import * as pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b from '@daml.js/daml-finance-interface-types-common-v3-3.0.0';
import * as pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657 from '@daml.js/daml-stdlib-DA-Set-Types-1.0.0';
import * as pkgc264b287e2683d0a6be838e3abdfd0ca66ae36c2bfc07b2db6dbdf026d6099c3 from '@daml.js/daml-finance-interface-instrument-token-v4-4.0.0';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';
import * as pkge464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4 from '@daml.js/daml-finance-interface-util-v3-3.0.0';

export declare type Instrument = {
  depository: damlTypes.Party;
  issuer: damlTypes.Party;
  id: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.Id;
  version: string;
  holdingStandard: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.HoldingStandard;
  description: string;
  validAsOf: damlTypes.Time;
  observers: damlTypes.Map<string, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set<damlTypes.Party>>;
};

export declare interface InstrumentInterface {
  Archive: damlTypes.Choice<Instrument, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Instrument, undefined>>;
}
export declare const Instrument:
  damlTypes.Template<Instrument, undefined, '#daml-finance-instrument-token-v4:Daml.Finance.Instrument.Token.V4.Instrument:Instrument'> &
  damlTypes.ToInterface<Instrument, pkg4498a831f345b46d372cc52ef2876fae36ddc246c434ff73bf38bd4892f840f6.Daml.Finance.Interface.Instrument.Base.V4.Instrument.Instrument | pkge464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4.Daml.Finance.Interface.Util.V3.Disclosure.Disclosure | pkgc264b287e2683d0a6be838e3abdfd0ca66ae36c2bfc07b2db6dbdf026d6099c3.Daml.Finance.Interface.Instrument.Token.V4.Instrument.Instrument> &
  InstrumentInterface;

export declare namespace Instrument {
  export type CreateEvent = damlLedger.CreateEvent<Instrument, undefined, typeof Instrument.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Instrument, typeof Instrument.templateId>
  export type Event = damlLedger.Event<Instrument, undefined, typeof Instrument.templateId>
  export type QueryResult = damlLedger.QueryResult<Instrument, undefined, typeof Instrument.templateId>
}


