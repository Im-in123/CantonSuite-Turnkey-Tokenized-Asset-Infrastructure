"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Finance_Instruments = require('../../Finance/Instruments/module');
var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');


exports.SettleCommitment = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({investorPaymentCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, issuerAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    investorPaymentCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.investorPaymentCid),
    issuerAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.issuerAssetCid),
  };
}
,
};



exports.ClubDealCommitment = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Marketplace.MultiTier:ClubDealCommitment',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({dealId: damlTypes.Text.decoder, issuer: damlTypes.Party.decoder, investor: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, commitmentAmount: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, committedAt: damlTypes.Time.decoder, compliance: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    dealId: damlTypes.Text.encode(__typed__.dealId),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    investor: damlTypes.Party.encode(__typed__.investor),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    commitmentAmount: damlTypes.Numeric(10).encode(__typed__.commitmentAmount),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    committedAt: damlTypes.Time.encode(__typed__.committedAt),
    compliance: damlTypes.Party.encode(__typed__.compliance),
  };
}
,
  Archive: {
    template: function () { return exports.ClubDealCommitment; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  SettleCommitment: {
    template: function () { return exports.ClubDealCommitment; },
    choiceName: 'SettleCommitment',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SettleCommitment.decoder; }),
    argumentEncode: function (__typed__) { return exports.SettleCommitment.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ClubDealCommitment, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CommitToClubDeal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({investor: damlTypes.Party.decoder, commitmentAmount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    investor: damlTypes.Party.encode(__typed__.investor),
    commitmentAmount: damlTypes.Numeric(10).encode(__typed__.commitmentAmount),
  };
}
,
};



exports.ClubDeal = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Marketplace.MultiTier:ClubDeal',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({dealId: damlTypes.Text.decoder, issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, totalQuantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, minimumCommitment: damlTypes.Numeric(10).decoder, maximumInvestors: damlTypes.Int.decoder, currentInvestors: damlTypes.Int.decoder, expiresAt: damlTypes.Time.decoder, compliance: damlTypes.Party.decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    dealId: damlTypes.Text.encode(__typed__.dealId),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    totalQuantity: damlTypes.Numeric(10).encode(__typed__.totalQuantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    minimumCommitment: damlTypes.Numeric(10).encode(__typed__.minimumCommitment),
    maximumInvestors: damlTypes.Int.encode(__typed__.maximumInvestors),
    currentInvestors: damlTypes.Int.encode(__typed__.currentInvestors),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  CommitToClubDeal: {
    template: function () { return exports.ClubDeal; },
    choiceName: 'CommitToClubDeal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CommitToClubDeal.decoder; }),
    argumentEncode: function (__typed__) { return exports.CommitToClubDeal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClubDealCommitment).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClubDealCommitment).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ClubDeal; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ClubDeal, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.WithdrawIntent = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RejectIntent = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
};



exports.AcceptIntent = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyerPaymentCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, issuerAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    buyerPaymentCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.buyerPaymentCid),
    issuerAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.issuerAssetCid),
  };
}
,
};



exports.PurchaseIntent = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Marketplace.MultiTier:PurchaseIntent',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({listingId: damlTypes.Text.decoder, issuer: damlTypes.Party.decoder, buyer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, createdAt: damlTypes.Time.decoder, intentType: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    listingId: damlTypes.Text.encode(__typed__.listingId),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    buyer: damlTypes.Party.encode(__typed__.buyer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    intentType: damlTypes.Text.encode(__typed__.intentType),
  };
}
,
  AcceptIntent: {
    template: function () { return exports.PurchaseIntent; },
    choiceName: 'AcceptIntent',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptIntent.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptIntent.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__); },
  },
  RejectIntent: {
    template: function () { return exports.PurchaseIntent; },
    choiceName: 'RejectIntent',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectIntent.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectIntent.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  WithdrawIntent: {
    template: function () { return exports.PurchaseIntent; },
    choiceName: 'WithdrawIntent',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.WithdrawIntent.decoder; }),
    argumentEncode: function (__typed__) { return exports.WithdrawIntent.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.PurchaseIntent; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.PurchaseIntent, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.DeclineSubscription = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AcceptSubscription = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({paymentHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, issuerAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    paymentHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.paymentHoldingCid),
    issuerAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.issuerAssetCid),
  };
}
,
};



