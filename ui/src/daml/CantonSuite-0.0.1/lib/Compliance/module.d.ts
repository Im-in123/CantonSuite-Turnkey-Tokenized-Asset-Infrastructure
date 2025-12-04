// Generated from Compliance.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type ComplianceReview = {
  compliance: damlTypes.Party;
  reason: string;
  createdAt: damlTypes.Time;
  buyer: damlTypes.Party;
  seller: damlTypes.Party;
  assetId: string;
  amount: damlTypes.Numeric;
};

export declare interface ComplianceReviewInterface {
  Archive: damlTypes.Choice<ComplianceReview, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ComplianceReview, undefined>>;
}
export declare const ComplianceReview:
  damlTypes.Template<ComplianceReview, undefined, '#CantonSuite:Compliance:ComplianceReview'> &
  damlTypes.ToInterface<ComplianceReview, never> &
  ComplianceReviewInterface;

export declare namespace ComplianceReview {
  export type CreateEvent = damlLedger.CreateEvent<ComplianceReview, undefined, typeof ComplianceReview.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ComplianceReview, typeof ComplianceReview.templateId>
  export type Event = damlLedger.Event<ComplianceReview, undefined, typeof ComplianceReview.templateId>
  export type QueryResult = damlLedger.QueryResult<ComplianceReview, undefined, typeof ComplianceReview.templateId>
}


