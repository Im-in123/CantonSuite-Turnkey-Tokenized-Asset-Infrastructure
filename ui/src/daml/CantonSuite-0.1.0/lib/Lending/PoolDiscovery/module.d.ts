// Generated from Lending/PoolDiscovery.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Lending_Pool from '../../Lending/Pool/module';

export declare type WithdrawSyndicateCommitment = {
  reason: string;
};

export declare const WithdrawSyndicateCommitment:
  damlTypes.Serializable<WithdrawSyndicateCommitment> & {
  }
;


export declare type SettleSyndicateCommitment = {
  lenderDepositCid: damlTypes.ContractId<Lending_Pool.DepositEffect>;
};

export declare const SettleSyndicateCommitment:
  damlTypes.Serializable<SettleSyndicateCommitment> & {
  }
;


export declare type SyndicateCommitment = {
  syndicateId: string;
  leadArranger: damlTypes.Party;
  lender: damlTypes.Party;
  commitmentAmount: damlTypes.Numeric;
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
  assetId: string;
  interestRate: damlTypes.Numeric;
  committedAt: damlTypes.Time;
  complianceParty: damlTypes.Party;
};

export declare interface SyndicateCommitmentInterface {
  SettleSyndicateCommitment: damlTypes.Choice<SyndicateCommitment, SettleSyndicateCommitment, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SyndicateCommitment, undefined>>;
  Archive: damlTypes.Choice<SyndicateCommitment, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SyndicateCommitment, undefined>>;
  WithdrawSyndicateCommitment: damlTypes.Choice<SyndicateCommitment, WithdrawSyndicateCommitment, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SyndicateCommitment, undefined>>;
}
export declare const SyndicateCommitment:
  damlTypes.Template<SyndicateCommitment, undefined, '#CantonSuite:Lending.PoolDiscovery:SyndicateCommitment'> &
  damlTypes.ToInterface<SyndicateCommitment, never> &
  SyndicateCommitmentInterface;

export declare namespace SyndicateCommitment {
  export type CreateEvent = damlLedger.CreateEvent<SyndicateCommitment, undefined, typeof SyndicateCommitment.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<SyndicateCommitment, typeof SyndicateCommitment.templateId>
  export type Event = damlLedger.Event<SyndicateCommitment, undefined, typeof SyndicateCommitment.templateId>
  export type QueryResult = damlLedger.QueryResult<SyndicateCommitment, undefined, typeof SyndicateCommitment.templateId>
}



export declare type CommitToSyndicate = {
  lender: damlTypes.Party;
  commitmentAmount: damlTypes.Numeric;
};

export declare const CommitToSyndicate:
  damlTypes.Serializable<CommitToSyndicate> & {
  }
;


export declare type SyndicatedPool = {
  syndicateId: string;
  leadArranger: damlTypes.Party;
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
  assetId: string;
  totalCommitment: damlTypes.Numeric;
  interestRate: damlTypes.Numeric;
  minimumShare: damlTypes.Numeric;
  maximumLenders: damlTypes.Int;
  currentLenders: damlTypes.Int;
  expiresAt: damlTypes.Time;
  complianceParty: damlTypes.Party;
  observers: damlTypes.Party[];
};

export declare interface SyndicatedPoolInterface {
  CommitToSyndicate: damlTypes.Choice<SyndicatedPool, CommitToSyndicate, damlTypes.ContractId<SyndicateCommitment>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SyndicatedPool, undefined>>;
  Archive: damlTypes.Choice<SyndicatedPool, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SyndicatedPool, undefined>>;
}
export declare const SyndicatedPool:
  damlTypes.Template<SyndicatedPool, undefined, '#CantonSuite:Lending.PoolDiscovery:SyndicatedPool'> &
  damlTypes.ToInterface<SyndicatedPool, never> &
  SyndicatedPoolInterface;

export declare namespace SyndicatedPool {
  export type CreateEvent = damlLedger.CreateEvent<SyndicatedPool, undefined, typeof SyndicatedPool.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<SyndicatedPool, typeof SyndicatedPool.templateId>
  export type Event = damlLedger.Event<SyndicatedPool, undefined, typeof SyndicatedPool.templateId>
  export type QueryResult = damlLedger.QueryResult<SyndicatedPool, undefined, typeof SyndicatedPool.templateId>
}



