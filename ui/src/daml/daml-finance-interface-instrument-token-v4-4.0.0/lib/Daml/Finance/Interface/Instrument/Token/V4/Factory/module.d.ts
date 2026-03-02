// Generated from Daml/Finance/Interface/Instrument/Token/V4/Factory.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657 from '@daml.js/daml-stdlib-DA-Set-Types-1.0.0';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Daml_Finance_Interface_Instrument_Token_V4_Instrument from '../../../../../../../Daml/Finance/Interface/Instrument/Token/V4/Instrument/module';
import * as Daml_Finance_Interface_Instrument_Token_V4_Types from '../../../../../../../Daml/Finance/Interface/Instrument/Token/V4/Types/module';

export declare type Factory = damlTypes.Interface<'c264b287e2683d0a6be838e3abdfd0ca66ae36c2bfc07b2db6dbdf026d6099c3:Daml.Finance.Interface.Instrument.Token.V4.Factory:Factory'> & View;
export declare interface FactoryInterface {
  Archive: damlTypes.Choice<Factory, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Factory, undefined>>;
  Create: damlTypes.Choice<Factory, Create, damlTypes.ContractId<Daml_Finance_Interface_Instrument_Token_V4_Instrument.Instrument>, undefined> & damlTypes.ChoiceFrom<damlTypes.InterfaceCompanion<Factory, undefined>>;
}
export declare const Factory:
  damlTypes.InterfaceCompanion<Factory, undefined, 'c264b287e2683d0a6be838e3abdfd0ca66ae36c2bfc07b2db6dbdf026d6099c3:Daml.Finance.Interface.Instrument.Token.V4.Factory:Factory'> &
  damlTypes.FromTemplate<Factory, unknown> &
  FactoryInterface;


export declare type Create = {
  token: Daml_Finance_Interface_Instrument_Token_V4_Types.Token;
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

