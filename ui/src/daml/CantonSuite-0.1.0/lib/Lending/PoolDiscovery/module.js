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

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Lending_Pool = require('../../Lending/Pool/module');


exports.WithdrawSyndicateCommitment = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
};



exports.SettleSyndicateCommitment = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({lenderDepositCid: damlTypes.ContractId(Lending_Pool.DepositEffect).decoder, }); }),
  encode: function (__typed__) {
  return {
    lenderDepositCid: damlTypes.ContractId(Lending_Pool.DepositEffect).encode(__typed__.lenderDepositCid),
  };
}
,
};



exports.SyndicateCommitment = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.PoolDiscovery:SyndicateCommitment',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({syndicateId: damlTypes.Text.decoder, leadArranger: damlTypes.Party.decoder, lender: damlTypes.Party.decoder, commitmentAmount: damlTypes.Numeric(10).decoder, poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, assetId: damlTypes.Text.decoder, interestRate: damlTypes.Numeric(10).decoder, committedAt: damlTypes.Time.decoder, complianceParty: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    syndicateId: damlTypes.Text.encode(__typed__.syndicateId),
    leadArranger: damlTypes.Party.encode(__typed__.leadArranger),
    lender: damlTypes.Party.encode(__typed__.lender),
    commitmentAmount: damlTypes.Numeric(10).encode(__typed__.commitmentAmount),
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    interestRate: damlTypes.Numeric(10).encode(__typed__.interestRate),
    committedAt: damlTypes.Time.encode(__typed__.committedAt),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
  };
}
,
  SettleSyndicateCommitment: {
    template: function () { return exports.SyndicateCommitment; },
    choiceName: 'SettleSyndicateCommitment',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SettleSyndicateCommitment.decoder; }),
    argumentEncode: function (__typed__) { return exports.SettleSyndicateCommitment.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.SyndicateCommitment; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  WithdrawSyndicateCommitment: {
    template: function () { return exports.SyndicateCommitment; },
    choiceName: 'WithdrawSyndicateCommitment',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.WithdrawSyndicateCommitment.decoder; }),
    argumentEncode: function (__typed__) { return exports.WithdrawSyndicateCommitment.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.SyndicateCommitment, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CommitToSyndicate = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({lender: damlTypes.Party.decoder, commitmentAmount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    lender: damlTypes.Party.encode(__typed__.lender),
    commitmentAmount: damlTypes.Numeric(10).encode(__typed__.commitmentAmount),
  };
}
,
};



exports.SyndicatedPool = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.PoolDiscovery:SyndicatedPool',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({syndicateId: damlTypes.Text.decoder, leadArranger: damlTypes.Party.decoder, poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, assetId: damlTypes.Text.decoder, totalCommitment: damlTypes.Numeric(10).decoder, interestRate: damlTypes.Numeric(10).decoder, minimumShare: damlTypes.Numeric(10).decoder, maximumLenders: damlTypes.Int.decoder, currentLenders: damlTypes.Int.decoder, expiresAt: damlTypes.Time.decoder, complianceParty: damlTypes.Party.decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    syndicateId: damlTypes.Text.encode(__typed__.syndicateId),
    leadArranger: damlTypes.Party.encode(__typed__.leadArranger),
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    totalCommitment: damlTypes.Numeric(10).encode(__typed__.totalCommitment),
    interestRate: damlTypes.Numeric(10).encode(__typed__.interestRate),
    minimumShare: damlTypes.Numeric(10).encode(__typed__.minimumShare),
    maximumLenders: damlTypes.Int.encode(__typed__.maximumLenders),
    currentLenders: damlTypes.Int.encode(__typed__.currentLenders),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  CommitToSyndicate: {
    template: function () { return exports.SyndicatedPool; },
    choiceName: 'CommitToSyndicate',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CommitToSyndicate.decoder; }),
    argumentEncode: function (__typed__) { return exports.CommitToSyndicate.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.SyndicateCommitment).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.SyndicateCommitment).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.SyndicatedPool; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.SyndicatedPool, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.InviteSelectedParticipant = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, maxAmount: damlTypes.Numeric(10).decoder, role: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    maxAmount: damlTypes.Numeric(10).encode(__typed__.maxAmount),
    role: damlTypes.Text.encode(__typed__.role),
  };
}
,
};