export declare type InviteSelectedParticipant = {
  participant: damlTypes.Party;
  maxAmount: damlTypes.Numeric;
  role: string;
};

export declare const InviteSelectedParticipant:
  damlTypes.Serializable<InviteSelectedParticipant> & {
  }
;


export declare type CreateBilateralPoolAgreement = {
};

export declare const CreateBilateralPoolAgreement:
  damlTypes.Serializable<CreateBilateralPoolAgreement> & {
  }
;


export declare type PrivacyPreservingPoolListing = {
  listingId: string;
  poolOperator: damlTypes.Party;
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
  assetId: string;
  interestRate: damlTypes.Numeric;
  minimumAmount: damlTypes.Numeric;
  visibility: PoolListingVisibility;
  createdAt: damlTypes.Time;
  expiresAt: damlTypes.Time;
  complianceParty: damlTypes.Party;
};

export declare interface PrivacyPreservingPoolListingInterface {
  CreateBilateralPoolAgreement: damlTypes.Choice<PrivacyPreservingPoolListing, CreateBilateralPoolAgreement, damlTypes.ContractId<BilateralPoolAgreement>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PrivacyPreservingPoolListing, undefined>>;
  InviteSelectedParticipant: damlTypes.Choice<PrivacyPreservingPoolListing, InviteSelectedParticipant, damlTypes.ContractId<InvitedPoolParticipant>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PrivacyPreservingPoolListing, undefined>>;
  Archive: damlTypes.Choice<PrivacyPreservingPoolListing, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PrivacyPreservingPoolListing, undefined>>;
}
export declare const PrivacyPreservingPoolListing:
  damlTypes.Template<PrivacyPreservingPoolListing, undefined, '#CantonSuite:Lending.PoolDiscovery:PrivacyPreservingPoolListing'> &
  damlTypes.ToInterface<PrivacyPreservingPoolListing, never> &
  PrivacyPreservingPoolListingInterface;

export declare namespace PrivacyPreservingPoolListing {
  export type CreateEvent = damlLedger.CreateEvent<PrivacyPreservingPoolListing, undefined, typeof PrivacyPreservingPoolListing.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PrivacyPreservingPoolListing, typeof PrivacyPreservingPoolListing.templateId>
  export type Event = damlLedger.Event<PrivacyPreservingPoolListing, undefined, typeof PrivacyPreservingPoolListing.templateId>
  export type QueryResult = damlLedger.QueryResult<PrivacyPreservingPoolListing, undefined, typeof PrivacyPreservingPoolListing.templateId>
}



export declare type PoolListingVisibility = {
  tier: PoolVisibilityTier;
  firmMembership: damlTypes.Optional<string>;
  selectedParticipants: damlTypes.Party[];
  directCounterparty: damlTypes.Optional<damlTypes.Party>;
};

export declare const PoolListingVisibility:
  damlTypes.Serializable<PoolListingVisibility> & {
  }
;


export declare type RevokeMembership = {
};

export declare const RevokeMembership:
  damlTypes.Serializable<RevokeMembership> & {
  }
;


export declare type FirmMembership = {
  firm: damlTypes.Party;
  member: damlTypes.Party;
  membershipId: string;
  approvedAt: damlTypes.Time;
  tierAccess: string[];
};

export declare interface FirmMembershipInterface {
  RevokeMembership: damlTypes.Choice<FirmMembership, RevokeMembership, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FirmMembership, undefined>>;
  Archive: damlTypes.Choice<FirmMembership, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FirmMembership, undefined>>;
}
export declare const FirmMembership:
  damlTypes.Template<FirmMembership, undefined, '#CantonSuite:Lending.PoolDiscovery:FirmMembership'> &
  damlTypes.ToInterface<FirmMembership, never> &
  FirmMembershipInterface;

export declare namespace FirmMembership {
  export type CreateEvent = damlLedger.CreateEvent<FirmMembership, undefined, typeof FirmMembership.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<FirmMembership, typeof FirmMembership.templateId>
  export type Event = damlLedger.Event<FirmMembership, undefined, typeof FirmMembership.templateId>
  export type QueryResult = damlLedger.QueryResult<FirmMembership, undefined, typeof FirmMembership.templateId>
}