exports.SubscriptionRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Marketplace.MultiTier:SubscriptionRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, subscriber: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, instrumentCid: damlTypes.Optional(damlTypes.ContractId(Finance_Instruments.RWAInstrument)).decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, expiresAt: damlTypes.Time.decoder, createdAt: damlTypes.Time.decoder, compliance: damlTypes.Party.decoder, offerType: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    subscriber: damlTypes.Party.encode(__typed__.subscriber),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    instrumentCid: damlTypes.Optional(damlTypes.ContractId(Finance_Instruments.RWAInstrument)).encode(__typed__.instrumentCid),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    offerType: damlTypes.Text.encode(__typed__.offerType),
  };
}
,
  AcceptSubscription: {
    template: function () { return exports.SubscriptionRequest; },
    choiceName: 'AcceptSubscription',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptSubscription.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptSubscription.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__); },
  },
  DeclineSubscription: {
    template: function () { return exports.SubscriptionRequest; },
    choiceName: 'DeclineSubscription',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DeclineSubscription.decoder; }),
    argumentEncode: function (__typed__) { return exports.DeclineSubscription.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.SubscriptionRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.SubscriptionRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.DeclineInvitation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AcceptInvitation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({desiredQuantity: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    desiredQuantity: damlTypes.Numeric(10).encode(__typed__.desiredQuantity),
  };
}
,
};



exports.InvestorInvitation = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Marketplace.MultiTier:InvestorInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({listingId: damlTypes.Text.decoder, issuer: damlTypes.Party.decoder, investor: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, expiresAt: damlTypes.Time.decoder, minimumPurchase: damlTypes.Numeric(10).decoder, compliance: damlTypes.Party.decoder, invitationType: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    listingId: damlTypes.Text.encode(__typed__.listingId),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    investor: damlTypes.Party.encode(__typed__.investor),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    minimumPurchase: damlTypes.Numeric(10).encode(__typed__.minimumPurchase),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    invitationType: damlTypes.Text.encode(__typed__.invitationType),
  };
}
,
  AcceptInvitation: {
    template: function () { return exports.InvestorInvitation; },
    choiceName: 'AcceptInvitation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptInvitation.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptInvitation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PurchaseIntent).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PurchaseIntent).encode(__typed__); },
  },
  DeclineInvitation: {
    template: function () { return exports.InvestorInvitation; },
    choiceName: 'DeclineInvitation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DeclineInvitation.decoder; }),
    argumentEncode: function (__typed__) { return exports.DeclineInvitation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.InvestorInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.InvestorInvitation, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CreateMemberInterest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, desiredQuantity: damlTypes.Numeric(10).decoder, membershipCid: damlTypes.ContractId(exports.FirmMembership).decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    desiredQuantity: damlTypes.Numeric(10).encode(__typed__.desiredQuantity),
    membershipCid: damlTypes.ContractId(exports.FirmMembership).encode(__typed__.membershipCid),
  };
}
,
};



exports.FirmMarketplaceListing = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Marketplace.MultiTier:FirmMarketplaceListing',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({listingId: damlTypes.Text.decoder, issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, firmId: damlTypes.Text.decoder, createdAt: damlTypes.Time.decoder, expiresAt: damlTypes.Time.decoder, minimumPurchase: damlTypes.Numeric(10).decoder, compliance: damlTypes.Party.decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    listingId: damlTypes.Text.encode(__typed__.listingId),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.instrumentCid),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    firmId: damlTypes.Text.encode(__typed__.firmId),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    minimumPurchase: damlTypes.Numeric(10).encode(__typed__.minimumPurchase),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  CreateMemberInterest: {
    template: function () { return exports.FirmMarketplaceListing; },
    choiceName: 'CreateMemberInterest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateMemberInterest.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateMemberInterest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PurchaseIntent).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PurchaseIntent).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.FirmMarketplaceListing; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.FirmMarketplaceListing, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.VerifyMembership = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.FirmMembership = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Marketplace.MultiTier:FirmMembership',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({firm: damlTypes.Party.decoder, member: damlTypes.Party.decoder, membershipId: damlTypes.Text.decoder, approvedAt: damlTypes.Time.decoder, tierAccess: damlTypes.List(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    firm: damlTypes.Party.encode(__typed__.firm),
    member: damlTypes.Party.encode(__typed__.member),
    membershipId: damlTypes.Text.encode(__typed__.membershipId),
    approvedAt: damlTypes.Time.encode(__typed__.approvedAt),
    tierAccess: damlTypes.List(damlTypes.Text).encode(__typed__.tierAccess),
  };
}
,
  VerifyMembership: {
    template: function () { return exports.FirmMembership; },
    choiceName: 'VerifyMembership',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.VerifyMembership.decoder; }),
    argumentEncode: function (__typed__) { return exports.VerifyMembership.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Bool.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Bool.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.FirmMembership; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.FirmMembership, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ExpressInterest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, desiredQuantity: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    desiredQuantity: damlTypes.Numeric(10).encode(__typed__.desiredQuantity),
  };
}
,
};