exports.CreateBilateralPoolAgreement = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.PrivacyPreservingPoolListing = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.PoolDiscovery:PrivacyPreservingPoolListing',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({listingId: damlTypes.Text.decoder, poolOperator: damlTypes.Party.decoder, poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, assetId: damlTypes.Text.decoder, interestRate: damlTypes.Numeric(10).decoder, minimumAmount: damlTypes.Numeric(10).decoder, visibility: exports.PoolListingVisibility.decoder, createdAt: damlTypes.Time.decoder, expiresAt: damlTypes.Time.decoder, complianceParty: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    listingId: damlTypes.Text.encode(__typed__.listingId),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    interestRate: damlTypes.Numeric(10).encode(__typed__.interestRate),
    minimumAmount: damlTypes.Numeric(10).encode(__typed__.minimumAmount),
    visibility: exports.PoolListingVisibility.encode(__typed__.visibility),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
  };
}
,
  CreateBilateralPoolAgreement: {
    template: function () { return exports.PrivacyPreservingPoolListing; },
    choiceName: 'CreateBilateralPoolAgreement',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateBilateralPoolAgreement.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateBilateralPoolAgreement.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.BilateralPoolAgreement).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.BilateralPoolAgreement).encode(__typed__); },
  },
  InviteSelectedParticipant: {
    template: function () { return exports.PrivacyPreservingPoolListing; },
    choiceName: 'InviteSelectedParticipant',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InviteSelectedParticipant.decoder; }),
    argumentEncode: function (__typed__) { return exports.InviteSelectedParticipant.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.InvitedPoolParticipant).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.InvitedPoolParticipant).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.PrivacyPreservingPoolListing; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.PrivacyPreservingPoolListing, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.PoolListingVisibility = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({tier: exports.PoolVisibilityTier.decoder, firmMembership: damlTypes.Optional(damlTypes.Text).decoder, selectedParticipants: damlTypes.List(damlTypes.Party).decoder, directCounterparty: damlTypes.Optional(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    tier: exports.PoolVisibilityTier.encode(__typed__.tier),
    firmMembership: damlTypes.Optional(damlTypes.Text).encode(__typed__.firmMembership),
    selectedParticipants: damlTypes.List(damlTypes.Party).encode(__typed__.selectedParticipants),
    directCounterparty: damlTypes.Optional(damlTypes.Party).encode(__typed__.directCounterparty),
  };
}
,
};



exports.RevokeMembership = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.FirmMembership = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.PoolDiscovery:FirmMembership',
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
  RevokeMembership: {
    template: function () { return exports.FirmMembership; },
    choiceName: 'RevokeMembership',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RevokeMembership.decoder; }),
    argumentEncode: function (__typed__) { return exports.RevokeMembership.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
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



exports.WithdrawPoolIntent = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RejectPoolIntent = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
};



exports.AcceptPoolIntent = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({notes: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    notes: damlTypes.Text.encode(__typed__.notes),
  };
}
,
};



