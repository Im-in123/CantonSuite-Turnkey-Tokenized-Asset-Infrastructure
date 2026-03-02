// Generated from Regulator.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type ComplianceAuditTrail = {
  regulator: damlTypes.Party;
  compliance: damlTypes.Party;
  actionType: string;
  affectedPartyHash: string;
  assetId: damlTypes.Optional<string>;
  actionReason: string;
  officerIdHash: string;
  actionTime: damlTypes.Time;
};

export declare interface ComplianceAuditTrailInterface {
  Archive: damlTypes.Choice<ComplianceAuditTrail, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceAuditTrail, undefined>>;
}
export declare const ComplianceAuditTrail:
  damlTypes.Template<ComplianceAuditTrail, undefined, '#CantonSuite:Regulator:ComplianceAuditTrail'> &
  damlTypes.ToInterface<ComplianceAuditTrail, never> &
  ComplianceAuditTrailInterface;

export declare namespace ComplianceAuditTrail {
  export type CreateEvent = damlLedger.CreateEvent<ComplianceAuditTrail, undefined, typeof ComplianceAuditTrail.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ComplianceAuditTrail, typeof ComplianceAuditTrail.templateId>
  export type Event = damlLedger.Event<ComplianceAuditTrail, undefined, typeof ComplianceAuditTrail.templateId>
  export type QueryResult = damlLedger.QueryResult<ComplianceAuditTrail, undefined, typeof ComplianceAuditTrail.templateId>
}



export declare type AMLAlert = {
  regulator: damlTypes.Party;
  issuer: damlTypes.Party;
  alertId: string;
  suspiciousPartyHash: string;
  activityPattern: string;
  totalAmount: damlTypes.Numeric;
  transactionCount: damlTypes.Int;
  timeWindow: string;
  detectedAt: damlTypes.Time;
  riskScore: damlTypes.Numeric;
};

export declare interface AMLAlertInterface {
  Archive: damlTypes.Choice<AMLAlert, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AMLAlert, undefined>>;
}
export declare const AMLAlert:
  damlTypes.Template<AMLAlert, undefined, '#CantonSuite:Regulator:AMLAlert'> &
  damlTypes.ToInterface<AMLAlert, never> &
  AMLAlertInterface;

export declare namespace AMLAlert {
  export type CreateEvent = damlLedger.CreateEvent<AMLAlert, undefined, typeof AMLAlert.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<AMLAlert, typeof AMLAlert.templateId>
  export type Event = damlLedger.Event<AMLAlert, undefined, typeof AMLAlert.templateId>
  export type QueryResult = damlLedger.QueryResult<AMLAlert, undefined, typeof AMLAlert.templateId>
}



export declare type RiskThresholdBreach = {
  regulator: damlTypes.Party;
  issuer: damlTypes.Party;
  breachType: string;
  assetId: string;
  thresholdValue: damlTypes.Numeric;
  actualValue: damlTypes.Numeric;
  affectedPartyHash: string;
  breachTime: damlTypes.Time;
  severity: string;
};

export declare interface RiskThresholdBreachInterface {
  Archive: damlTypes.Choice<RiskThresholdBreach, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RiskThresholdBreach, undefined>>;
}
export declare const RiskThresholdBreach:
  damlTypes.Template<RiskThresholdBreach, undefined, '#CantonSuite:Regulator:RiskThresholdBreach'> &
  damlTypes.ToInterface<RiskThresholdBreach, never> &
  RiskThresholdBreachInterface;

export declare namespace RiskThresholdBreach {
  export type CreateEvent = damlLedger.CreateEvent<RiskThresholdBreach, undefined, typeof RiskThresholdBreach.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RiskThresholdBreach, typeof RiskThresholdBreach.templateId>
  export type Event = damlLedger.Event<RiskThresholdBreach, undefined, typeof RiskThresholdBreach.templateId>
  export type QueryResult = damlLedger.QueryResult<RiskThresholdBreach, undefined, typeof RiskThresholdBreach.templateId>
}



export declare type SolvencyAuditView = {
  regulator: damlTypes.Party;
  issuer: damlTypes.Party;
  assetId: string;
  totalMinted: damlTypes.Numeric;
  totalBurned: damlTypes.Numeric;
  circulatingSupply: damlTypes.Numeric;
  reportDate: damlTypes.Time;
  userCountHash: string;
};

export declare interface SolvencyAuditViewInterface {
  Archive: damlTypes.Choice<SolvencyAuditView, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SolvencyAuditView, undefined>>;
}
export declare const SolvencyAuditView:
  damlTypes.Template<SolvencyAuditView, undefined, '#CantonSuite:Regulator:SolvencyAuditView'> &
  damlTypes.ToInterface<SolvencyAuditView, never> &
  SolvencyAuditViewInterface;

export declare namespace SolvencyAuditView {
  export type CreateEvent = damlLedger.CreateEvent<SolvencyAuditView, undefined, typeof SolvencyAuditView.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<SolvencyAuditView, typeof SolvencyAuditView.templateId>
  export type Event = damlLedger.Event<SolvencyAuditView, undefined, typeof SolvencyAuditView.templateId>
  export type QueryResult = damlLedger.QueryResult<SolvencyAuditView, undefined, typeof SolvencyAuditView.templateId>
}



export declare type RegulatorView = {
  regulator: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  buyerHash: string;
  sellerHash: string;
  issuer: damlTypes.Party;
  executedAt: damlTypes.Time;
  eventType: string;
  transactionHash: string;
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


