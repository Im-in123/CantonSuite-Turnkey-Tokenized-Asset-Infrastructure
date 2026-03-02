// Generated from Marketplace/MultiTier.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Finance_Instruments from '../../Finance/Instruments/module';
import * as TokenStandard_Interfaces from '../../TokenStandard/Interfaces/module';

export declare type SettleCommitment = {
  investorPaymentCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  issuerAssetCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare const SettleCommitment:
  damlTypes.Serializable<SettleCommitment> & {
  }
;


export declare type ClubDealCommitment = {
  dealId: string;
  issuer: damlTypes.Party;
  investor: damlTypes.Party;
  assetId: string;
  commitmentAmount: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  committedAt: damlTypes.Time;
  compliance: damlTypes.Party;
};

export declare interface ClubDealCommitmentInterface {
  Archive: damlTypes.Choice<ClubDealCommitment, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ClubDealCommitment, undefined>>;
  SettleCommitment: damlTypes.Choice<ClubDealCommitment, SettleCommitment, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, damlTypes.ContractId<TokenStandard_Interfaces.Holding>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ClubDealCommitment, undefined>>;
}
export declare const ClubDealCommitment:
  damlTypes.Template<ClubDealCommitment, undefined, '#CantonSuite:Marketplace.MultiTier:ClubDealCommitment'> &
  damlTypes.ToInterface<ClubDealCommitment, never> &
  ClubDealCommitmentInterface;

export declare namespace ClubDealCommitment {
  export type CreateEvent = damlLedger.CreateEvent<ClubDealCommitment, undefined, typeof ClubDealCommitment.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClubDealCommitment, typeof ClubDealCommitment.templateId>
  export type Event = damlLedger.Event<ClubDealCommitment, undefined, typeof ClubDealCommitment.templateId>
  export type QueryResult = damlLedger.QueryResult<ClubDealCommitment, undefined, typeof ClubDealCommitment.templateId>
}



export declare type CommitToClubDeal = {
  investor: damlTypes.Party;
  commitmentAmount: damlTypes.Numeric;
};

export declare const CommitToClubDeal:
  damlTypes.Serializable<CommitToClubDeal> & {
  }
;


export declare type ClubDeal = {
  dealId: string;
  issuer: damlTypes.Party;
  assetId: string;
  totalQuantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  minimumCommitment: damlTypes.Numeric;
  maximumInvestors: damlTypes.Int;
  currentInvestors: damlTypes.Int;
  expiresAt: damlTypes.Time;
  compliance: damlTypes.Party;
  observers: damlTypes.Party[];
};

export declare interface ClubDealInterface {
  CommitToClubDeal: damlTypes.Choice<ClubDeal, CommitToClubDeal, damlTypes.ContractId<ClubDealCommitment>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ClubDeal, undefined>>;
  Archive: damlTypes.Choice<ClubDeal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ClubDeal, undefined>>;
}
export declare const ClubDeal:
  damlTypes.Template<ClubDeal, undefined, '#CantonSuite:Marketplace.MultiTier:ClubDeal'> &
  damlTypes.ToInterface<ClubDeal, never> &
  ClubDealInterface;

export declare namespace ClubDeal {
  export type CreateEvent = damlLedger.CreateEvent<ClubDeal, undefined, typeof ClubDeal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClubDeal, typeof ClubDeal.templateId>
  export type Event = damlLedger.Event<ClubDeal, undefined, typeof ClubDeal.templateId>
  export type QueryResult = damlLedger.QueryResult<ClubDeal, undefined, typeof ClubDeal.templateId>
}



export declare type WithdrawIntent = {
};

export declare const WithdrawIntent:
  damlTypes.Serializable<WithdrawIntent> & {
  }
;


export declare type RejectIntent = {
  reason: string;
};

export declare const RejectIntent:
  damlTypes.Serializable<RejectIntent> & {
  }
;


export declare type AcceptIntent = {
  buyerPaymentCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  issuerAssetCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare const AcceptIntent:
  damlTypes.Serializable<AcceptIntent> & {
  }
;


export declare type PurchaseIntent = {
  listingId: string;
  issuer: damlTypes.Party;
  buyer: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  createdAt: damlTypes.Time;
  intentType: string;
};

export declare interface PurchaseIntentInterface {
  AcceptIntent: damlTypes.Choice<PurchaseIntent, AcceptIntent, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, damlTypes.ContractId<TokenStandard_Interfaces.Holding>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PurchaseIntent, undefined>>;
  RejectIntent: damlTypes.Choice<PurchaseIntent, RejectIntent, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PurchaseIntent, undefined>>;
  WithdrawIntent: damlTypes.Choice<PurchaseIntent, WithdrawIntent, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PurchaseIntent, undefined>>;
  Archive: damlTypes.Choice<PurchaseIntent, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PurchaseIntent, undefined>>;
}
export declare const PurchaseIntent:
  damlTypes.Template<PurchaseIntent, undefined, '#CantonSuite:Marketplace.MultiTier:PurchaseIntent'> &
  damlTypes.ToInterface<PurchaseIntent, never> &
  PurchaseIntentInterface;

export declare namespace PurchaseIntent {
  export type CreateEvent = damlLedger.CreateEvent<PurchaseIntent, undefined, typeof PurchaseIntent.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PurchaseIntent, typeof PurchaseIntent.templateId>
  export type Event = damlLedger.Event<PurchaseIntent, undefined, typeof PurchaseIntent.templateId>
  export type QueryResult = damlLedger.QueryResult<PurchaseIntent, undefined, typeof PurchaseIntent.templateId>
}



export declare type DeclineSubscription = {
};

export declare const DeclineSubscription:
  damlTypes.Serializable<DeclineSubscription> & {
  }
;


export declare type AcceptSubscription = {
  paymentHoldingCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
  issuerAssetCid: damlTypes.ContractId<TokenStandard_Interfaces.Holding>;
};

export declare const AcceptSubscription:
  damlTypes.Serializable<AcceptSubscription> & {
  }
;


export declare type SubscriptionRequest = {
  issuer: damlTypes.Party;
  subscriber: damlTypes.Party;
  assetId: string;
  instrumentCid: damlTypes.Optional<damlTypes.ContractId<Finance_Instruments.RWAInstrument>>;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  expiresAt: damlTypes.Time;
  createdAt: damlTypes.Time;
  compliance: damlTypes.Party;
  offerType: string;
};

export declare interface SubscriptionRequestInterface {
  AcceptSubscription: damlTypes.Choice<SubscriptionRequest, AcceptSubscription, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<TokenStandard_Interfaces.Holding>, damlTypes.ContractId<TokenStandard_Interfaces.Holding>>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SubscriptionRequest, undefined>>;
  DeclineSubscription: damlTypes.Choice<SubscriptionRequest, DeclineSubscription, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SubscriptionRequest, undefined>>;
  Archive: damlTypes.Choice<SubscriptionRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<SubscriptionRequest, undefined>>;
}
export declare const SubscriptionRequest:
  damlTypes.Template<SubscriptionRequest, undefined, '#CantonSuite:Marketplace.MultiTier:SubscriptionRequest'> &
  damlTypes.ToInterface<SubscriptionRequest, never> &
  SubscriptionRequestInterface;

export declare namespace SubscriptionRequest {
  export type CreateEvent = damlLedger.CreateEvent<SubscriptionRequest, undefined, typeof SubscriptionRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<SubscriptionRequest, typeof SubscriptionRequest.templateId>
  export type Event = damlLedger.Event<SubscriptionRequest, undefined, typeof SubscriptionRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<SubscriptionRequest, undefined, typeof SubscriptionRequest.templateId>
}



export declare type DeclineInvitation = {
};

export declare const DeclineInvitation:
  damlTypes.Serializable<DeclineInvitation> & {
  }
;


export declare type AcceptInvitation = {
  desiredQuantity: damlTypes.Numeric;
};

export declare const AcceptInvitation:
  damlTypes.Serializable<AcceptInvitation> & {
  }
;


export declare type InvestorInvitation = {
  listingId: string;
  issuer: damlTypes.Party;
  investor: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  expiresAt: damlTypes.Time;
  minimumPurchase: damlTypes.Numeric;
  compliance: damlTypes.Party;
  invitationType: string;
};

export declare interface InvestorInvitationInterface {
  AcceptInvitation: damlTypes.Choice<InvestorInvitation, AcceptInvitation, damlTypes.ContractId<PurchaseIntent>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<InvestorInvitation, undefined>>;
  DeclineInvitation: damlTypes.Choice<InvestorInvitation, DeclineInvitation, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<InvestorInvitation, undefined>>;
  Archive: damlTypes.Choice<InvestorInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<InvestorInvitation, undefined>>;
}
export declare const InvestorInvitation:
  damlTypes.Template<InvestorInvitation, undefined, '#CantonSuite:Marketplace.MultiTier:InvestorInvitation'> &
  damlTypes.ToInterface<InvestorInvitation, never> &
  InvestorInvitationInterface;

export declare namespace InvestorInvitation {
  export type CreateEvent = damlLedger.CreateEvent<InvestorInvitation, undefined, typeof InvestorInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<InvestorInvitation, typeof InvestorInvitation.templateId>
  export type Event = damlLedger.Event<InvestorInvitation, undefined, typeof InvestorInvitation.templateId>
  export type QueryResult = damlLedger.QueryResult<InvestorInvitation, undefined, typeof InvestorInvitation.templateId>
}



export declare type CreateMemberInterest = {
  buyer: damlTypes.Party;
  desiredQuantity: damlTypes.Numeric;
  membershipCid: damlTypes.ContractId<FirmMembership>;
};

export declare const CreateMemberInterest:
  damlTypes.Serializable<CreateMemberInterest> & {
  }
;


export declare type FirmMarketplaceListing = {
  listingId: string;
  issuer: damlTypes.Party;
  assetId: string;
  instrumentCid: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  firmId: string;
  createdAt: damlTypes.Time;
  expiresAt: damlTypes.Time;
  minimumPurchase: damlTypes.Numeric;
  compliance: damlTypes.Party;
  observers: damlTypes.Party[];
};

export declare interface FirmMarketplaceListingInterface {
  CreateMemberInterest: damlTypes.Choice<FirmMarketplaceListing, CreateMemberInterest, damlTypes.ContractId<PurchaseIntent>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FirmMarketplaceListing, undefined>>;
  Archive: damlTypes.Choice<FirmMarketplaceListing, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FirmMarketplaceListing, undefined>>;
}
export declare const FirmMarketplaceListing:
  damlTypes.Template<FirmMarketplaceListing, undefined, '#CantonSuite:Marketplace.MultiTier:FirmMarketplaceListing'> &
  damlTypes.ToInterface<FirmMarketplaceListing, never> &
  FirmMarketplaceListingInterface;

export declare namespace FirmMarketplaceListing {
  export type CreateEvent = damlLedger.CreateEvent<FirmMarketplaceListing, undefined, typeof FirmMarketplaceListing.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<FirmMarketplaceListing, typeof FirmMarketplaceListing.templateId>
  export type Event = damlLedger.Event<FirmMarketplaceListing, undefined, typeof FirmMarketplaceListing.templateId>
  export type QueryResult = damlLedger.QueryResult<FirmMarketplaceListing, undefined, typeof FirmMarketplaceListing.templateId>
}



export declare type VerifyMembership = {
};

export declare const VerifyMembership:
  damlTypes.Serializable<VerifyMembership> & {
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
  VerifyMembership: damlTypes.Choice<FirmMembership, VerifyMembership, boolean, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FirmMembership, undefined>>;
  Archive: damlTypes.Choice<FirmMembership, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<FirmMembership, undefined>>;
}
export declare const FirmMembership:
  damlTypes.Template<FirmMembership, undefined, '#CantonSuite:Marketplace.MultiTier:FirmMembership'> &
  damlTypes.ToInterface<FirmMembership, never> &
  FirmMembershipInterface;

export declare namespace FirmMembership {
  export type CreateEvent = damlLedger.CreateEvent<FirmMembership, undefined, typeof FirmMembership.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<FirmMembership, typeof FirmMembership.templateId>
  export type Event = damlLedger.Event<FirmMembership, undefined, typeof FirmMembership.templateId>
  export type QueryResult = damlLedger.QueryResult<FirmMembership, undefined, typeof FirmMembership.templateId>
}



export declare type ExpressInterest = {
  buyer: damlTypes.Party;
  desiredQuantity: damlTypes.Numeric;
};

export declare const ExpressInterest:
  damlTypes.Serializable<ExpressInterest> & {
  }
;


export declare type GlobalDiscoveryListing = {
  listingId: string;
  issuer: damlTypes.Party;
  assetId: string;
  instrumentCid: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  createdAt: damlTypes.Time;
  expiresAt: damlTypes.Time;
  minimumPurchase: damlTypes.Numeric;
  compliance: damlTypes.Party;
  discoveryService: damlTypes.Party;
  observers: damlTypes.Party[];
};

export declare interface GlobalDiscoveryListingInterface {
  ExpressInterest: damlTypes.Choice<GlobalDiscoveryListing, ExpressInterest, damlTypes.ContractId<PurchaseIntent>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<GlobalDiscoveryListing, undefined>>;
  Archive: damlTypes.Choice<GlobalDiscoveryListing, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<GlobalDiscoveryListing, undefined>>;
}
export declare const GlobalDiscoveryListing:
  damlTypes.Template<GlobalDiscoveryListing, undefined, '#CantonSuite:Marketplace.MultiTier:GlobalDiscoveryListing'> &
  damlTypes.ToInterface<GlobalDiscoveryListing, never> &
  GlobalDiscoveryListingInterface;

export declare namespace GlobalDiscoveryListing {
  export type CreateEvent = damlLedger.CreateEvent<GlobalDiscoveryListing, undefined, typeof GlobalDiscoveryListing.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<GlobalDiscoveryListing, typeof GlobalDiscoveryListing.templateId>
  export type Event = damlLedger.Event<GlobalDiscoveryListing, undefined, typeof GlobalDiscoveryListing.templateId>
  export type QueryResult = damlLedger.QueryResult<GlobalDiscoveryListing, undefined, typeof GlobalDiscoveryListing.templateId>
}



export declare type CreateBilateralSubscription = {
};

export declare const CreateBilateralSubscription:
  damlTypes.Serializable<CreateBilateralSubscription> & {
  }
;


export declare type InviteSelectedInvestor = {
  investor: damlTypes.Party;
};

export declare const InviteSelectedInvestor:
  damlTypes.Serializable<InviteSelectedInvestor> & {
  }
;


export declare type PublishToFirmMarketplace = {
  firmId: string;
};

export declare const PublishToFirmMarketplace:
  damlTypes.Serializable<PublishToFirmMarketplace> & {
  }
;


export declare type PublishToGlobalDiscovery = {
  publicParty: damlTypes.Party;
};

export declare const PublishToGlobalDiscovery:
  damlTypes.Serializable<PublishToGlobalDiscovery> & {
  }
;


export declare type PrivacyPreservingListing = {
  listingId: string;
  issuer: damlTypes.Party;
  assetId: string;
  instrumentCid: damlTypes.ContractId<Finance_Instruments.RWAInstrument>;
  quantity: damlTypes.Numeric;
  pricePerUnit: damlTypes.Numeric;
  visibility: ListingVisibility;
  createdAt: damlTypes.Time;
  expiresAt: damlTypes.Time;
  minimumPurchase: damlTypes.Numeric;
  compliance: damlTypes.Party;
};

export declare interface PrivacyPreservingListingInterface {
  PublishToGlobalDiscovery: damlTypes.Choice<PrivacyPreservingListing, PublishToGlobalDiscovery, damlTypes.ContractId<GlobalDiscoveryListing>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PrivacyPreservingListing, undefined>>;
  PublishToFirmMarketplace: damlTypes.Choice<PrivacyPreservingListing, PublishToFirmMarketplace, damlTypes.ContractId<FirmMarketplaceListing>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PrivacyPreservingListing, undefined>>;
  InviteSelectedInvestor: damlTypes.Choice<PrivacyPreservingListing, InviteSelectedInvestor, damlTypes.ContractId<InvestorInvitation>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PrivacyPreservingListing, undefined>>;
  CreateBilateralSubscription: damlTypes.Choice<PrivacyPreservingListing, CreateBilateralSubscription, damlTypes.ContractId<SubscriptionRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PrivacyPreservingListing, undefined>>;
  Archive: damlTypes.Choice<PrivacyPreservingListing, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PrivacyPreservingListing, undefined>>;
}
export declare const PrivacyPreservingListing:
  damlTypes.Template<PrivacyPreservingListing, undefined, '#CantonSuite:Marketplace.MultiTier:PrivacyPreservingListing'> &
  damlTypes.ToInterface<PrivacyPreservingListing, never> &
  PrivacyPreservingListingInterface;

export declare namespace PrivacyPreservingListing {
  export type CreateEvent = damlLedger.CreateEvent<PrivacyPreservingListing, undefined, typeof PrivacyPreservingListing.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PrivacyPreservingListing, typeof PrivacyPreservingListing.templateId>
  export type Event = damlLedger.Event<PrivacyPreservingListing, undefined, typeof PrivacyPreservingListing.templateId>
  export type QueryResult = damlLedger.QueryResult<PrivacyPreservingListing, undefined, typeof PrivacyPreservingListing.templateId>
}



export declare type ListingVisibility = {
  tier: MarketplaceTier;
  firmMembership: damlTypes.Optional<string>;
  selectedInvestors: damlTypes.Party[];
  directRecipient: damlTypes.Optional<damlTypes.Party>;
};

export declare const ListingVisibility:
  damlTypes.Serializable<ListingVisibility> & {
  }
;


export declare type MarketplaceTier =
  | 'GlobalTier'
  | 'FirmOnlyTier'
  | 'SelectedTier'
  | 'DirectTier'
;

export declare const MarketplaceTier:
  damlTypes.Serializable<MarketplaceTier> & {
  }
& { readonly keys: MarketplaceTier[] } & { readonly [e in MarketplaceTier]: e }
;

