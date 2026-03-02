// Generated from Daml/Finance/Interface/Instrument/Token/V4/Instrument.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Daml_Finance_Interface_Instrument_Token_V4_Types from '../../../../../../../Daml/Finance/Interface/Instrument/Token/V4/Types/module';

export declare type Instrument = damlTypes.Interface<'c264b287e2683d0a6be838e3abdfd0ca66ae36c2bfc07b2db6dbdf026d6099c3:Daml.Finance.Interface.Instrument.Token.V4.Instrument:Instrument'> & View;
export declare interface InstrumentInterface {
  GetView: damlTypes.Choice<Instrument, GetView, View, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Instrument, undefined>>;
  Archive: damlTypes.Choice<Instrument, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Instrument, undefined>>;
}
export declare const Instrument:
  damlTypes.InterfaceCompanion<Instrument, undefined, 'c264b287e2683d0a6be838e3abdfd0ca66ae36c2bfc07b2db6dbdf026d6099c3:Daml.Finance.Interface.Instrument.Token.V4.Instrument:Instrument'> &
  damlTypes.FromTemplate<Instrument, unknown> &
  InstrumentInterface;


export declare type GetView = {
  viewer: damlTypes.Party;
};

export declare const GetView:
  damlTypes.Serializable<GetView> & {
  }
;


export declare type View = {
  token: Daml_Finance_Interface_Instrument_Token_V4_Types.Token;
};

export declare const View:
  damlTypes.Serializable<View> & {
  }
;

