// Generated from Regulator.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type RegulatorView = {
  regulator: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  buyerPseudo: string;
  issuer: damlTypes.Party;
  executedAt: damlTypes.Time;
};

export declare interface RegulatorViewInterface {
  Archive: damlTypes.Choice<RegulatorView, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RegulatorView, undefined>>;
}
export declare const RegulatorView:
  damlTypes.Template<RegulatorView, undefined, '#CantonSuite:Regulator:RegulatorView'> &
  damlTypes.ToInterface<RegulatorView, never> &
  RegulatorViewInterface;

export declare namespace RegulatorView {
  export type CreateEvent = damlLedger.CreateEvent<RegulatorView, undefined, typeof RegulatorView.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RegulatorView, typeof RegulatorView.templateId>
  export type Event = damlLedger.Event<RegulatorView, undefined, typeof RegulatorView.templateId>
  export type QueryResult = damlLedger.QueryResult<RegulatorView, undefined, typeof RegulatorView.templateId>
}