export declare type WithdrawPoolIntent = {
};

export declare const WithdrawPoolIntent:
  damlTypes.Serializable<WithdrawPoolIntent> & {
  }
;


export declare type RejectPoolIntent = {
  reason: string;
};

export declare const RejectPoolIntent:
  damlTypes.Serializable<RejectPoolIntent> & {
  }
;


export declare type AcceptPoolIntent = {
  notes: string;
};

export declare const AcceptPoolIntent:
  damlTypes.Serializable<AcceptPoolIntent> & {
  }
;


export declare type PoolAccessIntent = {
  listingId: string;
  poolOperator: damlTypes.Party;
  participant: damlTypes.Party;
  role: string;
  amount: damlTypes.Numeric;
  collateral: damlTypes.Optional<string>;
  intentType: string;
  createdAt: damlTypes.Time;
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
};

export declare interface PoolAccessIntentInterface {
  AcceptPoolIntent: damlTypes.Choice<PoolAccessIntent, AcceptPoolIntent, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PoolAccessIntent, undefined>>;
  RejectPoolIntent: damlTypes.Choice<PoolAccessIntent, RejectPoolIntent, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PoolAccessIntent, undefined>>;
  WithdrawPoolIntent: damlTypes.Choice<PoolAccessIntent, WithdrawPoolIntent, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PoolAccessIntent, undefined>>;
  Archive: damlTypes.Choice<PoolAccessIntent, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PoolAccessIntent, undefined>>;
}
export declare const PoolAccessIntent:
  damlTypes.Template<PoolAccessIntent, undefined, '#CantonSuite:Lending.PoolDiscovery:PoolAccessIntent'> &
  damlTypes.ToInterface<PoolAccessIntent, never> &
  PoolAccessIntentInterface;

export declare namespace PoolAccessIntent {
  export type CreateEvent = damlLedger.CreateEvent<PoolAccessIntent, undefined, typeof PoolAccessIntent.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PoolAccessIntent, typeof PoolAccessIntent.templateId>
  export type Event = damlLedger.Event<PoolAccessIntent, undefined, typeof PoolAccessIntent.templateId>
  export type QueryResult = damlLedger.QueryResult<PoolAccessIntent, undefined, typeof PoolAccessIntent.templateId>
}



export declare type CancelBilateralPool = {
};

export declare const CancelBilateralPool:
  damlTypes.Serializable<CancelBilateralPool> & {
  }
;


export declare type DeclineBilateralPool = {
};

export declare const DeclineBilateralPool:
  damlTypes.Serializable<DeclineBilateralPool> & {
  }
;


export declare type AcceptBilateralPool = {
  collateralOffered: damlTypes.Optional<string>;
};

export declare const AcceptBilateralPool:
  damlTypes.Serializable<AcceptBilateralPool> & {
  }
;


export declare type BilateralPoolAgreement = {
  agreementId: string;
  poolOperator: damlTypes.Party;
  counterparty: damlTypes.Party;
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
  assetId: string;
  interestRate: damlTypes.Numeric;
  agreedAmount: damlTypes.Numeric;
  agreedRole: string;
  expiresAt: damlTypes.Time;
  createdAt: damlTypes.Time;
  complianceParty: damlTypes.Party;
  terms: string;
};

export declare interface BilateralPoolAgreementInterface {
  AcceptBilateralPool: damlTypes.Choice<BilateralPoolAgreement, AcceptBilateralPool, damlTypes.ContractId<PoolAccessIntent>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BilateralPoolAgreement, undefined>>;
  DeclineBilateralPool: damlTypes.Choice<BilateralPoolAgreement, DeclineBilateralPool, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BilateralPoolAgreement, undefined>>;
  CancelBilateralPool: damlTypes.Choice<BilateralPoolAgreement, CancelBilateralPool, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BilateralPoolAgreement, undefined>>;
  Archive: damlTypes.Choice<BilateralPoolAgreement, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BilateralPoolAgreement, undefined>>;
}
export declare const BilateralPoolAgreement:
  damlTypes.Template<BilateralPoolAgreement, undefined, '#CantonSuite:Lending.PoolDiscovery:BilateralPoolAgreement'> &
  damlTypes.ToInterface<BilateralPoolAgreement, never> &
  BilateralPoolAgreementInterface;

