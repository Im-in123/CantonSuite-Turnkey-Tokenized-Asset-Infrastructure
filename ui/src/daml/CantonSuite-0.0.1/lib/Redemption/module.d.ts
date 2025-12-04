// Generated from Redemption.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Assets from '../Assets/module';

export declare type CancelRedemption = {
};

export declare const CancelRedemption:
  damlTypes.Serializable<CancelRedemption> & {
  }
;


export declare type ApproveRedemption = {
  assetCid: damlTypes.ContractId<Assets.Asset>;
};

export declare const ApproveRedemption:
  damlTypes.Serializable<ApproveRedemption> & {
  }
;


export declare type RedemptionRequest = {
  buyer: damlTypes.Party;
  issuer: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  reason: string;
};

export declare interface RedemptionRequestInterface {
  ApproveRedemption: damlTypes.Choice<RedemptionRequest, ApproveRedemption, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionRequest, undefined>>;
  Archive: damlTypes.Choice<RedemptionRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionRequest, undefined>>;
  CancelRedemption: damlTypes.Choice<RedemptionRequest, CancelRedemption, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<RedemptionRequest, undefined>>;
}
export declare const RedemptionRequest:
  damlTypes.Template<RedemptionRequest, undefined, '#CantonSuite:Redemption:RedemptionRequest'> &
  damlTypes.ToInterface<RedemptionRequest, never> &
  RedemptionRequestInterface;

export declare namespace RedemptionRequest {
  export type CreateEvent = damlLedger.CreateEvent<RedemptionRequest, undefined, typeof RedemptionRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RedemptionRequest, typeof RedemptionRequest.templateId>
  export type Event = damlLedger.Event<RedemptionRequest, undefined, typeof RedemptionRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<RedemptionRequest, undefined, typeof RedemptionRequest.templateId>
}


