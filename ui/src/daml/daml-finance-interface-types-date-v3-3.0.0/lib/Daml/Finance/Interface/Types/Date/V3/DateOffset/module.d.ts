// Generated from Daml/Finance/Interface/Types/Date/V3/DateOffset.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as Daml_Finance_Interface_Types_Date_V3_Calendar from '../../../../../../../Daml/Finance/Interface/Types/Date/V3/Calendar/module';
import * as Daml_Finance_Interface_Types_Date_V3_RollConvention from '../../../../../../../Daml/Finance/Interface/Types/Date/V3/RollConvention/module';

export declare type DateOffset = {
  period: Daml_Finance_Interface_Types_Date_V3_RollConvention.PeriodEnum;
  periodMultiplier: damlTypes.Int;
  dayType: damlTypes.Optional<DayTypeEnum>;
  businessDayConvention: Daml_Finance_Interface_Types_Date_V3_Calendar.BusinessDayConventionEnum;
  businessCenters: string[];
};

export declare const DateOffset:
  damlTypes.Serializable<DateOffset> & {
  }
;


export declare type DayTypeEnum =
  | 'Business'
  | 'Calendar'
;

export declare const DayTypeEnum:
  damlTypes.Serializable<DayTypeEnum> & {
  }
& { readonly keys: DayTypeEnum[] } & { readonly [e in DayTypeEnum]: e }
;

