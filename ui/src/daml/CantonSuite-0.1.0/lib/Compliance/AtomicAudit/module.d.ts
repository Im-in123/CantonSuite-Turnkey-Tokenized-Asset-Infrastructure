// Generated from Compliance/AtomicAudit.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Regulator from '../../Regulator/module';
import * as TokenStandard_Interfaces from '../../TokenStandard/Interfaces/module';

export declare type AuditCompletenessReport = {
  periodStart: damlTypes.Time;
  periodEnd: damlTypes.Time;
  totalTransactions: damlTypes.Int;
  auditedTransactions: damlTypes.Int;
  missingAudits: damlTypes.Int;
  completenessPercentage: damlTypes.Numeric;
  fullyCompliant: boolean;
};

export declare const AuditCompletenessReport:
  damlTypes.Serializable<AuditCompletenessReport> & {
  }
;


export declare type VerifyAuditCompleteness = {
  totalSettlements: damlTypes.Int;
  totalRegulatorViews: damlTypes.Int;
  missingAudits: damlTypes.Int;
};

export declare const VerifyAuditCompleteness:
  damlTypes.Serializable<VerifyAuditCompleteness> & {
  }
;


export declare type AuditCompletenessCheck = {
  regulator: damlTypes.Party;
  compliance: damlTypes.Party;
  checkPeriodStart: damlTypes.Time;
  checkPeriodEnd: damlTypes.Time;
};

export declare interface AuditCompletenessCheckInterface {
  Archive: damlTypes.Choice<AuditCompletenessCheck, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AuditCompletenessCheck, undefined>>;
  VerifyAuditCompleteness: damlTypes.Choice<AuditCompletenessCheck, VerifyAuditCompleteness, AuditCompletenessReport, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AuditCompletenessCheck, undefined>>;
}
export declare const AuditCompletenessCheck:
  damlTypes.Template<AuditCompletenessCheck, undefined, '#CantonSuite:Compliance.AtomicAudit:AuditCompletenessCheck'> &
  damlTypes.ToInterface<AuditCompletenessCheck, never> &
  AuditCompletenessCheckInterface;

export declare namespace AuditCompletenessCheck {
  export type CreateEvent = damlLedger.CreateEvent<AuditCompletenessCheck, undefined, typeof AuditCompletenessCheck.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<AuditCompletenessCheck, typeof AuditCompletenessCheck.templateId>
  export type Event = damlLedger.Event<AuditCompletenessCheck, undefined, typeof AuditCompletenessCheck.templateId>
  export type QueryResult = damlLedger.QueryResult<AuditCompletenessCheck, undefined, typeof AuditCompletenessCheck.templateId>
}



export declare type ExecuteAtomicBurn = {
};

export declare const ExecuteAtomicBurn:
  damlTypes.Serializable<ExecuteAtomicBurn> & {
  }
;


export declare type AtomicBurnWithAudit = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  regulator: damlTypes.Party;
  burnHolder: damlTypes.Party;
  holdingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  quantity: damlTypes.Numeric;
  burnReason: string;
};

export declare interface AtomicBurnWithAuditInterface {
  ExecuteAtomicBurn: damlTypes.Choice<AtomicBurnWithAudit, ExecuteAtomicBurn, AuditedBurnResult, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AtomicBurnWithAudit, undefined>>;
  Archive: damlTypes.Choice<AtomicBurnWithAudit, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AtomicBurnWithAudit, undefined>>;
}
export declare const AtomicBurnWithAudit:
  damlTypes.Template<AtomicBurnWithAudit, undefined, '#CantonSuite:Compliance.AtomicAudit:AtomicBurnWithAudit'> &
  damlTypes.ToInterface<AtomicBurnWithAudit, never> &
  AtomicBurnWithAuditInterface;

export declare namespace AtomicBurnWithAudit {
  export type CreateEvent = damlLedger.CreateEvent<AtomicBurnWithAudit, undefined, typeof AtomicBurnWithAudit.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<AtomicBurnWithAudit, typeof AtomicBurnWithAudit.templateId>
  export type Event = damlLedger.Event<AtomicBurnWithAudit, undefined, typeof AtomicBurnWithAudit.templateId>
  export type QueryResult = damlLedger.QueryResult<AtomicBurnWithAudit, undefined, typeof AtomicBurnWithAudit.templateId>
}



export declare type AuditedBurnResult = {
  regulatorView: damlTypes.ContractId<Regulator.RegulatorView>;
  burnTime: damlTypes.Time;
};

export declare const AuditedBurnResult:
  damlTypes.Serializable<AuditedBurnResult> & {
  }
;


export declare type ExecuteAtomicMint = {
};

export declare const ExecuteAtomicMint:
  damlTypes.Serializable<ExecuteAtomicMint> & {
  }
;


export declare type AtomicMintWithAudit = {
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  regulator: damlTypes.Party;
  recipient: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  mintReason: string;
};

export declare interface AtomicMintWithAuditInterface {
  ExecuteAtomicMint: damlTypes.Choice<AtomicMintWithAudit, ExecuteAtomicMint, AuditedMintResult, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AtomicMintWithAudit, undefined>>;
  Archive: damlTypes.Choice<AtomicMintWithAudit, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AtomicMintWithAudit, undefined>>;
}
export declare const AtomicMintWithAudit:
  damlTypes.Template<AtomicMintWithAudit, undefined, '#CantonSuite:Compliance.AtomicAudit:AtomicMintWithAudit'> &
  damlTypes.ToInterface<AtomicMintWithAudit, never> &
  AtomicMintWithAuditInterface;