exports.PoolAccessIntent = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.PoolDiscovery:PoolAccessIntent',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({listingId: damlTypes.Text.decoder, poolOperator: damlTypes.Party.decoder, participant: damlTypes.Party.decoder, role: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, collateral: damlTypes.Optional(damlTypes.Text).decoder, intentType: damlTypes.Text.decoder, createdAt: damlTypes.Time.decoder, poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, }); }),
  encode: function (__typed__) {
  return {
    listingId: damlTypes.Text.encode(__typed__.listingId),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    participant: damlTypes.Party.encode(__typed__.participant),
    role: damlTypes.Text.encode(__typed__.role),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    collateral: damlTypes.Optional(damlTypes.Text).encode(__typed__.collateral),
    intentType: damlTypes.Text.encode(__typed__.intentType),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
  };
}
,
  AcceptPoolIntent: {
    template: function () { return exports.PoolAccessIntent; },
    choiceName: 'AcceptPoolIntent',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptPoolIntent.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptPoolIntent.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  RejectPoolIntent: {
    template: function () { return exports.PoolAccessIntent; },
    choiceName: 'RejectPoolIntent',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectPoolIntent.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectPoolIntent.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  WithdrawPoolIntent: {
    template: function () { return exports.PoolAccessIntent; },
    choiceName: 'WithdrawPoolIntent',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.WithdrawPoolIntent.decoder; }),
    argumentEncode: function (__typed__) { return exports.WithdrawPoolIntent.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.PoolAccessIntent; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.PoolAccessIntent, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CancelBilateralPool = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.DeclineBilateralPool = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AcceptBilateralPool = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({collateralOffered: damlTypes.Optional(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    collateralOffered: damlTypes.Optional(damlTypes.Text).encode(__typed__.collateralOffered),
  };
}
,
};



exports.BilateralPoolAgreement = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.PoolDiscovery:BilateralPoolAgreement',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({agreementId: damlTypes.Text.decoder, poolOperator: damlTypes.Party.decoder, counterparty: damlTypes.Party.decoder, poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, assetId: damlTypes.Text.decoder, interestRate: damlTypes.Numeric(10).decoder, agreedAmount: damlTypes.Numeric(10).decoder, agreedRole: damlTypes.Text.decoder, expiresAt: damlTypes.Time.decoder, createdAt: damlTypes.Time.decoder, complianceParty: damlTypes.Party.decoder, terms: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    agreementId: damlTypes.Text.encode(__typed__.agreementId),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    counterparty: damlTypes.Party.encode(__typed__.counterparty),
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    interestRate: damlTypes.Numeric(10).encode(__typed__.interestRate),
    agreedAmount: damlTypes.Numeric(10).encode(__typed__.agreedAmount),
    agreedRole: damlTypes.Text.encode(__typed__.agreedRole),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    terms: damlTypes.Text.encode(__typed__.terms),
  };
}
,
  AcceptBilateralPool: {
    template: function () { return exports.BilateralPoolAgreement; },
    choiceName: 'AcceptBilateralPool',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptBilateralPool.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptBilateralPool.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PoolAccessIntent).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PoolAccessIntent).encode(__typed__); },
  },
  DeclineBilateralPool: {
    template: function () { return exports.BilateralPoolAgreement; },
    choiceName: 'DeclineBilateralPool',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DeclineBilateralPool.decoder; }),
    argumentEncode: function (__typed__) { return exports.DeclineBilateralPool.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CancelBilateralPool: {
    template: function () { return exports.BilateralPoolAgreement; },
    choiceName: 'CancelBilateralPool',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelBilateralPool.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelBilateralPool.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.BilateralPoolAgreement; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.BilateralPoolAgreement, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.RevokePoolInvitation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.DeclinePoolInvitation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AcceptPoolInvitation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({desiredAmount: damlTypes.Numeric(10).decoder, collateralOffered: damlTypes.Optional(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    desiredAmount: damlTypes.Numeric(10).encode(__typed__.desiredAmount),
    collateralOffered: damlTypes.Optional(damlTypes.Text).encode(__typed__.collateralOffered),
  };
}
,
};



exports.InvitedPoolParticipant = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.PoolDiscovery:InvitedPoolParticipant',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({invitationId: damlTypes.Text.decoder, poolOperator: damlTypes.Party.decoder, participant: damlTypes.Party.decoder, poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, assetId: damlTypes.Text.decoder, interestRate: damlTypes.Numeric(10).decoder, maxAmount: damlTypes.Numeric(10).decoder, allowedRole: damlTypes.Text.decoder, expiresAt: damlTypes.Time.decoder, complianceParty: damlTypes.Party.decoder, invitationType: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    invitationId: damlTypes.Text.encode(__typed__.invitationId),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    participant: damlTypes.Party.encode(__typed__.participant),
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    interestRate: damlTypes.Numeric(10).encode(__typed__.interestRate),
    maxAmount: damlTypes.Numeric(10).encode(__typed__.maxAmount),
    allowedRole: damlTypes.Text.encode(__typed__.allowedRole),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    invitationType: damlTypes.Text.encode(__typed__.invitationType),
  };
}
,
  AcceptPoolInvitation: {
    template: function () { return exports.InvitedPoolParticipant; },
    choiceName: 'AcceptPoolInvitation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptPoolInvitation.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptPoolInvitation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PoolAccessIntent).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PoolAccessIntent).encode(__typed__); },
  },
  DeclinePoolInvitation: {
    template: function () { return exports.InvitedPoolParticipant; },
    choiceName: 'DeclinePoolInvitation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DeclinePoolInvitation.decoder; }),
    argumentEncode: function (__typed__) { return exports.DeclinePoolInvitation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  RevokePoolInvitation: {
    template: function () { return exports.InvitedPoolParticipant; },
    choiceName: 'RevokePoolInvitation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RevokePoolInvitation.decoder; }),
    argumentEncode: function (__typed__) { return exports.RevokePoolInvitation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.InvitedPoolParticipant; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.InvitedPoolParticipant, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CreateFirmPoolInterest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, desiredRole: damlTypes.Text.decoder, desiredAmount: damlTypes.Numeric(10).decoder, membershipCid: damlTypes.ContractId(exports.FirmMembership).decoder, collateralOffered: damlTypes.Optional(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    desiredRole: damlTypes.Text.encode(__typed__.desiredRole),
    desiredAmount: damlTypes.Numeric(10).encode(__typed__.desiredAmount),
    membershipCid: damlTypes.ContractId(exports.FirmMembership).encode(__typed__.membershipCid),
    collateralOffered: damlTypes.Optional(damlTypes.Text).encode(__typed__.collateralOffered),
  };
}
,
};



exports.FirmPoolListing = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.PoolDiscovery:FirmPoolListing',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({listingId: damlTypes.Text.decoder, poolOperator: damlTypes.Party.decoder, poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, assetId: damlTypes.Text.decoder, interestRate: damlTypes.Numeric(10).decoder, minimumDeposit: damlTypes.Numeric(10).decoder, minimumBorrow: damlTypes.Numeric(10).decoder, firmId: damlTypes.Text.decoder, createdAt: damlTypes.Time.decoder, expiresAt: damlTypes.Time.decoder, complianceParty: damlTypes.Party.decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    listingId: damlTypes.Text.encode(__typed__.listingId),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    interestRate: damlTypes.Numeric(10).encode(__typed__.interestRate),
    minimumDeposit: damlTypes.Numeric(10).encode(__typed__.minimumDeposit),
    minimumBorrow: damlTypes.Numeric(10).encode(__typed__.minimumBorrow),
    firmId: damlTypes.Text.encode(__typed__.firmId),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  CreateFirmPoolInterest: {
    template: function () { return exports.FirmPoolListing; },
    choiceName: 'CreateFirmPoolInterest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateFirmPoolInterest.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateFirmPoolInterest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PoolAccessIntent).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PoolAccessIntent).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.FirmPoolListing; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.FirmPoolListing, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ClosePoolListing = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ExpressPoolInterest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, desiredRole: damlTypes.Text.decoder, desiredAmount: damlTypes.Numeric(10).decoder, collateralOffered: damlTypes.Optional(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    desiredRole: damlTypes.Text.encode(__typed__.desiredRole),
    desiredAmount: damlTypes.Numeric(10).encode(__typed__.desiredAmount),
    collateralOffered: damlTypes.Optional(damlTypes.Text).encode(__typed__.collateralOffered),
  };
}
,
};