export declare namespace BilateralPoolAgreement {
  export type CreateEvent = damlLedger.CreateEvent<BilateralPoolAgreement, undefined, typeof BilateralPoolAgreement.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<BilateralPoolAgreement, typeof BilateralPoolAgreement.templateId>
  export type Event = damlLedger.Event<BilateralPoolAgreement, undefined, typeof BilateralPoolAgreement.templateId>
  export type QueryResult = damlLedger.QueryResult<BilateralPoolAgreement, undefined, typeof BilateralPoolAgreement.templateId>
}



export declare type RevokePoolInvitation = {
};

export declare const RevokePoolInvitation:
  damlTypes.Serializable<RevokePoolInvitation> & {
  }
;


export declare type DeclinePoolInvitation = {
};

export declare const DeclinePoolInvitation:
  damlTypes.Serializable<DeclinePoolInvitation> & {
  }
;


export declare type AcceptPoolInvitation = {
  desiredAmount: damlTypes.Numeric;
  collateralOffered: damlTypes.Optional<string>;
};

export declare const AcceptPoolInvitation:
  damlTypes.Serializable<AcceptPoolInvitation> & {
  }
;


export declare type InvitedPoolParticipant = {
  invitationId: string;
  poolOperator: damlTypes.Party;
  participant: damlTypes.Party;
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
  assetId: string;
  interestRate: damlTypes.Numeric;
  maxAmount: damlTypes.Numeric;
  allowedRole: string;
  expiresAt: damlTypes.Time;
  complianceParty: damlTypes.Party;
  invitationType: string;
};

export declare interface InvitedPoolParticipantInterface {
  AcceptPoolInvitation: damlTypes.Choice<InvitedPoolParticipant, AcceptPoolInvitation, damlTypes.ContractId<PoolAccessIntent>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<InvitedPoolParticipant, undefined>>;
  DeclinePoolInvitation: damlTypes.Choice<InvitedPoolParticipant, DeclinePoolInvitation, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<InvitedPoolParticipant, undefined>>;
  RevokePoolInvitation: damlTypes.Choice<InvitedPoolParticipant, RevokePoolInvitation, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<InvitedPoolParticipant, undefined>>;
  Archive: damlTypes.Choice<InvitedPoolParticipant, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<InvitedPoolParticipant, undefined>>;
}
export declare const InvitedPoolParticipant:
  damlTypes.Template<InvitedPoolParticipant, undefined, '#CantonSuite:Lending.PoolDiscovery:InvitedPoolParticipant'> &
  damlTypes.ToInterface<InvitedPoolParticipant, never> &
  InvitedPoolParticipantInterface;

export declare namespace InvitedPoolParticipant {
  export type CreateEvent = damlLedger.CreateEvent<InvitedPoolParticipant, undefined, typeof InvitedPoolParticipant.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<InvitedPoolParticipant, typeof InvitedPoolParticipant.templateId>
  export type Event = damlLedger.Event<InvitedPoolParticipant, undefined, typeof InvitedPoolParticipant.templateId>
  export type QueryResult = damlLedger.QueryResult<InvitedPoolParticipant, undefined, typeof InvitedPoolParticipant.templateId>
}



export declare type CreateFirmPoolInterest = {
  participant: damlTypes.Party;
  desiredRole: string;
  desiredAmount: damlTypes.Numeric;
  membershipCid: damlTypes.ContractId<FirmMembership>;
  collateralOffered: damlTypes.Optional<string>;
};

export declare const CreateFirmPoolInterest:
  damlTypes.Serializable<CreateFirmPoolInterest> & {
  }
;


export declare type FirmPoolListing = {
  listingId: string;
  poolOperator: damlTypes.Party;
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
  assetId: string;
  interestRate: damlTypes.Numeric;
  minimumDeposit: damlTypes.Numeric;
  minimumBorrow: damlTypes.Numeric;
  firmId: string;
  createdAt: damlTypes.Time;
  expiresAt: damlTypes.Time;
  complianceParty: damlTypes.Party;
  observers: damlTypes.Party[];
};

