// Generated from Daml/Finance/Interface/Types/Date/V3/Schedule.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as Daml_Finance_Interface_Types_Date_V3_Calendar from '../../../../../../../Daml/Finance/Interface/Types/Date/V3/Calendar/module';
import * as Daml_Finance_Interface_Types_Date_V3_RollConvention from '../../../../../../../Daml/Finance/Interface/Types/Date/V3/RollConvention/module';

export declare type SchedulePeriod = {
  adjustedEndDate: damlTypes.Date;
  adjustedStartDate: damlTypes.Date;
  unadjustedEndDate: damlTypes.Date;
  unadjustedStartDate: damlTypes.Date;
  stubType: damlTypes.Optional<StubPeriodTypeEnum>;
};

export declare const SchedulePeriod:
  damlTypes.Serializable<SchedulePeriod> & {
  }
;


export declare type PeriodicSchedule = {
  effectiveDate: damlTypes.Date;
  terminationDate: damlTypes.Date;
  firstRegularPeriodStartDate: damlTypes.Optional<damlTypes.Date>;
  lastRegularPeriodEndDate: damlTypes.Optional<damlTypes.Date>;
  frequency: ScheduleFrequency;
  businessDayAdjustment: Daml_Finance_Interface_Types_Date_V3_Calendar.BusinessDayAdjustment;
  effectiveDateBusinessDayAdjustment: damlTypes.Optional<Daml_Finance_Interface_Types_Date_V3_Calendar.BusinessDayAdjustment>;
  terminationDateBusinessDayAdjustment: damlTypes.Optional<Daml_Finance_Interface_Types_Date_V3_Calendar.BusinessDayAdjustment>;
  stubPeriodType: damlTypes.Optional<StubPeriodTypeEnum>;
};

export declare const PeriodicSchedule:
  damlTypes.Serializable<PeriodicSchedule> & {
  }
;


export declare type ScheduleFrequency =
  |  { tag: 'Periodic'; value: Frequency }
  |  { tag: 'SinglePeriod'; value: {} }
;

export declare const ScheduleFrequency:
  damlTypes.Serializable<ScheduleFrequency> & {
  }
;


export declare type Frequency = {
  period: Daml_Finance_Interface_Types_Date_V3_RollConvention.Period;
  rollConvention: Daml_Finance_Interface_Types_Date_V3_RollConvention.RollConventionEnum;
};

export declare const Frequency:
  damlTypes.Serializable<Frequency> & {
  }
;


export declare type StubPeriodTypeEnum =
  | 'LongFinal'
  | 'LongInitial'
  | 'ShortFinal'
  | 'ShortInitial'
;

export declare const StubPeriodTypeEnum:
  damlTypes.Serializable<StubPeriodTypeEnum> & {
  }
& { readonly keys: StubPeriodTypeEnum[] } & { readonly [e in StubPeriodTypeEnum]: e }
;

