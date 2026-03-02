// Generated from Daml/Finance/Interface/Instrument/Token/V4/Types.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b from '@daml.js/daml-finance-interface-types-common-v3-3.0.0';

export declare type Token = {
  instrument: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.InstrumentKey;
  description: string;
  validAsOf: damlTypes.Time;
};

export declare const Token:
  damlTypes.Serializable<Token> & {
  }
;