export declare interface FirmPoolListingInterface {
  CreateFirmPoolInterest: damlTypes.Choice<FirmPoolListing, CreateFirmPoolInterest, damlTypes.ContractId<PoolAccessIntent>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FirmPoolListing, undefined>>;
  Archive: damlTypes.Choice<FirmPoolListing, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FirmPoolListing, undefined>>;
}
export declare const FirmPoolListing:
  damlTypes.Template<FirmPoolListing, undefined, '#CantonSuite:Lending.PoolDiscovery:FirmPoolListing'> &
  damlTypes.ToInterface<FirmPoolListing, never> &
  FirmPoolListingInterface;

export declare namespace FirmPoolListing {
  export type CreateEvent = damlLedger.CreateEvent<FirmPoolListing, undefined, typeof FirmPoolListing.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<FirmPoolListing, typeof FirmPoolListing.templateId>
  export type Event = damlLedger.Event<FirmPoolListing, undefined, typeof FirmPoolListing.templateId>
  export type QueryResult = damlLedger.QueryResult<FirmPoolListing, undefined, typeof FirmPoolListing.templateId>
}



export declare type ClosePoolListing = {
};

export declare const ClosePoolListing:
  damlTypes.Serializable<ClosePoolListing> & {
  }
;


export declare type ExpressPoolInterest = {
  participant: damlTypes.Party;
  desiredRole: string;
  desiredAmount: damlTypes.Numeric;
  collateralOffered: damlTypes.Optional<string>;
};

export declare const ExpressPoolInterest:
  damlTypes.Serializable<ExpressPoolInterest> & {
  }
;


export declare type GlobalPoolDiscovery = {
  listingId: string;
  poolOperator: damlTypes.Party;
  poolCid: damlTypes.ContractId<Lending_Pool.LendingPool>;
  assetId: string;
  interestRate: damlTypes.Numeric;
  minimumDeposit: damlTypes.Numeric;
  minimumBorrow: damlTypes.Numeric;
  createdAt: damlTypes.Time;
  expiresAt: damlTypes.Time;
  complianceParty: damlTypes.Party;
  discoveryService: damlTypes.Party;
  observers: damlTypes.Party[];
};

export declare interface GlobalPoolDiscoveryInterface {
  ExpressPoolInterest: damlTypes.Choice<GlobalPoolDiscovery, ExpressPoolInterest, damlTypes.ContractId<PoolAccessIntent>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<GlobalPoolDiscovery, undefined>>;
  ClosePoolListing: damlTypes.Choice<GlobalPoolDiscovery, ClosePoolListing, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<GlobalPoolDiscovery, undefined>>;
  Archive: damlTypes.Choice<GlobalPoolDiscovery, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<GlobalPoolDiscovery, undefined>>;
}
export declare const GlobalPoolDiscovery:
  damlTypes.Template<GlobalPoolDiscovery, undefined, '#CantonSuite:Lending.PoolDiscovery:GlobalPoolDiscovery'> &
  damlTypes.ToInterface<GlobalPoolDiscovery, never> &
  GlobalPoolDiscoveryInterface;

export declare namespace GlobalPoolDiscovery {
  export type CreateEvent = damlLedger.CreateEvent<GlobalPoolDiscovery, undefined, typeof GlobalPoolDiscovery.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<GlobalPoolDiscovery, typeof GlobalPoolDiscovery.templateId>
  export type Event = damlLedger.Event<GlobalPoolDiscovery, undefined, typeof GlobalPoolDiscovery.templateId>
  export type QueryResult = damlLedger.QueryResult<GlobalPoolDiscovery, undefined, typeof GlobalPoolDiscovery.templateId>
}



export declare type PoolAccessRequest = {
  requester: damlTypes.Party;
  poolListingId: string;
  requestedAmount: damlTypes.Numeric;
  requestType: string;
  submittedAt: damlTypes.Time;
};

export declare const PoolAccessRequest:
  damlTypes.Serializable<PoolAccessRequest> & {
  }
;


export declare type PoolVisibilityTier =
  | 'GlobalPoolTier'
  | 'FirmPoolTier'
  | 'InvitedPoolTier'
  | 'BilateralPoolTier'
;

export declare const PoolVisibilityTier:
  damlTypes.Serializable<PoolVisibilityTier> & {
  }
& { readonly keys: PoolVisibilityTier[] } & { readonly [e in PoolVisibilityTier]: e }
;