export declare namespace AtomicMintWithAudit {
  export type CreateEvent = damlLedger.CreateEvent<AtomicMintWithAudit, undefined, typeof AtomicMintWithAudit.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<AtomicMintWithAudit, typeof AtomicMintWithAudit.templateId>
  export type Event = damlLedger.Event<AtomicMintWithAudit, undefined, typeof AtomicMintWithAudit.templateId>
  export type QueryResult = damlLedger.QueryResult<AtomicMintWithAudit, undefined, typeof AtomicMintWithAudit.templateId>
}



export declare type AuditedMintResult = {
  mintedHolding: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  regulatorView: damlTypes.ContractId<Regulator.RegulatorView>;
  mintTime: damlTypes.Time;
};

export declare const AuditedMintResult:
  damlTypes.Serializable<AuditedMintResult> & {
  }
;


export declare type ExecuteAtomicRedemption = {
};

export declare const ExecuteAtomicRedemption:
  damlTypes.Serializable<ExecuteAtomicRedemption> & {
  }
;


export declare type AtomicRedemptionApproval = {
  redeemer: damlTypes.Party;
  issuer: damlTypes.Party;
  compliance: damlTypes.Party;
  regulator: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  cashAmount: damlTypes.Numeric;
  lockedAssetCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare interface AtomicRedemptionApprovalInterface {
  ExecuteAtomicRedemption: damlTypes.Choice<AtomicRedemptionApproval, ExecuteAtomicRedemption, AuditedRedemptionResult, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AtomicRedemptionApproval, undefined>>;
  Archive: damlTypes.Choice<AtomicRedemptionApproval, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AtomicRedemptionApproval, undefined>>;
}
export declare const AtomicRedemptionApproval:
  damlTypes.Template<AtomicRedemptionApproval, undefined, '#CantonSuite:Compliance.AtomicAudit:AtomicRedemptionApproval'> &
  damlTypes.ToInterface<AtomicRedemptionApproval, never> &
  AtomicRedemptionApprovalInterface;

export declare namespace AtomicRedemptionApproval {
  export type CreateEvent = damlLedger.CreateEvent<AtomicRedemptionApproval, undefined, typeof AtomicRedemptionApproval.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<AtomicRedemptionApproval, typeof AtomicRedemptionApproval.templateId>
  export type Event = damlLedger.Event<AtomicRedemptionApproval, undefined, typeof AtomicRedemptionApproval.templateId>
  export type QueryResult = damlLedger.QueryResult<AtomicRedemptionApproval, undefined, typeof AtomicRedemptionApproval.templateId>
}



export declare type AuditedRedemptionResult = {
  cashHolding: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  regulatorView: damlTypes.ContractId<Regulator.RegulatorView>;
  redemptionTime: damlTypes.Time;
};

export declare const AuditedRedemptionResult:
  damlTypes.Serializable<AuditedRedemptionResult> & {
  }
;


export declare type ExecuteAtomicSettlement = {
};

export declare const ExecuteAtomicSettlement:
  damlTypes.Serializable<ExecuteAtomicSettlement> & {
  }
;


export declare type AtomicTradeSettlement = {
  buyer: damlTypes.Party;
  seller: damlTypes.Party;
  assetIssuer: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  complianceParty: damlTypes.Party;
  regulatorParty: damlTypes.Party;
  buyerPaymentCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  sellerAssetCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare interface AtomicTradeSettlementInterface {
  ExecuteAtomicSettlement: damlTypes.Choice<AtomicTradeSettlement, ExecuteAtomicSettlement, AuditedSettlementResult, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AtomicTradeSettlement, undefined>>;
  Archive: damlTypes.Choice<AtomicTradeSettlement, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AtomicTradeSettlement, undefined>>;
}
export declare const AtomicTradeSettlement:
  damlTypes.Template<AtomicTradeSettlement, undefined, '#CantonSuite:Compliance.AtomicAudit:AtomicTradeSettlement'> &
  damlTypes.ToInterface<AtomicTradeSettlement, never> &
  AtomicTradeSettlementInterface;

export declare namespace AtomicTradeSettlement {
  export type CreateEvent = damlLedger.CreateEvent<AtomicTradeSettlement, undefined, typeof AtomicTradeSettlement.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<AtomicTradeSettlement, typeof AtomicTradeSettlement.templateId>
  export type Event = damlLedger.Event<AtomicTradeSettlement, undefined, typeof AtomicTradeSettlement.templateId>
  export type QueryResult = damlLedger.QueryResult<AtomicTradeSettlement, undefined, typeof AtomicTradeSettlement.templateId>
}



export declare type AuditedSettlementResult = {
  buyerHolding: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  sellerHolding: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  regulatorView: damlTypes.ContractId<Regulator.RegulatorView>;
  settlementTime: damlTypes.Time;
};

export declare const AuditedSettlementResult:
  damlTypes.Serializable<AuditedSettlementResult> & {
  }
;