exports.GlobalDiscoveryListing = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Marketplace.MultiTier:GlobalDiscoveryListing',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({listingId: damlTypes.Text.decoder, issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, createdAt: damlTypes.Time.decoder, expiresAt: damlTypes.Time.decoder, minimumPurchase: damlTypes.Numeric(10).decoder, compliance: damlTypes.Party.decoder, discoveryService: damlTypes.Party.decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    listingId: damlTypes.Text.encode(__typed__.listingId),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.instrumentCid),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    minimumPurchase: damlTypes.Numeric(10).encode(__typed__.minimumPurchase),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    discoveryService: damlTypes.Party.encode(__typed__.discoveryService),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  ExpressInterest: {
    template: function () { return exports.GlobalDiscoveryListing; },
    choiceName: 'ExpressInterest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExpressInterest.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExpressInterest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PurchaseIntent).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PurchaseIntent).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.GlobalDiscoveryListing; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.GlobalDiscoveryListing, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CreateBilateralSubscription = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.InviteSelectedInvestor = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({investor: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    investor: damlTypes.Party.encode(__typed__.investor),
  };
}
,
};



exports.PublishToFirmMarketplace = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({firmId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    firmId: damlTypes.Text.encode(__typed__.firmId),
  };
}
,
};



exports.PublishToGlobalDiscovery = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({publicParty: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    publicParty: damlTypes.Party.encode(__typed__.publicParty),
  };
}
,
};



exports.PrivacyPreservingListing = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Marketplace.MultiTier:PrivacyPreservingListing',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({listingId: damlTypes.Text.decoder, issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, visibility: exports.ListingVisibility.decoder, createdAt: damlTypes.Time.decoder, expiresAt: damlTypes.Time.decoder, minimumPurchase: damlTypes.Numeric(10).decoder, compliance: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    listingId: damlTypes.Text.encode(__typed__.listingId),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    instrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.instrumentCid),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    visibility: exports.ListingVisibility.encode(__typed__.visibility),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    minimumPurchase: damlTypes.Numeric(10).encode(__typed__.minimumPurchase),
    compliance: damlTypes.Party.encode(__typed__.compliance),
  };
}
,
  PublishToGlobalDiscovery: {
    template: function () { return exports.PrivacyPreservingListing; },
    choiceName: 'PublishToGlobalDiscovery',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.PublishToGlobalDiscovery.decoder; }),
    argumentEncode: function (__typed__) { return exports.PublishToGlobalDiscovery.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.GlobalDiscoveryListing).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.GlobalDiscoveryListing).encode(__typed__); },
  },
  PublishToFirmMarketplace: {
    template: function () { return exports.PrivacyPreservingListing; },
    choiceName: 'PublishToFirmMarketplace',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.PublishToFirmMarketplace.decoder; }),
    argumentEncode: function (__typed__) { return exports.PublishToFirmMarketplace.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.FirmMarketplaceListing).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.FirmMarketplaceListing).encode(__typed__); },
  },
  InviteSelectedInvestor: {
    template: function () { return exports.PrivacyPreservingListing; },
    choiceName: 'InviteSelectedInvestor',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InviteSelectedInvestor.decoder; }),
    argumentEncode: function (__typed__) { return exports.InviteSelectedInvestor.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.InvestorInvitation).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.InvestorInvitation).encode(__typed__); },
  },
  CreateBilateralSubscription: {
    template: function () { return exports.PrivacyPreservingListing; },
    choiceName: 'CreateBilateralSubscription',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateBilateralSubscription.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateBilateralSubscription.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.SubscriptionRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.SubscriptionRequest).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.PrivacyPreservingListing; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.PrivacyPreservingListing, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ListingVisibility = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({tier: exports.MarketplaceTier.decoder, firmMembership: damlTypes.Optional(damlTypes.Text).decoder, selectedInvestors: damlTypes.List(damlTypes.Party).decoder, directRecipient: damlTypes.Optional(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    tier: exports.MarketplaceTier.encode(__typed__.tier),
    firmMembership: damlTypes.Optional(damlTypes.Text).encode(__typed__.firmMembership),
    selectedInvestors: damlTypes.List(damlTypes.Party).encode(__typed__.selectedInvestors),
    directRecipient: damlTypes.Optional(damlTypes.Party).encode(__typed__.directRecipient),
  };
}
,
};



exports.MarketplaceTier = {
  GlobalTier: 'GlobalTier',
  FirmOnlyTier: 'FirmOnlyTier',
  SelectedTier: 'SelectedTier',
  DirectTier: 'DirectTier',
  keys: ['GlobalTier','FirmOnlyTier','SelectedTier','DirectTier',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.MarketplaceTier.GlobalTier), jtv.constant(exports.MarketplaceTier.FirmOnlyTier), jtv.constant(exports.MarketplaceTier.SelectedTier), jtv.constant(exports.MarketplaceTier.DirectTier)); }),
  encode: function (__typed__) { return __typed__; },
};

