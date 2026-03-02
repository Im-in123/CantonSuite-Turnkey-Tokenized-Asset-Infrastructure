// Generated from Compliance/SanctionsRegistry.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type VerifyClearance = {
};

export declare const VerifyClearance:
  damlTypes.Serializable<VerifyClearance> & {
  }
;


export declare type ConsumeClearance = {
};

export declare const ConsumeClearance:
  damlTypes.Serializable<ConsumeClearance> & {
  }
;


export declare type SanctionsClearance = {
  compliance: damlTypes.Party;
  clearedParty: damlTypes.Party;
  tradeId: string;
  issuedAt: damlTypes.Time;
  expiresAt: damlTypes.Time;
  consumed: boolean;
};

export declare interface SanctionsClearanceInterface {
  ConsumeClearance: damlTypes.Choice<SanctionsClearance, ConsumeClearance, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SanctionsClearance, undefined>>;
  Archive: damlTypes.Choice<SanctionsClearance, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SanctionsClearance, undefined>>;
  VerifyClearance: damlTypes.Choice<SanctionsClearance, VerifyClearance, boolean, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SanctionsClearance, undefined>>;
}
export declare const SanctionsClearance:
  damlTypes.Template<SanctionsClearance, undefined, '#CantonSuite:Compliance.SanctionsRegistry:SanctionsClearance'> &
  damlTypes.ToInterface<SanctionsClearance, never> &
  SanctionsClearanceInterface;

export declare namespace SanctionsClearance {
  export type CreateEvent = damlLedger.CreateEvent<SanctionsClearance, undefined, typeof SanctionsClearance.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<SanctionsClearance, typeof SanctionsClearance.templateId>
  export type Event = damlLedger.Event<SanctionsClearance, undefined, typeof SanctionsClearance.templateId>
  export type QueryResult = damlLedger.QueryResult<SanctionsClearance, undefined, typeof SanctionsClearance.templateId>
}



export declare type IssueClearance = {
  partyToCheck: damlTypes.Party;
  tradeId: string;
  settlementWindow: damlTypes.Int;
};

export declare const IssueClearance:
  damlTypes.Serializable<IssueClearance> & {
  }
;


export declare type CheckSanctioned = {
  partyHash: string;
};

export declare const CheckSanctioned:
  damlTypes.Serializable<CheckSanctioned> & {
  }
;


export declare type RemoveSanctionedEntity = {
  partyHash: string;
};

export declare const RemoveSanctionedEntity:
  damlTypes.Serializable<RemoveSanctionedEntity> & {
  }
;


export declare type AddSanctionedEntity = {
  partyHash: string;
  reason: string;
};

export declare const AddSanctionedEntity:
  damlTypes.Serializable<AddSanctionedEntity> & {
  }
;


export declare type SanctionsRegistry = {
  compliance: damlTypes.Party;
  regulator: damlTypes.Party;
  sanctionedHashes: string[];
  lastUpdated: damlTypes.Time;
  listVersion: string;
};

export declare interface SanctionsRegistryInterface {
  IssueClearance: damlTypes.Choice<SanctionsRegistry, IssueClearance, damlTypes.ContractId<SanctionsClearance>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SanctionsRegistry, undefined>>;
  AddSanctionedEntity: damlTypes.Choice<SanctionsRegistry, AddSanctionedEntity, damlTypes.ContractId<SanctionsRegistry>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SanctionsRegistry, undefined>>;
  RemoveSanctionedEntity: damlTypes.Choice<SanctionsRegistry, RemoveSanctionedEntity, damlTypes.ContractId<SanctionsRegistry>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SanctionsRegistry, undefined>>;
  CheckSanctioned: damlTypes.Choice<SanctionsRegistry, CheckSanctioned, boolean, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SanctionsRegistry, undefined>>;
  Archive: damlTypes.Choice<SanctionsRegistry, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SanctionsRegistry, undefined>>;
}
export declare const SanctionsRegistry:
  damlTypes.Template<SanctionsRegistry, undefined, '#CantonSuite:Compliance.SanctionsRegistry:SanctionsRegistry'> &
  damlTypes.ToInterface<SanctionsRegistry, never> &
  SanctionsRegistryInterface;

export declare namespace SanctionsRegistry {
  export type CreateEvent = damlLedger.CreateEvent<SanctionsRegistry, undefined, typeof SanctionsRegistry.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<SanctionsRegistry, typeof SanctionsRegistry.templateId>
  export type Event = damlLedger.Event<SanctionsRegistry, undefined, typeof SanctionsRegistry.templateId>
  export type QueryResult = damlLedger.QueryResult<SanctionsRegistry, undefined, typeof SanctionsRegistry.templateId>
}