exports.GlobalPoolDiscovery = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.PoolDiscovery:GlobalPoolDiscovery',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({listingId: damlTypes.Text.decoder, poolOperator: damlTypes.Party.decoder, poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, assetId: damlTypes.Text.decoder, interestRate: damlTypes.Numeric(10).decoder, minimumDeposit: damlTypes.Numeric(10).decoder, minimumBorrow: damlTypes.Numeric(10).decoder, createdAt: damlTypes.Time.decoder, expiresAt: damlTypes.Time.decoder, complianceParty: damlTypes.Party.decoder, discoveryService: damlTypes.Party.decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    listingId: damlTypes.Text.encode(__typed__.listingId),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    interestRate: damlTypes.Numeric(10).encode(__typed__.interestRate),
    minimumDeposit: damlTypes.Numeric(10).encode(__typed__.minimumDeposit),
    minimumBorrow: damlTypes.Numeric(10).encode(__typed__.minimumBorrow),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    expiresAt: damlTypes.Time.encode(__typed__.expiresAt),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    discoveryService: damlTypes.Party.encode(__typed__.discoveryService),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  ExpressPoolInterest: {
    template: function () { return exports.GlobalPoolDiscovery; },
    choiceName: 'ExpressPoolInterest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExpressPoolInterest.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExpressPoolInterest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PoolAccessIntent).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PoolAccessIntent).encode(__typed__); },
  },
  ClosePoolListing: {
    template: function () { return exports.GlobalPoolDiscovery; },
    choiceName: 'ClosePoolListing',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ClosePoolListing.decoder; }),
    argumentEncode: function (__typed__) { return exports.ClosePoolListing.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.GlobalPoolDiscovery; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.GlobalPoolDiscovery, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.PoolAccessRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({requester: damlTypes.Party.decoder, poolListingId: damlTypes.Text.decoder, requestedAmount: damlTypes.Numeric(10).decoder, requestType: damlTypes.Text.decoder, submittedAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    requester: damlTypes.Party.encode(__typed__.requester),
    poolListingId: damlTypes.Text.encode(__typed__.poolListingId),
    requestedAmount: damlTypes.Numeric(10).encode(__typed__.requestedAmount),
    requestType: damlTypes.Text.encode(__typed__.requestType),
    submittedAt: damlTypes.Time.encode(__typed__.submittedAt),
  };
}
,
};



exports.PoolVisibilityTier = {
  GlobalPoolTier: 'GlobalPoolTier',
  FirmPoolTier: 'FirmPoolTier',
  InvitedPoolTier: 'InvitedPoolTier',
  BilateralPoolTier: 'BilateralPoolTier',
  keys: ['GlobalPoolTier','FirmPoolTier','InvitedPoolTier','BilateralPoolTier',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.PoolVisibilityTier.GlobalPoolTier), jtv.constant(exports.PoolVisibilityTier.FirmPoolTier), jtv.constant(exports.PoolVisibilityTier.InvitedPoolTier), jtv.constant(exports.PoolVisibilityTier.BilateralPoolTier)); }),
  encode: function (__typed__) { return __typed__; },
};

