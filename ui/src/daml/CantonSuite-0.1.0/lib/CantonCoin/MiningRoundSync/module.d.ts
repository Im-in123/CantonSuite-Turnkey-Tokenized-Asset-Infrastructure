// Generated from CantonCoin/MiningRoundSync.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as TokenStandard_Interfaces from '../../TokenStandard/Interfaces/module';

export declare type PrepareTransferWithRoundCheck = {
  estimatedSigningDelaySeconds: damlTypes.Int;
};

export declare const PrepareTransferWithRoundCheck:
  damlTypes.Serializable<PrepareTransferWithRoundCheck> & {
  }
;


export declare type CCTransferWithRoundCheck = {
  sender: damlTypes.Party;
  receiver: damlTypes.Party;
  assetId: string;
  amount: damlTypes.Numeric;
  roundReferenceCid: damlTypes.ContractId<MiningRoundReference>;
  senderHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  issuer: damlTypes.Party;
  amuletApp: damlTypes.Party;
};

export declare interface CCTransferWithRoundCheckInterface {
  PrepareTransferWithRoundCheck: damlTypes.Choice<CCTransferWithRoundCheck, PrepareTransferWithRoundCheck, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either<string, damlTypes.ContractId<TokenStandard_Interfaces.TransferInstruction>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CCTransferWithRoundCheck, undefined>>;
  Archive: damlTypes.Choice<CCTransferWithRoundCheck, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CCTransferWithRoundCheck, undefined>>;
}
export declare const CCTransferWithRoundCheck:
  damlTypes.Template<CCTransferWithRoundCheck, undefined, '#CantonSuite:CantonCoin.MiningRoundSync:CCTransferWithRoundCheck'> &
  damlTypes.ToInterface<CCTransferWithRoundCheck, never> &
  CCTransferWithRoundCheckInterface;

export declare namespace CCTransferWithRoundCheck {
  export type CreateEvent = damlLedger.CreateEvent<CCTransferWithRoundCheck, undefined, typeof CCTransferWithRoundCheck.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CCTransferWithRoundCheck, typeof CCTransferWithRoundCheck.templateId>
  export type Event = damlLedger.Event<CCTransferWithRoundCheck, undefined, typeof CCTransferWithRoundCheck.templateId>
  export type QueryResult = damlLedger.QueryResult<CCTransferWithRoundCheck, undefined, typeof CCTransferWithRoundCheck.templateId>
}



export declare type MiningRoundStatus = {
  roundNumber: damlTypes.Int;
  remainingSeconds: damlTypes.Int;
  totalDuration: damlTypes.Int;
  percentComplete: damlTypes.Numeric;
  canPrepareNow: boolean;
  warningMessage: damlTypes.Optional<string>;
};

export declare const MiningRoundStatus:
  damlTypes.Serializable<MiningRoundStatus> & {
  }
;


export declare type CCTransactionApproval = {
  approved: boolean;
  warningMessage: damlTypes.Optional<string>;
  approvedAt: damlTypes.Time;
  expiresAt: damlTypes.Time;
};

export declare const CCTransactionApproval:
  damlTypes.Serializable<CCTransactionApproval> & {
  }
;


export declare type VerifyRoundAndProceed = {
  estimatedSigningDelaySeconds: damlTypes.Int;
  amuletApp: damlTypes.Party;
};

export declare const VerifyRoundAndProceed:
  damlTypes.Serializable<VerifyRoundAndProceed> & {
  }
;


export declare type CCTransactionPrecondition = {
  user: damlTypes.Party;
  roundReferenceCid: damlTypes.ContractId<MiningRoundReference>;
  operation: string;
};

export declare interface CCTransactionPreconditionInterface {
  VerifyRoundAndProceed: damlTypes.Choice<CCTransactionPrecondition, VerifyRoundAndProceed, CCTransactionApproval, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CCTransactionPrecondition, undefined>>;
  Archive: damlTypes.Choice<CCTransactionPrecondition, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CCTransactionPrecondition, undefined>>;
}
export declare const CCTransactionPrecondition:
  damlTypes.Template<CCTransactionPrecondition, undefined, '#CantonSuite:CantonCoin.MiningRoundSync:CCTransactionPrecondition'> &
  damlTypes.ToInterface<CCTransactionPrecondition, never> &
  CCTransactionPreconditionInterface;

export declare namespace CCTransactionPrecondition {
  export type CreateEvent = damlLedger.CreateEvent<CCTransactionPrecondition, undefined, typeof CCTransactionPrecondition.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CCTransactionPrecondition, typeof CCTransactionPrecondition.templateId>
  export type Event = damlLedger.Event<CCTransactionPrecondition, undefined, typeof CCTransactionPrecondition.templateId>
  export type QueryResult = damlLedger.QueryResult<CCTransactionPrecondition, undefined, typeof CCTransactionPrecondition.templateId>
}



export declare type HasTimeForExternalSigning = {
  estimatedSigningDelaySeconds: damlTypes.Int;
  caller: damlTypes.Party;
};

export declare const HasTimeForExternalSigning:
  damlTypes.Serializable<HasTimeForExternalSigning> & {
  }
;


export declare type GetRemainingSeconds = {
  caller: damlTypes.Party;
};

export declare const GetRemainingSeconds:
  damlTypes.Serializable<GetRemainingSeconds> & {
  }
;


export declare type IsRoundValid = {
  caller: damlTypes.Party;
};

export declare const IsRoundValid:
  damlTypes.Serializable<IsRoundValid> & {
  }
;


export declare type MiningRoundReference = {
  roundNumber: damlTypes.Int;
  openedAt: damlTypes.Time;
  expiresAt: damlTypes.Time;
  amuletApp: damlTypes.Party;
  observers: damlTypes.Party[];
};

export declare interface MiningRoundReferenceInterface {
  GetRemainingSeconds: damlTypes.Choice<MiningRoundReference, GetRemainingSeconds, damlTypes.Int, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MiningRoundReference, undefined>>;
  HasTimeForExternalSigning: damlTypes.Choice<MiningRoundReference, HasTimeForExternalSigning, boolean, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MiningRoundReference, undefined>>;
  IsRoundValid: damlTypes.Choice<MiningRoundReference, IsRoundValid, boolean, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MiningRoundReference, undefined>>;
  Archive: damlTypes.Choice<MiningRoundReference, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<MiningRoundReference, undefined>>;
}
export declare const MiningRoundReference:
  damlTypes.Template<MiningRoundReference, undefined, '#CantonSuite:CantonCoin.MiningRoundSync:MiningRoundReference'> &
  damlTypes.ToInterface<MiningRoundReference, never> &
  MiningRoundReferenceInterface;

export declare namespace MiningRoundReference {
  export type CreateEvent = damlLedger.CreateEvent<MiningRoundReference, undefined, typeof MiningRoundReference.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<MiningRoundReference, typeof MiningRoundReference.templateId>
  export type Event = damlLedger.Event<MiningRoundReference, undefined, typeof MiningRoundReference.templateId>
  export type QueryResult = damlLedger.QueryResult<MiningRoundReference, undefined, typeof MiningRoundReference.templateId>
}


