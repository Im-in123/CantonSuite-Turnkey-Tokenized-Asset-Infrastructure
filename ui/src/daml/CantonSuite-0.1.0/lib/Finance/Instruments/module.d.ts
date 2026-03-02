// Generated from Finance/Instruments.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg332c97558616b4d4db3ab4ab9f306cc60b200dd4c8dcc72e06ab7e349b39c4ff from '@daml.js/daml-finance-instrument-token-v4-4.0.0';
import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b from '@daml.js/daml-finance-interface-types-common-v3-3.0.0';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as TokenStandard_Interfaces from '../../TokenStandard/Interfaces/module';

export declare type FinalizeIssuance = {
  additionalObservers: damlTypes.Party[];
  description: string;
  validAsOf: damlTypes.Time;
};

export declare const FinalizeIssuance:
  damlTypes.Serializable<FinalizeIssuance> & {
  }
;


export declare type DraftRWAInstrument = {
  draftIssuer: damlTypes.Party;
  compliance: damlTypes.Party;
  instrumentId: string;
  name: string;
  assetType: string;
  pricePerUnit: damlTypes.Numeric;
  fractionalized: boolean;
  draftObservers: damlTypes.Party[];
};

export declare interface DraftRWAInstrumentInterface {
  Archive: damlTypes.Choice<DraftRWAInstrument, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DraftRWAInstrument, undefined>>;
  FinalizeIssuance: damlTypes.Choice<DraftRWAInstrument, FinalizeIssuance, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<pkg332c97558616b4d4db3ab4ab9f306cc60b200dd4c8dcc72e06ab7e349b39c4ff.Daml.Finance.Instrument.Token.V4.Instrument.Instrument>, damlTypes.ContractId<RWAInstrument>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<DraftRWAInstrument, undefined>>;
}
export declare const DraftRWAInstrument:
  damlTypes.Template<DraftRWAInstrument, undefined, '#CantonSuite:Finance.Instruments:DraftRWAInstrument'> &
  damlTypes.ToInterface<DraftRWAInstrument, never> &
  DraftRWAInstrumentInterface;

export declare namespace DraftRWAInstrument {
  export type CreateEvent = damlLedger.CreateEvent<DraftRWAInstrument, undefined, typeof DraftRWAInstrument.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DraftRWAInstrument, typeof DraftRWAInstrument.templateId>
  export type Event = damlLedger.Event<DraftRWAInstrument, undefined, typeof DraftRWAInstrument.templateId>
  export type QueryResult = damlLedger.QueryResult<DraftRWAInstrument, undefined, typeof DraftRWAInstrument.templateId>
}



export declare type ToggleFractionalized = {
  approvalCid: damlTypes.ContractId<FractionalizationGovernanceApproval>;
};

export declare const ToggleFractionalized:
  damlTypes.Serializable<ToggleFractionalized> & {
  }
;


export declare type UpdatePrice = {
  newPrice: damlTypes.Numeric;
};

export declare const UpdatePrice:
  damlTypes.Serializable<UpdatePrice> & {
  }
;


export declare type RWAInstrument = {
  instrument: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.InstrumentKey;
  tokenIssuer: damlTypes.Party;
  compliance: damlTypes.Party;
  name: string;
  assetType: string;
  pricePerUnit: damlTypes.Numeric;
  fractionalized: boolean;
  rwaObservers: damlTypes.Party[];
};

export declare interface RWAInstrumentInterface {
  ToggleFractionalized: damlTypes.Choice<RWAInstrument, ToggleFractionalized, damlTypes.ContractId<RWAInstrument>, RWAInstrument.Key> & damlTypes.ChoiceFrom<damlTypes.Template<RWAInstrument, RWAInstrument.Key>>;
  UpdatePrice: damlTypes.Choice<RWAInstrument, UpdatePrice, damlTypes.ContractId<RWAInstrument>, RWAInstrument.Key> & damlTypes.ChoiceFrom<damlTypes.Template<RWAInstrument, RWAInstrument.Key>>;
  Archive: damlTypes.Choice<RWAInstrument, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, RWAInstrument.Key> & damlTypes.ChoiceFrom<damlTypes.Template<RWAInstrument, RWAInstrument.Key>>;
}
export declare const RWAInstrument:
  damlTypes.Template<RWAInstrument, RWAInstrument.Key, '#CantonSuite:Finance.Instruments:RWAInstrument'> &
  damlTypes.ToInterface<RWAInstrument, TokenStandard_Interfaces.TokenMetadata> &
  RWAInstrumentInterface;

export declare namespace RWAInstrument {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, string>
  export type CreateEvent = damlLedger.CreateEvent<RWAInstrument, RWAInstrument.Key, typeof RWAInstrument.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RWAInstrument, typeof RWAInstrument.templateId>
  export type Event = damlLedger.Event<RWAInstrument, RWAInstrument.Key, typeof RWAInstrument.templateId>
  export type QueryResult = damlLedger.QueryResult<RWAInstrument, RWAInstrument.Key, typeof RWAInstrument.templateId>
}



export declare type ConsumeApproval = {
};

export declare const ConsumeApproval:
  damlTypes.Serializable<ConsumeApproval> & {
  }
;


export declare type FractionalizationGovernanceApproval = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  assetId: string;
  newValue: boolean;
  approvedAt: damlTypes.Time;
};

export declare interface FractionalizationGovernanceApprovalInterface {
  ConsumeApproval: damlTypes.Choice<FractionalizationGovernanceApproval, ConsumeApproval, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FractionalizationGovernanceApproval, undefined>>;
  Archive: damlTypes.Choice<FractionalizationGovernanceApproval, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FractionalizationGovernanceApproval, undefined>>;
}
export declare const FractionalizationGovernanceApproval:
  damlTypes.Template<FractionalizationGovernanceApproval, undefined, '#CantonSuite:Finance.Instruments:FractionalizationGovernanceApproval'> &
  damlTypes.ToInterface<FractionalizationGovernanceApproval, never> &
  FractionalizationGovernanceApprovalInterface;

export declare namespace FractionalizationGovernanceApproval {
  export type CreateEvent = damlLedger.CreateEvent<FractionalizationGovernanceApproval, undefined, typeof FractionalizationGovernanceApproval.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<FractionalizationGovernanceApproval, typeof FractionalizationGovernanceApproval.templateId>
  export type Event = damlLedger.Event<FractionalizationGovernanceApproval, undefined, typeof FractionalizationGovernanceApproval.templateId>
  export type QueryResult = damlLedger.QueryResult<FractionalizationGovernanceApproval, undefined, typeof FractionalizationGovernanceApproval.templateId>
}


